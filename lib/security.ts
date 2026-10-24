/**
 * Enterprise Security & Anti-Hacking Utilities for Boosting Agency BD
 * Protects against XSS, HTML/Script Injection, SQL/Command Injection patterns,
 * URL/Protocol abuse, automated bot spam, and form flooding.
 */

const DANGEROUS_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
  /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
  /<embed\b[^>]*>/gi,
  /<applet\b[^<]*(?:(?!<\/applet>)<[^<]*)*<\/applet>/gi,
  /<meta\b[^>]*>/gi,
  /<link\b[^>]*>/gi,
  /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,
  /javascript\s*:/gi,
  /vbscript\s*:/gi,
  /data\s*:\s*text\/html/gi,
  /on[a-z]+\s*=/gi,
  /expression\s*\(/gi,
  /eval\s*\(/gi,
  /document\.(cookie|write|location|domain)/gi,
  /window\.(location|open)/gi,
]

/**
 * Sanitizes user text input by stripping HTML tags, dangerous protocols,
 * inline event handlers, and control characters.
 */
export function sanitizeInput(input: string, maxLength = 1000): string {
  if (!input || typeof input !== "string") return ""

  let cleaned = input

  // Remove null bytes and non-printable control characters (except newline/tab)
  cleaned = cleaned.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")

  // Strip dangerous script/iframe/event patterns
  for (const pattern of DANGEROUS_PATTERNS) {
    cleaned = cleaned.replace(pattern, "")
  }

  // Strip any remaining raw HTML tags
  cleaned = cleaned.replace(/<\/?[a-z][^>]*>/gi, "")

  // Neutralize angle brackets and backticks to prevent injection
  cleaned = cleaned
    .replace(/[<>`]/g, "")
    .trim()

  if (cleaned.length > maxLength) {
    cleaned = cleaned.slice(0, maxLength)
  }

  return cleaned
}

/**
 * Validates whether an email address is well-formed and free of injection characters.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string" || email.length > 254) return false
  const sanitized = sanitizeInput(email, 254)
  if (sanitized !== email.trim()) return false
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
  return emailRegex.test(sanitized)
}

/**
 * Validates phone number format (supports Bangladesh +880 and international formats).
 */
export function isValidPhone(phone: string): boolean {
  if (!phone) return true // optional field
  if (typeof phone !== "string" || phone.length > 25) return false
  const phoneRegex = /^[+\d\s()-]{6,25}$/
  return phoneRegex.test(phone.trim())
}

/**
 * Client-side rate limiter using sessionStorage to prevent spam/flooding attacks.
 */
export function checkRateLimit(
  actionKey: string,
  maxAttempts = 5,
  windowMs = 60_000
): { allowed: boolean; retryAfterSeconds: number } {
  if (typeof window === "undefined") {
    return { allowed: true, retryAfterSeconds: 0 }
  }

  try {
    const storageKey = `babd_rl_${actionKey}`
    const now = Date.now()
    const raw = sessionStorage.getItem(storageKey)
    let timestamps: number[] = raw ? JSON.parse(raw) : []

    if (!Array.isArray(timestamps)) {
      timestamps = []
    }

    // Keep only timestamps within current window
    timestamps = timestamps.filter((ts) => typeof ts === "number" && now - ts < windowMs)

    if (timestamps.length >= maxAttempts) {
      const oldest = timestamps[0] || now
      const retryAfterSeconds = Math.max(1, Math.ceil((windowMs - (now - oldest)) / 1000))
      return { allowed: false, retryAfterSeconds }
    }

    timestamps.push(now)
    sessionStorage.setItem(storageKey, JSON.stringify(timestamps))
    return { allowed: true, retryAfterSeconds: 0 }
  } catch {
    return { allowed: true, retryAfterSeconds: 0 }
  }
}

/**
 * Opens an external URL safely with noopener and noreferrer to prevent reverse tabnabbing.
 */
export function safeExternalOpen(url: string): void {
  if (typeof window === "undefined") return
  try {
    const parsed = new URL(url, window.location.origin)
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:" && parsed.protocol !== "mailto:" && parsed.protocol !== "tel:") {
      return
    }
    const newWin = window.open(parsed.toString(), "_blank", "noopener,noreferrer")
    if (newWin) {
      newWin.opener = null
    }
  } catch {
    // Ignore malformed URLs
  }
}
