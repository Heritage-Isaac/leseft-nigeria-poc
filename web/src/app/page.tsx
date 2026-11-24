import React from 'react'
import {
  sanityFetch,
  fallbackSiteSettings,
  fallbackSectors,
  fallbackCommodities,
  fallbackCareerListings,
} from '@/sanity/lib/client'
import {
  siteSettingsQuery,
  sectorsQuery,
  commoditiesQuery,
  careerListingsQuery,
} from '@/sanity/lib/queries'
import type { SiteSettings, Sector, Commodity, CareerListing } from '@/types'
import { LanguageProvider } from '@/context/LanguageContext'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/home/Hero'
import { PillarRibbon } from '@/components/home/PillarRibbon'
import { CzechMetallurgySection } from '@/components/home/CzechMetallurgySection'
import { SectorsSection } from '@/components/home/SectorsSection'
import { CommoditiesDesk } from '@/components/home/CommoditiesDesk'
import { TrustSection } from '@/components/home/TrustSection'
import { CareersSection } from '@/components/home/CareersSection'
import { TradeInquirySection } from '@/components/home/TradeInquirySection'
import { Footer } from '@/components/layout/Footer'

// Real-time revalidation so changes in Sanity reflect immediately on refresh
export const revalidate = 0

export default async function HomePage() {
  // Fetch site settings from Sanity (with authentic fallback)
  const settingsFetch = await sanityFetch<SiteSettings>({
    query: siteSettingsQuery,
    fallback: fallbackSiteSettings,
  })

  // Fetch sectors from Sanity
  const sectorsFetch = await sanityFetch<Sector[]>({
    query: sectorsQuery,
    fallback: fallbackSectors,
  })

  // Fetch commodities from Sanity
  const commoditiesFetch = await sanityFetch<Commodity[]>({
    query: commoditiesQuery,
    fallback: fallbackCommodities,
  })

  // Fetch career listings from Sanity
  const careersFetch = await sanityFetch<CareerListing[]>({
    query: careerListingsQuery,
    fallback: fallbackCareerListings,
  })

  const settings = settingsFetch.data || fallbackSiteSettings
  const sectors = sectorsFetch.data || fallbackSectors
  const commodities = commoditiesFetch.data || fallbackCommodities
  const careers = careersFetch.data || fallbackCareerListings

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Official Corporate Navigation */}
        <Navbar
          companyName={settings.companyName}
          phone={settings.contactPhone}
          email={settings.contactEmail}
        />

        {/* Main B2B Portal Content */}
        <main className="flex-1">
          <Hero settings={settings} />
          <PillarRibbon />
          <CzechMetallurgySection />
          <SectorsSection sectors={sectors} />
          <CommoditiesDesk commodities={commodities} />
          <TrustSection />
          <CareersSection careers={careers} contactEmail={settings.contactEmail} />
          <TradeInquirySection settings={settings} />
        </main>

        {/* Corporate Footer */}
        <Footer settings={settings} />
      </div>
    </LanguageProvider>
  )
}
