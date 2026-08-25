import { Icon } from './Icon'
import { SectionTitle } from './SectionTitle'

export function Projects({ data, isRtl }) {
  return (
    <section id="projects" className="scroll-mt-16 border-y border-[var(--border)] bg-[var(--section)] py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1280px] md:w-[calc(100%-8rem)]">
        <SectionTitle eyebrow={data.labels.projects}>{isRtl ? 'پروژه‌های منتخب' : 'Featured projects'}</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project, index) => (
            <article className="reveal group relative flex min-h-[330px] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-purple-500/35 hover:shadow-[0_22px_55px_rgba(0,0,0,.16)]" style={{ transitionDelay: `${(index % 3) * 70}ms` }} key={project.title}>
              <div className="flex items-center justify-between gap-4"><span className="font-numbers text-xl font-bold text-cyan-400">{project.index}</span><em className="font-mono text-[10px] not-italic tracking-wide text-[var(--muted)]">{project.type}</em></div>
              <h3 className="mt-8 font-display text-2xl font-semibold text-[var(--text)]">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6 pe-12">{project.stack.map((item) => <span className="rounded-md bg-[var(--chip)] px-2.5 py-1 text-[10px] text-[var(--muted)]" key={item}>{item}</span>)}</div>
              <a className="absolute end-5 bottom-5 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition duration-300 group-hover:rotate-[-45deg] group-hover:border-cyan-400/60 group-hover:text-cyan-400" href={project.link} target="_blank" rel="noreferrer" aria-label={`${isRtl ? 'مشاهده' : 'View'} ${project.title}`}><Icon name="arrow" /></a>
              <i className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-linear-to-r from-cyan-400 to-purple-500 transition duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
        <a className="reveal mt-7 flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:border-cyan-400/35 md:p-6" href="https://github.com/Luppin-1" target="_blank" rel="noreferrer">
          <span><b className="font-display text-lg text-[var(--text)]">GitHub</b><small className="mt-1 block font-mono text-[10px] text-[var(--muted)]">@Luppin-1 · 12 repositories</small></span><span className="text-cyan-400"><Icon name="arrow" size={24} /></span>
        </a>
      </div>
    </section>
  )
}
