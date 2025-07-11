import connectDB from '@/config/mongodb';
import Comment from '@/models/Comment';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const postId = searchParams.get('postId');

    if (!postId) {

      return NextResponse.json(
        { message: "Missing postId query" },
        { status: 400 }
        );
    }

    const comments = await Comment.find({ postId });

 return NextResponse.json({
        success: true,
        message: "Comments gets",
        payload: { comments },
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
