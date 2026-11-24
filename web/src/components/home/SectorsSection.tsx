'use client'

import React from 'react'
import { Sun, Cog, Package, ArrowRight, Check } from 'lucide-react'
import type { Sector } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

interface SectorsSectionProps {
  sectors: Sector[]
}

export function SectorsSection({ sectors }: SectorsSectionProps) {
  const { t } = useLanguage()

  const iconMap = {
    energy: Sun,
    industry: Cog,
    trade: Package,
  }

  return (
    <section id="sectors" className="py-20 bg-[#F7F9FB] border-b border-[#E1E1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#E1E1E1] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1C75BC] uppercase tracking-wider block">
              {t.sectors.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#414042] tracking-tight">
              {t.sectors.title}
            </h2>
          </div>
          <p className="text-xs text-[#4D4D4D] max-w-md leading-relaxed">
            {t.sectors.subtitle}
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectors.map((sec, idx) => {
            const IconComponent = iconMap[sec.iconType] || Package

            return (
              <div
                key={sec._id}
                className="bg-white border border-[#E1E1E1] rounded-xs p-7 flex flex-col justify-between hover:border-[#1C75BC] transition-colors group shadow-xs"
              >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-[#E1E1E1] pb-4">
                    <div className="w-10 h-10 rounded-xs bg-[#1C75BC] text-white flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#7A7A7D]">0{idx + 1}</span>
                  </div>

                  {/* Title & Copy */}
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-bold text-[#414042] tracking-tight group-hover:text-[#1C75BC] transition-colors">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-[#4D4D4D] leading-relaxed">{sec.shortSummary}</p>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-2 pt-2 border-t border-[#E1E1E1]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A7A7D] block">
                      Core Scope:
                    </span>
                    <ul className="space-y-2">
                      {sec.capabilities?.map((cap) => (
                        <li key={cap} className="text-xs text-[#414042] flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#1C75BC] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with Image Recommendation Note */}
                <div className="pt-6 mt-6 border-t border-[#E1E1E1] space-y-3">
                  <div className="p-3 bg-[#F7F9FB] border border-[#E1E1E1] rounded-xs text-left">
                    <span className="text-[10px] font-mono uppercase text-[#1C75BC] block font-semibold mb-1">
                      Visual Asset Slot
                    </span>
                    <p className="text-[11px] text-[#7A7A7D] leading-snug">
                      {sec.recommendedImageGuidance}
                    </p>
                  </div>

                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C75BC] hover:underline transition-colors"
                  >
                    <span>{t.sectors.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
