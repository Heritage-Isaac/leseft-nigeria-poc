'use client'

import React, { useState } from 'react'
import {
  Monitor,
  FileText,
  Sliders,
  BarChart2,
  Shield,
  ExternalLink,
  ChevronRight,
  Database,
  Cloud,
  CheckCircle,
} from 'lucide-react'
import { LiveWebsiteFrame } from './LiveWebsiteFrame'
import { CompanyProfileManager } from './CompanyProfileManager'
import { SiteAppearanceManager } from './SiteAppearanceManager'
import { AnalyticsView } from './AnalyticsView'
import { AuditLogView } from '../audit/AuditLogView'

interface AdminSuiteProps {
  logs: any[]
  initialProfile?: any
}

export function AdminSuite({ logs, initialProfile }: AdminSuiteProps) {
  const [activeTab, setActiveTab] = useState<
    'preview' | 'profile' | 'appearance' | 'analytics' | 'audit' | 'deployment'
  >('preview')

  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleDocumentSaved = () => {
    // Refresh the live preview frame after saving to Sanity
    setRefreshTrigger((prev) => prev + 1)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F7F8FA] text-[#17191C] font-sans">
      {/* 1. Left Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-[#E5E7EB] flex flex-col justify-between shrink-0 z-20">
        <div>
          {/* Brand Header */}
          <div className="px-5 py-4 border-b border-[#E5E7EB] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#17191C] text-white flex items-center justify-center font-bold text-xs tracking-tight">
                LS
              </div>
              <div>
                <h1 className="text-xs font-bold text-[#17191C] tracking-tight">LeSeft Nigeria</h1>
                <p className="text-[10px] text-[#89919A] uppercase tracking-wider font-semibold">
                  Administration
                </p>
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-[#16A36A]" title="System Active" />
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {[
              {
                id: 'preview',
                label: 'Live Site & Controls',
                icon: Monitor,
                badge: 'Live',
              },
              {
                id: 'profile',
                label: 'Company Profile',
                icon: FileText,
                badge: 'Sanity',
              },
              {
                id: 'appearance',
                label: 'Appearance & Style',
                icon: Sliders,
              },
              {
                id: 'analytics',
                label: 'Website Analytics',
                icon: BarChart2,
              },
              {
                id: 'audit',
                label: 'Audit & Governance',
                icon: Shield,
              },
              {
                id: 'deployment',
                label: 'Vercel & Handover',
                icon: Cloud,
              },
            ].map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xs text-xs font-semibold transition-all text-left ${
                    isActive
                      ? 'bg-[#EAF1FF] text-[#2563EB]'
                      : 'text-[#626B75] hover:text-[#17191C] hover:bg-[#F1F3F5]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded-xs ${
                        isActive
                          ? 'bg-[#2563EB] text-white'
                          : 'bg-[#F1F3F5] text-[#626B75]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Footer: Handover & Studio Launcher */}
        <div className="p-3 border-t border-[#E5E7EB] bg-[#FAFAFA] space-y-2">
          <a
            href="http://localhost:3333"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2 rounded-xs border border-[#E5E7EB] bg-white text-xs font-semibold text-[#17191C] hover:bg-[#F1F3F5] transition-colors"
          >
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Sanity Studio (Port 3333)</span>
            </div>
            <ExternalLink className="w-3 h-3 text-[#89919A]" />
          </a>
        </div>
      </aside>

      {/* 2. Main Content Canvas */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-white">
        {/* Top Breadcrumb & Status Bar */}
        <header className="h-13 bg-white border-b border-[#E5E7EB] px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#89919A]">Admin</span>
            <span className="text-[#89919A]">/</span>
            <span className="font-semibold text-[#17191C] capitalize">
              {activeTab === 'preview'
                ? 'Live Website & Control Drawer'
                : activeTab === 'profile'
                ? 'Company Profile (Sanity)'
                : activeTab === 'appearance'
                ? 'Site Appearance & Geometry'
                : activeTab === 'analytics'
                ? 'Traffic & Telemetry'
                : activeTab === 'audit'
                ? 'Audit Logs'
                : 'Vercel Deployment Guide'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#626B75] hidden sm:inline">
              Project: <strong className="text-[#17191C] font-mono">5c2yalf2</strong>
            </span>
            <span className="text-xs text-[#89919A] hidden sm:inline">•</span>
            <span className="text-xs text-[#626B75] hidden sm:inline">
              Dataset: <strong className="text-[#17191C] font-mono">production</strong>
            </span>
          </div>
        </header>

        {/* Tab Body */}
        <div className="flex-1 flex overflow-hidden">
          {activeTab === 'preview' && (
            <div className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden">
              {/* Actual Running Website in Iframe */}
              <LiveWebsiteFrame key={refreshTrigger} />

              {/* Real Content Controls Drawer on the right */}
              <div className="w-full lg:w-[440px] bg-white border-l border-[#E5E7EB] p-6 overflow-y-auto shrink-0 space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-[#17191C]">Quick Content Editor</h3>
                  <p className="text-xs text-[#626B75] mt-0.5">
                    Save directly to Sanity Content Lake and preview changes on the live site.
                  </p>
                </div>

                <CompanyProfileManager
                  initialProfile={initialProfile}
                  onSaved={handleDocumentSaved}
                />
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F7F8FA]">
              <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xs border border-[#E5E7EB] shadow-xs">
                <CompanyProfileManager
                  initialProfile={initialProfile}
                  onSaved={handleDocumentSaved}
                />
              </div>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F7F8FA]">
              <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xs border border-[#E5E7EB] shadow-xs">
                <SiteAppearanceManager />
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F7F8FA]">
              <div className="max-w-5xl mx-auto">
                <AnalyticsView />
              </div>
            </div>
          )}

          {activeTab === 'audit' && (
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F7F8FA] space-y-6 max-w-5xl mx-auto">
              <div className="border-b border-[#E5E7EB] pb-3">
                <h2 className="text-base font-bold text-[#17191C]">Audit & Governance Logs</h2>
                <p className="text-xs text-[#626B75]">
                  Real-time Sanity content lake mutations and user actions.
                </p>
              </div>
              <AuditLogView logs={logs} />
            </div>
          )}

          {activeTab === 'deployment' && (
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#F7F8FA]">
              <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xs border border-[#E5E7EB] shadow-xs space-y-6">
                <div className="border-b border-[#E5E7EB] pb-4">
                  <h2 className="text-base font-bold text-[#17191C]">
                    Production Deployment & Handover Guide
                  </h2>
                  <p className="text-xs text-[#626B75] mt-1">
                    How your monorepo runs in production without paying for two servers.
                  </p>
                </div>

                <div className="space-y-4 text-xs text-[#626B75] leading-relaxed">
                  <div className="p-4 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] space-y-2">
                    <p className="font-bold text-[#17191C] text-sm">
                      1. Deploying the Website on Vercel
                    </p>
                    <p>
                      Connect your GitHub repository to Vercel. In Vercel’s project settings:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 font-mono text-[11px] text-[#17191C]">
                      <li>Root Directory: <strong>web</strong></li>
                      <li>Framework Preset: <strong>Next.js</strong></li>
                      <li>Environment Variable: <strong>NEXT_PUBLIC_SANITY_PROJECT_ID = 5c2yalf2</strong></li>
                      <li>Environment Variable: <strong>NEXT_PUBLIC_SANITY_DATASET = production</strong></li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-[#F7F8FA] border border-[#E5E7EB] space-y-2">
                    <p className="font-bold text-[#17191C] text-sm">
                      2. Deploying Sanity Studio to Sanity Cloud (Free)
                    </p>
                    <p>
                      Sanity provides free global hosting for your Studio. In your terminal:
                    </p>
                    <pre className="p-3 bg-[#17191C] text-white rounded font-mono text-[11px]">
cd studio{'\n'}npx sanity deploy
                    </pre>
                    <p>
                      Choose your hostname (e.g. <code>leseft-nigeria.sanity.studio</code>). It will be permanently live on Sanity’s CDN.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#EAF1FF] border border-[#B7E1CD] text-[#17191C] space-y-1">
                    <p className="font-bold text-[#2563EB]">
                      3. Handover to Non-Technical Staff
                    </p>
                    <p className="text-xs">
                      They simply navigate to <code>your-domain.vercel.app/admin</code> to edit headlines, text, and settings directly, with the live site visible on screen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
