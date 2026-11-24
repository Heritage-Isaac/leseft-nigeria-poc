'use server'

export interface ContactState {
  success?: boolean
  error?: string
  message?: string
}

export async function submitContactInquiry(
  prevState: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const organization = formData.get('organization') as string
  const projectScope = formData.get('projectScope') as string
  const message = formData.get('message') as string

  if (!fullName || !email || !message) {
    return {
      success: false,
      error: 'Please fill in your name, corporate email address, and project inquiry.',
    }
  }

  // Log corporate inquiry (in production connects to CRM or Sanity form schema)
  console.log('[Corporate RFP/Inquiry Received]:', {
    fullName,
    email,
    phone,
    organization,
    projectScope,
    message,
    submittedAt: new Date().toISOString(),
  })

  return {
    success: true,
    message: 'Thank you for contacting LeSeft Nigeria Limited. Our technical team will review your inquiry and follow up within 24 business hours.',
  }
}
