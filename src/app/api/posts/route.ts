import connectDB from "@/config/mongodb";
import Post from "@/models/Post";
import "@/models/User"; 
import "@/models/Media";
import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/services/isAuth";
/**
 * Create slug for URL
*/
const createSlug = (text:string) => {
    if(!text){
        return;
    }
    return text
    .toLowerCase() 
    .trim() 
    .replace(/[\s]+/g, "-") 
    .replace(/[^\w-]+/g, "")
}

// get all post from DB
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;

    const search = searchParams.get("search") || "";
    const access = searchParams.get("access") || "user";
    const limit = parseInt(searchParams.get("limit") || "10");

    const searchExp = new RegExp(".*" + search + ".*", "i");

    const query: {
      status?: string | { $in: string[] };
      $or?: { [key: string]: { $regex: RegExp } }[];
    } = {
      status: "Publish",
    };

    if (search) {
      query.$or = [
        { postTitle: { $regex: searchExp } },
        { slug: { $regex: searchExp } },
      ];
    }

    if (access === "admin") {
      query.status = { $in: ["Unpublish", "Publish"] };
    }

    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .populate({
        path: "author",
        select: "-password",
        populate: {
          path: "profile",
          select: "_id fileType fileUrl extension",
        },
      })
      .limit(limit);


      

    return NextResponse.json({
      success: true,
      payload: { posts },
    });
  } catch (error) {
    console.error("GET /api/posts error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const decoded = getAuthUser() as { id: string; email: string }
    await connectDB();   

    // Decode token
    const userId = decoded?.id;

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "unauthorize access" },
        { status: 401 }
      );
    }

    const body = await request.json();

    
    const { postTitle, slug: customSlug, ...rest } = body;

    if (!postTitle) {
      return NextResponse.json(
        { success: false, message: "Post title is required" },
        { status: 400 }
      );
    }

    // Generate or use existing slug
    let slug = customSlug || createSlug(postTitle);

    // Check if slug exists
    const existing = await Post.find({ slug }).select("slug");
    if (existing.length > 0) {
      slug = `${slug}-${Math.random().toString().split(".")[1]}`;
    }

    // Create post
    const post = await Post.create({
      ...rest,
      postTitle,
      slug,
      author: userId,
    });

    return NextResponse.json({
      success: true,
      message: "Post created",
      payload: { post },
    });
  } catch (error) {
    console.error("POST /api/posts/create error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
