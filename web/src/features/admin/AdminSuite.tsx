'use client'

import React, { useState } from 'react'
import {
  BarChart3,
  Sliders,
  Database,
  Shield,
  Settings,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Sparkles,
  Building,
  CheckCircle,
  Bell,
  RefreshCw,
} from 'lucide-react'
import { AnalyticsView } from './AnalyticsView'
import { VisualEditorCanvas } from './VisualEditorCanvas'
import { InspectorDrawer } from './InspectorDrawer'
import { AuditLogView } from '../audit/AuditLogView'
import { UserManagementGuide } from '../audit/UserManagementGuide'
import type { SiteDesignConfig, SelectedElementInfo } from './types'

interface AdminSuiteProps {
  logs: any[]
}

export function AdminSuite({ logs }: AdminSuiteProps) {
  const [activeTab, setActiveTab] = useState<
    'analytics' | 'visual-editor' | 'sanity-studio' | 'audit-logs' | 'settings'
  >('visual-editor')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

  // Design tokens state
  const [designConfig, setDesignConfig] = useState<SiteDesignConfig>({
    colorTheme: 'navy',
    buttonRadius: 'subtle',
    cardStyle: 'border',
    hiddenElements: {
      heroCta: false,
      statusBanner: false,
      emailDemo: false,
    },
  })

  const [selectedElement, setSelectedElement] = useState<SelectedElementInfo | null>(null)

  const handleSelectElement = (element: SelectedElementInfo) => {
    setSelectedElement(element)
    setIsDrawerOpen(true)
  }

  const handleUpdateConfig = (newConfig: Partial<SiteDesignConfig>) => {
    setDesignConfig((prev) => ({
      ...prev,
      ...newConfig,
      hiddenElements: {
        ...prev.hiddenElements,
        ...(newConfig.hiddenElements || {}),
      },
    }))
  }

  const handleResetDefaults = () => {
    setDesignConfig({
      colorTheme: 'navy',
      buttonRadius: 'subtle',
      cardStyle: 'border',
      hiddenElements: {
        heroCta: false,
        statusBanner: false,
        emailDemo: false,
      },
    })
    setSelectedElement(null)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-900 text-slate-100 font-sans">
      {/* 1. Left Sidebar */}
      <aside
        className={`${
          sidebarCollapsed ? 'w-18' : 'w-64'
        } bg-slate-950 border-r border-slate-800 flex flex-col justify-between transition-all duration-300 z-20 shrink-0`}
      >
        <div>
          {/* Brand Logo Header */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center font-black text-white shrink-0 shadow-md">
                LS
              </div>
              {!sidebarCollapsed && (
                <div className="truncate">
                  <h1 className="text-sm font-extrabold text-white tracking-tight leading-none">
                    LeSeft Nigeria
                  </h1>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-sky-400">
                    Executive Suite
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1.5">
            {[
              {
                id: 'visual-editor',
                label: 'Visual Site Editor',
                icon: Sliders,
                badge: 'Live',
                badgeColor: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
              },
              {
                id: 'analytics',
                label: 'Traffic & Analytics',
                icon: BarChart3,
                badge: 'New',
                badgeColor: 'bg-sky-500/20 text-sky-400 border border-sky-500/30',
              },
              {
                id: 'sanity-studio',
                label: 'Sanity Content CMS',
                icon: Database,
                badge: 'Port 3333',
                badgeColor: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
              },
              {
                id: 'audit-logs',
                label: 'Audit & Governance',
                icon: Shield,
              },
              {
                id: 'settings',
                label: 'System & Platform',
                icon: Settings,
              },
            ].map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30 font-bold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  } ${sidebarCollapsed ? 'justify-center px-0' : ''}`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {!sidebarCollapsed && (
                    <div className="flex-1 flex items-center justify-between overflow-hidden">
                      <span className="truncate">{item.label}</span>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Footer Admin Info */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-sky-400 shrink-0">
              AD
            </div>
            {!sidebarCollapsed && (
              <div className="truncate text-left">
                <p className="text-xs font-bold text-white truncate">Admin Operations</p>
                <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync Connected
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-slate-100 text-slate-900">
        {/* Top Header Bar */}
        <header className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Admin Portal
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-extrabold text-slate-800 capitalize">
              {activeTab.replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* System Status Badges */}
            <div className="hidden md:flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Next.js (Port 3000)
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                Sanity Studio: 5c2yalf2
              </span>
            </div>

            {/* Quick Switch to Sanity Studio Link */}
            <a
              href="http://localhost:3333"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <span>Open Studio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        {/* Dynamic Tab Body */}
        <div className="flex-1 flex overflow-hidden">
          {activeTab === 'visual-editor' && (
            <>
              <VisualEditorCanvas
                config={designConfig}
                selectedElement={selectedElement}
                onSelectElement={handleSelectElement}
                onResetDefaults={handleResetDefaults}
              />
              <InspectorDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                selectedElement={selectedElement}
                config={designConfig}
                onChangeConfig={handleUpdateConfig}
              />
            </>
          )}

          {activeTab === 'analytics' && (
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <div className="max-w-6xl mx-auto">
                <AnalyticsView />
              </div>
            </div>
          )}

          {activeTab === 'sanity-studio' && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50 text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center">
                <Database className="w-8 h-8" />
              </div>
              <div className="max-w-md space-y-2">
                <h3 className="text-xl font-bold text-slate-900">
                  Standalone Sanity Studio Engine
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Your Sanity Studio is running on a dedicated Vite process on Port 3333, connected
                  to Project <strong>5c2yalf2</strong> and dataset <strong>production</strong>.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="http://localhost:3333"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all"
                >
                  <span>Launch Sanity Studio (Full Screen)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.sanity.io/manage/project/5c2yalf2"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-all"
                >
                  <span>Sanity Cloud Manage</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {activeTab === 'audit-logs' && (
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 max-w-6xl mx-auto">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-900">
                  Corporate Governance & CMS Audit Trail
                </h2>
                <p className="text-xs text-slate-500">
                  Real-time Sanity content lake events and author activity records.
                </p>
              </div>
              <AuditLogView logs={logs} />
              <UserManagementGuide />
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-xl font-bold text-slate-900">
                  Platform Architecture & Configuration
                </h2>
                <p className="text-xs text-slate-500">
                  Monorepo environment configuration, CORS, and deployment settings.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Sanity Project ID
                  </span>
                  <p className="font-mono text-sm font-bold text-slate-800">5c2yalf2</p>
                  <p className="text-[11px] text-slate-500">Managed through Sanity Organization owhrglljm</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Active Dataset
                  </span>
                  <p className="font-mono text-sm font-bold text-slate-800">production</p>
                  <p className="text-[11px] text-slate-500">Public CDN + Live Sync configured</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Frontend Server
                  </span>
                  <p className="font-mono text-sm font-bold text-emerald-600">http://localhost:3000</p>
                  <p className="text-[11px] text-slate-500">Next.js 16 App Router with Turbopack</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Studio Server
                  </span>
                  <p className="font-mono text-sm font-bold text-sky-600">http://localhost:3333</p>
                  <p className="text-[11px] text-slate-500">Standalone Vite-powered Sanity Studio</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
