'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import type { SiteSettings } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

interface HeroProps {
  settings: SiteSettings
}

const DEFAULT_HERO_VIDEOS = [
  '/videos/15427503_640_360_50fps.mp4',
  '/videos/8457855-sd_640_360_24fps.mp4',
  '/videos/6618038-sd_426_240_24fps.mp4',
]

export function Hero({ settings }: HeroProps) {
  const { t } = useLanguage()
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)

  const mediaType = settings.heroMediaType || 'video'
  const videos =
    settings.heroVideos && settings.heroVideos.length > 0
      ? settings.heroVideos.filter(Boolean)
      : DEFAULT_HERO_VIDEOS
  const heroImageUrl =
    settings.heroImageUrl || settings.heroImage?.asset?.url || '/assets/leseft-hero.avif'

  const eyebrow = settings.heroEyebrow || t.hero.eyebrow
  const headline = settings.heroHeadline || t.hero.headline
  const subheadline = settings.heroSubheadline || t.hero.subheadline
  const primaryCtaText = settings.heroPrimaryCtaText || t.hero.primaryCta
  const primaryCtaHref = settings.heroPrimaryCtaHref || '#quote'
  const secondaryCtaText = settings.heroSecondaryCtaText || t.hero.secondaryCta
  const secondaryCtaHref = settings.heroSecondaryCtaHref || '#projects'

  useEffect(() => {
    if (mediaType !== 'video' || videos.length <= 1) return
    const interval = setInterval(() => {
      setActiveVideoIndex((prev) => (prev + 1) % videos.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [mediaType, videos.length])

  return (
    <section id="home" className="relative bg-[#17191C] text-white overflow-hidden border-b border-[#2A2A2C] py-14 lg:py-20">
      {/* Background Media: Static Image or Video Carousel */}
      {mediaType === 'image' ? (
        <img
          src={heroImageUrl}
          alt={headline}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      ) : (
        videos.map((src, index) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 pointer-events-none ${
              index === activeVideoIndex % videos.length ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))
      )}

      {/* Lighter corporate gradient overlay so background video stays clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#17191C]/50 via-[#17191C]/40 to-[#17191C]/55 pointer-events-none" />

      {/* Precision hairline structural grid in Leseft theme */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#2A2A2C]/90 border border-white/15 text-[11px] font-semibold text-[#E0E0E0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#27AAE1]" />
          <span>{eyebrow}</span>
        </div>

        {/* Reduced Main Headline */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.15] max-w-3xl mx-auto drop-shadow-sm">
          {headline}
        </h1>

        {/* Reduced Subheadline */}
        <p className="text-xs sm:text-sm text-white/95 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-xs">
          {subheadline}
        </p>

        {/* Compact Action Buttons */}
        <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
          <a
            href={primaryCtaHref}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#1C75BC] hover:bg-[#145A91] rounded-xs transition-all shadow-xs"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </a>

          <a
            href={secondaryCtaHref}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#2A2A2C]/90 hover:bg-[#353538] border border-white/20 rounded-xs transition-all"
          >
            <span>{secondaryCtaText}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
