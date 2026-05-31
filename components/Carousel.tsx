'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { ProjectImage } from '@/components/ProjectImage'
import type { Screenshot } from '@/lib/data'

interface CarouselProps {
  screenshots: Screenshot[]
  title: string
}

export function Carousel({ screenshots, title }: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const len = screenshots.length
  const startXRef = useRef<number | null>(null)

  const go = useCallback((n: number) => {
    setCurrent(((n % len) + len) % len)
  }, [len])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  go(current - 1)
      if (e.key === 'ArrowRight') go(current + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, go])

  const onTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startXRef.current === null) return
    const dx = e.changedTouches[0].clientX - startXRef.current
    if (Math.abs(dx) > 40) go(dx < 0 ? current + 1 : current - 1)
    startXRef.current = null
  }

  return (
    <div className="rounded-xl border border-line bg-surface overflow-hidden mb-8">

      <div
        className="relative aspect-[16/9] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: 'transform 0.45s cubic-bezier(.4,0,.2,1)',
          }}
        >
          {screenshots.map((shot, i) => (
            <div key={i} className="relative w-full h-full flex-shrink-0">
              <ProjectImage
                src={shot.src}
                alt={shot.caption || `${title} screenshot ${i + 1}`}
                label={shot.caption}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => go(current - 1)}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-line bg-bg/70 backdrop-blur-sm flex items-center justify-center text-ink hover:border-accent/50 hover:text-accent transition-all duration-200"
        >
          ←
        </button>
        <button
          onClick={() => go(current + 1)}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-line bg-bg/70 backdrop-blur-sm flex items-center justify-center text-ink hover:border-accent/50 hover:text-accent transition-all duration-200"
        >
          →
        </button>
      </div>

      <div className="h-11 border-t border-line bg-surface2/60 flex items-center justify-between px-4">
        <span className="font-mono text-xs text-muted truncate">
          {screenshots[current]?.caption}
        </span>
        <span className="font-mono text-xs text-muted ml-4 flex-shrink-0">
          {current + 1} / {len}
        </span>
      </div>

      <div className="flex gap-2 p-3 overflow-x-auto thin-scroll">
        {screenshots.map((shot, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`relative flex-shrink-0 w-24 sm:w-28 aspect-[16/10] rounded-md border overflow-hidden transition-all duration-200 ${
              i === current
                ? 'opacity-100 border-accent/60'
                : 'opacity-50 border-line hover:opacity-75'
            }`}
          >
            <ProjectImage
              src={shot.src}
              alt={shot.caption || `Thumbnail ${i + 1}`}
            />
          </button>
        ))}
      </div>

    </div>
  )
}
