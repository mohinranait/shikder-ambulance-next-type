import connectDB from '@/config/mongodb';
import { sendEmailByNodeMailer } from '@/config/sendEmail';
import Email from '@/models/Email';

import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const { fullName, phone, email, from, to, message } = body;

    const emailData = {
      emails: 'rentsheba@gmail.com',
      subject: 'Booking Shikder Ambulance',
      text: 'Shikder Ambulance',
      html: `
        <p>Email from Contact form of Shikder Ambulance</p>
        <h3>Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email || ''}</li>
          <li><strong>Location:</strong> ${from} to ${to}</li>
          <li><strong>Message:</strong> ${message || ''}</li>
        </ul>
      `,
    };

    try {
      await sendEmailByNodeMailer(emailData);
      await Email.create(body);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);

        return NextResponse.json(
            { message: "Send to fail verification email" },
            { status: 500 }
        );
    }


     return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );

   
  } catch (error) {
    console.error('Server error:', error);
     return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
  }
}
