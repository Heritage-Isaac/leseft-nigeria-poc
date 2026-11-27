'use client'

import React from 'react'
import { Zap, Pickaxe, Cog, ArrowRight } from 'lucide-react'

export function EquipmentSection() {
  const categories = [
    {
      code: 'A',
      icon: Zap,
      title: 'Energy Solutions',
      items: [
        'Thermal power plants: small, medium, and large-scale',
        'Energy storage systems (BESS)',
        'Alternative energy solutions',
        'Export finance support for eligible projects',
      ],
    },
    {
      code: 'B',
      icon: Pickaxe,
      title: 'Mining & Mineral Processing',
      items: [
        'Heavy mining equipment & site machinery',
        'Primary mineral-processing technologies',
        'Turnkey equipment & technology solutions for mining projects',
        'Export finance support for qualifying deployments',
      ],
    },
    {
      code: 'C',
      icon: Cog,
      title: 'Industrial Equipment',
      items: [
        'Industrial pumps & fluid handling',
        'Power & distribution transformers',
        'Heat exchangers & industrial valves',
        'Water-treatment equipment and technologies',
      ],
    },
  ]

  return (
    <section id="equipment" className="py-16 lg:py-20 bg-[#F7F9FB] border-b border-[#E1E1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-[#E1E1E1] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1C75BC] uppercase tracking-wider block">
              Equipment &amp; Technologies
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#414042] tracking-tight">
              Industrial, Energy &amp; Mining Technology Supply
            </h2>
          </div>
          <p className="text-xs text-[#4D4D4D] max-w-md leading-relaxed">
            Sourced through LeSeft&apos;s international manufacturing network across Europe and Asia,
            with export finance support and local commissioning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.code}
                className="bg-white border border-[#E1E1E1] rounded-xs p-7 flex flex-col justify-between space-y-5 hover:border-[#1C75BC] transition-colors shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E1E1E1] pb-3">
                    <div className="w-9 h-9 rounded-xs bg-[#1C75BC] text-white flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#1C75BC]">
                      SECTION {cat.code}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#414042]">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="text-xs text-[#4D4D4D] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1C75BC] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C75BC] hover:text-[#145A91] pt-2 border-t border-[#F0F2F5]"
                >
                  <span>Request Technical Specification</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
