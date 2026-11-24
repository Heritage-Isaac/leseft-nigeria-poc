import React from 'react'
import { AdminSuite } from '@/features/admin/AdminSuite'
import { getAuditLogs } from '@/actions/audit'

export const revalidate = 0

export const metadata = {
  title: 'Executive Admin Suite | LeSeft Nigeria Limited',
  description:
    'Visual Site Customizer, Website Analytics, AI Design Assistant & Sanity CMS Governance Portal',
}

export default async function AdminPage() {
  const logs = await getAuditLogs()

  return <AdminSuite logs={logs} />
}
