import connectDb from "@/config/databaseConfig";
import User from "@/models/UserModal";
import { NextRequest, NextResponse } from "next/server"; // Import types from Next.js
import bcrypt from "bcryptjs";
import { userSchemaValidationServer } from "@/velidations/registrationSchema";
export const dynamic = "force-static"; // Adjust based on the caching requirements

/**
 * Handles the creation of a new user.
 * @param request - The incoming HTTP request.
 * @returns A response containing the created user or an error message.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
       
        const body = await request.json();
        await userSchemaValidationServer.validate(body, { abortEarly: false })
        // Connect to the database
        await connectDb();
        const {password,email} = body
        console.log({body});
        
        // CHECK EXISTES USER
        const existsUser = await User.findOne({email});
        if(existsUser){
            return NextResponse.json({success:false, message: "This user already exists"},{status:409})
        }

        // CREATE HASH Password
        const hasPass = bcrypt.hashSync(password, 10);

        // Create a new user document
        let user = await User.create({...body, password: hasPass});
        user = user.toObject()
        delete user.password

        console.log("User created successfully:", user);

        // Return a success response with the created user
        return NextResponse.json({  user, success:true, message:"Register successfull" }, { status: 201 });
    } catch (error) {
              
        // Return an error response
        return NextResponse.json(
            { 
                success: false, 
                message: error instanceof Error ? error.message : error },
            { status: 500 }
        );
    }
}


