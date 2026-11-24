import React from 'react'
import { Target, Compass, Award, ShieldCheck, Cpu, Leaf } from 'lucide-react'
import type { CompanyProfile } from '@/types'
import { PortableTextRenderer } from '@/components/common/PortableTextRenderer'

export function CompanyOverview({ profile }: { profile: CompanyProfile }) {
  // Value icons mapping for visual variety
  const valueIcons = [ShieldCheck, Cpu, Award, Leaf]

  return (
    <section id="company-overview" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            About LeSeft Nigeria
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Institutional Capability & Strategic Focus
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            All company profile fields below are managed dynamically in Sanity Studio at{' '}
            <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">
              schema: companyProfile
            </code>
            .
          </p>
        </div>

        {/* Narrative / Full Description */}
        {profile.fullDescription && profile.fullDescription.length > 0 && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 max-w-4xl">
            <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-4">
              Company Narrative
            </h3>
            <PortableTextRenderer value={profile.fullDescription} />
          </div>
        )}

        {/* Mission & Vision Cards */}
        <div id="mission-vision" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="border border-slate-200 rounded-xl p-8 bg-slate-50/60 hover:bg-slate-50 transition-colors space-y-4">
            <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Our Corporate Mission
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {profile.mission}
            </p>
          </div>

          {/* Vision Card */}
          <div className="border border-slate-200 rounded-xl p-8 bg-slate-50/60 hover:bg-slate-50 transition-colors space-y-4">
            <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Our Vision
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {profile.vision}
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        {profile.coreValues && profile.coreValues.length > 0 && (
          <div className="space-y-8 pt-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Ethical Foundation
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Core Operating Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {profile.coreValues.map((val, idx) => {
                const IconComponent = valueIcons[idx % valueIcons.length]
                return (
                  <div
                    key={val.title || idx}
                    className="border border-slate-200 rounded-lg p-6 bg-white hover:border-slate-300 transition-all space-y-3"
                  >
                    <div className="w-8 h-8 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-base text-slate-900">{val.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
