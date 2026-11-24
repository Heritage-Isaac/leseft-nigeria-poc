import { defineField, defineType } from 'sanity'

export const commodity = defineType({
  name: 'commodity',
  title: 'Commodity & Hardware',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Commodity / Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Agricultural Commodities', value: 'commodities' },
          { title: 'Energy & Solar Hardware', value: 'energy' },
          { title: 'Industrial & Heavy Equipment', value: 'industrial' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tradeDirection',
      title: 'Trade Direction',
      type: 'string',
      options: {
        list: [
          { title: 'Import (Europe ➔ Nigeria)', value: 'Import' },
          { title: 'Export (Nigeria ➔ Global)', value: 'Export' },
          { title: 'Bilateral Trade', value: 'Bilateral' },
        ],
      },
      initialValue: 'Import',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'availableGrades',
      title: 'Available Grades / Specifications',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'originDestination',
      title: 'Origin / Destination Corridor',
      type: 'string',
    }),
    defineField({
      name: 'minimumVolume',
      title: 'Minimum Order Volume / Lot Size',
      type: 'string',
    }),
    defineField({
      name: 'active',
      title: 'Active in Stock / Seasonally Available',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
  ],
})
