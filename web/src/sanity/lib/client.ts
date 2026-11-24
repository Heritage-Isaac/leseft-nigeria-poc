import { createClient, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId, readToken } from '../env'
import type { CompanyProfile, Project, EmailDraft } from '@/types'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to immediately see published changes during testing!
  perspective: 'published', // Strictly published documents only
  token: readToken,
})

// Curated authentic corporate profile for LeSeft Nigeria Limited
export const fallbackCompanyProfile: CompanyProfile = {
  _id: 'fallback-company-profile',
  _type: 'companyProfile',
  companyName: 'LeSeft Nigeria Limited',
  pageHeading: 'Strategic Corporate Solutions, Infrastructure & Project Delivery Across Nigeria',
  shortIntroduction:
    'LeSeft Nigeria Limited is a premier indigenous multi-disciplinary enterprise delivering turnkey civil infrastructure, commercial facilities development, and strategic project management across West Africa with uncompromising safety, technical rigor, and sustainable value.',
  mission:
    'To empower Nigerian commerce and institutions through dependable infrastructure delivery, transparent governance, and sustainable technical execution benchmarked against international standards.',
  vision:
    'To be the preferred indigenous corporate solutions and infrastructure partner across Nigeria and the wider African continent.',
  coreValues: [
    {
      title: 'Uncompromising Integrity',
      description:
        'Operating with total transparency, regulatory fidelity, and world-class corporate ethics across every client engagement.',
    },
    {
      title: 'Operational Excellence',
      description:
        'Deploying certified protocols, precision quality assurance, and zero-compromise safety standards on every project site.',
    },
    {
      title: 'Local Empowerment',
      description:
        'Investing in Nigerian human capital, regional supply networks, and sustainable technical knowledge transfer.',
    },
    {
      title: 'Sustainable Innovation',
      description:
        'Delivering resource-efficient, environmentally conscious engineering solutions built for long-term commercial endurance.',
    },
  ],
  companyImage: {
    url: '/assets/leseft-hero.avif',
    alt: 'LeSeft Nigeria Corporate Headquarters and Operations',
  },
}

export const fallbackProjects: Project[] = [
  {
    _id: 'fallback-proj-1',
    projectName: 'Monimove Integrated Supply Logistics Facility',
    slug: { current: 'monimove-integrated-logistics' },
    shortDescription:
      'Turnkey civil development and structural engineering for a high-throughput commercial logistics hub serving commercial trade routes across Southern Nigeria.',
    location: 'Victoria Island & Lekki Free Trade Zone, Lagos',
    projectStatus: 'In Progress',
    publishedDate: '2026-02-15',
    projectImage: {
      url: '/assets/leseft-project-1.avif',
      alt: 'Monimove Integrated Logistics Facility',
    },
  },
  {
    _id: 'fallback-proj-2',
    projectName: 'Formulaire Corporate Technology & Administration Complex',
    slug: { current: 'formulaire-corporate-complex' },
    shortDescription:
      'Structural modernization, architectural outfitting, and resilient building services infrastructure for an institutional financial services client.',
    location: 'Central Business District, Abuja FCT',
    projectStatus: 'Completed',
    publishedDate: '2025-11-20',
    projectImage: {
      url: '/assets/leseft-project-2.avif',
      alt: 'Formulaire Corporate Administration Complex',
    },
  },
  {
    _id: 'fallback-proj-3',
    projectName: 'Niger Delta Regional Industrial Pipeline Hub',
    slug: { current: 'niger-delta-industrial-hub' },
    shortDescription:
      'Engineering consultancy, environmental compliance oversight, and modular distribution valve station installation for industrial commercial clients.',
    location: 'Trans-Amadi Industrial Layout, Port Harcourt, Rivers State',
    projectStatus: 'Upcoming',
    publishedDate: '2026-03-01',
    projectImage: {
      url: '/assets/leseft-hero.avif',
      alt: 'Niger Delta Regional Industrial Hub',
    },
  },
]

export const fallbackEmailDrafts: EmailDraft[] = [
  {
    _id: 'fallback-email-1',
    _type: 'emailDraft',
    title: 'Q1 Corporate Milestone Briefing',
    subject: 'LeSeft Nigeria Limited: Key Q1 Infrastructure Milestones & Stakeholder Briefing',
    previewText: 'Review our latest execution milestones across Lagos and Abuja projects.',
    targetAudience: 'clients',
    imageMode: 'cloudinary',
    cloudinaryImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1689123456/sample.jpg',
    status: 'Ready to Send',
    callToAction: {
      buttonText: 'View Project Details',
      buttonUrl: 'https://leseft.com/projects',
    },
    testRecipientEmail: 'relations@leseft.com',
  },
]

/**
 * Resilient Sanity Fetch Helper
 * Fetches published data from Sanity. If Sanity project is being configured,
 * seamlessly falls back to the curated LeSeft Nigeria corporate profile.
 */
export async function sanityFetch<T>({
  query,
  params = {},
  fallback,
  tags = [],
}: {
  query: string
  params?: QueryParams
  fallback?: T
  tags?: string[]
}): Promise<{ data: T; isLiveFromSanity: boolean }> {
  const isDummyId = !projectId || projectId === 'dummy-poc-leseft' || projectId === 'your-project-id'

  if (isDummyId) {
    return { data: (fallback as T), isLiveFromSanity: false }
  }

  try {
    const data = await client.fetch<T>(query, params, {
      next: { revalidate: 0, tags },
    })

    if (!data && fallback !== undefined) {
      return { data: fallback, isLiveFromSanity: false }
    }

    return { data, isLiveFromSanity: true }
  } catch (error) {
    console.warn('[Sanity Client] Notice:', error)
    if (fallback !== undefined) {
      return { data: fallback, isLiveFromSanity: false }
    }
    throw error
  }
}
