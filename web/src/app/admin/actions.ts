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
  heroHeadline: string
  heroSubheadline: string
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

    const result = await writeClient
      .patch('siteSettings')
      .set({
        companyName: input.companyName,
        cacNumber: input.cacNumber,
        headquartersAddress: input.headquartersAddress,
        contactPhone: input.contactPhone,
        contactEmail: input.contactEmail,
        parentCompanyUrl: input.parentCompanyUrl,
        heroHeadline: input.heroHeadline,
        heroSubheadline: input.heroSubheadline,
      })
      .commit({
        autoGenerateArrayKeys: true,
      })

    revalidatePath('/')
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
