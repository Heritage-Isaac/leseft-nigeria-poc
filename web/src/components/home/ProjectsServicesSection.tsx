'use client'

import React from 'react'
import { Briefcase, Zap, Pickaxe, Droplets, GraduationCap, ArrowRight } from 'lucide-react'
import type { Sector } from '@/types'

interface ProjectsServicesSectionProps {
  sectors?: Sector[]
}

export function ProjectsServicesSection({ sectors = [] }: ProjectsServicesSectionProps) {
  const pillars = [
    {
      code: 'A',
      icon: Briefcase,
      title: 'Project Management & Development',
      points: [
        'Full lifecycle management from feasibility study to launch',
        'Project concept development & transaction structuring',
        'Partner identification, selection & state/private coordination',
      ],
    },
    {
      code: 'B',
      icon: Zap,
      title: 'Energy Projects',
      points: [
        'Thermal power generation projects',
        'Energy project feasibility studies',
        'Partner, technology selection & implementation support',
      ],
    },
    {
      code: 'C',
      icon: Pickaxe,
      title: 'Mining & Metals Projects',
      points: [
        'Mining & primary mineral-processing project development',
        'Feasibility studies & technical structuring',
        'Equipment, technology sourcing & implementation support',
      ],
    },
    {
      code: 'D',
      icon: Droplets,
      title: 'Water Resources',
      points: [
        'Water-resource management planning',
        'Water infrastructure and treatment solutions',
        'Project development and implementation support',
      ],
    },
    {
      code: 'E',
      icon: GraduationCap,
      title: 'Training, Market Development & Localisation',
      points: [
        'Corporate, technical & equipment-operation training',
        'Partner identification & negotiation across Europe, Asia & West Africa',
        'Localisation of production & local capacity development',
      ],
    },
  ]

  return (
    <section id="projects" className="py-16 lg:py-20 bg-white border-b border-[#E1E1E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-[#E1E1E1] pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1C75BC] uppercase tracking-wider block">
              Projects &amp; Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#414042] tracking-tight">
              Project Development, Implementation &amp; Localisation
            </h2>
          </div>
          <p className="text-xs text-[#4D4D4D] max-w-md leading-relaxed">
            From feasibility studies and partner selection to equipment commissioning and local
            workforce training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.code}
                className="p-6 bg-[#F7F9FB] border border-[#E1E1E1] rounded-xs space-y-4 hover:border-[#1C75BC] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xs bg-[#1C75BC] text-white flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-white border border-[#E1E1E1] text-[#1C75BC] rounded-xs">
                    {pillar.code}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#414042]">{pillar.title}</h3>
                <ul className="space-y-2">
                  {pillar.points.map((pt) => (
                    <li key={pt} className="text-xs text-[#4D4D4D] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1C75BC] mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}

          {/* Dynamic Sanity Sectors Summary Card */}
          <div className="p-6 bg-[#414042] text-white rounded-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#27AAE1] font-bold">
                Sanity CMS Live Verticals ({sectors.length})
              </span>
              <h3 className="text-base font-bold">Explore Active Sector Mandates</h3>
              <ul className="space-y-1.5 text-xs text-[#D8DEE4]">
                {sectors.slice(0, 3).map((s) => (
                  <li key={s._id}>• {s.title}</li>
                ))}
              </ul>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1C75BC] hover:bg-[#145A91] text-white text-xs font-bold rounded-xs transition-colors"
            >
              <span>Submit a Project Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
