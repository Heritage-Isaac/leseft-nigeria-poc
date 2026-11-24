'use client'

import React, { useState } from 'react'
import { Check, AlertCircle, Loader2, Save, ExternalLink, ShieldCheck } from 'lucide-react'
import { updateSiteSettingsInSanity } from '@/app/admin/actions'
import type { SiteSettings } from '@/types'

interface SiteSettingsManagerProps {
  initialSettings?: Partial<SiteSettings>
  onSaved?: () => void
}

export function CompanyProfileManager({ initialSettings, onSaved }: SiteSettingsManagerProps) {
  const [formData, setFormData] = useState({
    companyName: initialSettings?.companyName || 'Leseft Nigeria Limited',
    cacNumber: initialSettings?.cacNumber || 'RC-7669078',
    headquartersAddress:
      initialSettings?.headquartersAddress ||
      'Plot 69, Gold Court Estate Street, Katampe District, FCT Abuja',
    contactPhone: initialSettings?.contactPhone || '+234 809 533 2333',
    contactEmail: initialSettings?.contactEmail || 'info@leseft.cz',
    parentCompanyUrl: initialSettings?.parentCompanyUrl || 'https://www.leseft.cz/en/',
    heroHeadline:
      initialSettings?.heroHeadline ||
      'Bridging European Industrial Standards with West African Markets',
    heroSubheadline:
      initialSettings?.heroSubheadline ||
      'Headquartered in Abuja, Leseft Nigeria Limited delivers reliable import-export logistics, clean energy hardware, industrial machinery, and high-grade agricultural commodities across Nigeria and West Africa.',
  })

  const [status, setStatus] = useState<{
    type: 'idle' | 'saving' | 'success' | 'error'
    message?: string
  }>({ type: 'idle' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'saving' })

    const res = await updateSiteSettingsInSanity(formData)

    if (res.success) {
      setStatus({
        type: 'success',
        message: 'Corporate profile published to Sanity Content Lake and live on website.',
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
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="border-b border-[#E5E7EB] pb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-[#17191C]">
            Corporate Profile & Legal Registration
          </h2>
          <p className="text-xs text-[#626B75] mt-0.5">
            Manage official CAC identity, Abuja headquarters, Czech parent company link, and core landing page messaging.
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#EBF7EE] text-[#0E5A3A] border border-[#BCE6C4] text-[11px] font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>RC-7669078 Verified</span>
        </div>
      </div>

      {status.type === 'success' && (
        <div className="p-3 bg-[#EBF7EE] border border-[#BCE6C4] rounded-xs text-xs text-[#0E5A3A] flex items-center gap-2 font-medium">
          <Check className="w-4 h-4 shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      {status.type === 'error' && (
        <div className="p-3 bg-[#FEF2F2] border border-[#FCA5A5] rounded-xs text-xs text-[#991B1B] flex items-start gap-2 leading-relaxed">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-semibold text-[#17191C]">Company Registered Name</label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] focus:outline-hidden focus:border-[#17191C]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-[#17191C]">CAC Registration Number</label>
            <input
              type="text"
              value={formData.cacNumber}
              onChange={(e) => setFormData({ ...formData, cacNumber: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] font-mono focus:outline-hidden focus:border-[#17191C]"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="font-semibold text-[#17191C]">Abuja Headquarters Address</label>
          <input
            type="text"
            value={formData.headquartersAddress}
            onChange={(e) => setFormData({ ...formData, headquartersAddress: e.target.value })}
            className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] focus:outline-hidden focus:border-[#17191C]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="font-semibold text-[#17191C]">Primary Phone / WhatsApp</label>
            <input
              type="text"
              value={formData.contactPhone}
              onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] font-mono focus:outline-hidden focus:border-[#17191C]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-[#17191C]">Primary Corporate Email</label>
            <input
              type="email"
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] font-mono focus:outline-hidden focus:border-[#17191C]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-semibold text-[#17191C]">Parent Company Website</label>
            <input
              type="url"
              value={formData.parentCompanyUrl}
              onChange={(e) => setFormData({ ...formData, parentCompanyUrl: e.target.value })}
              className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] font-mono focus:outline-hidden focus:border-[#17191C]"
            />
          </div>
        </div>

        <div className="space-y-1.5 pt-2 border-t border-[#E5E7EB]">
          <label className="font-semibold text-[#17191C]">Homepage Hero Headline</label>
          <input
            type="text"
            value={formData.heroHeadline}
            onChange={(e) => setFormData({ ...formData, heroHeadline: e.target.value })}
            className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] focus:outline-hidden focus:border-[#17191C]"
          />
        </div>

        <div className="space-y-1.5">
          <label className="font-semibold text-[#17191C]">Homepage Hero Subheadline</label>
          <textarea
            rows={3}
            value={formData.heroSubheadline}
            onChange={(e) => setFormData({ ...formData, heroSubheadline: e.target.value })}
            className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] leading-relaxed focus:outline-hidden focus:border-[#17191C]"
          />
        </div>

        <div className="pt-3 flex items-center justify-between border-t border-[#E5E7EB]">
          <p className="text-[11px] text-[#89919A]">
            Directly updates the published document in Sanity Content Lake.
          </p>

          <button
            type="submit"
            disabled={status.type === 'saving'}
            className="px-5 py-2.5 rounded-xs bg-[#17191C] hover:bg-black text-white font-semibold transition-all shadow-xs flex items-center gap-2 disabled:opacity-60"
          >
            {status.type === 'saving' ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Publishing to Sanity...</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                <span>Publish Changes Live</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
