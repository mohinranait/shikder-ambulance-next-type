import { NextRequest, NextResponse } from "next/server";

// Middleware function
export async function middleware(request: NextRequest) {
  // Check for session token in cookies
  const token = request.cookies.get("access_token");

  if (!token) {
    // Redirect to login if token is missing
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Config to match all paths under /admin/*
export const config = {
  matcher: ["/admin/:path*"], // Protect all routes under /admin
};
