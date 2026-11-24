import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'
import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 'dummy-poc-leseft',
  dataset: dataset || 'production',
})

export const urlForImage = (source: SanityImageSource) => {
  if (!source) {
    return null
  }
  return imageBuilder?.image(source).auto('format').fit('max')
}
