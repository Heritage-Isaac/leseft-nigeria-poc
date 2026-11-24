export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-poc-leseft'

// Read and write tokens (server-side only)
export const readToken = process.env.SANITY_API_READ_TOKEN
export const writeToken = process.env.SANITY_API_WRITE_TOKEN

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  return v
}
