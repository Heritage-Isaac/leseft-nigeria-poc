import { defineField, defineType } from 'sanity'

export const tradeInquiry = defineType({
  name: 'tradeInquiry',
  title: 'Trade Inquiry & Quote Request',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone / WhatsApp',
      type: 'string',
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
    }),
    defineField({
      name: 'commodityOrProduct',
      title: 'Commodity or Equipment Requested',
      type: 'string',
    }),
    defineField({
      name: 'volume',
      title: 'Estimated Volume / Quantity',
      type: 'string',
    }),
    defineField({
      name: 'destination',
      title: 'Delivery Destination (Port / State)',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Additional Specs & Requirements',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'status',
      title: 'Inquiry Status',
      type: 'string',
      options: {
        list: [
          { title: 'New Submission', value: 'new' },
          { title: 'Under Review', value: 'in_review' },
          { title: 'Quote Issued', value: 'quoted' },
          { title: 'Closed / Fulfilled', value: 'closed' },
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
