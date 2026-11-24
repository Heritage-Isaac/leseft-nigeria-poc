import type { EmailDraft, PortableTextBlock } from '@/types'
import { getOptimizedCloudinaryUrl } from '../cloudinary/cloudinaryHelper'

/**
 * Renders an EmailDraft from Sanity into a responsive, bulletproof corporate HTML email.
 * Incorporates Cloudinary-hosted or Sanity CDN images, typography, CTA button, and compliance footer.
 */
export function renderEmailHtml(draft: EmailDraft | {
  subject: string
  previewText?: string
  heroImageUrl?: string
  bodyHtml?: string
  callToAction?: { buttonText: string; buttonUrl: string }
}): string {
  const subject = draft.subject || 'Corporate Announcement'
  const previewText = draft.previewText || ''
  
  let heroImageUrl = ''
  if ('heroImageUrl' in draft && draft.heroImageUrl) {
    heroImageUrl = draft.heroImageUrl
  } else if ('imageMode' in draft) {
    if (draft.imageMode === 'cloudinary' && draft.cloudinaryImageUrl) {
      heroImageUrl = getOptimizedCloudinaryUrl(draft.cloudinaryImageUrl, { width: 600 }) || draft.cloudinaryImageUrl
    } else if (draft.uploadedImage && typeof draft.uploadedImage === 'object' && draft.uploadedImage.url) {
      heroImageUrl = draft.uploadedImage.url
    }
  }

  // Format portable text or raw body into clean paragraph HTML if string or object
  let bodyContent = ''
  if ('bodyHtml' in draft && draft.bodyHtml) {
    bodyContent = draft.bodyHtml
  } else if ('body' in draft && Array.isArray(draft.body)) {
    // Basic PortableText to HTML converter for email compatibility
    bodyContent = draft.body
      .map((block: PortableTextBlock) => {
        if (block._type === 'block') {
          const text = block.children?.map((child) => child.text || '').join('') || ''
          if (block.style === 'h3') {
            return `<h3 style="font-size: 18px; font-weight: 700; color: #0F172A; margin: 24px 0 12px 0;">${text}</h3>`
          }
          if (block.style === 'blockquote') {
            return `<blockquote style="border-left: 3px solid #0284C7; margin: 16px 0; padding-left: 14px; color: #475569; font-style: italic;">${text}</blockquote>`
          }
          return `<p style="font-size: 15px; line-height: 1.6; color: #334155; margin: 0 0 16px 0;">${text}</p>`
        }
        return ''
      })
      .join('')
  } else {
    bodyContent = `<p style="font-size: 15px; line-height: 1.6; color: #334155;">Thank you for your partnership with LeSeft Nigeria Limited.</p>`
  }

  const ctaButton = draft.callToAction?.buttonText ? `
    <table border="0" cellpadding="0" cellspacing="0" style="margin: 28px 0;">
      <tr>
        <td align="left" style="border-radius: 6px;" bgcolor="#0284C7">
          <a href="${draft.callToAction.buttonUrl || '#'}" target="_blank" style="font-size: 14px; font-family: Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 6px; padding: 12px 24px; border: 1px solid #0284C7; display: inline-block; font-weight: 600;">
            ${draft.callToAction.buttonText} &rarr;
          </a>
        </td>
      </tr>
    </table>
  ` : ''

  const heroImageBlock = heroImageUrl ? `
    <tr>
      <td style="padding: 0 0 24px 0;">
        <img src="${heroImageUrl}" alt="Campaign Header" style="width: 100%; max-width: 600px; height: auto; display: block; border-radius: 8px; border: 1px solid #E2E8F0;" />
      </td>
    </tr>
  ` : ''

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F8FAFC; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <!-- Preheader preview text for inbox -->
  <div style="display: none; max-height: 0px; overflow: hidden;">
    ${previewText}
  </div>

  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F8FAFC; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #FFFFFF; border-radius: 8px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <!-- Top Header Brand Bar -->
          <tr>
            <td style="padding: 24px 32px; border-bottom: 1px solid #F1F5F9; background-color: #FFFFFF;">
              <table width="100%">
                <tr>
                  <td>
                    <span style="font-size: 18px; font-weight: 700; color: #0F172A; letter-spacing: -0.02em;">LeSeft Nigeria Limited</span>
                  </td>
                  <td align="right">
                    <span style="font-size: 11px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.05em; color: #0284C7; background-color: #F0F9FF; padding: 4px 8px; border-radius: 4px; border: 1px solid #BAE6FD;">Official Dispatch</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Area -->
          <tr>
            <td style="padding: 32px;">
              <table width="100%">
                ${heroImageBlock}
                <tr>
                  <td>
                    <h1 style="font-size: 22px; font-weight: 700; line-height: 1.3; color: #0F172A; margin: 0 0 16px 0;">
                      ${subject}
                    </h1>
                    <div style="font-size: 15px; color: #334155;">
                      ${bodyContent}
                    </div>
                    ${ctaButton}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Corporate Footer -->
          <tr>
            <td style="background-color: #F8FAFC; padding: 24px 32px; border-top: 1px solid #E2E8F0;">
              <table width="100%">
                <tr>
                  <td style="font-size: 12px; line-height: 1.5; color: #64748B;">
                    <strong>LeSeft Nigeria Limited</strong><br>
                    Corporate Engineering & Strategic Infrastructure<br>
                    Victoria Island, Lagos • Abuja FCT, Nigeria<br>
                    <span style="font-size: 11px; color: #94A3B8;">This email was drafted in Sanity CMS Studio with Cloudinary CDN integration.</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}
