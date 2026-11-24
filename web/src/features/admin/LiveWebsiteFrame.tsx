'use client'

import React, { useState, useRef } from 'react'
import { Monitor, Tablet, Smartphone, RotateCcw, ExternalLink } from 'lucide-react'

interface LiveWebsiteFrameProps {
  onReloadRequested?: () => void
}

export function LiveWebsiteFrame({ onReloadRequested }: LiveWebsiteFrameProps) {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [key, setKey] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleRefresh = () => {
    setKey((prev) => prev + 1)
    onReloadRequested?.()
  }

  const viewportWidth =
    viewport === 'mobile' ? 'max-w-[390px]' : viewport === 'tablet' ? 'max-w-[768px]' : 'w-full'

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F7F8FA] overflow-hidden border-r border-[#E5E7EB]">
      {/* Viewport Control Bar */}
      <div className="bg-white border-b border-[#E5E7EB] px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-[#17191C]">Live Site Preview</span>
          <span className="text-xs text-[#89919A]">|</span>
          <span className="text-xs text-[#626B75] hidden sm:inline">
            Rendering live Next.js application
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Viewport Switcher */}
          <div className="inline-flex rounded-md border border-[#E5E7EB] bg-[#F1F3F5] p-0.5">
            <button
              onClick={() => setViewport('desktop')}
              className={`px-2.5 py-1 text-xs rounded transition-all ${
                viewport === 'desktop'
                  ? 'bg-white text-[#17191C] font-semibold shadow-xs'
                  : 'text-[#626B75] hover:text-[#17191C]'
              }`}
              title="Desktop View (100%)"
            >
              <Monitor className="w-3.5 h-3.5 inline mr-1" />
              <span className="hidden md:inline">Desktop</span>
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`px-2.5 py-1 text-xs rounded transition-all ${
                viewport === 'tablet'
                  ? 'bg-white text-[#17191C] font-semibold shadow-xs'
                  : 'text-[#626B75] hover:text-[#17191C]'
              }`}
              title="Tablet View (768px)"
            >
              <Tablet className="w-3.5 h-3.5 inline mr-1" />
              <span className="hidden md:inline">Tablet</span>
            </button>
            <button
              onClick={() => setViewport('mobile')}
              className={`px-2.5 py-1 text-xs rounded transition-all ${
                viewport === 'mobile'
                  ? 'bg-white text-[#17191C] font-semibold shadow-xs'
                  : 'text-[#626B75] hover:text-[#17191C]'
              }`}
              title="Mobile View (390px)"
            >
              <Smartphone className="w-3.5 h-3.5 inline mr-1" />
              <span className="hidden md:inline">Mobile</span>
            </button>
          </div>

          {/* Refresh Frame */}
          <button
            onClick={handleRefresh}
            className="p-1.5 rounded-md border border-[#E5E7EB] text-[#626B75] hover:text-[#17191C] hover:bg-[#F1F3F5] transition-colors"
            title="Reload live frame"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Open Site in New Tab */}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-md border border-[#E5E7EB] text-[#626B75] hover:text-[#17191C] hover:bg-[#F1F3F5] transition-colors"
            title="Open in new window"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Frame Canvas Wrapper */}
      <div className="flex-1 overflow-auto p-4 sm:p-6 flex justify-center bg-[#F1F3F5]/60">
        <div
          className={`${viewportWidth} h-full bg-white rounded-lg border border-[#E5E7EB] shadow-xs flex flex-col overflow-hidden transition-all duration-200`}
        >
          {/* Subtle Frame URL Bar */}
          <div className="bg-[#FAFAFA] border-b border-[#E5E7EB] px-3 py-1.5 flex items-center justify-between text-xs text-[#89919A]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#16A36A]" />
              <span className="font-mono text-[11px] text-[#626B75]">/ (Live Next.js Site)</span>
            </div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#89919A]">
              Pixel-Accurate
            </span>
          </div>

          {/* Actual Live Running Website */}
          <iframe
            key={key}
            ref={iframeRef}
            src="/"
            title="Live Website Viewport"
            className="w-full flex-1 border-0 bg-white"
          />
        </div>
      </div>
    </div>
  )
}
