'use server'

import { revalidatePath } from 'next/cache'
import { writeClient } from '@/sanity/lib/write-client'

export interface UpdateCompanyProfileInput {
  companyName: string
  pageHeading: string
  shortIntroduction: string
  mission: string
  vision: string
}

export async function updateCompanyProfileInSanity(input: UpdateCompanyProfileInput) {
  try {
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return {
        success: false,
        error:
          'SANITY_API_WRITE_TOKEN is not configured in .env.local. Generate an Editor token in Sanity Manage (https://www.sanity.io/manage) to enable writing back to Sanity from this admin panel.',
      }
    }

    // Patch or create singleton companyProfile document in Sanity Content Lake
    const result = await writeClient
      .patch('companyProfile')
      .set({
        companyName: input.companyName,
        pageHeading: input.pageHeading,
        shortIntroduction: input.shortIntroduction,
        mission: input.mission,
        vision: input.vision,
      })
      .commit({
        autoGenerateArrayKeys: true,
      })

    // Revalidate live website paths
    revalidatePath('/')
    revalidatePath('/about')
    revalidatePath('/admin')

    return {
      success: true,
      data: result,
      message: 'Successfully updated in Sanity Studio and published to live website!',
    }
  } catch (err: any) {
    console.error('Failed to update Sanity document:', err)
    return {
      success: false,
      error: err?.message || 'Failed to update document in Sanity.',
    }
  }
}
