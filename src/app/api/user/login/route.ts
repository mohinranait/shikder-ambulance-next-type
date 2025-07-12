import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/config/mongodb";
import User from "@/models/User";
import { loginSchema } from "@/schema/login.schema";
import { serialize } from "cookie";
import { JWT_SECRET, NODE_ENV } from "@/config/accessEnv";

const jwtSecret = JWT_SECRET as string;
const productionMode = NODE_ENV;

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { email, password } = body || {};

    
    // Validate input
    const { error } = loginSchema.validate({ email, password });
    if (error) {
      return NextResponse.json(
        { success: false, error: error.details[0].message },
        { status: 400 }
      );
    }

    // Check user existence
    let user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Convert to plain object and remove password
    user = user.toObject();
    delete user.password;

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      jwtSecret,
      { expiresIn: "1d" }
    );

    // Set cookie
    const cookie = serialize("access_token", token, {
      httpOnly: true,
      secure: productionMode === "production",
      sameSite: productionMode === "production" ? "none" : "strict",
      maxAge: 60 * 60 * 24, 
      path: "/",
    });

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Login successful",
        statusCode: 200,
        payload: user,
      }),
      {
        status: 200,
        headers: {
          "Set-Cookie": cookie,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: unknown) {
    console.error("POST /api/auth/login error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
