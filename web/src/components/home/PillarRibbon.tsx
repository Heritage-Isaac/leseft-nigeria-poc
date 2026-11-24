'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export function PillarRibbon() {
  const { t } = useLanguage()

  const pillars = [
    { title: t.pillars.trade, desc: t.pillars.tradeDesc },
    { title: t.pillars.energy, desc: t.pillars.energyDesc },
    { title: t.pillars.industry, desc: t.pillars.industryDesc },
    { title: t.pillars.westAfrica, desc: t.pillars.westAfricaDesc },
  ]

  return (
    <section className="bg-[#2A2A2C] border-b border-[#1C75BC]/40 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {pillars.map((item, idx) => (
            <div key={item.title} className={`${idx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''} space-y-1`}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-xs bg-[#1C75BC]" />
                <h3 className="text-sm font-black text-white tracking-widest">{item.title}</h3>
              </div>
              <p className="text-xs text-[#C0C0C0] leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
