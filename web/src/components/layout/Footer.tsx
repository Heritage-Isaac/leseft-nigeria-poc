import React from 'react'
import Link from 'next/link'
import { MapPin, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react'

export function Footer({ companyName = 'LeSeft Nigeria Limited' }: { companyName?: string }) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Corporate Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-white text-slate-950 flex items-center justify-center font-bold text-base">
                LS
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {companyName}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Delivering high-integrity corporate engineering, industrial facilities, and project management solutions across Nigeria. Built on compliance, precision execution, and community empowerment.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Registered in the Federal Republic of Nigeria (RC Certified)</span>
            </div>
          </div>

          {/* Col 2: Navigation & CMS Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Corporate Projects
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">
                  Admin & Audit Intelligence
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & RFP
                </Link>
              </li>
              <li>
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                >
                  <span>Sanity CMS Studio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Nigerian Offices */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Operational Offices
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Lagos Liaison:</strong><br />
                  Victoria Island, Lagos State, Nigeria
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Federal Capital Territory:</strong><br />
                  Central Business District, Abuja FCT
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-slate-300">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>info@leseft.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p suppressHydrationWarning>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <p className="flex items-center gap-2 text-slate-400">
            <span>Next.js App Router + Sanity CMS Integration Proof of Concept</span>
            <span>•</span>
            <span className="text-sky-400 font-medium">Ready for Production Deployment</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
