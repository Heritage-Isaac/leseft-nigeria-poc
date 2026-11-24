'use client'

import React, { useState } from 'react'
import { Send, CheckCircle2, Phone, Mail, MapPin, Building } from 'lucide-react'
import type { SiteSettings } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

interface TradeInquirySectionProps {
  settings: SiteSettings
}

export function TradeInquirySection({ settings }: TradeInquirySectionProps) {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    sector: 'EU Metallurgy & Steel Ingots',
    product: '',
    volume: '',
    destination: 'Abuja FCT',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="quote" className="py-20 bg-white border-b border-[#E1E1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Corporate Office & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#1C75BC] uppercase tracking-wider block">
                {t.quote.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#414042] tracking-tight">
                {t.quote.title}
              </h2>
              <p className="text-xs text-[#4D4D4D] leading-relaxed">
                {t.quote.subtitle}
              </p>
            </div>

            {/* Direct Official Contact Cards */}
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xs bg-[#F7F9FB] border border-[#E1E1E1] space-y-1.5">
                <div className="flex items-center gap-2 text-[#414042] font-bold">
                  <MapPin className="w-4 h-4 text-[#1C75BC]" />
                  <span>{t.quote.hqTitle}</span>
                </div>
                <p className="text-[#4D4D4D] pl-6 font-mono text-[11px] leading-relaxed">
                  {settings.headquartersAddress}
                </p>
                <p className="text-[10px] text-[#7A7A7D] pl-6">
                  {settings.cacNumber} • Inc. {settings.incorporationDate}
                </p>
              </div>

              <div className="p-4 rounded-xs bg-[#F7F9FB] border border-[#E1E1E1] space-y-1.5">
                <div className="flex items-center gap-2 text-[#414042] font-bold">
                  <Building className="w-4 h-4 text-[#1C75BC]" />
                  <span>{t.quote.parentTitle}</span>
                </div>
                <p className="text-[#4D4D4D] pl-6">
                  {settings.parentCompanyName} ({settings.parentCompanyLocation})
                </p>
                <a
                  href={settings.parentCompanyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-[#1C75BC] hover:underline pl-6 block font-mono"
                >
                  {settings.parentCompanyUrl}
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${settings.contactPhone.replace(/\s+/g, '')}`}
                  className="p-4 rounded-xs bg-[#F7F9FB] border border-[#E1E1E1] hover:border-[#1C75BC] transition-colors space-y-1 block"
                >
                  <span className="text-[10px] text-[#7A7A7D] uppercase tracking-wider block font-semibold">
                    {t.quote.phoneLabel}
                  </span>
                  <p className="font-bold text-[#414042] font-mono text-xs flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#1C75BC]" />
                    <span>{settings.contactPhone}</span>
                  </p>
                </a>

                <a
                  href={`mailto:${settings.contactEmail}`}
                  className="p-4 rounded-xs bg-[#F7F9FB] border border-[#E1E1E1] hover:border-[#1C75BC] transition-colors space-y-1 block"
                >
                  <span className="text-[10px] text-[#7A7A7D] uppercase tracking-wider block font-semibold">
                    {t.quote.emailLabel}
                  </span>
                  <p className="font-bold text-[#414042] font-mono text-xs flex items-center gap-1.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-[#1C75BC]" />
                    <span>{settings.contactEmail}</span>
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F9FB] border border-[#E1E1E1] rounded-xs p-8 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#EBF7EE] text-[#0E5A3A] flex items-center justify-center mx-auto border border-[#BCE6C4]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#414042]">
                    {t.quote.successTitle}
                  </h3>
                  <p className="text-xs text-[#4D4D4D] max-w-md mx-auto leading-relaxed">
                    {t.quote.successDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 text-xs font-semibold bg-[#1C75BC] text-white rounded-xs hover:bg-[#145A91]"
                  >
                    {t.quote.anotherButton}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  <div className="border-b border-[#E1E1E1] pb-3">
                    <h3 className="text-sm font-bold text-[#414042]">
                      {t.quote.formTitle}
                    </h3>
                    <p className="text-[11px] text-[#7A7A7D]">
                      {t.quote.formSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#414042]">{t.quote.fullName}</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Aliyu Danjuma"
                        className="w-full px-3 py-2 bg-white border border-[#E1E1E1] rounded-xs text-[#414042] focus:outline-hidden focus:border-[#1C75BC]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#414042]">{t.quote.company}</label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Apex Industrial Solutions Ltd"
                        className="w-full px-3 py-2 bg-white border border-[#E1E1E1] rounded-xs text-[#414042] focus:outline-hidden focus:border-[#1C75BC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#414042]">{t.quote.email}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="procurement@company.com"
                        className="w-full px-3 py-2 bg-white border border-[#E1E1E1] rounded-xs text-[#414042] focus:outline-hidden focus:border-[#1C75BC]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#414042]">{t.quote.phone}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 800 000 0000"
                        className="w-full px-3 py-2 bg-white border border-[#E1E1E1] rounded-xs text-[#414042] focus:outline-hidden focus:border-[#1C75BC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#414042]">{t.quote.sector}</label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-[#E1E1E1] rounded-xs text-[#414042] focus:outline-hidden focus:border-[#1C75BC]"
                      >
                        <option>EU Metallurgy & Steel Ingots</option>
                        <option>Heavy Forgings & Industrial Castings</option>
                        <option>Czech Industrial Machinery & Energy Hardware</option>
                        <option>Commercial Solar Panels & Power Inverters</option>
                        <option>Agricultural Bulk Commodities & Fertilizer</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#414042]">{t.quote.product}</label>
                      <input
                        type="text"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        placeholder="e.g. S355 Steel Ingots / 550W Bifacial Solar"
                        className="w-full px-3 py-2 bg-white border border-[#E1E1E1] rounded-xs text-[#414042] focus:outline-hidden focus:border-[#1C75BC]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#414042]">{t.quote.volume}</label>
                      <input
                        type="text"
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        placeholder="e.g. 50 Metric Tons / 100 kW Lot"
                        className="w-full px-3 py-2 bg-white border border-[#E1E1E1] rounded-xs text-[#414042] focus:outline-hidden focus:border-[#1C75BC]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-[#414042]">{t.quote.destination}</label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Lagos Port / Abuja Dry Port"
                        className="w-full px-3 py-2 bg-white border border-[#E1E1E1] rounded-xs text-[#414042] focus:outline-hidden focus:border-[#1C75BC]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-semibold text-[#414042]">{t.quote.notes}</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify LC terms, inspection requirements (TÜV / SGS), or delivery schedules..."
                      className="w-full px-3 py-2 bg-white border border-[#E1E1E1] rounded-xs text-[#414042] focus:outline-hidden focus:border-[#1C75BC]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-bold text-white bg-[#1C75BC] hover:bg-[#145A91] rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.quote.submitButton}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
