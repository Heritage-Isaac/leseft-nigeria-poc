'use client'

import React from 'react'
import { Building2, Globe2, MapPin, ShieldCheck, ArrowRight } from 'lucide-react'
import type { SiteSettings } from '@/types'

interface AboutSectionProps {
  settings: SiteSettings
}

export function AboutSection({ settings }: AboutSectionProps) {
  const highlights = [
    {
      icon: Building2,
      title: 'Trading House & Project Office',
      desc: 'Local operating unit of the wider LeSeft Group, structured to execute both physical commodity trade and complex industrial projects.',
    },
    {
      icon: MapPin,
      title: 'Abuja Office & Ground Team',
      desc: `Headquartered in Abuja (${settings.headquartersAddress}) with an operational team handling logistics, certification, and coordination.`,
    },
    {
      icon: Globe2,
      title: 'Europe, Asia & West Africa Network',
      desc: 'Connecting European and Asian manufacturers, technology providers, and buyers directly with Nigerian and West African opportunities.',
    },
    {
      icon: ShieldCheck,
      title: 'End-to-End Implementation',
      desc: 'Combining international trade experience with partner identification, regulatory coordination, and transaction support.',
    },
  ]

  return (
    <section id="about" className="py-16 lg:py-20 bg-white border-b border-[#E1E1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-[#E1E1E1] pb-8">
          <div className="lg:col-span-7 space-y-2.5">
            <span className="text-xs font-bold text-[#1C75BC] uppercase tracking-wider block">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#414042] tracking-tight">
              A Credible Trading House &amp; Project Office for Nigeria and West Africa
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs sm:text-sm text-[#4D4D4D] leading-relaxed">
              LeSeft Nigeria is the local operating unit of the LeSeft Group, uniting international
              trade experience across Europe and Asia with on-the-ground implementation in Nigeria.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C75BC] hover:text-[#145A91]"
            >
              <span>Connect with our Abuja Office</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="p-6 bg-[#F7F9FB] border border-[#E1E1E1] rounded-xs space-y-3 hover:border-[#1C75BC] transition-colors"
              >
                <div className="w-9 h-9 rounded-xs bg-[#1C75BC] text-white flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#414042]">{item.title}</h3>
                <p className="text-xs text-[#4D4D4D] leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
