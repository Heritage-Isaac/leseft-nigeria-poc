'use client'

import React, { useState } from 'react'
import { Briefcase, CheckCircle2, XCircle, MapPin, Loader2 } from 'lucide-react'
import { toggleCareerStatus } from '@/app/admin/actions'
import type { CareerListing } from '@/types'

interface CareersManagerProps {
  initialCareers: CareerListing[]
  onSaved?: () => void
}

export function CareersManager({ initialCareers, onSaved }: CareersManagerProps) {
  const [careers, setCareers] = useState<CareerListing[]>(initialCareers)
  const [loadingId, setLoadingId] = useState<string | null>(null)

  const handleToggle = async (id: string, currentState: boolean) => {
    setLoadingId(id)
    const newState = !currentState

    setCareers((prev) =>
      prev.map((c) => (c._id === id ? { ...c, active: newState } : c))
    )

    const res = await toggleCareerStatus(id, newState)
    setLoadingId(null)
    if (res.success) {
      onSaved?.()
    }
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-[#E5E7EB] pb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-[#17191C]">
            Career Listings & Recruitment Desk
          </h2>
          <p className="text-xs text-[#626B75] mt-0.5">
            Manage hiring vacancies for the Abuja operations and trade logistics team. Self-serve toggle allows hiding fulfilled roles instantly.
          </p>
        </div>
        <span className="text-xs font-mono text-[#626B75]">
          Active: {careers.filter((c) => c.active).length} / {careers.length}
        </span>
      </div>

      <div className="space-y-4">
        {careers.map((role) => (
          <div
            key={role._id}
            className="p-5 rounded-xs border border-[#E5E7EB] bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xs"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-[#C28B38] font-bold uppercase tracking-wider">
                  {role.department}
                </span>
                <span className="text-[#89919A]">•</span>
                <span className="text-[10px] text-[#626B75] font-semibold">{role.jobType}</span>
              </div>
              <h3 className="text-sm font-bold text-[#17191C]">{role.title}</h3>
              <p className="text-xs text-[#626B75] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C28B38]" />
                <span>{role.location}</span>
                <span className="mx-1 text-[#D1D5DB]">|</span>
                <span className="font-mono text-[11px]">Channel: {role.applicationEmail}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {role.active ? (
                <span className="inline-flex items-center gap-1 text-[#0E5A3A] font-semibold text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Published Live
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[#89919A] font-semibold text-xs">
                  <XCircle className="w-3.5 h-3.5" /> Closed / Hidden
                </span>
              )}

              <button
                onClick={() => handleToggle(role._id, role.active)}
                disabled={loadingId === role._id}
                className="px-3 py-1.5 text-xs font-semibold rounded-xs border border-[#E5E7EB] bg-[#F8F9FA] hover:bg-[#E5E7EB] text-[#17191C] transition-all disabled:opacity-50"
              >
                {loadingId === role._id ? (
                  <Loader2 className="w-3 h-3 animate-spin inline" />
                ) : role.active ? (
                  'Close Listing'
                ) : (
                  'Reopen Listing'
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
