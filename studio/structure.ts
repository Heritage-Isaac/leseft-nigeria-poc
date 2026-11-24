import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('LeSeft Nigeria Content')
    .items([
      // Singleton Company Profile
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
      // Projects Collection
      S.documentTypeListItem('project').title('Corporate Projects'),
      S.divider(),
      // Email Campaigns & Drafts Collection
      S.documentTypeListItem('emailDraft').title('Email Campaigns & Drafts'),
    ])
