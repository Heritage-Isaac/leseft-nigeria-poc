'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Language } from '@/lib/i18n'

import type { SiteSettings, NavLinkItem } from '@/types'

interface NavbarProps {
  companyName?: string
  phone?: string
  email?: string
  settings?: Partial<SiteSettings>
}

const DEFAULT_NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Commodities', href: '#commodities' },
  { label: 'Equipment & Technologies', href: '#equipment' },
  { label: 'Projects & Services', href: '#projects' },
  { label: 'For Partners', href: '#partners' },
  { label: 'Contact Us', href: '#contact' },
]

export function Navbar({
  companyName = 'Leseft Nigeria Limited',
  settings,
}: NavbarProps) {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const displayName = settings?.companyName || companyName
  const logoImageUrl = settings?.navLogoUrl || settings?.navLogo?.asset?.url
  const logoText = settings?.navLogoText || 'LS'
  const navLinks =
    settings?.navLinks && settings.navLinks.length > 0
      ? settings.navLinks
      : DEFAULT_NAV_LINKS
  const ctaText = settings?.navCtaText || t.nav.quoteCta
  const ctaHref = settings?.navCtaHref || '/#quote'
  const ctaBgColor = settings?.navCtaColor || '#1C75BC'
  const ctaTextColor = settings?.navCtaTextColor || '#FFFFFF'

  const languages: { code: Language; label: string; full: string }[] = [
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'cs', label: 'CZ', full: 'Čeština' },
    { code: 'pl', label: 'PL', full: 'Polski' },
  ]

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white border-b-2 border-[#1C75BC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-4">
          {/* Corporate Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            {logoImageUrl ? (
              <img
                src={logoImageUrl}
                alt={displayName}
                className="h-8 w-auto max-w-[120px] object-contain"
              />
            ) : (
              <div className="w-8 h-8 rounded-xs bg-[#1C75BC] text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs group-hover:bg-[#145A91] transition-colors">
                {logoText}
              </div>
            )}
            <span className="font-bold text-sm sm:text-[15px] text-[#414042] tracking-tight leading-none group-hover:text-[#1C75BC] transition-colors">
              {displayName}
            </span>
          </Link>

          {/* Desktop Navigation Links (Brief Structure) */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link._key || link.label}
                href={link.href || '/'}
                className="text-[10px] font-semibold uppercase tracking-wider text-[#4D4D4D] hover:text-[#1C75BC] transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Controls: Quote CTA + Language Dropdown */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href={ctaHref}
              style={{ backgroundColor: ctaBgColor, color: ctaTextColor }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold rounded-xs transition-opacity hover:opacity-90 shadow-xs whitespace-nowrap"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-3 h-3" style={{ color: ctaTextColor }} />
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-xs border border-[#E1E1E1] bg-[#F7F9FB] hover:border-[#1C75BC] text-[#414042] transition-colors"
                aria-label="Select language"
              >
                <span className="text-[#1C75BC] font-mono">{currentLangObj.label}</span>
                <ChevronDown className={`w-3 h-3 text-[#7A7A7D] transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-32 bg-white border border-[#E1E1E1] rounded-xs shadow-md py-1 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code)
                        setLangDropdownOpen(false)
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between font-semibold transition-colors ${
                        lang === l.code
                          ? 'bg-[#F0F7FC] text-[#1C75BC]'
                          : 'text-[#414042] hover:bg-[#F7F9FB]'
                      }`}
                    >
                      <span>{l.full}</span>
                      <span className="text-[10px] font-mono text-[#7A7A7D]">{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Bar (No Hamburger) */}
        <nav className="lg:hidden flex items-center gap-4 overflow-x-auto pb-3 pt-1 border-t border-[#F0F2F5]">
          {navLinks.map((link) => (
            <Link
              key={link._key || link.label}
              href={link.href || '/'}
              className="text-[10px] font-semibold uppercase tracking-wider text-[#4D4D4D] hover:text-[#1C75BC] transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
