import Link from 'next/link'
import { data } from '@/lib/data'
import { SectionHeader } from '@/components/SectionHeader'
import { ProjectImage } from '@/components/ProjectImage'
import { Reveal } from '@/components/Reveal'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 scroll-mt-20"
      data-screen-label="projects"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeader
          kicker="// 01 — selected work"
          heading="Projects"
          descriptor="A selection of things I've built"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex flex-col rounded-lg border border-line bg-surface hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] border-b border-line overflow-hidden rounded-t-lg">
                  <ProjectImage src={project.image} alt={project.title} label={project.title} />
                  <span className="absolute top-2 left-2 font-mono text-xs text-muted bg-bg/70 backdrop-blur px-2 py-0.5 rounded">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[18px] font-semibold text-ink group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </span>
                    <span className="font-mono text-xs text-muted">{project.year}</span>
                  </div>
                  <p className="text-sm text-muted mb-4">{project.tagline}</p>
                  <div className="border-t border-line pt-3 mt-auto">
                    <p className="font-mono text-[11px] text-muted">
                      {project.stack.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
