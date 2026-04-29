/**
 * Lightweight server-side spam checks for the contact API (no external CAPTCHA).
 * Honeypot + minimum fill time + in-memory rate limit per IP.
 */

const RATE_WINDOW_MS = 15 * 60 * 1000
const RATE_MAX_PER_WINDOW = 10
const MIN_FORM_MS = 1600

const attemptsByIp = new Map<string, number[]>()

function pruneOld (timestamps: number[], now: number) {
  return timestamps.filter((t) => now - t < RATE_WINDOW_MS)
}

export function getClientIp (request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim()
    if (first) return first
  }
  const real = request.headers.get("x-real-ip")?.trim()
  if (real) return real
  return "unknown"
}

/**
 * Honeypot field must be absent or empty (bots often fill every input).
 */
export function isHoneypotTripped (websiteUrl: unknown): boolean {
  if (websiteUrl === undefined || websiteUrl === null) return false
  if (typeof websiteUrl !== 'string') return true
  return websiteUrl.trim().length > 0
}

/**
 * Ignore missing/invalid timestamps in development; enforce minimum time in production.
 */
export function isTooFast (
  formStartedAt: unknown,
  opts: { isDev: boolean },
): boolean {
  if (opts.isDev) return false
  if (typeof formStartedAt !== 'number' || !Number.isFinite(formStartedAt)) {
    return true
  }
  return Date.now() - formStartedAt < MIN_FORM_MS
}

/**
 * After honeypot passes: reserve a slot for this IP. Returns false if already over limit.
 */
export function tryConsumeRateLimit (ip: string): boolean {
  const now = Date.now()
  const list = pruneOld(attemptsByIp.get(ip) ?? [], now)
  if (list.length >= RATE_MAX_PER_WINDOW) {
    attemptsByIp.set(ip, list)
    return false
  }
  list.push(now)
  attemptsByIp.set(ip, list)
  return true
}

/** Public copy for client (hook into same minimum in dev if desired) */
export const CONTACT_MIN_FORM_MS = MIN_FORM_MS
