'use client'

import React from 'react'
import { Building2, Scale, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function TrustSection() {
  const { t } = useLanguage()

  const valueProps = [
    {
      title: t.trust.prop1Title,
      description: t.trust.prop1Desc,
      icon: Building2,
      badge: t.trust.prop1Badge,
    },
    {
      title: t.trust.prop2Title,
      description: t.trust.prop2Desc,
      icon: Scale,
      badge: t.trust.prop2Badge,
    },
    {
      title: t.trust.prop3Title,
      description: t.trust.prop3Desc,
      icon: TrendingUp,
      badge: t.trust.prop3Badge,
    },
  ]

  return (
    <section id="why-partner" className="py-20 bg-[#F7F9FB] border-b border-[#E1E1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#E1E1E1] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1C75BC] uppercase tracking-wider block">
              {t.trust.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#414042] tracking-tight">
              {t.trust.title}
            </h2>
          </div>
          <p className="text-xs text-[#4D4D4D] max-w-md leading-relaxed">
            {t.trust.subtitle}
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop) => {
            const Icon = prop.icon

            return (
              <div
                key={prop.title}
                className="bg-white border border-[#E1E1E1] rounded-xs p-8 space-y-5 hover:border-[#1C75BC] transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-[#E1E1E1] pb-4">
                  <div className="w-10 h-10 rounded-xs bg-[#1C75BC] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs bg-[#F7F9FB] border border-[#E1E1E1] text-[#1C75BC]">
                    {prop.badge}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-base font-bold text-[#414042] tracking-tight">{prop.title}</h3>
                  <p className="text-xs text-[#4D4D4D] leading-relaxed">{prop.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
