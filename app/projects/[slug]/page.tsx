import { notFound } from 'next/navigation'
import { data } from '@/lib/data'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Carousel } from '@/components/Carousel'

const LINK_BADGE: Record<'github' | 'live' | 'youtube' | 'other', string> = {
  github: 'github',
  live: 'live',
  youtube: 'youtube',
  other: 'link',
}

export function generateStaticParams() {
  return data.projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = data.projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const idx = data.projects.indexOf(project)
  const prev = data.projects[(idx - 1 + data.projects.length) % data.projects.length]
  const next = data.projects[(idx + 1) % data.projects.length]

  return (
    <>
      <Nav variant="detail" />
      <main className="pt-16">
        <div
          className="mx-auto max-w-content px-5 sm:px-8 py-12 sm:py-16"
          data-screen-label={`project:${slug}`}
        >
          <p className="font-mono text-[13px] text-muted mb-2">
            <span className="text-accent">project</span> / {project.slug} · {project.year}
          </p>
          <h1
            className="font-bold tracking-tight text-ink mb-3"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            {project.title}
          </h1>
          <p className="text-lg text-ink/75 max-w-2xl mb-10">{project.tagline}</p>

          <Carousel screenshots={project.screenshots} title={project.title} />

          <div className="grid gap-12 lg:grid-cols-3 mb-16">
            <div className="lg:col-span-2">
              <p className="font-mono text-[13px] text-accent mb-3">{'// about this project'}</p>
              <p className="text-[15px] text-ink/90 leading-[1.8] max-w-2xl">
                {project.description}
              </p>
            </div>
            <aside className="space-y-8">
              <div>
                <p className="font-mono text-[12px] text-accent mb-2 tracking-wide">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs border border-line bg-surface2 rounded-md px-2.5 py-1 text-ink/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.links.length > 0 && (
                <div>
                  <p className="font-mono text-[12px] text-accent mb-2 tracking-wide">Links</p>
                  <div className="space-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between border border-line bg-surface rounded-md px-4 py-3 hover:border-accent/50 transition-all duration-200"
                      >
                        <span className="font-mono text-sm group-hover:text-accent transition-colors duration-200">
                          <span className="text-accent">⌥</span> {link.label}
                        </span>
                        <span className="font-mono text-xs text-muted">{LINK_BADGE[link.type]} ↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>

          <div className="border-t border-line pt-8 grid sm:grid-cols-2 gap-4">
            <a
              href={`/projects/${prev.slug}`}
              className="flex flex-col gap-1 p-4 rounded-lg border border-line hover:border-accent/40 transition-all duration-200"
            >
              <span className="font-mono text-xs text-muted">← previous</span>
              <span className="text-sm font-semibold text-ink">{prev.title}</span>
            </a>
            <a
              href={`/projects/${next.slug}`}
              className="flex flex-col gap-1 p-4 rounded-lg border border-line hover:border-accent/40 transition-all duration-200 sm:text-right"
            >
              <span className="font-mono text-xs text-muted">next →</span>
              <span className="text-sm font-semibold text-ink">{next.title}</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
