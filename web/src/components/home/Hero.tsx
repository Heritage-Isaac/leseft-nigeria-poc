'use client'

import React from 'react'
import { ArrowRight, ShieldCheck, CheckCircle2, Globe, Building2, Anchor } from 'lucide-react'
import type { SiteSettings } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

interface HeroProps {
  settings: SiteSettings
}

export function Hero({ settings }: HeroProps) {
  const { t } = useLanguage()

  return (
    <section className="relative bg-[#414042] text-white overflow-hidden border-b border-[#2A2A2C] pt-14 pb-20 lg:pt-20 lg:pb-28">
      {/* Precision hairline grid pattern in Leseft theme */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xs bg-[#2A2A2C] border border-[#555557] text-[11px] font-semibold text-[#E0E0E0]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27AAE1]" />
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.14]">
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#C9D1D9] leading-relaxed max-w-2xl font-normal">
              {t.hero.subheadline}
            </p>

            {/* Trust Markers Bar */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10">
              <div className="space-y-1">
                <span className="text-[10px] font-semibold text-[#A0A0A5] uppercase tracking-wider">
                  {t.hero.cacLabel}
                </span>
                <p className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#27AAE1]" />
                  <span>{settings.cacNumber}</span>
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-semibold text-[#A0A0A5] uppercase tracking-wider">
                  {t.hero.corridorLabel}
                </span>
                <p className="text-xs font-bold text-white font-mono">{t.hero.corridorValue}</p>
              </div>

              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="text-[10px] font-semibold text-[#A0A0A5] uppercase tracking-wider">
                  {t.hero.complianceLabel}
                </span>
                <p className="text-xs font-bold text-[#27AAE1] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27AAE1]" />
                  <span>{t.hero.complianceValue}</span>
                </p>
              </div>
            </div>

            {/* Action Buttons with Leseft Blue Primary */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold text-white bg-[#1C75BC] hover:bg-[#145A91] rounded-xs transition-all shadow-xs"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="#metallurgy"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#2A2A2C] hover:bg-[#353538] border border-white/20 rounded-xs transition-all"
              >
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Corridor Card & Graphic */}
          <div className="lg:col-span-5">
            <div className="bg-[#2A2A2C] border border-[#555557] rounded-xs p-6 space-y-6 shadow-sm">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#27AAE1]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    {t.hero.tradeDeskTitle}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs bg-[#1C75BC] text-white">
                  OSTRAVA ⇄ ABUJA
                </span>
              </div>

              {/* Architectural Technical Vector Diagram */}
              <div className="bg-[#414042] border border-white/10 rounded-xs p-5 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[#A0A0A5] uppercase tracking-wider block">
                      {t.hero.originTitle}
                    </span>
                    <p className="font-bold text-white flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#27AAE1]" />
                      <span>{t.hero.originLocation}</span>
                    </p>
                    <p className="text-[11px] text-[#C9D1D9]">
                      {t.hero.originCompany}
                    </p>
                  </div>
                </div>

                {/* Corridor Flow Graphic */}
                <div className="relative py-2">
                  <div className="border-t-2 border-dashed border-[#1C75BC] relative flex items-center justify-between">
                    <span className="w-3 h-3 rounded-xs bg-[#27AAE1] -mt-1.5" />
                    <span className="text-[10px] font-mono text-[#E0E0E0] bg-[#2A2A2C] px-2 -mt-2.5 border border-white/10">
                      {t.hero.freightRoute}
                    </span>
                    <span className="w-3 h-3 rounded-xs bg-[#27AAE1] -mt-1.5" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[#A0A0A5] uppercase tracking-wider block">
                      {t.hero.hubTitle}
                    </span>
                    <p className="font-bold text-white flex items-center gap-1.5">
                      <Anchor className="w-3.5 h-3.5 text-[#27AAE1]" />
                      <span>{t.hero.hubLocation}</span>
                    </p>
                    <p className="text-[11px] text-[#C9D1D9]">
                      {t.hero.hubAddress} ({settings.cacNumber})
                    </p>
                  </div>
                </div>
              </div>

              {/* Four Pillars Matrix */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  'Clean Energy Hardware',
                  'EU Steel Ingots & Forgings',
                  'Heavy Industrial Castings',
                  'Dry Port Bulk Commodities',
                ].map((item) => (
                  <div
                    key={item}
                    className="px-3 py-2 rounded-xs bg-[#414042] border border-white/10 text-[#E0E0E0] text-[11px] font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C75BC]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Image Guidance Notice for the User */}
              <div className="p-3 bg-[#414042] border border-white/10 rounded-xs space-y-1 text-left">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#27AAE1]">
                  <span>{t.hero.imageSlotLabel}</span>
                  <span>/public/images/hero-b2b-trade.jpg</span>
                </div>
                <p className="text-[11px] text-[#B0B0B0] leading-snug">
                  {t.hero.imageSlotDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
