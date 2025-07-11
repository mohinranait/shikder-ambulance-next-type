import connectDB from "@/config/mongodb";
import Comment from "@/models/Comment";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    await connectDB();

    const userId = params.userId;
    const body = await req.json();

    if (userId !== 'not-auth') {
      body.autor = userId;
    }

    const comment = await Comment.create(body);


      return NextResponse.json({
          success: true,
          message: "Comment submitted receipt",
          payload: { comment },
      });

   
  } catch (error) {
    console.error(error);
   return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
