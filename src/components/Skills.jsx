import { SectionTitle } from './SectionTitle'

export function Skills({ data, isRtl }) {
  return (
    <section id="skills" className="scroll-mt-16 border-y border-[var(--border)] bg-[var(--section)] py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1280px] md:w-[calc(100%-8rem)]">
        <SectionTitle eyebrow={data.labels.skills}>{isRtl ? 'مهارت‌ها' : 'Tech stack'}</SectionTitle>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.skillGroups.map(([title, items], index) => (
            <article
              className="reveal group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-[0_20px_50px_rgba(0,0,0,.14)]"
              style={{ transitionDelay: `${(index % 3) * 80}ms` }}
              key={title}
            >
              <div className="font-numbers text-xs font-semibold tracking-widest text-purple-500">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="mt-4 font-display text-xl font-semibold text-[var(--text)]">{title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => <span className="rounded-lg border border-[var(--border)] bg-[var(--chip)] px-3 py-1.5 text-xs text-[var(--muted)] transition group-hover:text-[var(--text)]" key={item}>{item}</span>)}
              </div>
              <i className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-linear-to-r from-cyan-400 to-purple-500 transition duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
