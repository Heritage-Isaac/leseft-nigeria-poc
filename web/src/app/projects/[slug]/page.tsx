import React from 'react'
import { notFound } from 'next/navigation'
import { sanityFetch, fallbackProjects } from '@/sanity/lib/client'
import { projectBySlugQuery } from '@/sanity/lib/queries'
import type { Project } from '@/types'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ProjectDetailView } from '@/features/projects/ProjectDetailView'

export const revalidate = 0

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Fetch project by slug from Sanity
  const fallbackMatch = fallbackProjects.find(
    (p) => p.slug.current === slug || p._id === slug
  )

  const projectFetch = await sanityFetch<Project>({
    query: projectBySlugQuery,
    params: { slug },
    fallback: fallbackMatch,
  })

  const project = projectFetch.data || fallbackMatch

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar companyName="LeSeft Nigeria Limited" />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProjectDetailView project={project} />
      </main>
      <Footer companyName="LeSeft Nigeria Limited" />
    </div>
  )
}
