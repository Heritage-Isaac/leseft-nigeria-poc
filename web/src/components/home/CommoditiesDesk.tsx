'use client'

import React, { useState } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import type { Commodity } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

interface CommoditiesDeskProps {
  commodities: Commodity[]
}

export function CommoditiesDesk({ commodities }: CommoditiesDeskProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'commodities' | 'energy' | 'industrial'>('all')
  const { t } = useLanguage()

  const filtered =
    selectedCategory === 'all'
      ? commodities
      : commodities.filter((c) => c.category === selectedCategory)

  return (
    <section id="commodities" className="py-20 bg-white border-b border-[#E1E1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-b border-[#E1E1E1] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1C75BC] uppercase tracking-wider block">
              {t.commodities.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#414042] tracking-tight">
              {t.commodities.title}
            </h2>
            <p className="text-xs text-[#4D4D4D] max-w-2xl leading-relaxed">
              {t.commodities.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="inline-flex rounded-xs border border-[#E1E1E1] bg-[#F7F9FB] p-1">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#1C75BC] text-white shadow-xs'
                  : 'text-[#414042] hover:text-[#1C75BC]'
              }`}
            >
              {t.commodities.allItems} ({commodities.length})
            </button>
            <button
              onClick={() => setSelectedCategory('commodities')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-all ${
                selectedCategory === 'commodities'
                  ? 'bg-[#1C75BC] text-white shadow-xs'
                  : 'text-[#414042] hover:text-[#1C75BC]'
              }`}
            >
              {t.commodities.commoditiesTab}
            </button>
            <button
              onClick={() => setSelectedCategory('energy')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-all ${
                selectedCategory === 'energy'
                  ? 'bg-[#1C75BC] text-white shadow-xs'
                  : 'text-[#414042] hover:text-[#1C75BC]'
              }`}
            >
              {t.commodities.energyTab}
            </button>
            <button
              onClick={() => setSelectedCategory('industrial')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xs transition-all ${
                selectedCategory === 'industrial'
                  ? 'bg-[#1C75BC] text-white shadow-xs'
                  : 'text-[#414042] hover:text-[#1C75BC]'
              }`}
            >
              {t.commodities.industrialTab}
            </button>
          </div>
        </div>

        {/* Commodity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item._id}
              className="bg-[#F7F9FB] border border-[#E1E1E1] rounded-xs p-6 flex flex-col justify-between hover:border-[#1C75BC] transition-all shadow-xs"
            >
              <div className="space-y-4">
                {/* Direction & Status Header */}
                <div className="flex items-center justify-between text-xs">
                  <span
                    className={`px-2.5 py-0.5 rounded-xs text-[10px] font-bold uppercase tracking-wider ${
                      item.tradeDirection === 'Export'
                        ? 'bg-[#EBF7EE] text-[#0E5A3A] border border-[#BCE6C4]'
                        : 'bg-[#EFF6FF] text-[#1C75BC] border border-[#BFDBFE]'
                    }`}
                  >
                    {item.tradeDirection}
                  </span>

                  <span className="text-[11px] font-mono text-[#0E5A3A] flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {t.commodities.activeStock}
                  </span>
                </div>

                {/* Name */}
                <div>
                  <h3 className="text-base font-bold text-[#414042] tracking-tight">{item.name}</h3>
                  {item.description && (
                    <p className="text-xs text-[#4D4D4D] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Specs Data Matrix */}
                <div className="space-y-2 pt-3 border-t border-[#E1E1E1] text-xs">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[#7A7A7D] shrink-0">Grade/Spec:</span>
                    <span className="font-semibold text-[#414042] text-right">
                      {item.availableGrades}
                    </span>
                  </div>

                  {item.originDestination && (
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#7A7A7D] shrink-0">Corridor:</span>
                      <span className="font-mono text-[11px] text-[#414042] text-right">
                        {item.originDestination}
                      </span>
                    </div>
                  )}

                  {item.minimumVolume && (
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#7A7A7D] shrink-0">Min Lot:</span>
                      <span className="font-mono text-[11px] text-[#1C75BC] font-bold text-right">
                        {item.minimumVolume}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="pt-5 mt-4 border-t border-[#E1E1E1]">
                <a
                  href={`#quote`}
                  className="flex items-center justify-between w-full py-2 px-3 rounded-xs bg-white border border-[#E1E1E1] hover:bg-[#1C75BC] hover:border-[#1C75BC] text-[#414042] hover:text-white transition-all text-xs font-bold group"
                >
                  <span>{t.commodities.requestAllocation}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1C75BC] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
