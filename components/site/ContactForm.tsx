'use client'

import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type FieldError = {
  firstName?: string
  lastName?: string
  company?: string
  email?: string
  phone?: string
  message?: string
}

type FormState = {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  message: string
}

const initial: FormState = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  message: ''
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const fieldClassName =
  'w-full rounded-[var(--radius)] border border-border/70 bg-white px-3 py-2.5 text-sm text-foreground shadow-sm transition-[border-color,box-shadow] duration-500 placeholder:text-muted-foreground/55 focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/20'

function validate (s: FormState): { ok: true } | { ok: false; errors: FieldError } {
  const errors: FieldError = {}
  if (!s.firstName.trim()) errors.firstName = 'First name is required'
  if (!s.lastName.trim()) errors.lastName = 'Last name is required'
  if (!s.email.trim()) {
    errors.email = 'Email is required'
  } else if (!emailRe.test(s.email.trim())) {
    errors.email = 'Enter a valid email'
  }
  if (!s.message.trim()) errors.message = 'Message is required'
  if (Object.keys(errors).length > 0) return { ok: false, errors }
  return { ok: true }
}

type ContactFormProps = {
  className?: string
}

type Feedback = {
  type: 'success' | 'error' | 'progress'
  message: string
}

function ContactFeedbackDialog ({
  feedback,
  onClose
}: {
  feedback: Feedback | null
  onClose: () => void
}) {
  const open = feedback !== null
  const okButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    window.setTimeout(() => okButtonRef.current?.focus(), 0)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const isSuccess = feedback.type === 'success'
  const isProgress = feedback.type === 'progress'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-foreground/25 backdrop-blur-[2px] transition-opacity"
        aria-hidden
        onClick={onClose}
      />
      <div
        role="alertdialog"
        aria-modal
        aria-labelledby="contact-form-feedback-title"
        aria-describedby={isProgress ? undefined : 'contact-form-feedback-desc'}
        className="relative z-10 w-full max-w-md rounded-xl border border-border/50 bg-card px-6 py-7 text-center shadow-lg sm:px-7"
      >
        <h2
          id="contact-form-feedback-title"
          className="font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-foreground"
        >
          {isProgress
            ? 'Development In Progress'
            : isSuccess
              ? 'Message sent'
              : 'We could not send your message'}
        </h2>
        {isProgress ? null : (
          <p
            id="contact-form-feedback-desc"
            className="mt-3 text-left text-sm leading-[1.65] text-muted-foreground sm:text-base"
          >
            {feedback.message}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-end gap-2">
          <Button
            ref={okButtonRef}
            type="button"
            onClick={onClose}
            className="min-w-[6.5rem]"
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  )
}

export function ContactForm ({ className }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<FieldError>({})
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const closeFeedback = useCallback(() => {
    setFeedback(null)
  }, [])

  async function onSubmit (e: FormEvent) {
    e.preventDefault()
    setFeedback(null)
    const v = validate(form)
    if (!v.ok) {
      setErrors(v.errors)
      return
    }
    setErrors({})
    setSending(true)
    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
      submittedAt: new Date().toISOString()
    }
    // Captured client-side for now; replace with `POST /api/contact` when email (e.g. Resend) is live
    if (process.env.NODE_ENV === 'development') {
      console.log('[Contact] Captured submission:', payload)
    }
    try {
      await new Promise((r) => {
        setTimeout(r, 450)
      })
      setForm(initial)
      setFeedback({
        type: 'progress',
        message: ''
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <ContactFeedbackDialog
        feedback={feedback}
        onClose={closeFeedback}
      />
    <form
      onSubmit={onSubmit}
      className={cn('space-y-6', className)}
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-foreground">
            First name <span className="text-destructive">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={(e) => {
              setForm((f) => ({ ...f, firstName: e.target.value }))
            }}
            className={fieldClassName}
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            required
          />
          {errors.firstName ? (
            <p id="firstName-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.firstName}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-foreground">
            Last name <span className="text-destructive">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={form.lastName}
            onChange={(e) => {
              setForm((f) => ({ ...f, lastName: e.target.value }))
            }}
            className={fieldClassName}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            required
          />
          {errors.lastName ? (
            <p id="lastName-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.lastName}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-foreground">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={(e) => {
            setForm((f) => ({ ...f, company: e.target.value }))
          }}
          className={fieldClassName}
        />
        {errors.company ? (
          <p className="mt-1 text-sm text-destructive" role="alert">
            {errors.company}
          </p>
        ) : null}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => {
              setForm((f) => ({ ...f, email: e.target.value }))
            }}
            className={fieldClassName}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-sm text-destructive" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => {
              setForm((f) => ({ ...f, phone: e.target.value }))
            }}
            className={fieldClassName}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => {
            setForm((f) => ({ ...f, message: e.target.value }))
          }}
          className={fieldClassName}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-destructive" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          size="lg"
          disabled={sending}
          className="normal-case tracking-[0.08em]"
        >
          {sending ? 'Sending…' : 'Send message'}
        </Button>
      </div>
    </form>
    </>
  )
}
