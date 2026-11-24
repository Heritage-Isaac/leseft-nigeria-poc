import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AuditLogView } from '@/features/audit/AuditLogView'
import { UserManagementGuide } from '@/features/audit/UserManagementGuide'
import { getAuditLogs } from '@/actions/audit'

export const revalidate = 0

export const metadata = {
  title: 'Executive Admin & Audit Logs | LeSeft Nigeria Limited',
  description: 'Real-time Sanity CMS mutation audit trails and user access management overview.',
}

export default async function AdminPage() {
  const logs = await getAuditLogs()

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar companyName="LeSeft Nigeria Limited" />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Governance & Compliance Center
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Corporate Admin & Audit Intelligence
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            Monitor real-time editorial actions, document changes made in Sanity Studio, author attribution, and review the zero-database User Management architecture.
          </p>
        </div>

        {/* Real-time Audit Trail Component */}
        <AuditLogView logs={logs} />

        {/* User Management & Authentication Explainer */}
        <UserManagementGuide />
      </main>
      <Footer companyName="LeSeft Nigeria Limited" />
    </div>
  )
}
