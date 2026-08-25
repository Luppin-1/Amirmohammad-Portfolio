import { SectionTitle } from './SectionTitle'

export function Journey({ data, isRtl }) {
  return (
    <section id="experience" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1100px] md:w-[calc(100%-8rem)]">
        <SectionTitle eyebrow={data.labels.experience}>{isRtl ? 'مسیر من' : 'My journey'}</SectionTitle>

        <div className="relative space-y-5 before:absolute before:top-4 before:bottom-4 before:start-[19px] before:w-px before:bg-[var(--border)]">
          {data.experience.map((item, index) => (
            <article className="reveal relative grid grid-cols-[40px_1fr] gap-4 md:gap-6" key={item.title}>
              <div className="font-numbers relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-[var(--bg)] text-[11px] font-bold text-cyan-400">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--text)] md:text-xl">{item.title}</h3>
                    <p className="mt-1 text-sm text-cyan-400">{item.company}</p>
                  </div>
                  <div className="shrink-0 text-start md:text-end">
                    <span className="font-numbers block text-xs font-semibold text-purple-500">{item.date}</span>
                    <small className="mt-1 block text-[11px] text-[var(--muted)]">{item.location}</small>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm leading-7 text-[var(--muted)]">
                  {item.points.map((point) => <li className="relative ps-4 before:absolute before:top-[11px] before:start-0 before:h-1 before:w-1 before:rounded-full before:bg-cyan-400" key={point}>{point}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="reveal mb-6 flex items-center gap-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-[2px] text-cyan-400">{data.labels.courses}</span>
            <i className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {data.courses.map(([course, source], index) => (
              <article className="reveal flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4" style={{ transitionDelay: `${(index % 3) * 70}ms` }} key={course}>
                <b className="font-numbers text-xs text-purple-500">{String(index + 1).padStart(2, '0')}</b>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text)]">{course}</h4>
                  <span className="mt-1 block text-[11px] text-[var(--muted)]">{source}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
