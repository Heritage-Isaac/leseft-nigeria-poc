export interface CoreValue {
  title: string
  description: string
}

export interface SanityImageReference {
  _type?: 'image'
  asset?: {
    _ref?: string
    _type?: 'reference'
    _id?: string
    url?: string
  }
  alt?: string
  url?: string
}

export interface PortableTextBlockChild {
  _key?: string
  _type?: string
  text?: string
}

export interface PortableTextBlock {
  _key?: string
  _type?: string
  style?: string
  children?: PortableTextBlockChild[]
}

export interface NavLinkItem {
  _key?: string
  label: string
  href: string
}

export interface SiteSettings {
  _id?: string
  _type?: 'siteSettings'
  companyName: string
  cacNumber: string
  incorporationDate: string
  headquartersAddress: string
  contactPhone: string
  contactEmail: string
  fourPillars: string[]
  heroHeadline: string
  heroSubheadline: string
  navLogo?: SanityImageReference
  navLogoUrl?: string
  navLogoText?: string
  navLinks?: NavLinkItem[]
  navCtaText?: string
  navCtaHref?: string
  navCtaColor?: string
  navCtaTextColor?: string
  heroMediaType?: 'video' | 'image'
  heroImage?: SanityImageReference
  heroImageUrl?: string
  heroVideos?: string[]
  heroPrimaryCtaText?: string
  heroPrimaryCtaHref?: string
  heroSecondaryCtaText?: string
  heroSecondaryCtaHref?: string
}

export interface Sector {
  _id: string
  _type?: 'sector'
  title: string
  slug: { current: string }
  iconType: 'energy' | 'industry' | 'trade'
  shortSummary: string
  capabilities: string[]
  recommendedImageGuidance?: string
  displayOrder?: number
}

export interface Commodity {
  _id: string
  _type?: 'commodity'
  name: string
  category: 'commodities' | 'energy' | 'industrial'
  tradeDirection: 'Import' | 'Export' | 'Bilateral'
  availableGrades: string
  originDestination?: string
  minimumVolume?: string
  active: boolean
  description?: string
}

export interface CareerListing {
  _id: string
  _type?: 'careerListing'
  title: string
  slug: { current: string }
  department: string
  location: string
  jobType: string
  keyTasks?: string[]
  requirements?: string[]
  applicationEmail: string
  deadline?: string
  active: boolean
}

export interface TradeInquiry {
  _id?: string
  _type?: 'tradeInquiry'
  fullName: string
  companyName: string
  email: string
  phone?: string
  sector?: string
  commodityOrProduct?: string
  volume?: string
  destination?: string
  message?: string
  status?: 'new' | 'in_review' | 'quoted' | 'closed'
  submittedAt?: string
}

export interface CompanyProfile {
  _id?: string
  _type?: 'companyProfile'
  companyName: string
  pageHeading: string
  shortIntroduction: string
  fullDescription?: PortableTextBlock[]
  companyImage?: SanityImageReference | { url: string; alt?: string }
  mission: string
  vision: string
  coreValues: CoreValue[]
}

export interface Project {
  _id: string
  _type?: 'project'
  projectName: string
  slug: {
    current: string
  }
  shortDescription: string
  fullDescription?: PortableTextBlock[]
  projectImage?: SanityImageReference | { url: string; alt?: string }
  location: string
  projectStatus: 'Completed' | 'In Progress' | 'Upcoming'
  publishedDate: string
}

export interface EmailDraft {
  _id: string
  _type?: 'emailDraft'
  title: string
  subject: string
  previewText?: string
  targetAudience: string
  imageMode: 'cloudinary' | 'sanity'
  cloudinaryImageUrl?: string
  uploadedImage?: SanityImageReference | { url: string }
  body?: PortableTextBlock[]
  callToAction?: {
    buttonText: string
    buttonUrl: string
  }
  status: 'Draft' | 'Ready to Send' | 'Sent'
  testRecipientEmail?: string
}
