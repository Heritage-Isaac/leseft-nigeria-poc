'use client'

import React, { useState } from 'react'
import { Check, RotateCcw, Palette, Square, Eye, EyeOff } from 'lucide-react'
import type { ButtonRadius, ColorTheme, CardStyle } from './types'

interface SiteAppearanceManagerProps {
  onApplyStyle?: (styles: {
    radius: ButtonRadius
    theme: ColorTheme
    cardStyle: CardStyle
    hiddenElements: Record<string, boolean>
  }) => void
}

export function SiteAppearanceManager({ onApplyStyle }: SiteAppearanceManagerProps) {
  const [radius, setRadius] = useState<ButtonRadius>('subtle')
  const [theme, setTheme] = useState<ColorTheme>('navy')
  const [cardStyle, setCardStyle] = useState<CardStyle>('border')
  const [hiddenElements, setHiddenElements] = useState<Record<string, boolean>>({
    heroCta: false,
    statusBanner: false,
    emailDemo: false,
  })
  const [savedNotice, setSavedNotice] = useState(false)

  const handleApply = () => {
    onApplyStyle?.({
      radius,
      theme,
      cardStyle,
      hiddenElements,
    })
    setSavedNotice(true)
    setTimeout(() => setSavedNotice(false), 2500)
  }

  const handleReset = () => {
    setRadius('subtle')
    setTheme('navy')
    setCardStyle('border')
    setHiddenElements({ heroCta: false, statusBanner: false, emailDemo: false })
    onApplyStyle?.({
      radius: 'subtle',
      theme: 'navy',
      cardStyle: 'border',
      hiddenElements: { heroCta: false, statusBanner: false, emailDemo: false },
    })
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="border-b border-[#E5E7EB] pb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-[#17191C]">Website Appearance & Geometry</h2>
          <p className="text-xs text-[#626B75] mt-0.5">
            Configure visual styling, button shapes, and section visibility.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="text-xs text-[#626B75] hover:text-[#17191C] flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Defaults</span>
        </button>
      </div>

      {savedNotice && (
        <div className="p-3 rounded-lg bg-[#E6F4EA] border border-[#B7E1CD] text-[#137333] text-xs flex items-center gap-2">
          <Check className="w-4 h-4" />
          <span>Appearance preferences applied to live preview.</span>
        </div>
      )}

      {/* 1. Button Corner Radius */}
      <div className="space-y-2.5">
        <label className="text-xs font-semibold text-[#17191C] flex items-center gap-1.5">
          <Square className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Button Corner Radius</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'sharp', label: 'Sharp', spec: '0px (Corporate)', class: 'rounded-none' },
            { id: 'subtle', label: 'Subtle', spec: '8px (Leye default)', class: 'rounded-lg' },
            { id: 'rounded', label: 'Rounded', spec: '16px (Soft)', class: 'rounded-2xl' },
            { id: 'pill', label: 'Pill', spec: 'Full radius', class: 'rounded-full' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setRadius(item.id as ButtonRadius)}
              className={`p-3 text-left border rounded-lg transition-all ${
                radius === item.id
                  ? 'border-[#2563EB] bg-[#EAF1FF] text-[#17191C] font-semibold'
                  : 'border-[#E5E7EB] bg-white text-[#626B75] hover:border-[#D1D5DB]'
              }`}
            >
              <div className={`w-full h-3 border border-current mb-2 ${item.class}`} />
              <p className="text-xs font-semibold">{item.label}</p>
              <p className="text-[10px] text-[#89919A]">{item.spec}</p>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Color System */}
      <div className="space-y-2.5 pt-4 border-t border-[#E5E7EB]">
        <label className="text-xs font-semibold text-[#17191C] flex items-center gap-1.5">
          <Palette className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Primary Brand Palette</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            {
              id: 'navy',
              label: 'LeSeft Corporate Navy',
              desc: 'Deep slate navy with clear contrast',
              swatch: 'bg-[#0f172a]',
            },
            {
              id: 'emerald',
              label: 'Infrastructure Emerald',
              desc: 'Industrial green for civil engineering',
              swatch: 'bg-[#064e3b]',
            },
            {
              id: 'gold',
              label: 'Royal Gold Accent',
              desc: 'Prestige corporate accents',
              swatch: 'bg-[#78350f]',
            },
            {
              id: 'slate',
              label: 'Modern Minimal Slate',
              desc: 'Disciplined neutral monochrome',
              swatch: 'bg-[#334155]',
            },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTheme(item.id as ColorTheme)}
              className={`p-3 text-left border rounded-lg flex items-center gap-3 transition-all ${
                theme === item.id
                  ? 'border-[#2563EB] bg-[#EAF1FF] text-[#17191C] font-semibold'
                  : 'border-[#E5E7EB] bg-white text-[#626B75] hover:border-[#D1D5DB]'
              }`}
            >
              <div className={`w-6 h-6 rounded-md ${item.swatch} shrink-0 border border-black/10`} />
              <div>
                <p className="text-xs font-semibold text-[#17191C]">{item.label}</p>
                <p className="text-[11px] text-[#89919A]">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Section Visibility */}
      <div className="space-y-2.5 pt-4 border-t border-[#E5E7EB]">
        <label className="text-xs font-semibold text-[#17191C] flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Section Visibility</span>
        </label>
        <div className="space-y-2">
          {[
            {
              key: 'heroCta',
              label: 'Hero "Explore Projects" CTA Button',
              desc: 'Primary call-to-action on the homepage',
            },
            {
              key: 'statusBanner',
              label: 'Top System Status Banner',
              desc: 'Live CMS indicator bar at the top',
            },
            {
              key: 'emailDemo',
              label: 'Email Dispatcher Sandbox',
              desc: 'Newsletter test console on the homepage',
            },
          ].map((sec) => (
            <div
              key={sec.key}
              className="p-3 rounded-lg border border-[#E5E7EB] bg-white flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-semibold text-[#17191C]">{sec.label}</p>
                <p className="text-[11px] text-[#89919A]">{sec.desc}</p>
              </div>
              <button
                type="button"
                onClick={() =>
                  setHiddenElements((prev) => ({
                    ...prev,
                    [sec.key]: !prev[sec.key],
                  }))
                }
                className={`px-3 py-1 text-xs font-semibold rounded-md border flex items-center gap-1.5 transition-all ${
                  hiddenElements[sec.key]
                    ? 'bg-[#FCE8E6] text-[#C5221F] border-[#F5C2C7]'
                    : 'bg-[#E6F4EA] text-[#137333] border-[#B7E1CD]'
                }`}
              >
                {hiddenElements[sec.key] ? (
                  <>
                    <EyeOff className="w-3.5 h-3.5" />
                    <span>Hidden</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>Visible</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <div className="pt-4 border-t border-[#E5E7EB]">
        <button
          type="button"
          onClick={handleApply}
          className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold rounded-lg transition-colors"
        >
          Apply Changes
        </button>
      </div>
    </div>
  )
}
