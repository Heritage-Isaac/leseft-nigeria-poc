'use server'

import { revalidatePath } from 'next/cache'
import { writeClient } from '@/sanity/lib/write-client'

export interface UpdateSiteSettingsInput {
  companyName: string
  cacNumber: string
  headquartersAddress: string
  contactPhone: string
  contactEmail: string
  parentCompanyUrl: string
  heroEyebrow?: string
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
      parentCompanyUrl: input.parentCompanyUrl,
      heroHeadline: input.heroHeadline,
      heroSubheadline: input.heroSubheadline,
    }

    if (input.heroEyebrow !== undefined) payload.heroEyebrow = input.heroEyebrow
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
    parentCompanyUrl: 'https://www.leseft.cz/en/',
    heroHeadline: input.pageHeading || 'Bridging European Industrial Standards with West African Markets',
    heroSubheadline: input.shortIntroduction || '',
  })
}
