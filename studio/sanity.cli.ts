import { defineApplication, defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '5c2yalf2',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  app: defineApplication({
    title: 'LeSeft Nigeria Studio',
    slug: 'leseft-nigeria-studio',
    organizationId: process.env.SANITY_ORGANIZATION_ID || 'owhrglljm',
  }),
  typegen: {
    enabled: true,
    path: '../web/src/**/*.{ts,tsx,js,jsx}',
    schema: './schema.json',
    generates: '../web/sanity.types.ts',
  },
})
