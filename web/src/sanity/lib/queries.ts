import { groq } from 'next-sanity'

/**
 * Company Profile Query
 * Retrieves the published singleton companyProfile document.
 * Filters out unpublished drafts: !(_id in path('drafts.**'))
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
 * Retrieves all published projects ordered by publishedDate descending.
 * Ensures drafts are excluded from public site.
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
