import React from 'react'
import { sanityFetch, fallbackCompanyProfile } from '@/sanity/lib/client'
import { companyProfileQuery } from '@/sanity/lib/queries'
import type { CompanyProfile } from '@/types'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AboutHero } from '@/features/company/AboutHero'
import { CompanyOverview } from '@/components/home/CompanyOverview'

export const revalidate = 0

export default async function AboutPage() {
  const profileFetch = await sanityFetch<CompanyProfile>({
    query: companyProfileQuery,
    fallback: fallbackCompanyProfile,
  })

  const profile = profileFetch.data || fallbackCompanyProfile

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar companyName={profile.companyName} />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <AboutHero profile={profile} />
        <CompanyOverview profile={profile} />
      </main>
      <Footer companyName={profile.companyName} />
    </div>
  )
}
