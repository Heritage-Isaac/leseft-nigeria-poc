import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '5c2yalf2',
    dataset: 'production',
  },
  typegen: {
    enabled: true,
    path: '../web/src/**/*.{ts,tsx,js,jsx}',
    generates: '../web/sanity.types.ts',
  },
})
