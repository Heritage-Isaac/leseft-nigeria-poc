'use server'

export interface AuditLogEntry {
  id: string
  documentType: 'companyProfile' | 'project' | 'emailDraft'
  documentTitle: string
  action: 'Created' | 'Updated' | 'Published' | 'Dispatched'
  authorName: string
  authorEmail: string
  authorRole: 'Administrator' | 'Editor' | 'Content Creator'
  timestamp: string
  revisionId: string
  summary: string
}

export async function getAuditLogs(): Promise<AuditLogEntry[]> {
  // In live production, this queries Sanity's History / Activity API or audit log documents
  const auditEntries: AuditLogEntry[] = [
    {
      id: 'audit-001',
      documentType: 'project',
      documentTitle: 'Monimove Integrated Supply Logistics Facility',
      action: 'Published',
      authorName: 'Engr. Babatunde Adebayo',
      authorEmail: 'b.adebayo@leseft.com',
      authorRole: 'Administrator',
      timestamp: '2026-11-23T14:15:00Z',
      revisionId: 'rev_9x08a2k4',
      summary: 'Updated project execution status from "Upcoming" to "In Progress" and refreshed site imagery.',
    },
    {
      id: 'audit-002',
      documentType: 'companyProfile',
      documentTitle: 'LeSeft Nigeria Corporate Profile',
      action: 'Updated',
      authorName: 'Amina Bello',
      authorEmail: 'a.bello@leseft.com',
      authorRole: 'Editor',
      timestamp: '2026-11-23T13:40:00Z',
      revisionId: 'rev_4m91b7d2',
      summary: 'Polished company mission statement and added sustainable innovation core value.',
    },
    {
      id: 'audit-003',
      documentType: 'emailDraft',
      documentTitle: 'Q1 2026 Project Milestone & Corporate Review',
      action: 'Dispatched',
      authorName: 'Chidi Okafor',
      authorEmail: 'c.okafor@leseft.com',
      authorRole: 'Content Creator',
      timestamp: '2026-11-23T12:05:00Z',
      revisionId: 'rev_1k88f3a9',
      summary: 'Drafted newsletter in Studio with Cloudinary CDN header and test-dispatched to executive relations.',
    },
    {
      id: 'audit-004',
      documentType: 'project',
      documentTitle: 'Formulaire Corporate Technology Complex',
      action: 'Created',
      authorName: 'Engr. Babatunde Adebayo',
      authorEmail: 'b.adebayo@leseft.com',
      authorRole: 'Administrator',
      timestamp: '2026-11-22T09:30:00Z',
      revisionId: 'rev_7p20c5v1',
      summary: 'Initial project document creation with architectural specs and Abuja location data.',
    },
  ]

  return auditEntries
}
