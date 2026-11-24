import React from 'react'
import { Target, Compass } from 'lucide-react'
import type { CompanyProfile } from '@/types'
import { SanityImage } from '@/components/common/SanityImage'
import { PortableTextRenderer } from '@/components/common/PortableTextRenderer'

export function AboutHero({ profile }: { profile: CompanyProfile }) {
  return (
    <div className="space-y-16">
      {/* Top Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block">
            About LeSeft Nigeria Limited
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Built on Integrity, Engineered for Resilience
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {profile.shortIntroduction}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-xs">
            <div className="space-y-1">
              <span className="font-semibold text-slate-900">Indigenous Leadership</span>
              <p className="text-slate-500">100% Nigerian ownership & management</p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-slate-900">Headquarters</span>
              <p className="text-slate-500">Victoria Island, Lagos & Abuja FCT</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200 bg-white p-2 shadow-xs">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <SanityImage image={profile.companyImage} alt={profile.companyName} fill priority />
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      {profile.fullDescription && profile.fullDescription.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
            Corporate Narrative & Scope
          </h2>
          <PortableTextRenderer value={profile.fullDescription} />
        </div>
      )}

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{profile.mission}</p>
        </div>

        <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{profile.vision}</p>
        </div>
      </div>
    </div>
  )
}
