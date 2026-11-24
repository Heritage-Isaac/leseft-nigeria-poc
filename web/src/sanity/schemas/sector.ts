import { defineField, defineType } from 'sanity'

export const sector = defineType({
  name: 'sector',
  title: 'Business Sector',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sector Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconType',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          { title: 'Energy / Solar', value: 'energy' },
          { title: 'Industrial / Machinery', value: 'industry' },
          { title: 'Commodities / Trade', value: 'trade' },
        ],
      },
      initialValue: 'trade',
    }),
    defineField({
      name: 'shortSummary',
      title: 'Short Summary',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'capabilities',
      title: 'Key Capabilities & Offerings',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'recommendedImageGuidance',
      title: 'Recommended Photography Guidance',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
  ],
})
