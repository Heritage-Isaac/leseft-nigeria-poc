import React from 'react'
import {
  sanityFetch,
  fallbackSiteSettings,
  fallbackSectors,
  fallbackCommodities,
} from '@/sanity/lib/client'
import {
  siteSettingsQuery,
  sectorsQuery,
  commoditiesQuery,
} from '@/sanity/lib/queries'
import type { SiteSettings, Sector, Commodity } from '@/types'
import { LanguageProvider } from '@/context/LanguageContext'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/home/Hero'
import { PillarRibbon } from '@/components/home/PillarRibbon'
import { AboutSection } from '@/components/home/AboutSection'
import { CommoditiesDesk } from '@/components/home/CommoditiesDesk'
import { EquipmentSection } from '@/components/home/EquipmentSection'
import { ProjectsServicesSection } from '@/components/home/ProjectsServicesSection'
import { ForPartnersSection } from '@/components/home/ForPartnersSection'
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

  const settings = settingsFetch.data || fallbackSiteSettings
  const sectors = sectorsFetch.data || fallbackSectors
  const commodities = commoditiesFetch.data || fallbackCommodities

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Official Corporate Navigation */}
        <Navbar
          companyName={settings.companyName}
          phone={settings.contactPhone}
          email={settings.contactEmail}
          settings={settings}
        />

        {/* Main One-Pager Content (Structured per Brief) */}
        <main className="flex-1">
          <Hero settings={settings} />
          <PillarRibbon />
          <AboutSection settings={settings} />
          <CommoditiesDesk commodities={commodities} />
          <EquipmentSection />
          <ProjectsServicesSection sectors={sectors} />
          <ForPartnersSection />
          <TradeInquirySection settings={settings} />
        </main>

        {/* Corporate Footer */}
        <Footer settings={settings} />
      </div>
    </LanguageProvider>
  )
}
