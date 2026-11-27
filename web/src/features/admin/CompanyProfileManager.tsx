'use client'

import React, { useState } from 'react'
import { Check, AlertCircle, Loader2, Save, ShieldCheck, Plus, Trash2, Upload } from 'lucide-react'
import { updateSiteSettingsInSanity, uploadImageToSanity } from '@/app/admin/actions'
import type { SiteSettings } from '@/types'

interface SiteSettingsManagerProps {
  initialSettings?: Partial<SiteSettings>
  onSaved?: () => void
}

const DEFAULT_NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Commodities', href: '#commodities' },
  { label: 'Equipment & Technologies', href: '#equipment' },
  { label: 'Projects & Services', href: '#projects' },
  { label: 'For Partners', href: '#partners' },
  { label: 'Contact Us', href: '#contact' },
]

const DEFAULT_HERO_VIDEOS = [
  '/videos/15427503_640_360_50fps.mp4',
  '/videos/8457855-sd_640_360_24fps.mp4',
  '/videos/6618038-sd_426_240_24fps.mp4',
]

export function CompanyProfileManager({ initialSettings, onSaved }: SiteSettingsManagerProps) {
  const [formData, setFormData] = useState({
    companyName: initialSettings?.companyName || 'Leseft Nigeria Limited',
    cacNumber: initialSettings?.cacNumber || 'RC-7669078',
    headquartersAddress:
      initialSettings?.headquartersAddress ||
      'Plot 69, Gold Court Estate Street, Katampe District, FCT Abuja',
    contactPhone: initialSettings?.contactPhone || '+234 809 533 2333',
    contactEmail: initialSettings?.contactEmail || 'info@leseft.cz',
    heroHeadline:
      initialSettings?.heroHeadline ||
      'Bridging European Industrial Standards with West African Markets',
    heroSubheadline:
      initialSettings?.heroSubheadline ||
      'Leseft Nigeria Limited delivers reliable import-export logistics, clean energy hardware, industrial machinery, EU-certified metallurgy, and high-grade agricultural commodities across Nigeria and West Africa.',
    navLogoUrl: initialSettings?.navLogoUrl || initialSettings?.navLogo?.asset?.url || '',
    navLogoText: initialSettings?.navLogoText || 'LS',
    navLinks:
      initialSettings?.navLinks && initialSettings.navLinks.length > 0
        ? initialSettings.navLinks.map((l) => ({ label: l.label, href: l.href }))
        : DEFAULT_NAV_LINKS,
    navCtaText: initialSettings?.navCtaText || 'Request a Quote',
    navCtaHref: initialSettings?.navCtaHref || '/#quote',
    navCtaColor: initialSettings?.navCtaColor || '#1C75BC',
    navCtaTextColor: initialSettings?.navCtaTextColor || '#FFFFFF',
    heroMediaType: (initialSettings?.heroMediaType || 'video') as 'video' | 'image',
    heroImageUrl:
      initialSettings?.heroImageUrl || initialSettings?.heroImage?.asset?.url || '',
    heroVideos:
      initialSettings?.heroVideos && initialSettings.heroVideos.length > 0
        ? initialSettings.heroVideos
        : DEFAULT_HERO_VIDEOS,
    heroPrimaryCtaText: initialSettings?.heroPrimaryCtaText || 'Request a Quote',
    heroPrimaryCtaHref: initialSettings?.heroPrimaryCtaHref || '#quote',
    heroSecondaryCtaText: initialSettings?.heroSecondaryCtaText || 'Explore Sectors',
    heroSecondaryCtaHref: initialSettings?.heroSecondaryCtaHref || '#projects',
  })

  const [uploadingField, setUploadingField] = useState<'navLogoUrl' | 'heroImageUrl' | null>(null)
  const [status, setStatus] = useState<{
    type: 'idle' | 'saving' | 'success' | 'error'
    message?: string
  }>({ type: 'idle' })

  const handleImageUpload = async (
    field: 'navLogoUrl' | 'heroImageUrl',
    file?: File
  ) => {
    if (!file) return
    setUploadingField(field)
    const fd = new FormData()
    fd.append('file', file)
    const res = await uploadImageToSanity(fd)
    setUploadingField(null)
    if (res.success && res.url) {
      setFormData((prev) => ({ ...prev, [field]: res.url }))
    } else {
      setStatus({ type: 'error', message: res.error || 'Failed to upload image.' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'saving' })

    const res = await updateSiteSettingsInSanity(formData)

    if (res.success) {
      setStatus({
        type: 'success',
        message: 'Corporate profile, navigation, and hero settings published live to Sanity.',
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
            Manage official CAC identity, Abuja headquarters, and core landing page messaging.
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

        </div>

        {/* Navigation Bar Settings */}
        <div className="space-y-4 pt-4 border-t border-[#E5E7EB]">
          <div>
            <h3 className="text-sm font-bold text-[#17191C]">Navigation Bar & Branding</h3>
            <p className="text-[11px] text-[#626B75]">
              Customize the navbar logo, navigation links, and CTA button appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5 sm:col-span-2">
              <label className="font-semibold text-[#17191C]">Navbar Logo Image URL</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="https://... or upload an image"
                  value={formData.navLogoUrl}
                  onChange={(e) => setFormData({ ...formData, navLogoUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] focus:outline-hidden focus:border-[#17191C]"
                />
                <label className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#E5E7EB] bg-[#F7F9FB] hover:bg-[#ECEFF3] rounded-xs cursor-pointer font-semibold text-[#17191C] shrink-0">
                  <Upload className="w-3.5 h-3.5" />
                  <span>{uploadingField === 'navLogoUrl' ? 'Uploading...' : 'Upload'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload('navLogoUrl', e.target.files?.[0])}
                  />
                </label>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-[#17191C]">Logo Initials (Fallback)</label>
              <input
                type="text"
                value={formData.navLogoText}
                onChange={(e) => setFormData({ ...formData, navLogoText: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] font-mono focus:outline-hidden focus:border-[#17191C]"
              />
            </div>
          </div>

          {/* Nav Links Editor */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-semibold text-[#17191C]">Navigation Links</label>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    navLinks: [...prev.navLinks, { label: 'New Link', href: '/' }],
                  }))
                }
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-[#F7F9FB] border border-[#E5E7EB] hover:border-[#17191C] rounded-xs"
              >
                <Plus className="w-3 h-3" />
                <span>Add Link</span>
              </button>
            </div>
            <div className="space-y-2">
              {formData.navLinks.map((link, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Label"
                    value={link.label}
                    onChange={(e) => {
                      const next = [...formData.navLinks]
                      next[idx] = { ...next[idx], label: e.target.value }
                      setFormData({ ...formData, navLinks: next })
                    }}
                    className="col-span-5 px-2.5 py-1.5 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C]"
                  />
                  <input
                    type="text"
                    placeholder="/path or /#section"
                    value={link.href}
                    onChange={(e) => {
                      const next = [...formData.navLinks]
                      next[idx] = { ...next[idx], href: e.target.value }
                      setFormData({ ...formData, navLinks: next })
                    }}
                    className="col-span-6 px-2.5 py-1.5 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] font-mono"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        navLinks: formData.navLinks.filter((_, i) => i !== idx),
                      })
                    }
                    className="col-span-1 p-1.5 text-[#991B1B] hover:bg-[#FEF2F2] rounded-xs flex justify-center"
                    aria-label="Remove nav link"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Nav CTA Button */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
            <div className="space-y-1.5">
              <label className="font-semibold text-[#17191C]">Nav Button Text</label>
              <input
                type="text"
                value={formData.navCtaText}
                onChange={(e) => setFormData({ ...formData, navCtaText: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-semibold text-[#17191C]">Nav Button Link</label>
              <input
                type="text"
                value={formData.navCtaHref}
                onChange={(e) => setFormData({ ...formData, navCtaHref: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-semibold text-[#17191C]">Button Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={formData.navCtaColor}
                  onChange={(e) => setFormData({ ...formData, navCtaColor: e.target.value })}
                  className="w-9 h-9 p-0.5 border border-[#E5E7EB] rounded-xs bg-white cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.navCtaColor}
                  onChange={(e) => setFormData({ ...formData, navCtaColor: e.target.value })}
                  className="w-full px-2.5 py-2 bg-white border border-[#E5E7EB] rounded-xs font-mono"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="font-semibold text-[#17191C]">Button Text Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={formData.navCtaTextColor}
                  onChange={(e) => setFormData({ ...formData, navCtaTextColor: e.target.value })}
                  className="w-9 h-9 p-0.5 border border-[#E5E7EB] rounded-xs bg-white cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.navCtaTextColor}
                  onChange={(e) => setFormData({ ...formData, navCtaTextColor: e.target.value })}
                  className="w-full px-2.5 py-2 bg-white border border-[#E5E7EB] rounded-xs font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section Settings */}
        <div className="space-y-4 pt-4 border-t border-[#E5E7EB]">
          <div>
            <h3 className="text-sm font-bold text-[#17191C]">Hero Section Content & Media</h3>
            <p className="text-[11px] text-[#626B75]">
              Control hero copy, buttons, and background image or video carousel.
            </p>
          </div>

          <div className="space-y-1.5">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-semibold text-[#17191C]">Hero Primary Button Text</label>
              <input
                type="text"
                value={formData.heroPrimaryCtaText}
                onChange={(e) => setFormData({ ...formData, heroPrimaryCtaText: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-semibold text-[#17191C]">Hero Secondary Button Text</label>
              <input
                type="text"
                value={formData.heroSecondaryCtaText}
                onChange={(e) => setFormData({ ...formData, heroSecondaryCtaText: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C]"
              />
            </div>
          </div>

          {/* Background Media Switcher */}
          <div className="space-y-3 pt-2">
            <label className="font-semibold text-[#17191C] block">Hero Background Media Type</label>
            <div className="flex gap-3">
              {(['video', 'image'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setFormData({ ...formData, heroMediaType: mode })}
                  className={`px-4 py-2 rounded-xs border font-semibold capitalize ${
                    formData.heroMediaType === mode
                      ? 'bg-[#17191C] text-white border-[#17191C]'
                      : 'bg-white text-[#626B75] border-[#E5E7EB]'
                  }`}
                >
                  {mode === 'video' ? 'Video Carousel' : 'Static Image'}
                </button>
              ))}
            </div>

            {formData.heroMediaType === 'image' ? (
              <div className="space-y-1.5">
                <label className="font-semibold text-[#17191C]">Hero Background Image URL</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="https://... or /assets/leseft-hero.avif"
                    value={formData.heroImageUrl}
                    onChange={(e) => setFormData({ ...formData, heroImageUrl: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C]"
                  />
                  <label className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#E5E7EB] bg-[#F7F9FB] hover:bg-[#ECEFF3] rounded-xs cursor-pointer font-semibold text-[#17191C] shrink-0">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{uploadingField === 'heroImageUrl' ? 'Uploading...' : 'Upload'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload('heroImageUrl', e.target.files?.[0])}
                    />
                  </label>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-semibold text-[#17191C]">Hero Video URLs / Paths</label>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        heroVideos: [...prev.heroVideos, ''],
                      }))
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-[#F7F9FB] border border-[#E5E7EB] hover:border-[#17191C] rounded-xs"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Video</span>
                  </button>
                </div>
                {formData.heroVideos.map((vid, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <input
                      type="text"
                      value={vid}
                      onChange={(e) => {
                        const next = [...formData.heroVideos]
                        next[idx] = e.target.value
                        setFormData({ ...formData, heroVideos: next })
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-[#E5E7EB] rounded-xs text-[#17191C] font-mono"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          heroVideos: formData.heroVideos.filter((_, i) => i !== idx),
                        })
                      }
                      className="p-1.5 text-[#991B1B] hover:bg-[#FEF2F2] rounded-xs"
                      aria-label="Remove video"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
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
