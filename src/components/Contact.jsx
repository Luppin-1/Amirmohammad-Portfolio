import { SectionTitle } from './SectionTitle'

export function Contact({ data, isRtl }) {
  return (
    <section id="contact" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[820px] md:w-[calc(100%-8rem)]">
        <SectionTitle eyebrow={data.labels.contact}>{isRtl ? 'در تماس باشیم' : 'Get in touch'}</SectionTitle>
        <p className="reveal mx-auto max-w-[680px] text-center text-[15px] leading-8 text-[var(--muted)] md:text-lg md:leading-9">{data.contactText}</p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {data.contact.map(([label, value, href], index) => (
            <article className="reveal rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:border-cyan-400/30" style={{ transitionDelay: `${index * 70}ms` }} key={label}>
              <small className="block text-[10px] font-semibold uppercase tracking-[1.5px] text-purple-500">{label}</small>
              {href ? <a className="mt-2 block break-all text-sm font-medium text-[var(--text)] transition hover:text-cyan-400" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{value}</a> : <span className="mt-2 block text-sm font-medium text-[var(--text)]">{value}</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
