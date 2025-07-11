import nodemailer from 'nodemailer';

const SMTP_USER = process.env.NEXT_PUBLIC_SMTP_USER;
const SMTP_PASS = process.env.NEXT_PUBLIC_SMTP_PASSWORD;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

/**
 * Send email using nodemailer
 */
export const sendEmailByNodeMailer = async (data: {
  emails: string;
  subject: string;
  text: string;
  html: string;
}) => {
  try {
    const mailData = {
      from: SMTP_USER,
      to: data.emails,
      subject: data.subject,
      text: data.text,
      html: data.html,
    };

    const info = await transporter.sendMail(mailData);

    console.log('Message sent ID:', info.messageId);
    console.log('Message sent response:', info.response);
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};
