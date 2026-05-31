interface SectionHeaderProps {
  kicker: string
  heading: string
  descriptor?: string
}

export function SectionHeader({ kicker, heading, descriptor }: SectionHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-10">
      <div>
        <p className="font-mono text-[13px] text-accent mb-2 tracking-wide">{kicker}</p>
        <h2 className="text-3xl sm:text-[2.25rem] font-bold tracking-tight text-ink">{heading}</h2>
      </div>
      {descriptor && (
        <p className="font-mono text-[13px] text-muted sm:text-right">{descriptor}</p>
      )}
    </div>
  )
}
