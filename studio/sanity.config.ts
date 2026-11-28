import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '5c2yalf2'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'leseft-nigeria-studio',
  title: 'LeSeft Nigeria Studio',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
