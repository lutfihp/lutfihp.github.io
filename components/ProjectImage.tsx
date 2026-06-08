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
      <div className={`absolute inset-0 bg-surface ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>
    )
  }
  return (
    <div
      className={`ph w-full h-full ${className}`}
      data-label={label ?? alt}
    />
  )
}
