import React from 'react'
import Link from 'next/link'
import { ArrowLeft, MapPin, Calendar, ShieldCheck, FileText } from 'lucide-react'
import type { Project } from '@/types'
import { SanityImage } from '@/components/common/SanityImage'
import { PortableTextRenderer } from '@/components/common/PortableTextRenderer'
import { formatDate } from '@/lib/utils'

export function ProjectDetailView({ project }: { project: Project }) {
  const statusColors = {
    Completed: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    'In Progress': 'bg-amber-50 text-amber-800 border-amber-200',
    Upcoming: 'bg-sky-50 text-sky-800 border-sky-200',
  }[project.projectStatus || 'In Progress']

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      {/* Navigation Breadcrumb */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-xs transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors}`}>
            {project.projectStatus}
          </span>
          <span className="text-xs text-slate-500 font-mono">
            Slug: /{project.slug?.current}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {project.projectName}
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-500 border-t border-slate-200">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-sky-600" />
            <strong className="text-slate-700">Location:</strong> {project.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-sky-600" />
            <strong className="text-slate-700">Published:</strong> {formatDate(project.publishedDate)}
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <strong className="text-slate-700">Certified:</strong> LeSeft Engineering Compliance
          </span>
        </div>
      </div>

      {/* Project Hero Visual */}
      <div className="relative aspect-16/9 w-full bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-xs">
        <SanityImage
          image={project.projectImage}
          alt={project.projectName}
          fill
          priority
        />
      </div>

      {/* Narrative & Scope */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg border-b border-slate-100 pb-3">
          <FileText className="w-5 h-5 text-sky-700" />
          <h2>Project Scope & Execution Deliverables</h2>
        </div>

        {project.fullDescription && project.fullDescription.length > 0 ? (
          <PortableTextRenderer value={project.fullDescription} />
        ) : (
          <p className="text-sm text-slate-600 leading-relaxed">
            This project is executed under LeSeft Nigeria Limited’s primary engineering framework. Full technical schematics, environmental assessment approvals, and milestone reports are recorded in the client portal.
          </p>
        )}
      </div>

      {/* Call to Action Box */}
      <div className="p-8 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-1">
          <h3 className="font-bold text-lg">Partner With LeSeft Nigeria</h3>
          <p className="text-xs text-slate-300 max-w-md">
            Discuss project specifications, EPC contracting, or request an institutional capability briefing.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg transition-colors shrink-0"
        >
          Submit Corporate RFP
        </Link>
      </div>
    </article>
  )
}
