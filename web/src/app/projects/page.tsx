import React from 'react'
import { sanityFetch, fallbackProjects } from '@/sanity/lib/client'
import { projectsQuery } from '@/sanity/lib/queries'
import type { Project } from '@/types'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProjectsDirectory } from '@/features/projects/ProjectsDirectory'

export const revalidate = 0

export default async function ProjectsPage() {
  const projectsFetch = await sanityFetch<Project[]>({
    query: projectsQuery,
    fallback: fallbackProjects,
  })

  const projects = projectsFetch.data || fallbackProjects

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar companyName="LeSeft Nigeria Limited" />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Portfolio & Deliveries
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Corporate Projects Directory
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            All project records below are maintained dynamically in Sanity Studio at{' '}
            <code className="text-xs bg-slate-200 px-1.5 py-0.5 rounded font-mono text-slate-800">
              schema: project
            </code>
            . Filter by status or search across locations.
          </p>
        </div>

        <ProjectsDirectory projects={projects} />
      </main>
      <Footer companyName="LeSeft Nigeria Limited" />
    </div>
  )
}
