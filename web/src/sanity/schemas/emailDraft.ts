import { defineField, defineType } from 'sanity'

export const emailDraft = defineType({
  name: 'emailDraft',
  title: 'Email Campaigns & Drafts',
  type: 'document',
  description: 'Draft corporate newsletters, stakeholder updates, and project announcements to dispatch via any email API (Resend, SendGrid, Postmark) with Cloudinary image support.',
  fields: [
    defineField({
      name: 'title',
      title: 'Campaign Title (Internal)',
      type: 'string',
      description: 'Internal reference name for this email campaign',
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'subject',
      title: 'Email Subject Line',
      type: 'string',
      description: 'The email subject recipients will see in their inbox. (Tip: Use Sanity AI Assist to optimize subject lines!)',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'previewText',
      title: 'Preview / Preheader Text',
      type: 'string',
      description: 'Short snippet shown beside the subject in email clients (e.g., Gmail, Outlook)',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'targetAudience',
      title: 'Target Audience / Segment',
      type: 'string',
      options: {
        list: [
          { title: 'Corporate Clients & Partners', value: 'clients' },
          { title: 'Project Stakeholders & Regulators', value: 'stakeholders' },
          { title: 'Public Newsletter Subscribers', value: 'newsletter' },
          { title: 'Internal Staff & Executives', value: 'internal' },
        ],
      },
      initialValue: 'clients',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageMode',
      title: 'Hero Image Hosting Source',
      type: 'string',
      description: 'Choose whether this email asset is hosted on Cloudinary CDN or uploaded to Sanity',
      options: {
        list: [
          { title: 'Cloudinary Hosted URL (Recommended for high-speed email delivery)', value: 'cloudinary' },
          { title: 'Direct Sanity Upload', value: 'sanity' },
        ],
        layout: 'radio',
      },
      initialValue: 'cloudinary',
    }),
    defineField({
      name: 'cloudinaryImageUrl',
      title: 'Cloudinary Image URL',
      type: 'url',
      description: 'Enter your Cloudinary hosted image URL (e.g., https://res.cloudinary.com/leseft/image/upload/v1/newsletters/header.jpg). Studio reads and uses this URL across email templates.',
      hidden: ({ parent }) => parent?.imageMode === 'sanity',
    }),
    defineField({
      name: 'uploadedImage',
      title: 'Sanity Uploaded Image',
      type: 'image',
      description: 'Direct upload to Sanity CDN if not using Cloudinary',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.imageMode === 'cloudinary',
    }),
    defineField({
      name: 'body',
      title: 'Email Body Content',
      type: 'array',
      description: 'Rich text content for the email body. You can use bold, links, lists, and headings.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading', value: 'h3' },
            { title: 'Callout Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet List', value: 'bullet' },
            { title: 'Numbered List', value: 'number' },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'callToAction',
      title: 'Call To Action (CTA) Button',
      type: 'object',
      fields: [
        defineField({
          name: 'buttonText',
          title: 'Button Label',
          type: 'string',
          initialValue: 'View Project Details',
        }),
        defineField({
          name: 'buttonUrl',
          title: 'Button Destination URL',
          type: 'url',
          initialValue: 'https://leseft.com',
        }),
      ],
    }),
    defineField({
      name: 'status',
      title: 'Workflow Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'Draft' },
          { title: 'Ready to Send', value: 'Ready to Send' },
          { title: 'Sent', value: 'Sent' },
        ],
        layout: 'radio',
      },
      initialValue: 'Draft',
    }),
    defineField({
      name: 'testRecipientEmail',
      title: 'Test Dispatch Recipient',
      type: 'string',
      description: 'Optional email address to send a proof/test message to',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subject: 'subject',
      status: 'status',
      audience: 'targetAudience',
    },
    prepare({ title, subject, status, audience }) {
      return {
        title: title || 'Untitled Campaign',
        subtitle: `[${status || 'Draft'}] ${subject || 'No subject'} (${audience || 'General'})`,
      }
    },
  },
})
