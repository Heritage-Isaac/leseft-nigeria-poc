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
      description: 'e.g. Grade A / EN-10025, Export Grade 1, 550W+ Bifacial Tier-1',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'originDestination',
      title: 'Origin / Destination Corridor',
      type: 'string',
      description: 'e.g. Ostrava / EU ➔ Abuja / Lagos',
    }),
    defineField({
      name: 'minimumVolume',
      title: 'Minimum Order Volume / Lot Size',
      type: 'string',
      description: 'e.g. 20 MT / 1x 40ft FCL, 100kW Batch',
    }),
    defineField({
      name: 'active',
      title: 'Active in Stock / Seasonally Available',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle off to temporarily hide seasonal or out-of-stock commodities',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
  ],
})
