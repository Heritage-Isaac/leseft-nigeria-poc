import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site & Corporate Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'Leseft Nigeria Limited',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cacNumber',
      title: 'CAC Registration Number',
      type: 'string',
      initialValue: 'RC-7669078',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'incorporationDate',
      title: 'Incorporation Date',
      type: 'string',
      initialValue: 'July 9, 2024',
    }),
    defineField({
      name: 'headquartersAddress',
      title: 'Headquarters Address',
      type: 'string',
      initialValue: 'Plot 69, Gold Court Estate Street, Katampe District, FCT Abuja',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      initialValue: '+234 809 533 2333',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'info@leseft.cz',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'parentCompanyName',
      title: 'Parent Company Name',
      type: 'string',
      initialValue: 'Leseft International s.r.o.',
    }),
    defineField({
      name: 'parentCompanyLocation',
      title: 'Parent Company Location',
      type: 'string',
      initialValue: 'Ostrava, Czech Republic',
    }),
    defineField({
      name: 'parentCompanyUrl',
      title: 'Parent Company Website',
      type: 'url',
      initialValue: 'https://www.leseft.cz/en/',
    }),
    defineField({
      name: 'fourPillars',
      title: 'Four Core Brand Pillars',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['Trade', 'Energy', 'Industry', 'West Africa'],
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow Text',
      type: 'string',
      initialValue: 'A Subsidiary of Leseft International s.r.o. (Czech Republic)',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Bridging European Industrial Standards with West African Markets',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      rows: 3,
      initialValue:
        'Headquartered in Abuja, Leseft Nigeria Limited delivers reliable import-export logistics, clean energy hardware, industrial machinery, and high-grade agricultural commodities across Nigeria and West Africa.',
    }),
  ],
})
