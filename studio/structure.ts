import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('LeSeft Nigeria')
    .items([
      S.listItem()
        .title('Website Content')
        .id('websiteContent')
        .child(
          S.list()
            .title('Website Content')
            .items([
              S.listItem()
                .title('Site Settings')
                .id('siteSettings')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .title('Site Settings')
                ),
              S.listItem()
                .title('Company Profile')
                .id('companyProfile')
                .child(
                  S.document()
                    .schemaType('companyProfile')
                    .documentId('companyProfile')
                    .title('Company Profile')
                ),
              S.divider(),
              S.documentTypeListItem('sector').title('Business Sectors'),
              S.documentTypeListItem('commodity').title('Commodities & Hardware'),
              S.documentTypeListItem('project').title('Projects & Services'),
              S.documentTypeListItem('careerListing').title('Careers'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Operations')
        .id('operations')
        .child(
          S.list()
            .title('Operations')
            .items([
              S.documentTypeListItem('tradeInquiry').title('Trade Inquiries'),
              S.documentTypeListItem('emailDraft').title('Email Campaigns & Drafts'),
            ])
        ),
    ])
