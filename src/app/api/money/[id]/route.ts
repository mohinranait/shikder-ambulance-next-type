import connectDB from '@/config/mongodb';
import MoneyReceipt from '@/models/MoneyReceipt';
import { getAuthUser } from '@/services/isAuth';
import { NextRequest, NextResponse } from 'next/server';


export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
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
    const receipt = await MoneyReceipt.findByIdAndUpdate(
      params.id,
      { ...body },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
        success: true,
        message: "Update money receipt",
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


export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const user =  getAuthUser() as {id:string};
    if (!user?.id) {
      return NextResponse.json(
        { success: false, message: "unauthorize access" },
        { status: 401 }
        );
    }

    const { id } = params;
    const receipt = await MoneyReceipt.findByIdAndDelete(id);

     return NextResponse.json({
        success: true,
        message: "Money receipt deleted",
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
