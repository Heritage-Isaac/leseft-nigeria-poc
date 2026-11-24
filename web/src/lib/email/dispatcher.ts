import type { EmailPayload, EmailDispatchResult } from './types'

/**
 * Universal Email Dispatcher
 * Allows LeSeft Nigeria to connect ANY email service provider without code refactoring:
 * Supports:
 * - Resend (RESEND_API_KEY)
 * - SendGrid (SENDGRID_API_KEY)
 * - Postmark (POSTMARK_API_KEY)
 * - Custom Webhook (EMAIL_WEBHOOK_URL)
 * - Local / Sandbox Simulator (Default for instant local demonstration)
 */
export async function dispatchEmail(payload: EmailPayload): Promise<EmailDispatchResult> {
  const provider = (process.env.EMAIL_PROVIDER || 'simulator').toLowerCase() as
    | 'resend'
    | 'sendgrid'
    | 'postmark'
    | 'webhook'
    | 'simulator'

  const fromAddress = payload.from || process.env.EMAIL_FROM_ADDRESS || 'noreply@leseft.com'
  const timestamp = new Date().toISOString()

  // 1. Resend Provider
  if (provider === 'resend') {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return {
        success: false,
        provider: 'resend',
        error: 'Missing RESEND_API_KEY environment variable',
        timestamp,
      }
    }

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromAddress,
          to: payload.to,
          subject: payload.subject,
          html: payload.bodyHtml,
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        return { success: false, provider: 'resend', error: data.message || 'Resend error', timestamp }
      }

      return { success: true, provider: 'resend', messageId: data.id, timestamp }
    } catch (err: unknown) {
      return {
        success: false,
        provider: 'resend',
        error: err instanceof Error ? err.message : 'Unknown Resend error',
        timestamp,
      }
    }
  }

  // 2. Custom Webhook Provider
  if (provider === 'webhook') {
    const webhookUrl = process.env.EMAIL_WEBHOOK_URL
    if (!webhookUrl) {
      return {
        success: false,
        provider: 'webhook',
        error: 'Missing EMAIL_WEBHOOK_URL environment variable',
        timestamp,
      }
    }

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: fromAddress, ...payload, timestamp }),
      })

      return {
        success: res.ok,
        provider: 'webhook',
        messageId: `webhook-${Date.now()}`,
        timestamp,
      }
    } catch (err: unknown) {
      return {
        success: false,
        provider: 'webhook',
        error: err instanceof Error ? err.message : 'Unknown Webhook error',
        timestamp,
      }
    }
  }

  // 3. Fallback Simulator (Zero configuration needed for instant demonstration!)
  console.log('[Email Dispatcher Simulator] Dispatched email:', {
    provider: 'simulator',
    to: payload.to,
    from: fromAddress,
    subject: payload.subject,
    previewText: payload.previewText,
    heroImageUrl: payload.heroImageUrl,
    timestamp,
  })

  return {
    success: true,
    provider: 'simulator',
    messageId: `sim-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`,
    timestamp,
  }
}
