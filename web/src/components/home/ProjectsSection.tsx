'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { PlusCircle, FolderGit2 } from 'lucide-react'
import type { Project } from '@/types'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Completed' | 'In Progress' | 'Upcoming'>('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.projectStatus === activeFilter)

  return (
    <section id="recent-projects" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header with Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Corporate Portfolio
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Recent Projects & Deliveries
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every project below is retrieved dynamically from Sanity CMS via GROQ queries.
              New projects added in Sanity Studio automatically display here upon publishing.
            </p>
          </div>

          {/* Studio Link Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors"
            >
              <PlusCircle className="w-4 h-4 text-emerald-400" />
              <span>Add New Project in Studio</span>
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {(['All', 'In Progress', 'Completed', 'Upcoming'] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {filter}
              <span className="ml-1.5 opacity-70 text-[11px]">
                ({filter === 'All' ? projects.length : projects.filter((p) => p.projectStatus === filter).length})
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-dashed border-slate-300 rounded-xl space-y-4">
            <FolderGit2 className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-semibold text-slate-800">No projects found in this filter</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Add or edit a project in Sanity Studio at `/studio` to see it populated here.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
