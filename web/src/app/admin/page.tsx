import React from 'react'
import { AdminSuite } from '@/features/admin/AdminSuite'
import { getAuditLogs } from '@/actions/audit'
import { sanityFetch, fallbackCompanyProfile } from '@/sanity/lib/client'
import { companyProfileQuery } from '@/sanity/lib/queries'
import type { CompanyProfile } from '@/types'

export const revalidate = 0

export const metadata = {
  title: 'Executive Admin & Content Management | LeSeft Nigeria Limited',
  description: 'Sanity Content Management & Visual Control Dashboard',
}

export default async function AdminPage() {
  const [logs, profileFetch] = await Promise.all([
    getAuditLogs(),
    sanityFetch<CompanyProfile>({
      query: companyProfileQuery,
      fallback: fallbackCompanyProfile,
    }),
  ])

  const initialProfile = profileFetch.data || fallbackCompanyProfile

  return <AdminSuite logs={logs} initialProfile={initialProfile} />
}
