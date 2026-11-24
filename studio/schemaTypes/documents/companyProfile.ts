import { defineField, defineType } from 'sanity'

export const companyProfile = defineType({
  name: 'companyProfile',
  title: 'Company Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'Official registered corporate name (e.g. LeSeft Nigeria Limited)',
      validation: (Rule) => Rule.required().min(2).max(100),
      initialValue: 'LeSeft Nigeria Limited',
    }),
    defineField({
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
      description: 'Prominent headline displayed on the homepage hero section',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'shortIntroduction',
      title: 'Short Introduction',
      type: 'text',
      rows: 3,
      description: 'A concise summary of what LeSeft Nigeria does for clients and partners',
      validation: (Rule) => Rule.required().min(20).max(400),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Company Description',
      type: 'array',
      description: 'Detailed company narrative, background, and service scope',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
      ],
    }),
    defineField({
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      description: 'Main corporate or facility visual asset',
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
      name: 'mission',
      title: 'Company Mission',
      type: 'text',
      rows: 3,
      description: 'LeSeft Nigeria’s core purpose and operational commitment',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'vision',
      title: 'Company Vision',
      type: 'text',
      rows: 3,
      description: 'LeSeft Nigeria’s long-term aspirations in the Nigerian and African market',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      description: 'Guiding corporate principles and ethos',
      of: [
        {
          type: 'object',
          name: 'coreValue',
          title: 'Core Value',
          fields: [
            defineField({
              name: 'title',
              title: 'Value Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'pageHeading',
      media: 'companyImage',
    },
  },
})
