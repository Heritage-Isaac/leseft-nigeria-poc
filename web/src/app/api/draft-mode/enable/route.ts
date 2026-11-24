import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const redirectUrl = searchParams.get('slug') || '/'

  // Enable Draft Mode in Next.js
  const draft = await draftMode()
  draft.enable()

  // Redirect to the target page to view unpublished drafts live
  redirect(redirectUrl)
}
