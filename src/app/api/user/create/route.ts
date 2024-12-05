import connectDb from "@/config/databaseConfig";
import User from "@/models/UserModal";
import { NextRequest, NextResponse } from "next/server"; // Import types from Next.js

export const dynamic = "force-static"; // Adjust based on the caching requirements

/**
 * Handles the creation of a new user.
 * @param request - The incoming HTTP request.
 * @returns A response containing the created user or an error message.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
       
        const body = await request.json();

        // Connect to the database
        await connectDb();

        // Create a new user document
        const user = await User.create(body);

        console.log("User created successfully:", user);

        // Return a success response with the created user
        return NextResponse.json({ data: user }, { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error);

        // Return an error response
        return NextResponse.json(
            { error: "Failed to create user", details: error instanceof Error ? error.message : error },
            { status: 500 }
        );
    }
}


/**
 * 
 * 
 * 
 * 
*/