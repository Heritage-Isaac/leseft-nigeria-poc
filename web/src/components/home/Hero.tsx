'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, CheckCircle2, Building } from 'lucide-react'
import type { CompanyProfile } from '@/types'
import { SanityImage } from '@/components/common/SanityImage'

export function Hero({ profile }: { profile: CompanyProfile }) {
  return (
    <section className="relative bg-slate-50 border-b border-slate-200 overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle geometric grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Corporate Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs">
              <span className="w-2 h-2 rounded-xs bg-sky-600"></span>
              <span>Sanity CMS + Next.js Integration POC</span>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-bold uppercase tracking-wider text-sky-700 block">
                {profile.companyName}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {profile.pageHeading}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {profile.shortIntroduction}
            </p>

            {/* Verification metrics / Trust markers */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/80">
              <div className="space-y-1">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">CMS Engine</span>
                <p className="text-sm font-semibold text-slate-900">Sanity Studio v3</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Frontend</span>
                <p className="text-sm font-semibold text-slate-900">Next.js App Router</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Publish Mode</span>
                <p className="text-sm font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Instant Sync
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#recent-projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xs shadow-xs hover:shadow-sm transition-all"
              >
                <span>View Recent Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="http://localhost:3333"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xs transition-all shadow-xs"
              >
                <span>Edit Content in Studio</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-white p-2 shadow-xs">
              <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-slate-100">
                <SanityImage
                  image={profile.companyImage}
                  alt={profile.companyName}
                  fill
                  priority
                  className="hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Metadata badge underneath image */}
              <div className="p-3.5 bg-white flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2 font-medium">
                  <Building className="w-4 h-4 text-sky-600" />
                  <span>Corporate Headquarters & Operations</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Sanity Asset</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
