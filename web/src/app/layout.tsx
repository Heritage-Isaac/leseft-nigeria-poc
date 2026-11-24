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
  title: 'Leseft Nigeria Limited | European Industrial Standards & West African Trade',
  description:
    'Headquartered in Abuja, Leseft Nigeria Limited (RC-7669078) delivers clean energy hardware, industrial machinery, EU metallurgy, and high-grade agricultural commodities across West Africa.',
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
        className="min-h-screen bg-white text-[#17191C] font-sans antialiased flex flex-col"
        suppressHydrationWarning
      >
        {children}
        <DraftModeBanner isEnabled={isEnabled} />
        <SanityLive />
      </body>
    </html>
  )
}
