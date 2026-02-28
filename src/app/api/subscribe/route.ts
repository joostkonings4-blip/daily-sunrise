import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const sanitized = email.toLowerCase().trim();

    // Log to Vercel function logs (view in Vercel dashboard → Functions → Logs)
    console.log(`[Daily Sunrise] New subscriber: ${sanitized} — ${new Date().toISOString()}`);

    // TODO: Replace with your email service of choice:
    // — Resend:     POST https://api.resend.com/audiences/{id}/contacts
    // — ConvertKit: POST https://api.convertkit.com/v3/forms/{id}/subscribe
    // — Mailchimp:  POST https://us1.api.mailchimp.com/3.0/lists/{id}/members

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
