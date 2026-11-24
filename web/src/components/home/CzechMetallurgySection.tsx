'use client'

import React from 'react'
import {
  Layers,
  Hammer,
  Boxes,
  Factory,
  ShieldCheck,
  Check,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function CzechMetallurgySection() {
  const { t } = useLanguage()

  const categories = [
    {
      title: t.metallurgy.ingotsTitle,
      desc: t.metallurgy.ingotsDesc,
      icon: Layers,
      specs: t.metallurgy.ingotsSpecs,
      badge: 'EN Standards',
      recommendedPhoto:
        'Suggested asset: /images/metallurgy/steel-ingots.jpg (High-temperature glowing steel ingot during thermal cooling or warehouse stack)',
    },
    {
      title: t.metallurgy.forgingsTitle,
      desc: t.metallurgy.forgingsDesc,
      icon: Hammer,
      specs: t.metallurgy.forgingsSpecs,
      badge: '20 kg – Multi-Ton',
      recommendedPhoto:
        'Suggested asset: /images/metallurgy/forgings.jpg (Industrial hydraulic forging press stamping heavy alloy component)',
    },
    {
      title: t.metallurgy.castingsTitle,
      desc: t.metallurgy.castingsDesc,
      icon: Boxes,
      specs: t.metallurgy.castingsSpecs,
      badge: 'Up to 170 MT',
      recommendedPhoto:
        'Suggested asset: /images/metallurgy/castings.jpg (Large scale turbine casing or industrial marine pump casting in foundry)',
    },
    {
      title: t.metallurgy.equipmentTitle,
      desc: t.metallurgy.equipmentDesc,
      icon: Factory,
      specs: t.metallurgy.equipmentSpecs,
      badge: 'Energy & Mining',
      recommendedPhoto:
        'Suggested asset: /images/metallurgy/equipment.jpg (Heavy power transformer or high-pressure slurry pumping installation)',
    },
  ]

  const partners = [
    {
      name: 'SIGMA GROUP',
      desc: 'Most prominent Czech pump manufacturer and engineering exporter with a long history in high-pressure fluid delivery.',
    },
    {
      name: 'ETD TRANSFORMÁTORY',
      desc: 'Manufacturer of 1-phase & 3-phase power transformers and special reactors, carrying forward the century-old Škoda Plzeň tradition.',
    },
    {
      name: 'ŽĎAS',
      desc: 'Industrial enterprise with 2,500+ employees producing forgings, castings, machine parts, and heavy hydraulic forging presses.',
    },
    {
      name: 'CZECH PRECISION FORGE (CPF)',
      desc: 'European leader in closed-die and open-die forgings from premium alloy steels for energy, marine, and aerospace applications.',
    },
    {
      name: 'VÍTKOVICE MACHINERY GROUP',
      desc: 'Major Czech engineering group producing steel gas cylinders, marine crankshafts for cargo vessels, and energy equipment.',
    },
  ]

  return (
    <section id="metallurgy" className="py-20 bg-white border-b border-[#E1E1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header with Leseft Blue Accents */}
        <div className="border-b-2 border-[#1C75BC] pb-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#F0F7FC] border border-[#1C75BC]/30 text-xs font-bold text-[#1C75BC]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1C75BC]" />
              <span>{t.metallurgy.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#414042] tracking-tight">
              {t.metallurgy.title}
            </h2>
            <p className="text-xs text-[#4D4D4D] leading-relaxed">
              {t.metallurgy.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="px-3 py-2 rounded-xs bg-[#F7F9FB] border border-[#E1E1E1] text-[11px] font-semibold text-[#414042] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1C75BC]" />
              <span>{t.metallurgy.isoBadge}</span>
            </div>
            <a
              href="https://www.leseft.cz/activity/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#1C75BC] hover:bg-[#145A91] rounded-xs transition-colors shadow-xs"
            >
              <span>Visit leseft.cz</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Core Metallurgy & Heavy Industrial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon

            return (
              <div
                key={cat.title}
                className="bg-[#F7F9FB] border border-[#E1E1E1] rounded-xs p-6 flex flex-col justify-between hover:border-[#1C75BC] transition-all group"
              >
                <div className="space-y-5">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-[#E1E1E1] pb-3">
                    <div className="w-9 h-9 rounded-xs bg-[#1C75BC] text-white flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs bg-white border border-[#E1E1E1] text-[#1C75BC]">
                      {cat.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#414042] tracking-tight group-hover:text-[#1C75BC] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#4D4D4D] mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  {/* Bullet Specs */}
                  <div className="space-y-1.5 pt-2 border-t border-[#E1E1E1]">
                    {cat.specs.map((spec, i) => (
                      <div key={i} className="text-[11px] text-[#414042] flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-[#1C75BC] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photo Art Direction Slot Note */}
                <div className="pt-4 mt-4 border-t border-[#E1E1E1] space-y-2">
                  <div className="p-2.5 bg-white border border-[#E1E1E1] rounded-xs text-[10px] text-[#7A7A7D] leading-snug">
                    <span className="font-semibold text-[#1C75BC] block uppercase font-mono">
                      Image Slot
                    </span>
                    {cat.recommendedPhoto}
                  </div>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1C75BC] hover:underline"
                  >
                    <span>Request Technical Specs</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Czech Partner Enterprises Banner */}
        <div className="bg-[#414042] text-white rounded-xs p-8 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-bold text-[#27AAE1] uppercase tracking-wider block">
              Czech Industrial Alliance
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white mt-1">
              {t.metallurgy.partnersTitle}
            </h3>
            <p className="text-xs text-[#C9D1D9] mt-0.5">
              {t.metallurgy.partnersSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="p-4 rounded-xs bg-[#2A2A2C] border border-white/10 space-y-2 hover:border-[#1C75BC] transition-colors"
              >
                <div className="w-full py-1 text-center bg-[#1C75BC] text-white text-[11px] font-bold rounded-xs tracking-wider">
                  {p.name}
                </div>
                <p className="text-[11px] text-[#C9D1D9] leading-snug">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
