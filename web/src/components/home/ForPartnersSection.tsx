'use client'

import React from 'react'
import { Factory, Ship, Landmark, Globe, ArrowRight } from 'lucide-react'

export function ForPartnersSection() {
  const partnerGroups = [
    {
      code: 'A',
      icon: Factory,
      title: 'Manufacturers & Suppliers of Equipment and Technologies',
      audience: 'For international manufacturers entering Nigeria and West Africa',
      points: [
        'Local legal entity and operational team in Abuja',
        'Local implementation, certification & regulatory coordination',
        'Logistics, distributor/partner identification & transaction support',
      ],
    },
    {
      code: 'B',
      icon: Ship,
      title: 'Buyers of Raw Materials & Goods from West Africa',
      audience: 'For international buyers across Europe, Asia, and the Americas',
      points: [
        'Identification and vetting of regional suppliers',
        'Structured support with commodity enquiries',
        'Negotiation coordination, logistics & settlement support',
      ],
    },
    {
      code: 'C',
      icon: Landmark,
      title: 'Nigerian State & Private-Sector Entities',
      audience: 'For Nigerian organisations seeking international project support',
      points: [
        'Agro-industrial zone, energy generation & water infrastructure projects',
        'Project concepts and feasibility studies',
        'International partner identification & transaction structuring',
      ],
    },
    {
      code: 'D',
      icon: Globe,
      title: 'Government Bodies & Development Institutions',
      audience: 'For bilateral economic and trade cooperation',
      points: [
        'Strengthening trade corridors between Nigeria, West Africa, Europe, Asia & the Americas',
        'Institutional coordination and structured investment enquiries',
      ],
    },
  ]

  return (
    <section id="partners" className="py-16 lg:py-20 bg-[#F7F9FB] border-b border-[#E1E1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-[#E1E1E1] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1C75BC] uppercase tracking-wider block">
              For Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#414042] tracking-tight">
              How International &amp; Nigerian Partners Work with LeSeft
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#1C75BC] hover:bg-[#145A91] text-white text-xs font-bold rounded-xs transition-colors shrink-0"
          >
            <span>Submit a Partnership Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnerGroups.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.code}
                className="bg-white border border-[#E1E1E1] rounded-xs p-7 space-y-4 hover:border-[#1C75BC] transition-colors shadow-xs"
              >
                <div className="flex items-start justify-between gap-4 border-b border-[#F0F2F5] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xs bg-[#1C75BC] text-white flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#414042]">{group.title}</h3>
                      <p className="text-[11px] text-[#7A7A7D] mt-0.5">{group.audience}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#F7F9FB] border border-[#E1E1E1] text-[#1C75BC] rounded-xs shrink-0">
                    {group.code}
                  </span>
                </div>

                <ul className="space-y-2">
                  {group.points.map((pt) => (
                    <li key={pt} className="text-xs text-[#4D4D4D] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1C75BC] mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
