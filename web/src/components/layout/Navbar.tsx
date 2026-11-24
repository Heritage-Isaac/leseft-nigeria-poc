'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight, X, Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Language } from '@/lib/i18n'

interface NavbarProps {
  companyName?: string
  phone?: string
  email?: string
}

export function Navbar({
  companyName = 'Leseft Nigeria Limited',
  phone = '+234 809 533 2333',
  email = 'info@leseft.cz',
}: NavbarProps) {
  const [navOpen, setNavOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  // Lock body scroll when overlay nav is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [navOpen])

  const navLinks = [
    { num: '01', label: t.nav.sectors, href: '#sectors', desc: 'Solar, Industrial & Commodities Verticals' },
    { num: '02', label: t.nav.metallurgy, href: '#metallurgy', desc: 'Steel Ingots, Forgings, Castings & Energy Equipment' },
    { num: '03', label: t.nav.commodities, href: '#commodities', desc: 'Physical Commodities & Specification Sheets' },
    { num: '04', label: t.nav.whyPartner, href: '#why-partner', desc: 'Bilateral Trust, EU Standards & Execution' },
    { num: '05', label: t.nav.careers, href: '#careers', desc: 'Abuja Operations & Analyst Openings' },
    { num: '06', label: t.nav.contact, href: '#quote', desc: 'Direct B2B Procurement Desk & RFQ' },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b-2 border-[#1C75BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Corporate Brand Identity */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-xs bg-[#1C75BC] text-white flex items-center justify-center font-bold text-base tracking-wider shadow-xs group-hover:bg-[#145A91] transition-colors">
                LS
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-[#414042] tracking-tight leading-none group-hover:text-[#1C75BC] transition-colors">
                  {companyName}
                </span>
                <span className="text-[10px] font-semibold text-[#1C75BC] uppercase tracking-widest mt-1">
                  Trade • Energy • Industry • West Africa
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-wider text-[#4D4D4D] hover:text-[#1C75BC] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Controls: Reduced Button + Language Dropdown + Decorative Hamburger */}
            <div className="flex items-center gap-3">
              {/* Reduced Button: Request a Quote */}
              <a
                href="#quote"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#1C75BC] hover:bg-[#145A91] rounded-xs transition-all shadow-xs"
              >
                <span>{t.nav.quoteCta}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>

              {/* Language Dropdown beside Hamburger */}
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

              {/* Decorative Hamburger Button (Awwwards Webflow Inspired) */}
              <button
                type="button"
                onClick={() => setNavOpen(!navOpen)}
                className="relative w-10 h-10 rounded-xs bg-[#414042] hover:bg-[#2A2A2C] border border-[#2A2A2C] flex flex-col items-center justify-center gap-1.5 transition-all group"
                aria-label="Toggle navigation drawer"
              >
                <span
                  className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                    navOpen ? 'rotate-45 translate-y-2 bg-[#27AAE1]' : 'group-hover:w-4'
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                    navOpen ? 'opacity-0' : 'group-hover:bg-[#27AAE1]'
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                    navOpen ? '-rotate-45 -translate-y-2 bg-[#27AAE1]' : 'group-hover:w-4'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Decorative Awwwards-style Overlay Menu Drawer */}
      {navOpen && (
        <div className="fixed inset-0 z-50 bg-[#414042] text-white flex flex-col justify-between overflow-y-auto animate-fadeIn">
          {/* Top Bar inside Overlay */}
          <div className="border-b border-white/10 px-6 sm:px-12 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#1C75BC] text-white flex items-center justify-center font-bold text-xs">
                LS
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {companyName}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-[#A0A0A5] hidden sm:inline font-mono">
                Ostrava, CZ ⇄ Abuja, NG
              </span>

              {/* Close Button */}
              <button
                onClick={() => setNavOpen(false)}
                className="w-10 h-10 rounded-xs bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Main Navigation Links with Editorial Numbers */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#27AAE1] uppercase block mb-4">
                Directory / Rejstřík / Katalog
              </span>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setNavOpen(false)}
                  className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-3 border-b border-white/10 hover:border-[#1C75BC] transition-all"
                >
                  <span className="text-xs font-mono text-[#27AAE1] font-bold group-hover:translate-x-1 transition-transform">
                    {link.num}
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-[#27AAE1] tracking-tight transition-colors">
                    {link.label}
                  </span>
                  <span className="text-xs text-[#A0A0A5] sm:ml-auto group-hover:text-white transition-colors">
                    {link.desc}
                  </span>
                </a>
              ))}
            </div>

            {/* Side Card inside Menu */}
            <div className="lg:col-span-4 bg-[#2A2A2C] border border-white/10 rounded-xs p-6 space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-[#27AAE1] uppercase font-bold tracking-wider">
                  Direct Inquiries
                </span>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Abuja Operations Hub
                </h4>
                <p className="text-xs text-[#C9D1D9] leading-relaxed">
                  Connect with our local trade desk and European technical coordinators for RFQs and product specifications.
                </p>
              </div>

              <div className="space-y-3 text-xs text-[#C9D1D9]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#27AAE1]" />
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="font-mono hover:text-white">
                    {phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#27AAE1]" />
                  <a href={`mailto:${email}`} className="font-mono hover:text-white">
                    {email}
                  </a>
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#27AAE1] shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-snug">Plot 69, Katampe District, Abuja FCT</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#quote"
                  onClick={() => setNavOpen(false)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#1C75BC] hover:bg-[#145A91] rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>{t.nav.quoteCta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bar inside Overlay */}
          <div className="border-t border-white/10 px-6 sm:px-12 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A0A0A5] gap-3">
            <p>© {new Date().getFullYear()} {companyName}. Built by Heritage Isaac</p>
            <div className="flex items-center gap-2">
              <span className="text-[11px]">Language:</span>
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-0.5 rounded-xs text-[10px] font-bold ${
                    lang === l.code ? 'bg-[#1C75BC] text-white' : 'text-[#C9D1D9] hover:text-white'
                  }`}
                >
                  {l.full}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
