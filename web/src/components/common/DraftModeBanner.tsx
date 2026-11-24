import React from 'react'
import Link from 'next/link'
import { Eye, X } from 'lucide-react'

export function DraftModeBanner({ isEnabled }: { isEnabled: boolean }) {
  if (!isEnabled) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-amber-500 text-slate-950 px-4 py-2.5 rounded-lg shadow-lg border border-amber-600 flex items-center gap-3 text-xs font-semibold">
      <div className="flex items-center gap-1.5">
        <Eye className="w-4 h-4" />
        <span>Draft Mode Active (Viewing Unpublished Content)</span>
      </div>
      <Link
        href="/api/draft-mode/disable"
        className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white px-2 py-1 rounded transition-colors text-[11px]"
      >
        <span>Exit Preview</span>
        <X className="w-3 h-3" />
      </Link>
    </div>
  )
}
