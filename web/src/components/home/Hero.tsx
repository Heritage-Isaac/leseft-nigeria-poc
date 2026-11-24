'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import type { SiteSettings } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

interface HeroProps {
  settings: SiteSettings
}

export function Hero({ settings }: HeroProps) {
  const { t } = useLanguage()

  return (
    <section className="relative bg-[#414042] text-white overflow-hidden border-b border-[#2A2A2C] py-20 lg:py-28">
      {/* Precision hairline structural grid in Leseft theme */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#2A2A2C] border border-white/10 text-[11px] font-semibold text-[#E0E0E0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#27AAE1]" />
          <span>{t.hero.eyebrow}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
          {t.hero.headline}
        </h1>

        {/* Subheadline: Exact user copy */}
        <p className="text-base sm:text-lg text-[#C9D1D9] leading-relaxed max-w-3xl mx-auto font-normal">
          {t.hero.subheadline}
        </p>

        {/* Compact Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#quote"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#1C75BC] hover:bg-[#145A91] rounded-xs transition-all shadow-xs"
          >
            <span>{t.hero.primaryCta}</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </a>

          <a
            href="#sectors"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#2A2A2C] hover:bg-[#353538] border border-white/20 rounded-xs transition-all"
          >
            <span>{t.hero.secondaryCta}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
