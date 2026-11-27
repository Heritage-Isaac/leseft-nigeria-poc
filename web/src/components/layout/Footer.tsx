'use client'

import React from 'react'
import { ShieldCheck, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import type { SiteSettings } from '@/types'
import { fallbackSiteSettings } from '@/sanity/lib/client'
import { useLanguage } from '@/context/LanguageContext'

interface FooterProps {
  settings?: SiteSettings
  companyName?: string
}

export function Footer({ settings = fallbackSiteSettings, companyName }: FooterProps) {
  const { t } = useLanguage()

  const activeSettings = {
    ...settings,
    companyName: companyName || settings.companyName || 'Leseft Nigeria Limited',
  }
  const navLinks =
    activeSettings.navLinks && activeSettings.navLinks.length > 0
      ? activeSettings.navLinks
      : fallbackSiteSettings.navLinks ?? []

  return (
    <footer className="bg-[#414042] text-white border-t-2 border-[#1C75BC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: Corporate Brand & Registration */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xs bg-[#1C75BC] text-white flex items-center justify-center font-bold text-xs tracking-wider">
                LS
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {activeSettings.companyName}
              </span>
            </div>

            <p className="text-xs text-[#C9D1D9] leading-relaxed max-w-md">
              {t.footer.aboutText}
            </p>

            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-[#E0E0E0]">
                <ShieldCheck className="w-4 h-4 text-[#27AAE1] shrink-0" />
                <span>
                  {t.footer.registeredText}: <strong className="font-mono text-white">{activeSettings.cacNumber}</strong> (Inc. {activeSettings.incorporationDate})
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              {t.footer.verticalsTitle}
            </h4>
            <ul className="space-y-2 text-[#C9D1D9]">
              {navLinks.map((link) => (
                <li key={link._key || link.label}>
                  <a href={link.href} className="hover:text-[#27AAE1] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Nigerian Head Office & Languages */}
          <div className="space-y-4 text-xs">
            <div className="space-y-2.5">
              <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
                {t.footer.headquartersTitle}
              </h4>
              <div className="space-y-2 text-[#C9D1D9] leading-relaxed">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#27AAE1] shrink-0 mt-0.5" />
                  <span>{activeSettings.headquartersAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#27AAE1] shrink-0" />
                  <a href={`tel:${activeSettings.contactPhone.replace(/\s+/g, '')}`} className="font-mono text-white hover:text-[#27AAE1]">
                    {activeSettings.contactPhone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#27AAE1] shrink-0" />
                  <a href={`mailto:${activeSettings.contactEmail}`} className="font-mono text-white hover:text-[#27AAE1]">
                    {activeSettings.contactEmail}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A0A0A5]">
          <p>
            © {new Date().getFullYear()} {activeSettings.companyName}. {t.footer.rightsReserved}{' '}
            <a
              href={`https://wa.me/2347059804235?text=${encodeURIComponent('We like your work and would love to work with you on LeSeft.')}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Message Heritage Isaac on WhatsApp about working on LeSeft"
              className="text-[#27AAE1] font-medium ml-1 inline-flex items-center gap-1 hover:underline"
            >
              Built by Heritage Isaac
              <MessageCircle className="w-3 h-3" />
            </a>
          </p>
          <p className="flex items-center gap-3">
            <span>Trade</span>
            <span>•</span>
            <span>Energy</span>
            <span>•</span>
            <span>Industry</span>
            <span>•</span>
            <span>West Africa</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
