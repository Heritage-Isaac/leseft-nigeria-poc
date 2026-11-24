/**
 * Cloudinary Helper
 * Handles Cloudinary image URL parsing, optimization, and responsive email transformations.
 */
export function getOptimizedCloudinaryUrl(
  url?: string,
  options?: { width?: number; quality?: string | number; format?: 'auto' | 'webp' | 'png' | 'jpg' }
): string | undefined {
  if (!url) return undefined
  if (!url.includes('cloudinary.com')) return url

  const { width = 600, quality = 'auto', format = 'auto' } = options || {}

  // Check if URL already has transformation params
  if (url.includes('/upload/')) {
    const transformation = `w_${width},q_${quality},f_${format},c_limit`
    // Insert transformation after /upload/
    return url.replace('/upload/', `/upload/${transformation}/`)
  }

  return url
}

export function isCloudinaryUrl(url?: string): boolean {
  if (!url) return false
  return url.startsWith('https://res.cloudinary.com/') || url.includes('cloudinary.com')
}
