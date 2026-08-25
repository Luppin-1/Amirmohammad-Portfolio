import { SectionTitle } from './SectionTitle'

export function About({ data, isRtl }) {
  return (
    <section id="about" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[820px] md:w-[calc(100%-8rem)]">
        <SectionTitle eyebrow={data.labels.about}>{isRtl ? 'درباره من' : 'About me'}</SectionTitle>

        <div className="space-y-5 text-[15px] leading-8 text-[var(--muted)] md:text-lg md:leading-9">
          {data.about.map((paragraph, index) => (
            <p className="reveal" style={{ transitionDelay: `${index * 90}ms` }} key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="reveal mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] sm:grid-cols-3">
          {data.stats.map(([number, label]) => (
            <div className="flex flex-col items-center border-b border-[var(--border)] px-5 py-7 text-center last:border-0 sm:border-e sm:border-b-0" key={label}>
              <strong className="font-numbers text-3xl font-bold text-cyan-400">{number}</strong>
              <span className="mt-2 text-xs text-[var(--muted)]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
