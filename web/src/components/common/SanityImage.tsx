'use client'

import React from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import type { SanityImageReference } from '@/types'
import type { SanityImageSource } from '@sanity/image-url'

interface SanityImageProps {
  image?: SanityImageReference | { url: string; alt?: string } | null
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  fill?: boolean
}

export function SanityImage({
  image,
  alt,
  className = '',
  width = 800,
  height = 500,
  priority = false,
  fill = false,
}: SanityImageProps) {
  let imageUrl: string | null = null

  if (image && typeof image === 'object') {
    if ('url' in image && typeof image.url === 'string') {
      imageUrl = image.url
    } else if ('asset' in image && image.asset) {
      imageUrl = urlForImage(image as SanityImageSource)?.width(width).height(height).url() || null
    }
  }

  const finalSrc = imageUrl || '/assets/leseft-hero.avif'

  if (fill) {
    return (
      <Image
        src={finalSrc}
        alt={alt || 'LeSeft Nigeria Project Asset'}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover ${className}`}
        priority={priority}
      />
    )
  }

  return (
    <Image
      src={finalSrc}
      alt={alt || 'LeSeft Nigeria Project Asset'}
      width={width}
      height={height}
      className={`object-cover ${className}`}
      priority={priority}
    />
  )
}
