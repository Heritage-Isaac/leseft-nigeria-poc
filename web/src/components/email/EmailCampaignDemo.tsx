'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Mail, Send, CheckCircle2, ArrowUpRight, Cloud, Bot, Code, RefreshCw } from 'lucide-react'
import type { EmailDraft } from '@/types'

interface DispatchResponse {
  success: boolean
  provider?: string
  messageId?: string
  error?: string
  recipient?: string
}

export function EmailCampaignDemo({ drafts }: { drafts: EmailDraft[] }) {
  const [selectedDraft] = useState<EmailDraft>(drafts[0] || {
    _id: 'default-draft',
    title: 'Q1 2026 Project Milestone & Corporate Review',
    subject: 'LeSeft Nigeria Limited: Key Q1 Infrastructure Milestones & Stakeholder Briefing',
    previewText: 'Review our latest execution milestones across Lagos and Abuja projects.',
    targetAudience: 'clients',
    imageMode: 'cloudinary',
    cloudinaryImageUrl: 'https://res.cloudinary.com/demo/image/upload/v1689123456/sample.jpg',
    status: 'Ready to Send',
    callToAction: {
      buttonText: 'View Project Details',
      buttonUrl: 'https://leseft.com/projects',
    },
    testRecipientEmail: 'client-relations@leseft.com',
  })

  const [testEmail, setTestEmail] = useState(selectedDraft.testRecipientEmail || 'executive@clientcompany.com')
  const [sending, setSending] = useState(false)
  const [sendResult, setSendResult] = useState<DispatchResponse | null>(null)
  const [activeTab, setActiveTab] = useState<'preview' | 'html'>('preview')

  const handleSendTest = async () => {
    setSending(true)
    setSendResult(null)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          draft: selectedDraft,
          recipientEmail: testEmail,
        }),
      })
      const data: DispatchResponse = await res.json()
      setSendResult(data)
    } catch (err: unknown) {
      setSendResult({
        success: false,
        error: err instanceof Error ? err.message : 'Failed to dispatch email test',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="email-engine" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 border border-sky-200 text-xs font-semibold text-sky-800">
            <Mail className="w-3.5 h-3.5" />
            <span>Sanity Dashboard Email Drafting + Cloudinary CDN Integration</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Draft in Sanity • Host on Cloudinary • Dispatch via Any Email API
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Content creators can compose corporate newsletters and announcements in Sanity Studio at{' '}
            <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">
              schema: emailDraft
            </code>
            , link Cloudinary hosted media, and dispatch via any provider (Resend, SendGrid, Postmark, or custom Webhook).
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 border border-slate-200 rounded-lg bg-slate-50 space-y-2">
            <div className="flex items-center gap-2 text-sky-700 font-semibold text-sm">
              <Cloud className="w-4 h-4" />
              <span>Cloudinary CDN Integration</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Images uploaded or hosted on Cloudinary are referenced in Sanity Studio and dynamically optimized (`f_auto,q_auto,w_600`) for high-speed email delivery.
            </p>
          </div>

          <div className="p-5 border border-slate-200 rounded-lg bg-slate-50 space-y-2">
            <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm">
              <Bot className="w-4 h-4 text-emerald-600" />
              <span>Sanity AI Assist Ready</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped for Sanity AI Assist (`@sanity/assist`) to help team members automatically draft subject lines, polish corporate copy, and translate announcements.
            </p>
          </div>

          <div className="p-5 border border-slate-200 rounded-lg bg-slate-50 space-y-2">
            <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm">
              <Code className="w-4 h-4 text-indigo-600" />
              <span>Universal Email API Adapter</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pluggable Next.js backend endpoint (`/api/send-email`) connects to Resend, SendGrid, Postmark, or Webhooks via simple `.env.local` settings.
            </p>
          </div>
        </div>

        {/* Interactive Campaign Demonstration Console */}
        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          {/* Top Console Bar */}
          <div className="p-4 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              <span className="font-semibold text-sm">Live Campaign Demonstration Console</span>
              <span className="text-xs text-slate-400">| Status: {selectedDraft.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/studio"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded transition-colors"
              >
                <span>Draft New Email in Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Console Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Left Controls: Draft Details & Test Dispatch */}
            <div className="lg:col-span-5 p-6 space-y-6 bg-slate-50/50">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Campaign Subject
                  </label>
                  <p className="text-sm font-bold text-slate-900 bg-white p-3 rounded border border-slate-200">
                    {selectedDraft.subject}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Inbox Preheader Snippet
                  </label>
                  <p className="text-xs text-slate-600 bg-white p-2.5 rounded border border-slate-200">
                    {selectedDraft.previewText || 'Review latest project deliverables and corporate updates.'}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Cloudinary CDN Image URL
                  </label>
                  <p className="text-xs font-mono text-slate-600 bg-white p-2.5 rounded border border-slate-200 truncate">
                    {selectedDraft.cloudinaryImageUrl || 'https://res.cloudinary.com/demo/image/upload/v1689123456/sample.jpg'}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Target Audience
                  </label>
                  <span className="inline-block px-2.5 py-1 text-xs font-medium bg-sky-100 text-sky-800 rounded">
                    {selectedDraft.targetAudience}
                  </span>
                </div>
              </div>

              {/* Live Test Dispatcher */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Test Email Dispatcher
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={testEmail}
                    onChange={(e) => setTestEmail(e.target.value)}
                    placeholder="recipient@example.com"
                    className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-md bg-white focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                  />
                  <button
                    type="button"
                    onClick={handleSendTest}
                    disabled={sending}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 disabled:opacity-50 rounded-md transition-colors"
                  >
                    {sending ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispatch</span>
                      </>
                    )}
                  </button>
                </div>

                {sendResult && (
                  <div
                    className={`p-3 rounded text-xs border ${
                      sendResult.success
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : 'bg-red-50 border-red-200 text-red-800'
                    }`}
                  >
                    {sendResult.success ? (
                      <div className="space-y-1">
                        <p className="font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Dispatched successfully via {sendResult.provider} provider!
                        </p>
                        <p className="font-mono text-[11px] opacity-80">Message ID: {sendResult.messageId}</p>
                      </div>
                    ) : (
                      <p>Error: {sendResult.error}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Rendered HTML Email Preview */}
            <div className="lg:col-span-7 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Rendered Email Template (What recipients see)
                </span>
                <div className="flex items-center gap-1 text-xs">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-2.5 py-1 rounded font-medium ${
                      activeTab === 'preview' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Visual Preview
                  </button>
                  <button
                    onClick={() => setActiveTab('html')}
                    className={`px-2.5 py-1 rounded font-medium ${
                      activeTab === 'html' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    HTML Source
                  </button>
                </div>
              </div>

              {activeTab === 'preview' ? (
                <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-100 p-4">
                  <div className="max-w-md mx-auto bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
                    {/* Email Header */}
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900">LeSeft Nigeria Limited</span>
                      <span className="text-[10px] uppercase font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                        Official Dispatch
                      </span>
                    </div>

                    {/* Email Hero Image */}
                    <div className="aspect-16/9 bg-slate-100 relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/leseft-hero.avif"
                        alt="Email Header"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Email Content */}
                    <div className="p-5 space-y-3">
                      <h4 className="font-bold text-base text-slate-900 leading-snug">
                        {selectedDraft.subject}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        We are pleased to provide institutional partners and project stakeholders with key execution updates on our engineering and logistics facilities across Nigeria.
                      </p>
                      <div className="pt-2">
                        <a
                          href="#"
                          className="inline-block px-4 py-2 text-xs font-semibold text-white bg-sky-600 rounded"
                        >
                          {selectedDraft.callToAction?.buttonText || 'View Project Report'} &rarr;
                        </a>
                      </div>
                    </div>

                    {/* Email Footer */}
                    <div className="p-4 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-500 space-y-1">
                      <p className="font-semibold text-slate-700">LeSeft Nigeria Limited</p>
                      <p>Victoria Island, Lagos • Abuja FCT, Nigeria</p>
                      <p className="text-[9px] text-slate-400">Sent via LeSeft Sanity CMS Engine with Cloudinary CDN</p>
                    </div>
                  </div>
                </div>
              ) : (
                <pre className="p-4 bg-slate-900 text-slate-200 text-xs rounded-lg overflow-x-auto max-h-96 font-mono leading-relaxed">
                  {`<!-- LeSeft Nigeria Responsive Corporate Email Template -->
<!-- Generated from Sanity CMS Draft: ${selectedDraft.title} -->
<!DOCTYPE html>
<html>
<head>
  <title>${selectedDraft.subject}</title>
</head>
<body style="background-color: #F8FAFC; font-family: sans-serif;">
  <table width="600" align="center" style="background: #ffffff; border: 1px solid #E2E8F0;">
    <tr><td style="padding: 24px; font-weight: bold;">LeSeft Nigeria Limited</td></tr>
    <tr><td><img src="${selectedDraft.cloudinaryImageUrl || 'https://res.cloudinary.com/...'}" width="100%" /></td></tr>
    <tr><td style="padding: 24px;"><h2>${selectedDraft.subject}</h2><p>...</p></td></tr>
  </table>
</body>
</html>`}
                </pre>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
