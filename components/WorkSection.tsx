import { data } from '@/lib/data'
import { SectionHeader } from '@/components/SectionHeader'
import { Reveal } from '@/components/Reveal'

export function WorkSection() {
  return (
    <section
      id="work"
      className="py-20 sm:py-28 scroll-mt-20 border-y border-line bg-surface/30"
      data-screen-label="work"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeader kicker="// 02 — experience" heading="Work" />
        <ol className="relative border-l border-line ml-[5px]">
          {data.experience.map((entry, i) => (
            <Reveal key={i} delay={i * 80}>
              <li className="relative pl-8 sm:pl-10 pb-10 last:pb-0">
                <span className="absolute -left-[4.5px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent ring-4 ring-bg" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                  <p className="text-base font-semibold text-ink">
                    {entry.role}{' '}
                    <span className="font-normal text-muted">· {entry.company}</span>
                  </p>
                  <span className="font-mono text-xs text-muted whitespace-nowrap">{entry.period}</span>
                </div>
                <p className="text-sm text-muted max-w-2xl leading-relaxed">{entry.summary}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
