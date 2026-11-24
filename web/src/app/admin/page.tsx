import React from 'react'
import { AdminSuite } from '@/features/admin/AdminSuite'
import { getAuditLogs } from '@/actions/audit'
import {
  sanityFetch,
  fallbackSiteSettings,
  fallbackCommodities,
  fallbackCareerListings,
} from '@/sanity/lib/client'
import {
  siteSettingsQuery,
  allCommoditiesQuery,
  careerListingsQuery,
} from '@/sanity/lib/queries'
import type { SiteSettings, Commodity, CareerListing } from '@/types'

export const revalidate = 0

export const metadata = {
  title: 'Executive Admin & Operations Suite | Leseft Nigeria Limited',
  description: 'Enterprise B2B Trade & Content Lake Control Center',
}

export default async function AdminPage() {
  const [logs, settingsFetch, commoditiesFetch, careersFetch] = await Promise.all([
    getAuditLogs(),
    sanityFetch<SiteSettings>({
      query: siteSettingsQuery,
      fallback: fallbackSiteSettings,
    }),
    sanityFetch<Commodity[]>({
      query: allCommoditiesQuery,
      fallback: fallbackCommodities,
    }),
    sanityFetch<CareerListing[]>({
      query: careerListingsQuery,
      fallback: fallbackCareerListings,
    }),
  ])

  const settings = settingsFetch.data || fallbackSiteSettings
  const commodities = commoditiesFetch.data || fallbackCommodities
  const careers = careersFetch.data || fallbackCareerListings

  return (
    <AdminSuite
      logs={logs}
      initialSettings={settings}
      initialCommodities={commodities}
      initialCareers={careers}
    />
  )
}
