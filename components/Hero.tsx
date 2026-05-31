import { data } from '@/lib/data'

export function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28"
      data-screen-label="hero"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-content px-5 sm:px-8">
        <h1
          className="font-bold tracking-tight text-ink mb-3"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)', lineHeight: 1.02, maxWidth: '14ch' }}
        >
          {data.profile.name}
        </h1>

        <p
          className="font-mono text-accent mb-8"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
        >
          {data.profile.role}
        </p>

        <div className="max-w-2xl rounded-lg border border-line bg-surface/70 backdrop-blur-sm shadow-2xl shadow-black/40 mb-8">
          <div className="h-9 bg-surface2/60 border-b border-line flex items-center px-4 gap-1.5">
            <span className="w-3 h-3 rounded-full bg-muted/30" />
            <span className="w-3 h-3 rounded-full bg-muted/30" />
            <span className="w-3 h-3 rounded-full bg-muted/30" />
            <span className="font-mono text-xs text-muted ml-2">about.txt</span>
          </div>
          <div className="p-5 font-mono text-[13.5px] leading-relaxed space-y-2">
            <p>
              <span className="text-accent">$</span>{' '}
              <span className="text-ink/90">cat about.txt</span>
            </p>
            <p className="text-ink/90">{data.profile.blurb}</p>
            <p>
              <span className="text-accent">$</span>{' '}
              <span className="text-ink/90">echo $LOCATION</span>
            </p>
            <p className="text-ink/90">
              → {data.profile.location}{' '}
              <span className="caret text-accent">▋</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="font-mono text-sm px-4 py-2.5 rounded-md bg-accent text-bg hover:brightness-110 transition-all duration-200"
          >
            View projects →
          </a>
          <a
            href="#contact"
            className="font-mono text-sm px-4 py-2.5 rounded-md border border-line text-ink hover:border-accent/50 hover:text-accent transition-all duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
