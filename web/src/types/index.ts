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
