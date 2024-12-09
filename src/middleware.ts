import { NextRequest, NextResponse } from 'next/server';

// Middleware function
export async function middleware(request: NextRequest) {
    const token = request.cookies.get('next-auth.session-token'); 

    if (!token) {
        // Redirect to login if token is missing
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Allow the request to proceed
    return NextResponse.next();
}

// Config for matching all paths under /admin/*
export const config = {
    matcher: ['/admin/:path*'], 
};
