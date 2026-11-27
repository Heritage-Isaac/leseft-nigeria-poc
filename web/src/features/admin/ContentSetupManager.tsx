'use client'

import React, { useState } from 'react'
import { AlertCircle, CheckCircle2, Database, ExternalLink, Loader2 } from 'lucide-react'
import { seedMissingWebsiteContent } from '@/app/admin/actions'

export function ContentSetupManager() {
  const [isSeeding, setIsSeeding] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(
    null
  )
  const studioUrl =
    process.env.NEXT_PUBLIC_SANITY_STUDIO_URL ||
    (process.env.NODE_ENV === 'development' ? 'http://localhost:3333' : '/studio')

  const handleSeed = async () => {
    setIsSeeding(true)
    setMessage(null)
    try {
      const result = await seedMissingWebsiteContent()

      if (result.success) {
        setMessage({
          type: 'success',
          text: `Content is ready. Added ${result.createdCount} missing records; left ${result.existingCount} existing records unchanged.`,
        })
      } else {
        setMessage({ type: 'error', text: result.error })
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to initialize CMS content.',
      })
    } finally {
      setIsSeeding(false)
    }
  }

  return (
    <div className="max-w-3xl space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4">
        <h2 className="text-base font-bold text-[#17191C]">Website Content</h2>
        <p className="mt-1 text-xs text-[#626B75]">
          Initialize the current site content in Sanity, then edit the full documents in Studio.
          Existing CMS documents are never overwritten.
        </p>
      </div>

      {message && (
        <div
          role={message.type === 'error' ? 'alert' : 'status'}
          className={`flex items-start gap-2 rounded-xs border p-3 text-xs ${
            message.type === 'error'
              ? 'border-[#FCA5A5] bg-[#FEF2F2] text-[#991B1B]'
              : 'border-[#BCE6C4] bg-[#EBF7EE] text-[#0E5A3A]'
          }`}
        >
          {message.type === 'error' ? (
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          ) : (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      <div className="rounded-xs border border-[#E5E7EB] bg-white p-5 shadow-xs">
        <div className="flex items-start gap-3">
          <Database className="mt-0.5 h-5 w-5 shrink-0 text-[#1C75BC]" />
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-[#17191C]">Current website records</h3>
            <p className="text-xs leading-relaxed text-[#626B75]">
              Creates missing site settings, company profile, business sectors, commodities,
              careers, and projects from the content currently displayed by the site.
            </p>
            <button
              type="button"
              onClick={handleSeed}
              disabled={isSeeding}
              className="mt-2 inline-flex items-center gap-2 rounded-xs bg-[#1C75BC] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#145A91] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSeeding ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Database className="h-3.5 w-3.5" />
              )}
              {isSeeding ? 'Initializing…' : 'Initialize Missing Content'}
            </button>
          </div>
        </div>
      </div>

      <a
        href={studioUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#1C75BC] hover:underline"
      >
        <span>Open Sanity Studio to edit content</span>
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  )
}
