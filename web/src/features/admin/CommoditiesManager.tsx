'use client'

import React, { useState } from 'react'
import { Package, CheckCircle2, XCircle, ArrowRight, Loader2 } from 'lucide-react'
import { toggleCommodityStatus } from '@/app/admin/actions'
import type { Commodity } from '@/types'

interface CommoditiesManagerProps {
  initialCommodities: Commodity[]
  onSaved?: () => void
}

export function CommoditiesManager({ initialCommodities, onSaved }: CommoditiesManagerProps) {
  const [commodities, setCommodities] = useState<Commodity[]>(initialCommodities)
  const [loadingId, setLoadingId] = useState<string | null>(null)

  const handleToggle = async (id: string, currentState: boolean) => {
    setLoadingId(id)
    const newState = !currentState

    // Optimistic update
    setCommodities((prev) =>
      prev.map((c) => (c._id === id ? { ...c, active: newState } : c))
    )

    const res = await toggleCommodityStatus(id, newState)
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
            Physical Trade Desk & Commodity Availability
          </h2>
          <p className="text-xs text-[#626B75] mt-0.5">
            Manage live trading stock, available grades, and seasonal visibility across Nigeria and European corridors.
          </p>
        </div>
        <span className="text-xs font-mono text-[#626B75]">
          Total: {commodities.length} items
        </span>
      </div>

      <div className="border border-[#E5E7EB] rounded-xs bg-white overflow-hidden shadow-xs">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#F8F9FA] border-b border-[#E5E7EB] text-[#626B75] font-semibold">
            <tr>
              <th className="py-3 px-4">Commodity / Equipment</th>
              <th className="py-3 px-4">Direction</th>
              <th className="py-3 px-4">Standard Grade / Spec</th>
              <th className="py-3 px-4">Corridor</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E7EB] text-[#17191C]">
            {commodities.map((item) => (
              <tr key={item._id} className="hover:bg-[#F8F9FA] transition-colors">
                <td className="py-3 px-4 font-bold">{item.name}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-0.5 rounded-xs text-[10px] font-bold uppercase tracking-wider ${
                      item.tradeDirection === 'Export'
                        ? 'bg-[#EBF7EE] text-[#0E5A3A]'
                        : 'bg-[#EFF6FF] text-[#1D4ED8]'
                    }`}
                  >
                    {item.tradeDirection}
                  </span>
                </td>
                <td className="py-3 px-4 text-[#484F58]">{item.availableGrades}</td>
                <td className="py-3 px-4 font-mono text-[11px] text-[#626B75]">
                  {item.originDestination || 'Ostrava ➔ Lagos/Abuja'}
                </td>
                <td className="py-3 px-4 text-center">
                  {item.active ? (
                    <span className="inline-flex items-center gap-1 text-[#0E5A3A] font-semibold text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> In Stock
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[#89919A] font-semibold text-[11px]">
                      <XCircle className="w-3.5 h-3.5" /> Hidden / Seasonal
                    </span>
                  )}
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={() => handleToggle(item._id, item.active)}
                    disabled={loadingId === item._id}
                    className="px-2.5 py-1 text-[11px] font-semibold rounded-xs border border-[#E5E7EB] bg-white hover:bg-[#F1F3F5] text-[#17191C] transition-all disabled:opacity-50"
                  >
                    {loadingId === item._id ? (
                      <Loader2 className="w-3 h-3 animate-spin inline" />
                    ) : item.active ? (
                      'Hide from Site'
                    ) : (
                      'Activate on Site'
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
