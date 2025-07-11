import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/mongodb";
import Post from "@/models/Post";
import User from "@/models/User";
import { getAuthUser } from "@/services/isAuth";

// Update post by ID
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const decoded = getAuthUser() as {email:string;id:string}
    await connectDB();

    const postId = params?.id;

    const userId = decoded?.id;

    // Check if user exists
    const authUser = await User.findById(userId).select("email");
    if (!authUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const existsPost = await Post.findById(postId).select("author slug");
    if (!existsPost) {
      return NextResponse.json(
        { success: false, message: "Post not found" },
        { status: 404 }
      );
    }

    // Check post ownership
    if (existsPost.author.toString() !== userId.toString()) {
      return NextResponse.json(
        { success: false, message: "Forbidden: You do not own this post" },
        { status: 403 }
      );
    }

    const body = await request.json();

    // Check slug duplication
    if (existsPost.slug !== body.slug) {
      const duplicateSlugPost = await Post.findOne({ slug: body.slug }).select("slug");
      if (duplicateSlugPost) {
        return NextResponse.json(
          { success: false, message: "Slug is already in use by another post." },
          { status: 400 }
        );
      }
    }

    // Update post
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { ...body },
      { runValidators: true, new: true }
    );

    if (!updatedPost) {
      return NextResponse.json(
        { success: false, message: "Something went wrong during update" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Post updated successfully",
      statusCode: 201,
      payload: { post: updatedPost },
    });
  } catch (error) {
    console.error("PATCH /api/posts/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete single post by id
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const decoded = getAuthUser() as {email:string;id:string}
    await connectDB();

    const postId = params?.id;
  

    if (!postId || !decoded?.id ) {
      return NextResponse.json(
        { success: false, message: "Post ID  missing" },
        { status: 400 }
      );
    }



    await Post.findByIdAndDelete(postId);

    return NextResponse.json({
      success: true,
      message: "Post has been deleted",
      statusCode: 200,
    });
  } catch (error) {
    console.error("DELETE /api/posts/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
