import React from 'react'
import Link from 'next/link'
import { Users, Shield, KeyRound, ArrowUpRight, Database } from 'lucide-react'

export function UserManagementGuide() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Users className="w-5 h-5 text-sky-700" />
            <span>CMS User Management & Authentication Architecture</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            How users, team roles, and editorial permissions operate in Sanity without an external database.
          </p>
        </div>

        <Link
          href="/studio"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors"
        >
          <span>Open Studio Members</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <Database className="w-4 h-4 text-sky-600" />
            <span>Do You Need an External DB?</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            <strong>No separate database is needed!</strong> Sanity provides an enterprise Identity & Access Management (IAM) layer built-in. All users, authentication tokens, and permissions are hosted natively.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <KeyRound className="w-4 h-4 text-emerald-600" />
            <span>How to Invite Team Members</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            The administrator goes to <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-[11px]">sanity.io/manage &gt; Members</code> or the Studio header, clicks <strong>Invite Member</strong>, enters their work email, and they gain instant access via Single Sign-On (SSO).
          </p>
        </div>

        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <Shield className="w-4 h-4 text-indigo-600" />
            <span>Role-Based Access Control (RBAC)</span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Assign granular roles: <strong>Administrator</strong> (full settings & schema), <strong>Editor</strong> (create & publish documents), or <strong>Viewer</strong> (read-only draft preview).
          </p>
        </div>
      </div>
    </div>
  )
}
