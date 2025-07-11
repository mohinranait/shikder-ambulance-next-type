import { NextResponse } from "next/server";
import connectDB from "@/config/mongodb";
import User from "@/models/User";
import { getAuthUser } from "@/services/isAuth";

export async function GET() {
  try {
    const decoded = getAuthUser();
    let decodedUser: { id: string; email: string };

    if (typeof decoded === "string" || !decoded || !("id" in decoded) || !("email" in decoded)) {
      return NextResponse.json({ success: false, error: "Invalid token payload" }, { status: 401 });
    } else {
      decodedUser = { id: decoded.id, email: decoded.email };
    }

    await connectDB();

    const user = await User.findById(decodedUser.id).select("-password");

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: "Authenticated user fetched",
      payload: user,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 401 });
  }
}



// Logout user
export async function DELETE() {
  try {

    
    // Clear the access_token cookie by setting it with past expiry
    const response = NextResponse.json(
      { message: "User logout", success: true },
      { status: 200 }
    );

    response.cookies.set({
      name: "access_token",
      value: "",
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      expires: new Date(0), 
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Logout failed", success: false },
      { status: 500 }
    );
  }
}


