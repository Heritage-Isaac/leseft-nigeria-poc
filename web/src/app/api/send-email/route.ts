import { NextResponse } from 'next/server'
import { renderEmailHtml } from '@/lib/email/renderer'
import { dispatchEmail } from '@/lib/email/dispatcher'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { draft, recipientEmail } = body

    if (!draft || !draft.subject) {
      return NextResponse.json(
        { error: 'Invalid payload: draft with subject is required' },
        { status: 400 }
      )
    }

    // Render the responsive HTML email template using the draft and Cloudinary/Sanity image
    const html = renderEmailHtml(draft)

    const destination = recipientEmail || draft.testRecipientEmail || 'stakeholders@leseft.com'

    // Dispatch via configured email provider (Resend, SendGrid, Postmark, or Sandbox Simulator)
    const result = await dispatchEmail({
      to: destination,
      subject: draft.subject,
      previewText: draft.previewText,
      heroImageUrl: draft.cloudinaryImageUrl,
      bodyHtml: html,
      callToAction: draft.callToAction,
    })

    return NextResponse.json({
      success: result.success,
      provider: result.provider,
      messageId: result.messageId,
      error: result.error,
      timestamp: result.timestamp,
      recipient: destination,
      renderedHtml: html,
    })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Internal server error while processing email draft'
    console.error('[API Send-Email Error]:', errorMessage)
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
