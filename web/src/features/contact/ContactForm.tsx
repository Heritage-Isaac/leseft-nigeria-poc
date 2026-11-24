'use client'

import React, { useActionState } from 'react'
import { Send, CheckCircle2, AlertCircle, Mail, MapPin } from 'lucide-react'
import { submitContactInquiry } from '@/actions/contact'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactInquiry, null)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left: Contact Info */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Corporate Inquiries</span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">Get in Touch</h1>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            Contact LeSeft Nigeria Limited for engineering procurement, infrastructure advisory, or corporate partnership opportunities.
          </p>
        </div>

        <div className="space-y-4 text-xs text-slate-600">
          <div className="p-4 bg-white border border-slate-200 rounded-lg flex items-start gap-3 shadow-xs">
            <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Lagos Operational Liaison:</strong>
              <span>Victoria Island, Lagos State, Nigeria</span>
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-lg flex items-start gap-3 shadow-xs">
            <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Abuja Administrative Office:</strong>
              <span>Central Business District, Abuja FCT, Nigeria</span>
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-lg flex items-start gap-3 shadow-xs">
            <Mail className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">General Electronic Mail:</strong>
              <span>contact@leseft.com • tenders@leseft.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
        <h2 className="text-lg font-bold text-slate-900 mb-6">Submit an Inquiry or Request for Proposal</h2>

        {state?.success && (
          <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <p>{state.message}</p>
          </div>
        )}

        {state?.error && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <p>{state.error}</p>
          </div>
        )}

        <form action={formAction} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="e.g. Babatunde Adebayo"
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:outline-hidden focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email *</label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@company.com"
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:outline-hidden focus:ring-1 focus:ring-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Organization / Client</label>
              <input
                type="text"
                name="organization"
                placeholder="Company or Government Agency"
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:outline-hidden focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Telephone / Mobile</label>
              <input
                type="tel"
                name="phone"
                placeholder="+234 ..."
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:outline-hidden focus:ring-1 focus:ring-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Project Scope</label>
            <select
              name="projectScope"
              className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:outline-hidden focus:ring-1 focus:ring-sky-500"
            >
              <option value="Infrastructure EPC">Infrastructure EPC & Civil Engineering</option>
              <option value="Mechanical / Pipeline">Industrial Piping & Mechanical Installation</option>
              <option value="Corporate Facility">Commercial Facility Development</option>
              <option value="Consultancy">Technical Advisory & Project Management</option>
              <option value="General Inquiry">General Corporate Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Project Details / Message *</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Outline your project timeline, requirements, or scope..."
              className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:outline-hidden focus:ring-1 focus:ring-sky-500"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 rounded-lg transition-colors shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{isPending ? 'Submitting Inquiry...' : 'Submit Inquiry'}</span>
          </button>
        </form>
      </div>
    </div>
  )
}
