import { NextResponse } from "next/server"
import { Resend } from "resend"
import { siteConfig } from "@/config/site"
import { buildContactEmailHtml } from "@/lib/contact-email-template"
import {
  CONTACT_MIN_FORM_MS,
  getClientIp,
  isHoneypotTripped,
  isTooFast,
  tryConsumeRateLimit,
} from "@/lib/contact-spam-guards"
import { absoluteUrl, getSiteOrigin } from "@/lib/seo"
import { millworkEmails } from "@/lib/site-data"

export const runtime = "nodejs"

type ContactPayload = {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  message: string
  websiteUrl?: string
  formStartedAt?: number
}

const SILENT_OK_RESPONSE = NextResponse.json({
  ok: true,
  message: "Message received. We will get back to you soon.",
})

function isNonEmpty (s: unknown): s is string {
  return typeof s === 'string' && s.trim().length > 0
}

function buildEmailBody (p: {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  message: string
}) {
  const lines = [
    'New message from the website contact form.',
    '',
    `Name: ${p.firstName} ${p.lastName}`,
    `Email: ${p.email}`,
    p.company ? `Company: ${p.company}` : null,
    p.phone ? `Phone: ${p.phone}` : null,
    '',
    'Message:',
    p.message
  ].filter((x) => x !== null)
  return lines.join('\n')
}

/**
 * Env: RESEND_API_KEY, CONTACT_FROM_EMAIL (verified-domain sender), CONTACT_TO_EMAIL (inbox).
 * CONTACT_TO_EMAIL defaults to millworkEmails.sales (sales@shiolenomillwork.com) when unset.
 * Dev-only tests: onboarding@resend.dev + your personal inbox as CONTACT_TO_EMAIL.
 */
export async function POST (request: Request) {
  let body: Partial<ContactPayload>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body" },
      { status: 400 },
    )
  }

  const { websiteUrl, formStartedAt } = body

  if (isHoneypotTripped(websiteUrl)) {
    return SILENT_OK_RESPONSE
  }

  const isDev = process.env.NODE_ENV === "development"
  if (isTooFast(formStartedAt, { isDev })) {
    return NextResponse.json(
      {
        ok: false,
        message: `Please wait at least ${Math.ceil(CONTACT_MIN_FORM_MS / 1000)} seconds before sending so we know you are human.`,
      },
      { status: 400 },
    )
  }

  const { firstName, lastName, company, email, phone, message } = body
  if (!isNonEmpty(firstName) || !isNonEmpty(lastName) || !isNonEmpty(email) || !isNonEmpty(message)) {
    return NextResponse.json(
      { ok: false, message: 'Missing required fields' },
      { status: 400 }
    )
  }

  const ip = getClientIp(request)
  if (!tryConsumeRateLimit(ip)) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Too many submissions from this network. Please try again later.",
      },
      { status: 429 },
    )
  }

  const resendKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || millworkEmails.sales
  const from = process.env.CONTACT_FROM_EMAIL
  const canSend = Boolean(resendKey && to && from)

  const payload = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    company: (company && typeof company === 'string' ? company : '').trim(),
    email: email.trim(),
    phone: (phone && typeof phone === 'string' ? phone : '').trim(),
    message: message.trim()
  }

  if (canSend) {
    const resend = new Resend(resendKey)
    const subject = `Website contact: ${payload.firstName} ${payload.lastName}`
    const text = buildEmailBody(payload)
    const logoUrl = process.env.CONTACT_LOGO_URL || absoluteUrl('/images/shioleno_full.svg')
    const html = buildContactEmailHtml(payload, {
      logoUrl,
      siteName: siteConfig.name,
      siteUrl: getSiteOrigin()
    })
    const { error } = await resend.emails.send({
      from: from as string,
      to: [to as string],
      subject,
      text,
      html,
      replyTo: payload.email
    })
    if (error) {
      console.error('[contact]', error)
      return NextResponse.json(
        { ok: false, message: 'We could not send your message. Please try again or email us directly.' },
        { status: 502 }
      )
    }
    return NextResponse.json({
      ok: true,
      message: 'Message received. We will get back to you soon.'
    })
  }

  if (process.env.NODE_ENV === 'development') {
    console.info('[contact] (no Resend) would send:', { to, from: from || '(missing)', payload })
    return NextResponse.json({
      ok: true,
      message:
        'Development: Resend is not configured (set RESEND_API_KEY and CONTACT_FROM_EMAIL in .env.local). Your message was not emailed; it was only logged in the dev server console.'
    })
  }

  return NextResponse.json(
    {
      ok: true,
      message: 'Your message was received. We will respond as soon as possible.'
    },
    { status: 200 }
  )
}
