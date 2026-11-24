import { groq } from 'next-sanity'

/**
 * Site Settings Query (Singleton)
 */
export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && !(_id in path("drafts.**"))][0] {
    _id,
    _type,
    companyName,
    cacNumber,
    incorporationDate,
    headquartersAddress,
    contactPhone,
    contactEmail,
    parentCompanyName,
    parentCompanyLocation,
    parentCompanyUrl,
    fourPillars,
    heroEyebrow,
    heroHeadline,
    heroSubheadline
  }
`

/**
 * Business Sectors Query
 */
export const sectorsQuery = groq`
  *[_type == "sector" && !(_id in path("drafts.**"))] | order(displayOrder asc) {
    _id,
    _type,
    title,
    slug,
    iconType,
    shortSummary,
    capabilities,
    recommendedImageGuidance,
    displayOrder
  }
`

/**
 * Commodities & Hardware Catalog Query
 */
export const commoditiesQuery = groq`
  *[_type == "commodity" && !(_id in path("drafts.**")) && active == true] | order(category asc, name asc) {
    _id,
    _type,
    name,
    category,
    tradeDirection,
    availableGrades,
    originDestination,
    minimumVolume,
    active,
    description
  }
`

/**
 * All Commodities Query for Admin Desk (includes inactive)
 */
export const allCommoditiesQuery = groq`
  *[_type == "commodity" && !(_id in path("drafts.**"))] | order(category asc, name asc) {
    _id,
    _type,
    name,
    category,
    tradeDirection,
    availableGrades,
    originDestination,
    minimumVolume,
    active,
    description
  }
`

/**
 * Career Listings Query
 */
export const careerListingsQuery = groq`
  *[_type == "careerListing" && !(_id in path("drafts.**")) && active == true] | order(_createdAt desc) {
    _id,
    _type,
    title,
    slug,
    department,
    location,
    jobType,
    keyTasks,
    requirements,
    applicationEmail,
    deadline,
    active
  }
`

/**
 * Trade Inquiries Query (for Admin)
 */
export const tradeInquiriesQuery = groq`
  *[_type == "tradeInquiry" && !(_id in path("drafts.**"))] | order(submittedAt desc) {
    _id,
    _type,
    fullName,
    companyName,
    email,
    phone,
    sector,
    commodityOrProduct,
    volume,
    destination,
    message,
    status,
    submittedAt
  }
`

/**
 * Company Profile Query (Legacy compatibility)
 */
export const companyProfileQuery = groq`
  *[_type == "companyProfile" && !(_id in path("drafts.**"))][0] {
    _id,
    _type,
    companyName,
    pageHeading,
    shortIntroduction,
    fullDescription,
    companyImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    mission,
    vision,
    coreValues[] {
      title,
      description
    }
  }
`

/**
 * Projects List Query
 */
export const projectsQuery = groq`
  *[_type == "project" && !(_id in path("drafts.**"))] | order(publishedDate desc) {
    _id,
    _type,
    projectName,
    slug,
    shortDescription,
    fullDescription,
    projectImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    location,
    projectStatus,
    publishedDate
  }
`

/**
 * Single Project Query by slug
 */
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    _type,
    projectName,
    slug,
    shortDescription,
    fullDescription,
    projectImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    location,
    projectStatus,
    publishedDate
  }
`

/**
 * Email Campaigns / Drafts Query
 */
export const emailDraftsQuery = groq`
  *[_type == "emailDraft"] | order(_createdAt desc) {
    _id,
    _type,
    title,
    subject,
    previewText,
    targetAudience,
    imageMode,
    cloudinaryImageUrl,
    uploadedImage {
      asset-> {
        _id,
        url
      }
    },
    body,
    callToAction,
    status,
    testRecipientEmail
  }
`
