import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'

export default defineConfig({
  name: 'leseft-nigeria-studio',
  title: 'LeSeft Nigeria Studio',
  projectId: '5c2yalf2',
  dataset: 'production',
  plugins: [
    structureTool({
      structure,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
