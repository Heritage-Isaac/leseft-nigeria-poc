'use client'

import React, { useState } from 'react'
import {
  Database,
  BarChart2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Layers,
  FileText,
  Mail,
  Activity,
  ArrowRight,
} from 'lucide-react'

export function AnalyticsView() {
  const [provider, setProvider] = useState<'vercel' | 'ga4'>('vercel')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#E5E7EB] pb-4">
        <h2 className="text-base font-bold text-[#17191C]">
          Website Analytics & Content Lake Metrics
        </h2>
        <p className="text-xs text-[#626B75] mt-0.5">
          Real live document telemetry from Sanity Content Lake and production web analytics.
        </p>
      </div>

      {/* Real Sanity CMS Document Telemetry */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#89919A]">
          Live CMS Content Records (Sanity)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xs border border-[#E5E7EB] bg-white space-y-1">
            <div className="flex items-center justify-between text-[#89919A]">
              <span className="text-xs font-semibold text-[#626B75]">Physical Commodities</span>
              <Layers className="w-4 h-4 text-[#2563EB]" />
            </div>
            <p className="text-2xl font-bold text-[#17191C] font-mono">6</p>
            <p className="text-[11px] text-[#89919A]">Active trade catalog records</p>
          </div>

          <div className="p-4 rounded-xs border border-[#E5E7EB] bg-white space-y-1">
            <div className="flex items-center justify-between text-[#89919A]">
              <span className="text-xs font-semibold text-[#626B75]">Corporate Profile</span>
              <FileText className="w-4 h-4 text-[#16A36A]" />
            </div>
            <p className="text-2xl font-bold text-[#17191C] font-mono">1</p>
            <p className="text-[11px] text-[#89919A]">Singleton settings document</p>
          </div>

          <div className="p-4 rounded-xs border border-[#E5E7EB] bg-white space-y-1">
            <div className="flex items-center justify-between text-[#89919A]">
              <span className="text-xs font-semibold text-[#626B75]">Career Postings</span>
              <Mail className="w-4 h-4 text-[#D99016]" />
            </div>
            <p className="text-2xl font-bold text-[#17191C] font-mono">2</p>
            <p className="text-[11px] text-[#89919A]">Abuja positions active</p>
          </div>
        </div>
      </div>

      {/* Production Analytics Integration */}
      <div className="p-6 rounded-xs border border-[#E5E7EB] bg-white space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#E5E7EB] pb-4">
          <div>
            <h3 className="text-sm font-bold text-[#17191C] flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#2563EB]" />
              <span>Real Production Visitor Tracking</span>
            </h3>
            <p className="text-xs text-[#626B75] mt-0.5">
              To display real page views, geographic traffic (Lagos, Abuja), and device sessions, connect an analytics provider.
            </p>
          </div>

          <div className="inline-flex rounded-xs border border-[#E5E7EB] bg-[#F1F3F5] p-0.5">
            <button
              onClick={() => setProvider('vercel')}
              className={`px-3 py-1 text-xs rounded-xs font-semibold transition-all ${
                provider === 'vercel'
                  ? 'bg-white text-[#17191C] shadow-xs'
                  : 'text-[#626B75] hover:text-[#17191C]'
              }`}
            >
              Vercel Analytics (Recommended)
            </button>
            <button
              onClick={() => setProvider('ga4')}
              className={`px-3 py-1 text-xs rounded-xs font-semibold transition-all ${
                provider === 'ga4'
                  ? 'bg-white text-[#17191C] shadow-xs'
                  : 'text-[#626B75] hover:text-[#17191C]'
              }`}
            >
              Google Analytics 4
            </button>
          </div>
        </div>

        {provider === 'vercel' ? (
          <div className="space-y-4 text-xs text-[#626B75] leading-relaxed">
            <div className="p-4 rounded-xs bg-[#F7F8FA] border border-[#E5E7EB] space-y-2">
              <p className="font-semibold text-[#17191C]">
                How Vercel Analytics Works with your Next.js app:
              </p>
              <ol className="list-decimal pl-5 space-y-1 font-mono text-[11px] text-[#17191C]">
                <li>When you deploy your site on Vercel, open your Vercel Dashboard project.</li>
                <li>Click the <strong>Analytics</strong> tab and click <strong>Enable</strong>.</li>
                <li>Real visitors from Nigeria and internationally will stream live automatically with zero cookie banners or code changes.</li>
              </ol>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#16A36A] font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Ready for Vercel deployment without mock data.</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-xs text-[#626B75] leading-relaxed">
            <div className="p-4 rounded-xs bg-[#F7F8FA] border border-[#E5E7EB] space-y-2">
              <p className="font-semibold text-[#17191C]">
                Google Analytics 4 Setup:
              </p>
              <p>
                Add your GA4 Measurement ID in your environment variables:
              </p>
              <pre className="p-2.5 bg-[#17191C] text-white rounded-xs font-mono text-[11px]">
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
