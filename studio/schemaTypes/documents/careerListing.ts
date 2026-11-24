import { defineField, defineType } from 'sanity'

export const careerListing = defineType({
  name: 'careerListing',
  title: 'Career Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Role Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      initialValue: 'Trade & Logistics',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'Plot 69, Katampe District, Abuja FCT',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-Time', value: 'Full-time' },
          { title: 'Contract', value: 'Contract' },
          { title: 'Executive Placement', value: 'Executive' },
        ],
      },
      initialValue: 'Full-time',
    }),
    defineField({
      name: 'keyTasks',
      title: 'Key Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements & Qualifications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'applicationEmail',
      title: 'Application Channel',
      type: 'string',
      initialValue: 'info@leseft.cz',
    }),
    defineField({
      name: 'deadline',
      title: 'Application Deadline',
      type: 'string',
      description: 'e.g. Rolling Basis / Q4 2026',
    }),
    defineField({
      name: 'active',
      title: 'Role Active & Accepting Applications',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle off to mark the role as closed without deleting the listing',
    }),
  ],
})
