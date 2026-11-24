import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { draftMode } from 'next/headers'
import './globals.css'
import { DraftModeBanner } from '@/components/common/DraftModeBanner'
import { SanityLive } from '@/sanity/lib/live'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'LeSeft Nigeria Limited | Corporate & Infrastructure Solutions',
  description:
    'Premier Nigerian corporate engineering, industrial facilities, and project management enterprise. Powered by Next.js and Sanity CMS.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const draft = await draftMode()
  const isEnabled = draft.isEnabled

  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col"
        suppressHydrationWarning
      >
        {children}
        <DraftModeBanner isEnabled={isEnabled} />
        <SanityLive />
      </body>
    </html>
  )
}
