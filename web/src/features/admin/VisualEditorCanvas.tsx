'use client'

import React, { useState } from 'react'
import {
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  RotateCcw,
  MousePointer,
  Check,
  Building,
  ShieldCheck,
  Briefcase,
  ArrowRight,
  MapPin,
  Calendar,
} from 'lucide-react'
import type { SiteDesignConfig, SelectedElementInfo } from './types'

interface VisualEditorCanvasProps {
  config: SiteDesignConfig
  selectedElement: SelectedElementInfo | null
  onSelectElement: (element: SelectedElementInfo) => void
  onResetDefaults: () => void
}

export function VisualEditorCanvas({
  config,
  selectedElement,
  onSelectElement,
  onResetDefaults,
}: VisualEditorCanvasProps) {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  // Derive class strings based on config
  const getButtonRadiusClass = () => {
    switch (config.buttonRadius) {
      case 'sharp':
        return 'rounded-none'
      case 'subtle':
        return 'rounded-md'
      case 'rounded':
        return 'rounded-xl'
      case 'pill':
        return 'rounded-full'
      default:
        return 'rounded-lg'
    }
  }

  const getThemePalette = () => {
    switch (config.colorTheme) {
      case 'emerald':
        return {
          primaryBg: 'bg-emerald-950',
          primaryText: 'text-emerald-400',
          btnBg: 'bg-emerald-600 hover:bg-emerald-500 text-white',
          btnOutline: 'border-emerald-600 text-emerald-600 hover:bg-emerald-50',
          accentBorder: 'border-emerald-500',
          badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        }
      case 'gold':
        return {
          primaryBg: 'bg-amber-950',
          primaryText: 'text-amber-400',
          btnBg: 'bg-amber-600 hover:bg-amber-500 text-white',
          btnOutline: 'border-amber-600 text-amber-600 hover:bg-amber-50',
          accentBorder: 'border-amber-500',
          badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
        }
      case 'slate':
        return {
          primaryBg: 'bg-slate-900',
          primaryText: 'text-slate-300',
          btnBg: 'bg-slate-800 hover:bg-slate-700 text-white',
          btnOutline: 'border-slate-700 text-slate-700 hover:bg-slate-50',
          accentBorder: 'border-slate-500',
          badgeBg: 'bg-slate-100 text-slate-800 border-slate-200',
        }
      case 'navy':
      default:
        return {
          primaryBg: 'bg-slate-900',
          primaryText: 'text-sky-400',
          btnBg: 'bg-sky-600 hover:bg-sky-500 text-white',
          btnOutline: 'border-sky-600 text-sky-600 hover:bg-sky-50',
          accentBorder: 'border-sky-500',
          badgeBg: 'bg-sky-50 text-sky-800 border-sky-200',
        }
    }
  }

  const getCardStyleClass = () => {
    switch (config.cardStyle) {
      case 'elevated':
        return 'bg-white border-transparent shadow-xl hover:shadow-2xl'
      case 'flat':
        return 'bg-slate-100/70 border-transparent shadow-none'
      case 'glass':
        return 'bg-white/80 backdrop-blur-md border border-white/40 shadow-lg'
      case 'border':
      default:
        return 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
    }
  }

  const theme = getThemePalette()
  const btnRadius = getButtonRadiusClass()
  const cardStyle = getCardStyleClass()

  // Width for responsive viewport
  const viewportWidth =
    viewport === 'mobile' ? 'max-w-[390px]' : viewport === 'tablet' ? 'max-w-[768px]' : 'w-full'

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-100 overflow-hidden">
      {/* Canvas Top Bar */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between shadow-2xs z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
            <MousePointer className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Visual Canvas</span>
          </div>

          <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            Click any section or button to customize
          </span>
        </div>

        {/* Viewport switchers */}
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
            <button
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded-md text-xs transition-all ${
                viewport === 'desktop'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Desktop View"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-1.5 rounded-md text-xs transition-all ${
                viewport === 'tablet'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Tablet View (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded-md text-xs transition-all ${
                viewport === 'mobile'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Mobile View (390px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={onResetDefaults}
            className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-2xs"
            title="Reset Design to Default"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs text-sky-700 hover:text-sky-900 px-2.5 py-1.5 rounded-lg border border-sky-200 bg-sky-50 hover:bg-sky-100 transition-colors shadow-2xs font-medium"
            title="Open Live Website in New Tab"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Canvas Viewport Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex justify-center bg-slate-200/70">
        <div
          className={`${viewportWidth} bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-300 transition-all duration-300 flex flex-col`}
        >
          {/* Mock Browser Header */}
          <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800 select-none">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>

            <div className="text-[11px] text-slate-400 bg-slate-800 px-4 py-0.5 rounded-full border border-slate-700/60 font-mono truncate max-w-[280px]">
              https://leseft.com/
            </div>

            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
              Live Canvas
            </span>
          </div>

          {/* Canvas Website Content */}
          <div className="flex-1 overflow-y-auto bg-slate-50 divide-y divide-slate-100">
            {/* 1. Status Banner Element */}
            {!config.hiddenElements.statusBanner && (
              <div
                onClick={() =>
                  onSelectElement({
                    id: 'statusBanner',
                    name: 'Top Status Banner',
                    type: 'section',
                    isVisible: true,
                  })
                }
                className={`p-2.5 text-center text-xs font-semibold bg-sky-900 text-sky-100 cursor-pointer border-2 transition-all ${
                  selectedElement?.id === 'statusBanner'
                    ? 'border-sky-400 ring-2 ring-sky-300'
                    : 'border-transparent hover:border-sky-400/50'
                }`}
              >
                <span>⚡ Next.js 16 + Standalone Sanity CMS Connected | Live Sync Active</span>
              </div>
            )}

            {/* 2. Navbar Element */}
            <header
              onClick={() =>
                onSelectElement({
                  id: 'navbar',
                  name: 'Navigation Bar',
                  type: 'nav',
                  isVisible: true,
                })
              }
              className={`p-4 bg-white flex items-center justify-between cursor-pointer border-2 transition-all ${
                selectedElement?.id === 'navbar'
                  ? 'border-sky-500 ring-2 ring-sky-300'
                  : 'border-transparent hover:border-sky-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-white ${theme.btnBg.split(' ')[0]}`}
                >
                  LS
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 tracking-tight">LeSeft Nigeria</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    Corporate Solutions
                  </p>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-600">
                <span className="hover:text-slate-900">About</span>
                <span className="hover:text-slate-900">Projects</span>
                <span className="hover:text-slate-900">Governance</span>
                <span className="hover:text-slate-900">Contact</span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onSelectElement({
                    id: 'navCta',
                    name: 'Navbar Consultation CTA',
                    type: 'button',
                    isVisible: true,
                  })
                }}
                className={`text-xs px-3.5 py-1.5 font-bold transition-all shadow-xs ${theme.btnBg} ${btnRadius}`}
              >
                Get in Touch
              </button>
            </header>

            {/* 3. Hero Section Element */}
            <section
              onClick={() =>
                onSelectElement({
                  id: 'hero',
                  name: 'Hero Section',
                  type: 'section',
                  isVisible: true,
                })
              }
              className={`p-6 sm:p-12 relative overflow-hidden cursor-pointer border-2 transition-all ${theme.primaryBg} ${
                selectedElement?.id === 'hero'
                  ? 'border-sky-400 ring-2 ring-sky-300'
                  : 'border-transparent hover:border-sky-400/50'
              }`}
            >
              <div className="max-w-2xl space-y-4">
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full ${theme.badgeBg}`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>Indigenous Turnkey Infrastructure</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Strategic Corporate Solutions & Infrastructure Across Nigeria
                </h1>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Delivering high-throughput civil logistics hubs, industrial facilities, and
                  technical project execution across Lagos, Abuja, and Port Harcourt.
                </p>

                {/* Hero CTA Button Element */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {!config.hiddenElements.heroCta && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onSelectElement({
                          id: 'heroCta',
                          name: 'Hero CTA Button ("Explore Projects")',
                          type: 'button',
                          isVisible: true,
                        })
                      }}
                      className={`text-xs sm:text-sm px-5 py-2.5 font-bold flex items-center gap-2 transition-all shadow-md ${theme.btnBg} ${btnRadius} ${
                        selectedElement?.id === 'heroCta'
                          ? 'ring-4 ring-sky-300 scale-105'
                          : 'hover:scale-102'
                      }`}
                    >
                      <span>Explore Projects</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onSelectElement({
                        id: 'heroSecondary',
                        name: 'Secondary Hero Button ("Corporate Profile")',
                        type: 'button',
                        isVisible: true,
                      })
                    }}
                    className={`text-xs sm:text-sm px-5 py-2.5 font-bold border border-white/30 text-white hover:bg-white/10 transition-all ${btnRadius}`}
                  >
                    Corporate Profile
                  </button>
                </div>
              </div>
            </section>

            {/* 4. Projects Showcase Cards */}
            <section
              onClick={() =>
                onSelectElement({
                  id: 'projectsSection',
                  name: 'Projects Section & Cards',
                  type: 'section',
                  isVisible: true,
                })
              }
              className={`p-6 sm:p-10 space-y-6 bg-slate-50 cursor-pointer border-2 transition-all ${
                selectedElement?.id === 'projectsSection'
                  ? 'border-sky-500 ring-2 ring-sky-300'
                  : 'border-transparent hover:border-sky-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                    Portfolios & Execution
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Featured Corporate Projects
                  </h2>
                </div>
                <span className="text-xs font-semibold text-slate-500">Live Sanity Feed</span>
              </div>

              {/* Grid of Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    name: 'Monimove Integrated Logistics Facility',
                    location: 'Victoria Island, Lagos',
                    status: 'In Progress',
                    badge: 'bg-amber-50 text-amber-800 border-amber-200',
                    desc: 'High-throughput commercial logistics hub serving West African trade routes.',
                  },
                  {
                    name: 'Agro-Industrial Processing Complex',
                    location: 'Sagamu Industrial Zone, Ogun',
                    status: 'Completed',
                    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                    desc: 'Turnkey civil development, structural engineering, and processing facilities.',
                  },
                  {
                    name: 'Trans-Niger Energy Distribution Hub',
                    location: 'Port Harcourt, Rivers State',
                    status: 'Upcoming',
                    badge: 'bg-sky-50 text-sky-800 border-sky-200',
                    desc: 'Regional commercial fueling terminal and strategic maritime logistics asset.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation()
                      onSelectElement({
                        id: `projectCard-${idx}`,
                        name: `Project Card: "${item.name}"`,
                        type: 'card',
                        isVisible: true,
                      })
                    }}
                    className={`rounded-xl p-5 space-y-3 transition-all cursor-pointer border-2 ${cardStyle} ${
                      selectedElement?.id === `projectCard-${idx}`
                        ? 'border-sky-500 ring-4 ring-sky-200 scale-102'
                        : 'border-transparent hover:border-sky-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badge}`}
                      >
                        {item.status}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate max-w-[120px]">{item.location}</span>
                      </div>
                    </div>

                    <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{item.desc}</p>

                    <button
                      className={`text-xs w-full py-2 font-bold transition-all ${theme.btnOutline} ${btnRadius}`}
                    >
                      View Case Study
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Footer Element */}
            <footer
              onClick={() =>
                onSelectElement({
                  id: 'footer',
                  name: 'Corporate Footer',
                  type: 'section',
                  isVisible: true,
                })
              }
              className={`p-6 bg-slate-900 text-slate-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer border-2 transition-all ${
                selectedElement?.id === 'footer'
                  ? 'border-sky-400 ring-2 ring-sky-300'
                  : 'border-transparent hover:border-sky-400/50'
              }`}
            >
              <div>
                <p className="font-bold text-white">LeSeft Nigeria Limited</p>
                <p className="text-[11px] text-slate-500">
                  © 2026 RC 1849202 • All rights reserved
                </p>
              </div>

              <div className="flex items-center gap-4 text-slate-400 text-[11px]">
                <span>Privacy</span>
                <span>Terms</span>
                <span>Compliance</span>
                <span>Sanity Studio (Port 3333)</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
