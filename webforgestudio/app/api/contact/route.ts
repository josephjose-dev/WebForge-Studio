import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = "WebForge Studio <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.TO_EMAIL) {
      return NextResponse.json(
        { success: false, error: "Email service not configured." },
        { status: 500 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    await resend.emails.send({
      from: fromEmail,
      to: process.env.TO_EMAIL,
      subject: "New contact form submission – WebForge Studio",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111">
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
          <hr />
          <p>Sent on: ${timestamp}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}



