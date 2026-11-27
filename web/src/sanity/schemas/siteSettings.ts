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
      name: 'fourPillars',
      title: 'Four Core Brand Pillars',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['Trade', 'Energy', 'Industry', 'West Africa'],
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
    defineField({
      name: 'navLogo',
      title: 'Navbar Logo Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'navLogoUrl',
      title: 'Navbar Logo Image URL (Optional Override)',
      type: 'url',
    }),
    defineField({
      name: 'navLogoText',
      title: 'Navbar Logo Initials (Fallback)',
      type: 'string',
      initialValue: 'LS',
    }),
    defineField({
      name: 'navLinks',
      title: 'Navbar Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'Link (href)', type: 'string' },
          ],
        },
      ],
      initialValue: [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Commodities', href: '#commodities' },
        { label: 'Equipment & Technologies', href: '#equipment' },
        { label: 'Projects & Services', href: '#projects' },
        { label: 'For Partners', href: '#partners' },
        { label: 'Contact Us', href: '#contact' },
      ],
    }),
    defineField({
      name: 'navCtaText',
      title: 'Navbar Button Text',
      type: 'string',
      initialValue: 'Request a Quote',
    }),
    defineField({
      name: 'navCtaHref',
      title: 'Navbar Button Link',
      type: 'string',
      initialValue: '/#quote',
    }),
    defineField({
      name: 'navCtaColor',
      title: 'Navbar Button Background Color (Hex)',
      type: 'string',
      initialValue: '#1C75BC',
    }),
    defineField({
      name: 'navCtaTextColor',
      title: 'Navbar Button Text Color (Hex)',
      type: 'string',
      initialValue: '#FFFFFF',
    }),
    defineField({
      name: 'heroMediaType',
      title: 'Hero Background Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Video Carousel', value: 'video' },
          { title: 'Static Image', value: 'image' },
        ],
        layout: 'radio',
      },
      initialValue: 'video',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroImageUrl',
      title: 'Hero Background Image URL (Optional Override)',
      type: 'string',
    }),
    defineField({
      name: 'heroVideos',
      title: 'Hero Background Videos (URLs or /videos/... paths)',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        '/videos/15427503_640_360_50fps.mp4',
        '/videos/8457855-sd_640_360_24fps.mp4',
        '/videos/6618038-sd_426_240_24fps.mp4',
      ],
    }),
    defineField({
      name: 'heroPrimaryCtaText',
      title: 'Hero Primary Button Text',
      type: 'string',
      initialValue: 'Request a Quote',
    }),
    defineField({
      name: 'heroPrimaryCtaHref',
      title: 'Hero Primary Button Link',
      type: 'string',
      initialValue: '#quote',
    }),
    defineField({
      name: 'heroSecondaryCtaText',
      title: 'Hero Secondary Button Text',
      type: 'string',
      initialValue: 'Explore Sectors',
    }),
    defineField({
      name: 'heroSecondaryCtaHref',
      title: 'Hero Secondary Button Link',
      type: 'string',
      initialValue: '#projects',
    }),
  ],
})
