'use client'

import React, { useState } from 'react'
import {
  TrendingUp,
  Users,
  Eye,
  FileCheck,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  ArrowUpRight,
  Clock,
  MapPin,
  RefreshCw,
} from 'lucide-react'

export function AnalyticsView() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d')
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 600)
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Header & Range Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Executive Intelligence
          </span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Website Traffic & Engagement Analytics
          </h2>
          <p className="text-sm text-slate-500">
            Audience metrics across Nigerian corporate corridors and international partners.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-xs">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  timeRange === range
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {range === '7d' ? 'Last 7 Days' : range === '30d' ? 'Last 30 Days' : 'Quarterly'}
              </button>
            ))}
          </div>

          <button
            onClick={handleRefresh}
            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all shadow-xs"
            title="Refresh metrics"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-sky-600' : ''}`} />
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Total Visitors
            </span>
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">34,820</span>
            <span className="text-xs font-semibold text-emerald-600 flex items-center">
              <ArrowUpRight className="w-3.5 h-3.5" /> +18.4%
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">vs. previous period</p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-sky-600" />
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Page Impressions
            </span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">92,410</span>
            <span className="text-xs font-semibold text-emerald-600 flex items-center">
              <ArrowUpRight className="w-3.5 h-3.5" /> +24.1%
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">2.65 pages per session</p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600" />
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Avg. Engagement Time
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">3m 48s</span>
            <span className="text-xs font-semibold text-emerald-600 flex items-center">
              <ArrowUpRight className="w-3.5 h-3.5" /> +12s
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">Bounce rate: 21.2%</p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600" />
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Corporate Inquiries
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <FileCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900">142</span>
            <span className="text-xs font-semibold text-emerald-600 flex items-center">
              <ArrowUpRight className="w-3.5 h-3.5" /> +31.5%
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">RFP downloads & form leads</p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600" />
        </div>
      </div>

      {/* Nigerian Regional Demographics & Device Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Regional Breakdown */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-sky-600" />
              <h3 className="text-base font-bold text-slate-900">
                Nigerian Regional Traffic Distribution
              </h3>
            </div>
            <span className="text-xs font-medium text-slate-500">Live Geo-telemetry</span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-slate-800 font-semibold">Lagos Commercial Hub (VI, Lekki, Ikeja)</span>
                <span className="text-slate-600">54% (18,802 visitors)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-sky-600 rounded-full transition-all duration-1000" style={{ width: '54%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-slate-800 font-semibold">Abuja FCT (Federal Ministries, Embassies)</span>
                <span className="text-slate-600">26% (9,053 visitors)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 rounded-full transition-all duration-1000" style={{ width: '26%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-slate-800 font-semibold">Rivers State / Port Harcourt (Energy & Marine)</span>
                <span className="text-slate-600">11% (3,830 visitors)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full transition-all duration-1000" style={{ width: '11%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-slate-800 font-semibold">Ogun & Industrial Belts (Sagamu, Agbara)</span>
                <span className="text-slate-600">6% (2,089 visitors)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full transition-all duration-1000" style={{ width: '6%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-slate-800 font-semibold">International Investors (UK, UAE, US, South Africa)</span>
                <span className="text-slate-600">3% (1,046 visitors)</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full transition-all duration-1000" style={{ width: '3%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Devices Split */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-slate-900">Device Breakdown</h3>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-sky-600" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Mobile Devices</p>
                  <p className="text-[11px] text-slate-500">iOS & Android Smart</p>
                </div>
              </div>
              <span className="text-sm font-extrabold text-slate-900">68.2%</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Desktop / Laptop</p>
                  <p className="text-[11px] text-slate-500">Corporate workstations</p>
                </div>
              </div>
              <span className="text-sm font-extrabold text-slate-900">29.4%</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3">
                <Tablet className="w-5 h-5 text-amber-600" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Tablets</p>
                  <p className="text-[11px] text-slate-500">iPads & Tablets</p>
                </div>
              </div>
              <span className="text-sm font-extrabold text-slate-900">2.4%</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-sky-50 border border-sky-100 text-sky-900 text-xs leading-relaxed">
            💡 <strong>Optimization Tip:</strong> 68% of stakeholders view project portfolios on mobile during site visits. Responsive visual controls ensure perfect presentation.
          </div>
        </div>
      </div>

      {/* Top Performing Projects */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">
              Most Viewed Corporate Projects
            </h3>
          </div>
          <span className="text-xs font-semibold text-slate-500">Ranked by Engagement</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Project Name</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Unique Views</th>
                <th className="py-3 px-4">Avg. View Duration</th>
                <th className="py-3 px-4 text-right">RFP Clicks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-bold text-slate-900">
                  Monimove Integrated Supply Logistics Facility
                </td>
                <td className="py-3 px-4 text-slate-600">Victoria Island, Lagos</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    In Progress
                  </span>
                </td>
                <td className="py-3 px-4 font-semibold">12,410</td>
                <td className="py-3 px-4">4m 12s</td>
                <td className="py-3 px-4 font-bold text-emerald-700 text-right">64</td>
              </tr>

              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-bold text-slate-900">
                  Agro-Industrial Processing Complex
                </td>
                <td className="py-3 px-4 text-slate-600">Sagamu Industrial Zone, Ogun</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Completed
                  </span>
                </td>
                <td className="py-3 px-4 font-semibold">8,920</td>
                <td className="py-3 px-4">3m 35s</td>
                <td className="py-3 px-4 font-bold text-emerald-700 text-right">48</td>
              </tr>

              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-4 font-bold text-slate-900">
                  Trans-Niger Energy Distribution Hub
                </td>
                <td className="py-3 px-4 text-slate-600">Port Harcourt, Rivers State</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    Upcoming
                  </span>
                </td>
                <td className="py-3 px-4 font-semibold">6,180</td>
                <td className="py-3 px-4">2m 54s</td>
                <td className="py-3 px-4 font-bold text-emerald-700 text-right">30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
