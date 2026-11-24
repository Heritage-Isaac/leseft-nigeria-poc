export interface EmailPayload {
  to: string | string[]
  from?: string
  subject: string
  previewText?: string
  heroImageUrl?: string
  bodyHtml: string
  callToAction?: {
    buttonText: string
    buttonUrl: string
  }
}

export interface EmailDispatchResult {
  success: boolean
  provider: 'resend' | 'sendgrid' | 'postmark' | 'webhook' | 'simulator'
  messageId?: string
  error?: string
  timestamp: string
}
