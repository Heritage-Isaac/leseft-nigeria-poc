import React from 'react'
import { sanityFetch, fallbackCompanyProfile, fallbackProjects, fallbackEmailDrafts } from '@/sanity/lib/client'
import { companyProfileQuery, projectsQuery, emailDraftsQuery } from '@/sanity/lib/queries'
import type { CompanyProfile, Project, EmailDraft } from '@/types'
import { StatusBanner } from '@/components/common/StatusBanner'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/home/Hero'
import { CompanyOverview } from '@/components/home/CompanyOverview'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { EmailCampaignDemo } from '@/components/email/EmailCampaignDemo'
import { Footer } from '@/components/layout/Footer'

// Disable static caching so edits in Sanity Studio appear immediately on page refresh
export const revalidate = 0

export default async function HomePage() {
  // Fetch published company profile from Sanity
  const profileFetch = await sanityFetch<CompanyProfile>({
    query: companyProfileQuery,
    fallback: fallbackCompanyProfile,
  })

  // Fetch published projects from Sanity
  const projectsFetch = await sanityFetch<Project[]>({
    query: projectsQuery,
    fallback: fallbackProjects,
  })

  // Fetch email drafts from Sanity
  const emailDraftsFetch = await sanityFetch<EmailDraft[]>({
    query: emailDraftsQuery,
    fallback: fallbackEmailDrafts,
  })

  const profile = profileFetch.data || fallbackCompanyProfile
  const projects = projectsFetch.data || fallbackProjects
  const emailDrafts = emailDraftsFetch.data || fallbackEmailDrafts
  const isLive = profileFetch.isLiveFromSanity || projectsFetch.isLiveFromSanity

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Status Notification Bar */}
      <StatusBanner
        isLiveFromSanity={isLive}
        companyName={profile.companyName || 'LeSeft Nigeria Limited'}
      />

      {/* Main Navigation Bar */}
      <Navbar companyName={profile.companyName} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero profile={profile} />

        {/* Company Profile Overview & Values */}
        <CompanyOverview profile={profile} />

        {/* Recent Corporate Projects */}
        <ProjectsSection projects={projects} />

        {/* Sanity Email Drafting & Cloudinary CDN Module */}
        <EmailCampaignDemo drafts={emailDrafts} />
      </main>

      {/* Corporate Footer */}
      <Footer companyName={profile.companyName} />
    </div>
  )
}
