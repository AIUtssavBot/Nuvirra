import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { Resend } from "resend"
export const runtime = "nodejs"

type ContactPayload = {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

function isValidEmail(email: string): boolean {
  return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const resendSenderEmail = process.env.RESEND_SENDER_EMAIL || process.env.MAIL_FROM || "onboarding@resend.dev"

    const toAddress = process.env.MAIL_TO || "nuvirra9@gmail.com"

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
        ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${(body.message || "").replace(/\n/g, "<br/>")}</p>
      </div>
    `

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Resend API key not configured (set RESEND_API_KEY in .env.local)" },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)
    const { data, error } = await resend.emails.send({
      from: `${body.name || "Nuvirra Website"} <${resendSenderEmail}>`,
      to: [toAddress],
      reply_to: body.email,
      subject: `New message from ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || "-"}\nCompany: ${body.company || "-"}\n\n${body.message}`,
      html: html,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json({ error: error.message || "Failed to send message" }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (error) {
    console.error("/api/contact POST error:", error)
    const isProd = process.env.NODE_ENV === "production"
    const message = isProd ? "Failed to send message" : (error instanceof Error ? error.message : "Unknown error")
    return NextResponse.json({ error: message }, { status: 500 })
  }
}


