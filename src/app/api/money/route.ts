import connectDB from '@/config/mongodb';
import MoneyReceipt from '@/models/MoneyReceipt';
import { getAuthUser } from '@/services/isAuth';
import { NextRequest, NextResponse } from 'next/server';



export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const decoded =  getAuthUser() as {id:string}; 

    if (!decoded?.id) {
        return NextResponse.json(
        { success: false, message: "unauthorize access" },
        { status: 401 }
        );
    }

    const body = await req.json();
    const receipt = await MoneyReceipt.create({ ...body });

    return NextResponse.json({
        success: true,
        message: "Money receipt created",
        payload: { receipt },
    });

   
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}


export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const decoded =  getAuthUser() as {id:string};
    if (!decoded?.id) {
      return NextResponse.json(
             { success: false, message: "unauthorize access" },
             { status: 401 }
             );
    }

    const receipts = await MoneyReceipt.find({}).sort({ createdAt: -1 });
    
    
    return NextResponse.json({
          success: true,
          payload: { receipts },
        });


   
  } catch (error) {
    console.error(error);
    return NextResponse.json(
         { success: false, error: "Failed to fetch receipts" },
         { status: 500 }
       );
  }
}
