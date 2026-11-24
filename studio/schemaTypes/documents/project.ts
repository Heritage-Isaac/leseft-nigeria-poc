import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      description: 'The official name of the project or contract',
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier generated automatically from the project name',
      options: {
        source: 'projectName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief overview displayed on project cards and summaries',
      validation: (Rule) => Rule.required().max(250),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      description: 'Comprehensive project scope, deliverables, and outcomes',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
        },
      ],
    }),
    defineField({
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      description: 'High-quality photography or site diagram representing the project',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Accessibility description for screen readers',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Geographic location in Nigeria (e.g., Victoria Island, Lagos; Abuja FCT; Port Harcourt)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectStatus',
      title: 'Project Status',
      type: 'string',
      description: 'Current execution status of the project',
      options: {
        list: [
          { title: 'Completed', value: 'Completed' },
          { title: 'In Progress', value: 'In Progress' },
          { title: 'Upcoming', value: 'Upcoming' },
        ],
        layout: 'radio',
      },
      initialValue: 'In Progress',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
      description: 'Date shown publicly for this project announcement',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Publish Date (Newest first)',
      name: 'publishedDateDesc',
      by: [{ field: 'publishedDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'projectName',
      location: 'location',
      status: 'projectStatus',
      media: 'projectImage',
    },
    prepare({ title, location, status, media }) {
      return {
        title,
        subtitle: `${status || 'Pending'} • ${location || 'Nigeria'}`,
        media,
      }
    },
  },
})
