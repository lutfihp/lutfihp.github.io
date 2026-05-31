import Image from 'next/image'

interface ProjectImageProps {
  src: string | null
  alt: string
  label?: string
  className?: string
}

export function ProjectImage({ src, alt, label, className = '' }: ProjectImageProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-transform duration-300 group-hover:scale-[1.04] ${className}`}
      />
    )
  }
  return (
    <div
      className={`ph w-full h-full ${className}`}
      data-label={label ?? alt}
    />
  )
}
