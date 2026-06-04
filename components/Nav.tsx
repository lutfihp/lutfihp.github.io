import Link from 'next/link'
import { data } from '@/lib/data'


const anchorLinks = [
  { label: 'work',     href: '/#work' },
  { label: 'projects', href: '/#projects' },
  { label: 'skills',   href: '/#skills' },
  { label: 'contact',  href: '/#contact' },
]

export function Nav({ variant = 'landing' }: { variant?: 'landing' | 'detail' }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-content px-5 sm:px-8 h-full flex items-center justify-between">

        {variant === 'landing' ? (
          <Link href="/" className="font-mono text-sm group">
            <span className="text-accent">~/</span>
            <span className="group-hover:text-accent transition-colors duration-200">lutfihp</span>
          </Link>
        ) : (
          <Link
            href="/"
            className="font-mono text-sm text-muted hover:text-ink transition-colors duration-200"
          >
            ← back to home
          </Link>
        )}

        {variant === 'landing' && (
          <nav className="hidden sm:flex items-center gap-6">
            {anchorLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-mono text-[13px] text-ink/80 hover:text-ink transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4">
          {variant === 'detail' && (
            <Link
              href="/#projects"
              className="font-mono text-sm text-muted hover:text-ink transition-colors duration-200"
            >
              all projects
            </Link>
          )}
          {variant === 'landing' && (
            <>
              <a
                href={data.profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] text-ink/80 hover:text-accent transition-colors duration-200"
              >
                GitHub↗
              </a>
              <a
                href={data.profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] text-ink/80 hover:text-accent transition-colors duration-200"
              >
                LinkedIn↗
              </a>
            </>
          )}
        </div>

      </div>
    </header>
  )
}
