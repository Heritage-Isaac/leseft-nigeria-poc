'use server'

import { revalidatePath } from 'next/cache'
import type { IdentifiedSanityDocumentStub } from '@sanity/client'
import { writeClient } from '@/sanity/lib/write-client'
import {
  fallbackCareerListings,
  fallbackCommodities,
  fallbackCompanyProfile,
  fallbackProjects,
  fallbackSectors,
  fallbackSiteSettings,
} from '@/sanity/lib/client'

export interface UpdateSiteSettingsInput {
  companyName: string
  cacNumber: string
  headquartersAddress: string
  contactPhone: string
  contactEmail: string
  heroHeadline: string
  heroSubheadline: string
  navLogoUrl?: string
  navLogoText?: string
  navLinks?: { label: string; href: string }[]
  navCtaText?: string
  navCtaHref?: string
  navCtaColor?: string
  navCtaTextColor?: string
  heroMediaType?: 'video' | 'image'
  heroImageUrl?: string
  heroVideos?: string[]
  heroPrimaryCtaText?: string
  heroPrimaryCtaHref?: string
  heroSecondaryCtaText?: string
  heroSecondaryCtaHref?: string
}

export async function seedMissingWebsiteContent(): Promise<
  | { success: true; createdCount: number; existingCount: number }
  | { success: false; error: string }
> {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return {
      success: false,
      error:
        'Add SANITY_API_WRITE_TOKEN to the web app environment to initialize CMS content. Do not commit the token.',
    }
  }

  try {
    const seedDocuments: IdentifiedSanityDocumentStub[] = [
      { ...fallbackSiteSettings, _id: 'siteSettings', _type: 'siteSettings' },
      { ...fallbackCompanyProfile, _id: 'companyProfile', _type: 'companyProfile' },
      ...fallbackSectors.map((document) => ({ ...document, _type: 'sector' })),
      ...fallbackCommodities.map((document) => ({ ...document, _type: 'commodity' })),
      ...fallbackCareerListings.map((document) => ({ ...document, _type: 'careerListing' })),
      ...fallbackProjects.map((document) => ({ ...document, _type: 'project' })),
    ]

    const existingDocuments = await writeClient.fetch<
      Array<{
        _id: string
        _type: string
        slug?: string
        name?: string
      }>
    >(
      `*[_type in ["siteSettings", "companyProfile", "sector", "commodity", "careerListing", "project"]]{
        _id,
        _type,
        "slug": slug.current,
        name
      }`
    )

    const missingDocuments = seedDocuments.filter((document) => {
      if (existingDocuments.some((existing) => existing._id === document._id)) return false

      return !existingDocuments.some((existing) => {
        if (existing._type !== document._type) return false
        if (document._type === 'siteSettings' || document._type === 'companyProfile') return true

        const documentSlug =
          'slug' in document && typeof document.slug === 'object'
            ? document.slug.current
            : undefined
        if (documentSlug && existing.slug === documentSlug) return true

        const documentName = 'name' in document ? document.name : undefined
        return document._type === 'commodity' && existing.name === documentName
      })
    })

    if (missingDocuments.length > 0) {
      const transaction = writeClient.transaction()
      missingDocuments.forEach((document) => transaction.createIfNotExists(document))
      await transaction.commit({ autoGenerateArrayKeys: true })
    }

    revalidatePath('/')
    revalidatePath('/about')
    revalidatePath('/projects')
    revalidatePath('/admin')

    return {
      success: true,
      createdCount: missingDocuments.length,
      existingCount: seedDocuments.length - missingDocuments.length,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to initialize website content.',
    }
  }
}

export async function uploadImageToSanity(formData: FormData) {
  try {
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return {
        success: false,
        error: 'SANITY_API_WRITE_TOKEN is not configured in .env.local.',
      }
    }
    const file = formData.get('file') as File | null
    if (!file) {
      return { success: false, error: 'No file provided.' }
    }
    const buffer = Buffer.from(await file.arrayBuffer())
    const asset = await writeClient.assets.upload('image', buffer, {
      filename: file.name,
      contentType: file.type,
    })
    return { success: true, url: asset.url, assetId: asset._id }
  } catch (err: any) {
    return { success: false, error: err?.message || 'Image upload failed.' }
  }
}

export async function updateSiteSettingsInSanity(input: UpdateSiteSettingsInput) {
  try {
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return {
        success: false,
        error:
          'SANITY_API_WRITE_TOKEN is not configured in .env.local. Generate an Editor token in Sanity Manage (https://www.sanity.io/manage) to enable writing directly to Sanity from this admin panel.',
      }
    }

    const payload: Record<string, any> = {
      companyName: input.companyName,
      cacNumber: input.cacNumber,
      headquartersAddress: input.headquartersAddress,
      contactPhone: input.contactPhone,
      contactEmail: input.contactEmail,
      heroHeadline: input.heroHeadline,
      heroSubheadline: input.heroSubheadline,
    }

    if (input.navLogoUrl !== undefined) payload.navLogoUrl = input.navLogoUrl
    if (input.navLogoText !== undefined) payload.navLogoText = input.navLogoText
    if (input.navLinks !== undefined) payload.navLinks = input.navLinks
    if (input.navCtaText !== undefined) payload.navCtaText = input.navCtaText
    if (input.navCtaHref !== undefined) payload.navCtaHref = input.navCtaHref
    if (input.navCtaColor !== undefined) payload.navCtaColor = input.navCtaColor
    if (input.navCtaTextColor !== undefined) payload.navCtaTextColor = input.navCtaTextColor
    if (input.heroMediaType !== undefined) payload.heroMediaType = input.heroMediaType
    if (input.heroImageUrl !== undefined) payload.heroImageUrl = input.heroImageUrl
    if (input.heroVideos !== undefined) payload.heroVideos = input.heroVideos
    if (input.heroPrimaryCtaText !== undefined) payload.heroPrimaryCtaText = input.heroPrimaryCtaText
    if (input.heroPrimaryCtaHref !== undefined) payload.heroPrimaryCtaHref = input.heroPrimaryCtaHref
    if (input.heroSecondaryCtaText !== undefined) payload.heroSecondaryCtaText = input.heroSecondaryCtaText
    if (input.heroSecondaryCtaHref !== undefined) payload.heroSecondaryCtaHref = input.heroSecondaryCtaHref

    const result = await writeClient
      .patch('siteSettings')
      .set(payload)
      .commit({
        autoGenerateArrayKeys: true,
      })

    revalidatePath('/')
    revalidatePath('/about')
    revalidatePath('/projects')
    revalidatePath('/contact')
    revalidatePath('/admin')

    return {
      success: true,
      data: result,
      message: 'Successfully updated in Sanity Content Lake and published live!',
    }
  } catch (err: any) {
    console.error('Failed to update Sanity document:', err)
    return {
      success: false,
      error: err?.message || 'Failed to update document in Sanity.',
    }
  }
}

export async function toggleCommodityStatus(id: string, newActiveState: boolean) {
  try {
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return {
        success: false,
        error: 'SANITY_API_WRITE_TOKEN not configured in .env.local.',
      }
    }

    const result = await writeClient.patch(id).set({ active: newActiveState }).commit()
    revalidatePath('/')
    revalidatePath('/admin')
    return { success: true, data: result }
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to update commodity status.' }
  }
}

export async function toggleCareerStatus(id: string, newActiveState: boolean) {
  try {
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return {
        success: false,
        error: 'SANITY_API_WRITE_TOKEN not configured in .env.local.',
      }
    }

    const result = await writeClient.patch(id).set({ active: newActiveState }).commit()
    revalidatePath('/')
    revalidatePath('/admin')
    return { success: true, data: result }
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to update career status.' }
  }
}

// Retain legacy method for backward compatibility
export async function updateCompanyProfileInSanity(input: any) {
  return updateSiteSettingsInSanity({
    companyName: input.companyName,
    cacNumber: 'RC-7669078',
    headquartersAddress: 'Plot 69, Gold Court Estate Street, Katampe District, FCT Abuja',
    contactPhone: '+234 809 533 2333',
    contactEmail: 'info@leseft.cz',
    heroHeadline: input.pageHeading || 'Bridging European Industrial Standards with West African Markets',
    heroSubheadline: input.shortIntroduction || '',
  })
}
