'use client'

import React, { useState } from 'react'
import { Check, AlertCircle, Loader2, Save, ExternalLink } from 'lucide-react'
import { updateCompanyProfileInSanity } from '@/app/admin/actions'

interface CompanyProfileManagerProps {
  initialProfile?: {
    companyName?: string
    pageHeading?: string
    shortIntroduction?: string
    mission?: string
    vision?: string
  }
  onSaved?: () => void
}

export function CompanyProfileManager({ initialProfile, onSaved }: CompanyProfileManagerProps) {
  const [formData, setFormData] = useState({
    companyName: initialProfile?.companyName || 'LeSeft Nigeria Limited',
    pageHeading:
      initialProfile?.pageHeading ||
      'Strategic Corporate Solutions, Infrastructure & Project Delivery Across Nigeria',
    shortIntroduction:
      initialProfile?.shortIntroduction ||
      'LeSeft Nigeria Limited is a premier indigenous multi-disciplinary enterprise delivering turnkey civil infrastructure, commercial facilities development, and strategic project management.',
    mission:
      initialProfile?.mission ||
      'To empower Nigerian commerce and institutions through dependable infrastructure delivery, transparent governance, and sustainable technical execution.',
    vision:
      initialProfile?.vision ||
      'To be the preferred indigenous corporate solutions and infrastructure partner across Nigeria and the wider African continent.',
  })

  const [status, setStatus] = useState<{
    type: 'idle' | 'saving' | 'success' | 'error'
    message?: string
  }>({ type: 'idle' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'saving' })

    const res = await updateCompanyProfileInSanity(formData)

    if (res.success) {
      setStatus({
        type: 'success',
        message: 'Changes saved to Sanity Content Lake and published live.',
      })
      onSaved?.()
    } else {
      setStatus({
        type: 'error',
        message: res.error,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="border-b border-[#E5E7EB] pb-4">
        <h2 className="text-base font-bold text-[#17191C]">Company Profile Content</h2>
        <p className="text-xs text-[#626B75] mt-0.5">
          Edits made here update the singleton <code className="text-[#17191C]">companyProfile</code> document in Sanity Studio.
        </p>
      </div>

      {status.type === 'success' && (
        <div className="p-3.5 rounded-xs bg-[#E6F4EA] border border-[#B7E1CD] text-[#137333] text-xs flex items-center gap-2">
          <Check className="w-4 h-4 shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      {status.type === 'error' && (
        <div className="p-3.5 rounded-xs bg-[#FCE8E6] border border-[#F5C2C7] text-[#C5221F] text-xs flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold">Sanity Write Notice:</p>
            <p className="mt-0.5 leading-relaxed">{status.message}</p>
          </div>
        </div>
      )}

      {/* Field: Company Name */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[#17191C]">
          Company Name <span className="text-[#DC4C4C]">*</span>
        </label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          required
          className="w-full text-xs px-3 py-2 rounded-xs border border-[#E5E7EB] bg-white text-[#17191C] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
        />
        <p className="text-[11px] text-[#89919A]">Official corporate name displayed in navbar and footer.</p>
      </div>

      {/* Field: Page Heading */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[#17191C]">
          Hero Main Headline <span className="text-[#DC4C4C]">*</span>
        </label>
        <input
          type="text"
          value={formData.pageHeading}
          onChange={(e) => setFormData({ ...formData, pageHeading: e.target.value })}
          required
          className="w-full text-xs px-3 py-2 rounded-xs border border-[#E5E7EB] bg-white text-[#17191C] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
        />
        <p className="text-[11px] text-[#89919A]">Primary statement shown on the homepage hero.</p>
      </div>

      {/* Field: Short Introduction */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[#17191C]">
          Short Introduction <span className="text-[#DC4C4C]">*</span>
        </label>
        <textarea
          rows={3}
          value={formData.shortIntroduction}
          onChange={(e) => setFormData({ ...formData, shortIntroduction: e.target.value })}
          required
          className="w-full text-xs px-3 py-2 rounded-xs border border-[#E5E7EB] bg-white text-[#17191C] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
        />
        <p className="text-[11px] text-[#89919A]">A concise description of LeSeft Nigeria’s corporate capabilities.</p>
      </div>

      {/* Field: Mission */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[#17191C]">Mission Statement</label>
        <textarea
          rows={2}
          value={formData.mission}
          onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
          className="w-full text-xs px-3 py-2 rounded-xs border border-[#E5E7EB] bg-white text-[#17191C] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
        />
      </div>

      {/* Field: Vision */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[#17191C]">Vision Statement</label>
        <textarea
          rows={2}
          value={formData.vision}
          onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
          className="w-full text-xs px-3 py-2 rounded-xs border border-[#E5E7EB] bg-white text-[#17191C] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
        />
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
        <button
          type="submit"
          disabled={status.type === 'saving'}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-xs transition-colors disabled:opacity-50"
        >
          {status.type === 'saving' ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Publishing to Sanity...</span>
            </>
          ) : (
            <>
              <Save className="w-3.5 h-3.5" />
              <span>Save & Publish to Sanity</span>
            </>
          )}
        </button>

        <a
          href="http://localhost:3333/structure/companyProfile"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-[#626B75] hover:text-[#17191C] flex items-center gap-1 font-medium"
        >
          <span>Open in Sanity Studio</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </form>
  )
}
