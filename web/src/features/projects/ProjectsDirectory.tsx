'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, MapPin, Calendar, ArrowRight, FolderGit2 } from 'lucide-react'
import type { Project } from '@/types'
import { SanityImage } from '@/components/common/SanityImage'
import { formatDate } from '@/lib/utils'

export function ProjectsDirectory({ projects }: { projects: Project[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'All' | 'Completed' | 'In Progress' | 'Upcoming'>('All')

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || p.projectStatus === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search projects by name, location, or scope..."
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-sky-500"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          {(['All', 'Completed', 'In Progress', 'Upcoming'] as const).map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                statusFilter === status
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => {
            const statusConfig = {
              Completed: 'bg-emerald-50 text-emerald-800 border-emerald-200',
              'In Progress': 'bg-amber-50 text-amber-800 border-amber-200',
              Upcoming: 'bg-sky-50 text-sky-800 border-sky-200',
            }[proj.projectStatus || 'In Progress']

            return (
              <article
                key={proj._id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col hover:border-slate-300 transition-all group shadow-xs"
              >
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                  <SanityImage
                    image={proj.projectImage}
                    alt={proj.projectName}
                    fill
                    className="group-hover:scale-103 transition-transform duration-300 ease-out"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${statusConfig}`}>
                      {proj.projectStatus}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{proj.location}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{formatDate(proj.publishedDate)}</span>
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                      {proj.projectName}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/projects/${proj.slug?.current || proj._id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>Read Project Brief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[11px] font-mono text-slate-400">Sanity Record</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white border border-dashed border-slate-300 rounded-xl space-y-3">
          <FolderGit2 className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="font-semibold text-slate-800 text-sm">No matching projects found</h3>
          <p className="text-xs text-slate-500">Try adjusting your search terms or filter selection.</p>
        </div>
      )}
    </div>
  )
}
