'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ArrowRight, Globe } from 'lucide-react'
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const languages: { code: Language; label: string; full: string }[] = [
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'cs', label: 'CZ', full: 'Čeština' },
    { code: 'pl', label: 'PL', full: 'Polski' },
  ]

  const navLinks = [
    { label: t.nav.sectors, href: '#sectors' },
    { label: t.nav.metallurgy, href: '#metallurgy' },
    { label: t.nav.commodities, href: '#commodities' },
    { label: t.nav.whyPartner, href: '#why-partner' },
    { label: t.nav.careers, href: '#careers' },
    { label: t.nav.contact, href: '#quote' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white">
      {/* Top Corporate Dispatch Ribbon in Leseft Charcoal #414042 */}
      <div className="bg-[#414042] text-white text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#2A2A2C]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex items-center gap-2.5">
            <span className="font-mono font-bold text-[#27AAE1] uppercase tracking-wider">
              {t.topRibbon.rcNumber}
            </span>
            <span className="text-[#888888]">•</span>
            <span className="text-[#E0E0E0]">
              {t.topRibbon.subsidiaryOf}{' '}
              <span className="text-[#B0B0B0] hidden md:inline">
                ({t.topRibbon.czechParent})
              </span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#C0C0C0]">
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="hover:text-white transition-colors flex items-center gap-1.5 font-mono text-[11px]"
            >
              <Phone className="w-3 h-3 text-[#27AAE1]" />
              <span>{phone}</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href={`mailto:${email}`}
              className="hidden sm:inline hover:text-white transition-colors font-mono text-[11px]"
            >
              {email}
            </a>

            {/* Language Switcher in Header */}
            <div className="flex items-center gap-1 pl-2 border-l border-white/20">
              <Globe className="w-3 h-3 text-[#27AAE1] mr-0.5" />
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  title={l.full}
                  className={`px-1.5 py-0.5 text-[10px] font-bold rounded-xs transition-all ${
                    lang === l.code
                      ? 'bg-[#1C75BC] text-white shadow-xs'
                      : 'text-[#B0B0B0] hover:text-white hover:bg-white/10'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with 2px Leseft Blue Bottom Border */}
      <div className="border-b-2 border-[#1C75BC] bg-white">
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
            <nav className="hidden xl:flex items-center gap-7">
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

            {/* Action CTA & Mobile Lang Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#1C75BC] hover:bg-[#145A91] rounded-xs transition-all shadow-xs"
              >
                <span>{t.nav.quoteCta}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex xl:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xs text-[#414042] hover:bg-[#F7F9FB] border border-[#E1E1E1]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-[#E1E1E1] bg-white px-4 pt-3 pb-6 space-y-3">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E1E1E1]">
            <span className="text-xs text-[#7A7A7D] font-semibold">Language / Jazyk / Język:</span>
            <div className="flex items-center gap-1.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-xs transition-all ${
                    lang === l.code
                      ? 'bg-[#1C75BC] text-white'
                      : 'bg-[#F7F9FB] text-[#414042] border border-[#E1E1E1]'
                  }`}
                >
                  {l.full}
                </button>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#414042] hover:bg-[#F7F9FB] rounded-xs"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-[#E1E1E1]">
            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-bold text-white bg-[#1C75BC] rounded-xs"
            >
              <span>{t.nav.quoteCta}</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
