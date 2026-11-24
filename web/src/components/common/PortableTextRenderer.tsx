import React from 'react'
import { PortableText, type PortableTextComponents } from '@portabletext/react'

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-slate-600 leading-relaxed mb-4 text-base">{children}</p>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 tracking-tight">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-slate-900 mt-4 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-sky-600 pl-4 py-1 italic text-slate-700 my-4 bg-sky-50/50 rounded-r">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 mb-4 text-slate-600 space-y-1.5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 mb-4 text-slate-600 space-y-1.5">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600 hover:text-sky-800 underline underline-offset-2 transition-colors"
      >
        {children}
      </a>
    ),
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PortableTextRenderer({ value }: { value?: any }) {
  if (!value || !Array.isArray(value) || value.length === 0) {
    return null
  }
  return <PortableText value={value} components={components} />
}
