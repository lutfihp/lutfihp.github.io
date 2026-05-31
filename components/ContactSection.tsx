import { data } from '@/lib/data'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 scroll-mt-20 border-t border-line"
      data-screen-label="contact"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8 flex flex-col items-center text-center">
        <p className="font-mono text-[13px] text-accent mb-4 tracking-wide">{'// 04 — contact'}</p>
        <h2
          className="font-bold tracking-tight text-ink mb-4 max-w-[16ch]"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          Let&apos;s build something solid.
        </h2>
        <p className="text-base text-muted max-w-md mb-8">
          Open to new opportunities and interesting projects.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={data.profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-4 py-2.5 rounded-md border border-line bg-surface text-ink hover:border-accent/50 hover:text-accent transition-all duration-200"
          >
            GitHub↗
          </a>
          <a
            href={data.profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-4 py-2.5 rounded-md border border-line bg-surface text-ink hover:border-accent/50 hover:text-accent transition-all duration-200"
          >
            LinkedIn↗
          </a>
        </div>
      </div>
    </section>
  )
}
