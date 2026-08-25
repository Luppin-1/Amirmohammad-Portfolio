import { useEffect, useState } from 'react'
import { resume } from './resumeData'

const Icon = ({ name, size = 20 }) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    moon: <path d="M20 15.3A9 9 0 1 1 8.7 4 7 7 0 0 0 20 15.3Z"/>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function SectionTitle({ eyebrow, children }) {
  return <div className="section-title reveal"><span>{eyebrow}</span><h2>{children}</h2><i /></div>
}

function App() {
  const [lang, setLang] = useState('fa')
  const [dark, setDark] = useState(true)
  const [menu, setMenu] = useState(false)
  const [ready, setReady] = useState(false)
  const d = resume[lang]
  const rtl = lang === 'fa'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = rtl ? 'rtl' : 'ltr'
  }, [lang, rtl])

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 900)
    const onPointerMove = event => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', onPointerMove)
    return () => { clearTimeout(timer); window.removeEventListener('pointermove', onPointerMove) }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: .1 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [lang])

  const ids = ['about', 'skills', 'experience', 'projects', 'contact']
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false) }

  return <div className={`${dark ? 'app dark' : 'app light'} ${ready ? 'ready' : ''}`}>
    <div className="page-loader" aria-hidden="true"><div><b>&lt;AE/&gt;</b><span /></div></div>
    <div className="cursor-aura" aria-hidden="true" />
    <div className="ambient" aria-hidden="true"><i/><i/><i/></div>
    <header className="topbar">
      <nav className="container nav">
        <button className="brand" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Home"><span>&lt;</span>{d.initials}<b>/&gt;</b></button>
        <div className={`nav-links ${menu ? 'open' : ''}`}>{d.nav.map((item, i) => <button key={item} onClick={() => go(ids[i])}>{item}</button>)}</div>
        <div className="nav-actions">
          <button className="lang" onClick={() => setLang(rtl ? 'en' : 'fa')}>{rtl ? 'EN' : 'FA'}</button>
          <button className="icon-btn" onClick={() => setDark(v => !v)} aria-label="Toggle theme"><Icon name={dark ? 'sun' : 'moon'} /></button>
          <button className="icon-btn mobile-menu" onClick={() => setMenu(v => !v)} aria-label="Menu"><Icon name={menu ? 'close' : 'menu'} /></button>
        </div>
      </nav>
    </header>

    <main>
      <section className="hero">
        <div className="grid-bg" />
        <div className="hero-beam beam-one"/><div className="hero-beam beam-two"/>
        <div className="container hero-grid">
          <div className="portrait-wrap reveal">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="portrait-glow"/>
            <div className="portrait"><img src="/amir-mohammad-ehsani.jpg" alt={d.name} /></div>
            <div className="floating-stat stat-a"><strong>{d.stats[0][0]}</strong><small>{d.stats[0][1]}</small></div>
            <div className="floating-stat stat-b"><strong>{d.stats[1][0]}</strong><small>{d.stats[1][1]}</small></div>
          </div>
          <div className="hero-copy reveal">
            <div className="available"><i/>{d.availability}</div>
            <h1>{d.name}</h1>
            <div className="role"><span />{d.role}</div>
            <div className="kicker">{d.kicker}</div>
            <p>{d.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="/AmirMohammad-Ehsani-Resume.pdf" download><Icon name="download" />{rtl ? 'دانلود رزومه' : 'Download CV'}</a>
              <button className="button secondary" onClick={() => go('contact')}><Icon name="mail" />{rtl ? 'ارتباط با من' : 'Get in touch'}</button>
            </div>
          </div>
        </div>
        <button className="scroll-hint" onClick={() => go('about')}><span>{rtl ? 'ادامه' : 'Scroll down'}</span><b>⌄</b></button>
      </section>

      <div className="marquee" aria-hidden="true"><div>{[...d.marquee, ...d.marquee].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div></div>

      <section id="about" className="section about">
        <div className="container narrow"><SectionTitle eyebrow={d.labels.about}>{rtl ? 'درباره من' : 'About me'}</SectionTitle>
          <div className="about-copy">{d.about.map((p, i) => <p className="reveal" style={{ transitionDelay: `${i * 90}ms` }} key={p}>{p}</p>)}</div>
          <div className="stats-row reveal">{d.stats.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
        </div>
      </section>

      <section id="skills" className="section tinted"><div className="container"><SectionTitle eyebrow={d.labels.skills}>{rtl ? 'مهارت‌ها' : 'Tech stack'}</SectionTitle>
        <div className="skills-grid">{d.skillGroups.map(([title, items], i) => <article className="glass-card reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }} key={title}><div className="card-number">0{i + 1}</div><h3>{title}</h3><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
      </div></section>

      <section id="experience" className="section"><div className="container"><SectionTitle eyebrow={d.labels.experience}>{rtl ? 'مسیر من' : 'My journey'}</SectionTitle>
        <div className="timeline">{d.experience.map((job, i) => <article className="job reveal" key={job.title}><div className="timeline-dot">{String(i + 1).padStart(2, '0')}</div><div className="job-card"><div className="job-head"><div><h3>{job.title}</h3><p>{job.company}</p></div><div className="job-meta"><span>{job.date}</span><small>{job.location}</small></div></div><ul>{job.points.map(p => <li key={p}>{p}</li>)}</ul></div></article>)}</div>
        <div className="courses-wrap"><div className="mini-heading reveal"><span>{d.labels.courses}</span><i /></div><div className="courses-grid">{d.courses.map(([course, source], i) => <article className="course reveal" style={{transitionDelay:`${(i % 3) * 70}ms`}} key={course}><b>{String(i + 1).padStart(2, '0')}</b><div><h4>{course}</h4><span>{source}</span></div></article>)}</div></div>
      </div></section>

      <section id="projects" className="section tinted projects"><div className="container"><SectionTitle eyebrow={d.labels.projects}>{rtl ? 'پروژه‌های منتخب' : 'Featured projects'}</SectionTitle>
        <div className="project-list">{d.projects.map((project, i) => <article className="project-card reveal" style={{transitionDelay:`${(i % 3) * 70}ms`}} key={project.title}><div className="project-top"><span>{project.index}</span><em>{project.type}</em></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div><a href={project.link} target="_blank" rel="noreferrer" aria-label={`${rtl ? 'مشاهده' : 'View'} ${project.title}`}><Icon name="arrow" /></a><div className="project-line" /></article>)}</div>
        <a className="github-cta reveal" href="https://github.com/Luppin-1" target="_blank" rel="noreferrer"><span><b>GitHub</b><small>@Luppin-1 · 12 repositories</small></span><Icon name="arrow" size={24}/></a>
      </div></section>

      <section id="contact" className="section contact"><div className="container narrow"><SectionTitle eyebrow={d.labels.contact}>{rtl ? 'در تماس باشیم' : 'Get in touch'}</SectionTitle><p className="contact-lead reveal">{d.contactText}</p>
        <div className="contact-grid">{d.contact.map(([label, value, href], i) => <article className="contact-item reveal" style={{ transitionDelay: `${i * 70}ms` }} key={label}><small>{label}</small>{href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{value}</a> : <span>{value}</span>}</article>)}</div>
      </div></section>
    </main>
    <footer><div className="container"><span>&lt;{d.initials}/&gt;</span><p>{rtl ? 'با دقت طراحی و توسعه داده شده' : 'Designed and built with care'}</p><small>© {new Date().getFullYear()}</small></div></footer>
  </div>
}

export default App
