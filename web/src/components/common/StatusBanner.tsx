'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Database } from 'lucide-react'

interface StatusBannerProps {
  isLiveFromSanity: boolean
  companyName: string
}

export function StatusBanner({ isLiveFromSanity, companyName }: StatusBannerProps) {
  return (
    <aside aria-label="CMS Architecture Notice" className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="flex h-2 w-2 relative">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isLiveFromSanity ? 'bg-emerald-400' : 'bg-amber-400'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isLiveFromSanity ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
            />
          </span>
          <span className="font-medium text-slate-200">
            {isLiveFromSanity
              ? 'Sanity CMS Connected (Live API Dataset)'
              : 'Sanity Studio Ready • Showing Initial POC Content'}
          </span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="hidden md:inline text-slate-400">
            {isLiveFromSanity
              ? `Published updates for ${companyName} sync instantly without redeploying.`
              : 'Edit or publish real content at /studio to test live updating.'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/studio"
            className="inline-flex items-center gap-1.5 font-medium text-sky-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors"
          >
            <Database className="w-3.5 h-3.5 text-sky-400" />
            <span>Open Studio</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </aside>
  )
}
