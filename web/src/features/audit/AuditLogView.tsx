import React from 'react'
import { History, User, GitCommit } from 'lucide-react'
import type { AuditLogEntry } from '@/actions/audit'
import { formatDate } from '@/lib/utils'

export function AuditLogView({ logs }: { logs: AuditLogEntry[] }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <History className="w-5 h-5 text-sky-700" />
            <span>Sanity CMS Real-Time Audit Log</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Tracks every content mutation, author attribution, and publication event across LeSeft Studio.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Audit Stream Active
          </span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase font-semibold text-[11px] tracking-wider">
              <tr>
                <th className="py-3 px-4">Action & Document</th>
                <th className="py-3 px-4">Author / Role</th>
                <th className="py-3 px-4">Summary of Changes</th>
                <th className="py-3 px-4">Revision Hash</th>
                <th className="py-3 px-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {logs.map((log) => {
                const actionBadge = {
                  Published: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                  Updated: 'bg-sky-50 text-sky-800 border-sky-200',
                  Created: 'bg-indigo-50 text-indigo-800 border-indigo-200',
                  Dispatched: 'bg-purple-50 text-purple-800 border-purple-200',
                }[log.action]

                return (
                  <tr key={log.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${actionBadge}`}>
                          {log.action}
                        </span>
                        <span className="font-semibold">{log.documentTitle}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                        schema: {log.documentType}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      <div className="flex items-center gap-1.5 font-medium text-slate-900">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>{log.authorName}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 block">{log.authorEmail} • {log.authorRole}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 max-w-xs leading-relaxed">
                      {log.summary}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-slate-500">
                      <span className="inline-flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        <GitCommit className="w-3 h-3 text-slate-400" />
                        {log.revisionId}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-500 font-mono text-[11px] whitespace-nowrap">
                      {formatDate(log.timestamp)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
