import { data } from '@/lib/data'
import { SectionHeader } from '@/components/SectionHeader'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 scroll-mt-20"
      data-screen-label="skills"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeader kicker="// 03 — toolbox" heading="Skills & Tools" />
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-line border border-line rounded-lg overflow-hidden">
          {data.skills.map((group) => (
            <div key={group.group} className="bg-surface p-5">
              <p className="font-mono text-[12px] text-accent mb-3 tracking-wide">{group.group}</p>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink/90">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
