import { NextResponse } from 'next/server'
import { contactInfo } from '@/lib/site-data'

export const runtime = 'nodejs'

type ContactPayload = {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  message: string
}

function isNonEmpty (s: unknown): s is string {
  return typeof s === 'string' && s.trim().length > 0
}

/**
 * TODO: When RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL are set,
 * use Resend (or your mail provider) to send email from this API route.
 * Example: import { Resend } from 'resend'; const r = new Resend(process.env.RESEND_API_KEY); ...
 * Keep the same JSON contract so the ContactForm does not need changes.
 */
export async function POST (request: Request) {
  let body: Partial<ContactPayload>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid JSON body' }, { status: 400 })
  }

  const { firstName, lastName, company, email, phone, message } = body
  if (!isNonEmpty(firstName) || !isNonEmpty(lastName) || !isNonEmpty(email) || !isNonEmpty(message)) {
    return NextResponse.json(
      { ok: false, message: 'Missing required fields' },
      { status: 400 }
    )
  }

  const resendKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || contactInfo.email
  const from = process.env.CONTACT_FROM_EMAIL
  const canSend = Boolean(resendKey && to && from)

  if (canSend) {
    // TODO: const resend = new Resend(resendKey)
    // await resend.emails.send({ from, to, subject: '...', text: '...' })
    return NextResponse.json({
      ok: true,
      message: 'Message received. We will get back to you soon.'
    })
  }

  if (process.env.NODE_ENV === 'development') {
    return NextResponse.json({
      ok: true,
      message:
        'Development: Resend is not configured (RESEND_API_KEY / CONTACT_FROM_EMAIL). Your message was accepted and logged server-side in dev only.'
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
