'use server'

import { dispatchEmail } from '@/lib/email/dispatcher'
import { renderEmailHtml } from '@/lib/email/renderer'
import type { EmailDraft } from '@/types'

export async function sendEmailDraftAction(draft: EmailDraft, destinationEmail: string) {
  try {
    const html = renderEmailHtml(draft)
    const result = await dispatchEmail({
      to: destinationEmail,
      subject: draft.subject,
      previewText: draft.previewText,
      heroImageUrl: draft.cloudinaryImageUrl,
      bodyHtml: html,
      callToAction: draft.callToAction,
    })

    return {
      success: result.success,
      provider: result.provider,
      messageId: result.messageId,
      error: result.error,
      timestamp: result.timestamp,
    }
  } catch (error: unknown) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to dispatch email',
    }
  }
}
