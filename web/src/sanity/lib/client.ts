import { createClient, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId, readToken } from '../env'
import type {
  CompanyProfile,
  Project,
  EmailDraft,
  SiteSettings,
  Sector,
  Commodity,
  CareerListing,
} from '@/types'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
  token: readToken,
})

// Curated authentic Site & Corporate Settings for Leseft Nigeria Limited
export const fallbackSiteSettings: SiteSettings = {
  _id: 'fallback-site-settings',
  _type: 'siteSettings',
  companyName: 'Leseft Nigeria Limited',
  cacNumber: 'RC-7669078',
  incorporationDate: 'July 9, 2024',
  headquartersAddress: 'Plot 69, Gold Court Estate Street, Katampe District, FCT Abuja',
  contactPhone: '+234 809 533 2333',
  contactEmail: 'info@leseft.cz',
  parentCompanyName: 'Leseft International s.r.o.',
  parentCompanyLocation: 'Ostrava, Czech Republic',
  parentCompanyUrl: 'https://www.leseft.cz/en/',
  fourPillars: ['Trade', 'Energy', 'Industry', 'West Africa'],
  heroEyebrow: 'A Subsidiary of Leseft International s.r.o. (Czech Republic)',
  heroHeadline: 'Bridging European Industrial Standards with West African Markets',
  heroSubheadline:
    'Leseft Nigeria Limited delivers reliable import-export logistics, clean energy hardware, industrial machinery, EU-certified metallurgy, and high-grade agricultural commodities across Nigeria and West Africa.',
}

// 3 Core Business Pillars
export const fallbackSectors: Sector[] = [
  {
    _id: 'sector-energy',
    title: 'Energy & Solar Infrastructure',
    slug: { current: 'energy-solar-infrastructure' },
    iconType: 'energy',
    shortSummary:
      'Supplying commercial solar panels, power components, and scalable energy hardware engineered for reliability and long-term output.',
    capabilities: [
      'Commercial & Industrial Solar Arrays (550W+ Bifacial Modules)',
      'Heavy-Duty Hybrid Inverters & Synchronized Power Systems',
      'Industrial Energy Storage (LiFePO4 Containerized BESS)',
      'Direct Procurement Ties to Tier-1 European Hardware Facilities',
    ],
    recommendedImageGuidance:
      'Recommended file: /images/sectors/solar-infrastructure.jpg — High-contrast architectural shot of utility-scale solar panels against an open sky, showing clean metallic framing with natural daylight.',
    displayOrder: 1,
  },
  {
    _id: 'sector-industrial',
    title: 'Industrial & Heavy Equipment',
    slug: { current: 'industrial-heavy-equipment' },
    iconType: 'industry',
    shortSummary:
      'Leveraging Czech engineering roots to source EU-standard industrial machinery, steel products, and technical installations for growing enterprises.',
    capabilities: [
      'EU-Certified Structural Metallurgy, Heavy Rebar & Steel Coils',
      'Heavy Machinery & Processing Plants from Central European Corridors',
      'Precision Industrial Parts, Valves & Hydraulics for Infrastructure',
      'Technical Commissioning & Procurement Compliance Support',
    ],
    recommendedImageGuidance:
      'Recommended file: /images/sectors/heavy-machinery.jpg — High-clarity editorial documentary shot of heavy industrial steel girders or CNC milling machinery, sharp contrast with warm tungsten accents.',
    displayOrder: 2,
  },
  {
    _id: 'sector-trade',
    title: 'Import-Export & Commodities',
    slug: { current: 'import-export-commodities' },
    iconType: 'trade',
    shortSummary:
      'End-to-end trade facilitation and quality-screened supply chains for essential commodities—including grain, cocoa, fertilizer, and powdered milk.',
    capabilities: [
      'Agricultural Bulk: Milling Wheat, High-Grade Grain & Main Crop Cocoa',
      'Fertilizer & Agro-chemicals: High-Assay Granular Urea & NPK Compounds',
      'Food-Grade Dairy: Full Cream & Skimmed Milk Powder in 25kg Bulk Bags',
      'Transparent International LC Terms, Clearing & Dry Port Logistics',
    ],
    recommendedImageGuidance:
      'Recommended file: /images/sectors/commodities-trade.jpg — Commercial maritime container vessel or bagged cocoa / agricultural bulk shipment in clean industrial port lighting.',
    displayOrder: 3,
  },
]

// Commodities & Hardware Catalog
export const fallbackCommodities: Commodity[] = [
  {
    _id: 'com-1',
    name: 'Grain (Milling Wheat & Yellow Maize)',
    category: 'commodities',
    tradeDirection: 'Import',
    availableGrades: 'Grade 1 / High Gluten 12.5%+ / Food Industry Standard',
    originDestination: 'Central & Eastern Europe ➔ Lagos / Port Harcourt Ports',
    minimumVolume: '500 Metric Tons (Bulk Vessel / Containerized)',
    active: true,
    description: 'Bulk grain shipments vetted for moisture content, purity, and milling yield.',
  },
  {
    _id: 'com-2',
    name: 'Premium Cocoa Beans',
    category: 'commodities',
    tradeDirection: 'Export',
    availableGrades: 'Main Crop Grade 1 (Well-Fermented, <7.5% Moisture)',
    originDestination: 'South-West Nigeria ➔ European Processing Terminals',
    minimumVolume: '20 Metric Tons (1x 40ft FCL)',
    active: true,
    description: 'Direct origin sourcing from audited cooperatives with verified traceability.',
  },
  {
    _id: 'com-3',
    name: 'Industrial Fertilizer (Granular Urea & NPK)',
    category: 'commodities',
    tradeDirection: 'Import',
    availableGrades: 'Granular Urea 46% Nitrogen / NPK 15-15-15 Premium Assay',
    originDestination: 'European & Global Manufacturers ➔ Abuja / Northern Distribution Hubs',
    minimumVolume: '100 Metric Tons',
    active: true,
    description: 'Standardized agricultural inputs certified for regional soil nutrition programs.',
  },
  {
    _id: 'com-4',
    name: 'Bulk Powdered Milk (Full Cream & Skimmed)',
    category: 'commodities',
    tradeDirection: 'Import',
    availableGrades: 'EU Food Grade / 26% Milk Fat (Full Cream) & 1.25% (Skimmed)',
    originDestination: 'European Dairy Producers ➔ Nigerian Food Manufacturers',
    minimumVolume: '25kg Multi-Ply Bags / 20 Metric Tons Minimum',
    active: true,
    description: 'High-solubility dairy raw materials for confectionery, bakery, and dairy processing.',
  },
  {
    _id: 'com-5',
    name: 'Commercial Bifacial Solar Modules',
    category: 'energy',
    tradeDirection: 'Import',
    availableGrades: 'Tier-1 Rated 550W – 670W N-Type TOPCon / IEC 61215 Certified',
    originDestination: 'EU Quality Inspected ➔ Abuja & Lagos Commercial Projects',
    minimumVolume: '50 kW Batch / Containerized',
    active: true,
    description: 'High-efficiency dual-glass modules engineered for intense tropical solar irradiance.',
  },
  {
    _id: 'com-6',
    name: 'Structural Metallurgy & EN-10025 Steel Beams',
    category: 'industrial',
    tradeDirection: 'Import',
    availableGrades: 'EN 10025-2 S275JR / S355JR Heavy Sections & Hot-Rolled Coils',
    originDestination: 'Ostrava Steel Works (Czech Republic) ➔ West African Civil Contractors',
    minimumVolume: '30 Metric Tons',
    active: true,
    description: 'Certified European structural steel with mill test certificates (MTC 3.1).',
  },
]

// Career Listings
export const fallbackCareerListings: CareerListing[] = [
  {
    _id: 'career-1',
    title: 'Trade Operations & Logistics Analyst',
    slug: { current: 'trade-operations-logistics-analyst' },
    department: 'Trade & Logistics',
    location: 'Plot 69, Katampe District, Abuja FCT',
    jobType: 'Full-time',
    keyTasks: [
      'Coordinate import-export documentation, Form M, PAAR, and customs clearing protocols.',
      'Track container movements from European ports (Hamburg, Gdansk) to Nigerian berths.',
      'Conduct pricing benchmarks and commodity grading audits for procurement desks.',
      'Interface with logistics partners and warehouse operators in Abuja and Lagos.',
    ],
    requirements: [
      '2–5 years experience in Nigerian maritime trade, clearing, or commodity logistics.',
      'Strong analytical rigor, command of trade finance instruments (LCs), and regulatory compliance.',
      'Self-driven mindset valuing ownership over standard 8–4 desk routines.',
    ],
    applicationEmail: 'info@leseft.cz',
    deadline: 'Rolling Basis',
    active: true,
  },
  {
    _id: 'career-2',
    title: 'B2B Industrial Energy Account Specialist',
    slug: { current: 'b2b-industrial-energy-specialist' },
    department: 'Technical Energy Solutions',
    location: 'Abuja HQ / Hybrid Nigeria',
    jobType: 'Full-time',
    keyTasks: [
      'Manage B2B relationships with commercial and industrial clients seeking solar power hardware.',
      'Prepare technical equipment bills of quantity (BOQ) with engineering partners.',
      'Coordinate procurement schedules for inverters, panels, and containerized storage.',
    ],
    requirements: [
      'Demonstrated track record in B2B technical equipment sales or clean energy deployment.',
      'Familiarity with Nigerian commercial power dynamics and off-grid project financing.',
    ],
    applicationEmail: 'info@leseft.cz',
    deadline: 'Rolling Basis',
    active: true,
  },
]

// Fallback Company Profile
export const fallbackCompanyProfile: CompanyProfile = {
  _id: 'fallback-company-profile',
  _type: 'companyProfile',
  companyName: 'Leseft Nigeria Limited',
  pageHeading: 'Bridging European Industrial Standards with West African Markets',
  shortIntroduction:
    'Headquartered in Abuja, Leseft Nigeria Limited delivers reliable import-export logistics, clean energy hardware, industrial machinery, and high-grade agricultural commodities across Nigeria and West Africa.',
  mission:
    'To build an enduring industrial trade bridge between Central Europe and West Africa through transparent procurement, strict grade compliance, and mission-critical execution.',
  vision:
    'To be the preferred B2B gateway for clean energy hardware, heavy industrial engineering, and agricultural bulk across the West African corridor.',
  coreValues: [
    {
      title: 'European Backing, Local Execution',
      description:
        'Direct procurement ties to European manufacturers paired with on-the-ground regulatory and logistics expertise in Abuja.',
    },
    {
      title: 'Strict Quality & Grade Screening',
      description:
        'Every shipment—from industrial equipment to agricultural bulk—is vetted for international compliance, clear grading, and transparent payment terms.',
    },
    {
      title: 'Built for Scale',
      description:
        'Actively expanding capabilities across clean energy, technical installation, and enterprise supply chains to support West African infrastructure growth.',
    },
  ],
}

// Fallback Projects
export const fallbackProjects: Project[] = [
  {
    _id: 'fallback-proj-1',
    projectName: 'Commercial Solar Array Procurement & Deployment',
    slug: { current: 'commercial-solar-array' },
    shortDescription:
      'Procurement and delivery of 1.2MW Tier-1 bifacial solar modules and hybrid inverter infrastructure for an agro-industrial processing complex in Ogun State.',
    location: 'Sagamu Industrial Corridor, Ogun State',
    projectStatus: 'In Progress',
    publishedDate: '2026-02-15',
  },
  {
    _id: 'fallback-proj-2',
    projectName: 'Central European Structural Steel Import & Staging',
    slug: { current: 'structural-steel-import' },
    shortDescription:
      'Direct import of EN 10025-2 certified structural steel sections from Ostrava for commercial facility construction in Abuja Central Business District.',
    location: 'CBD, Abuja FCT',
    projectStatus: 'Completed',
    publishedDate: '2025-11-20',
  },
  {
    _id: 'fallback-proj-3',
    projectName: 'Agricultural Bulk Grain & Fertilizer Corridor',
    slug: { current: 'grain-fertilizer-corridor' },
    shortDescription:
      'Turnkey clearing and inland multimodal transport for 2,500 MT of milling wheat and high-assay granular fertilizer to regional hubs.',
    location: 'Lagos Dry Port ➔ Abuja Distribution Hub',
    projectStatus: 'Upcoming',
    publishedDate: '2026-03-01',
  },
]

export const fallbackEmailDrafts: EmailDraft[] = [
  {
    _id: 'fallback-email-1',
    _type: 'emailDraft',
    title: 'Trade Advisory: Q1 European Metallurgy & Solar Hardware Corridor',
    subject: 'Leseft Nigeria: Q1 Procurement Allocation for Solar Panels & Industrial Steel',
    previewText: 'Review allocations and container schedules for upcoming shipments.',
    targetAudience: 'clients',
    imageMode: 'sanity',
    status: 'Ready to Send',
    callToAction: {
      buttonText: 'Request Trade Spec Sheet',
      buttonUrl: 'https://leseft.ng/#quote',
    },
    testRecipientEmail: 'info@leseft.cz',
  },
]

/**
 * Resilient Sanity Fetch Helper
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
    console.warn('[Sanity Client] Fetch notice:', error)
    if (fallback !== undefined) {
      return { data: fallback, isLiveFromSanity: false }
    }
    throw error
  }
}
