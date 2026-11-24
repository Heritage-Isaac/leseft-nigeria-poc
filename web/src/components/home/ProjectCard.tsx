import React from 'react'
import { MapPin, Calendar } from 'lucide-react'
import type { Project } from '@/types'
import { SanityImage } from '@/components/common/SanityImage'
import { formatDate } from '@/lib/utils'

export function ProjectCard({ project }: { project: Project }) {
  // Status badge styling
  const statusConfig = {
    Completed: {
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      dot: 'bg-emerald-500',
      label: 'Completed',
    },
    'In Progress': {
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      dot: 'bg-amber-500',
      label: 'In Progress',
    },
    Upcoming: {
      badgeBg: 'bg-sky-50 text-sky-800 border-sky-200',
      dot: 'bg-sky-500',
      label: 'Upcoming',
    },
  }[project.projectStatus || 'In Progress']

  return (
    <article className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col hover:border-slate-300 transition-all">
      {/* Visual Asset Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
        <SanityImage
          image={project.projectImage}
          alt={project.projectName}
          fill
          className="group-hover:scale-103 transition-transform duration-300 ease-out"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${statusConfig.badgeBg}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot}`} />
            {statusConfig.label}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Location & Date Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{project.location}</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{formatDate(project.publishedDate)}</span>
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
            {project.projectName}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer info: CMS Identifier */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono text-[11px]">slug: /{project.slug?.current || 'project'}</span>
          <span className="text-slate-500 font-medium">Published in Sanity</span>
        </div>
      </div>
    </article>
  )
}
