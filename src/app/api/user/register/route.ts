import connectDB from "@/config/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, password } = body || {};
    const { firstName, lastName } = name || {};

    // Input validation
    if (!name) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 409 }
      );
    }

    // const { error } = registerSchema.validate({ firstName, lastName, email, password });
    // if (error) {
    //   return NextResponse.json(
    //     { success: false, error: error.details?.[0]?.message || "Invalid input" },
    //     { status: 400 }
    //   );
    // }

    // Duplicate check
    const isExists = await User.findOne({ email });
    if (isExists) {
      return NextResponse.json(
        { success: false, error: "This email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create user
    let user = await User.create({
      ...body,
      password: hashedPassword,
    });

    user = user.toObject();
    delete user.password;

    return NextResponse.json(
      {
        success: true,
        message: "User created",
        statusCode: 201,
        payload: user,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("POST /api/users/new error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Server error" },
      { status: 500 }
    );
  }
}
