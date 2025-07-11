import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/mongodb";
import Post from "@/models/Post";
import "@/models/User"; 
import "@/models/Media"; 

// GET /api/posts/slug/[slug]
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    await connectDB();

    const post = await Post.findOne({ slug }).populate({
      path: "author",
      select: "-password",
      populate: {
        path: "profile",
        select: "_id fileType fileUrl extension",
      },
    });

    if (!post) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Success",
      statusCode: 200,
      payload: { post },
    });
  } catch (error: unknown) {
    console.error("GET /api/posts/[slug] error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
