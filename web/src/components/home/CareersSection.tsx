'use client'

import React from 'react'
import { MapPin, ArrowRight, Mail } from 'lucide-react'
import type { CareerListing } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

interface CareersSectionProps {
  careers: CareerListing[]
  contactEmail?: string
}

export function CareersSection({
  careers,
  contactEmail = 'info@leseft.cz',
}: CareersSectionProps) {
  const { t } = useLanguage()

  return (
    <section id="careers" className="py-20 bg-[#414042] text-white border-b border-[#2A2A2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner Header */}
        <div className="border-b border-white/10 pb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-[#27AAE1] uppercase tracking-wider block">
              {t.careers.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {t.careers.title}
            </h2>
            <p className="text-sm text-[#C9D1D9] leading-relaxed">
              {t.careers.subtitle}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={`mailto:${contactEmail}?subject=Career%20Application%20-%20Abuja%20Trade%20Team`}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#1C75BC] hover:bg-[#145A91] rounded-xs transition-all shadow-xs"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>{t.careers.generalCta}</span>
            </a>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careers.map((role) => (
            <div
              key={role._id}
              className="bg-[#2A2A2C] border border-white/10 rounded-xs p-7 flex flex-col justify-between hover:border-[#1C75BC] transition-colors"
            >
              <div className="space-y-5">
                {/* Role Header */}
                <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
                  <span className="text-[10px] font-mono text-[#27AAE1] font-bold uppercase tracking-wider">
                    {role.department}
                  </span>
                  <span className="text-[10px] font-semibold text-[#A0A0A5] px-2 py-0.5 rounded-xs bg-[#414042]">
                    {role.jobType}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white tracking-tight">{role.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#A0A0A5]">
                    <MapPin className="w-3.5 h-3.5 text-[#27AAE1]" />
                    <span>{role.location}</span>
                  </div>
                </div>

                {/* Key Tasks */}
                {role.keyTasks && role.keyTasks.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A0A0A5] block">
                      Scope:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#C9D1D9]">
                      {role.keyTasks.slice(0, 3).map((task, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#27AAE1] mt-0.5">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action CTA */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-[#A0A0A5] font-mono">
                  {t.careers.channelLabel}: {role.applicationEmail}
                </span>
                <a
                  href={`mailto:${role.applicationEmail}?subject=Application%20for%20${encodeURIComponent(
                    role.title
                  )}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#27AAE1] hover:text-white transition-colors"
                >
                  <span>{t.careers.applyNow}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
