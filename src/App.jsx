import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Marquee } from './components/Marquee'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { resume } from './resumeData'

function App() {
  const [language, setLanguage] = useState('fa')
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const data = resume[language]
  const isRtl = language === 'fa'

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  }, [language, isRtl])

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => setIsReady(true), 900)
    const updateCursor = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', updateCursor)
    return () => {
      window.clearTimeout(loaderTimer)
      window.removeEventListener('pointermove', updateCursor)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [language])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className={`${isDark ? 'theme-dark' : 'theme-light'} min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 ${isRtl ? 'font-vazir' : 'font-inter'}`}>
      <div className={`fixed inset-0 z-[9999] grid place-items-center bg-[#070914] transition duration-500 ${isReady ? 'invisible opacity-0' : 'visible opacity-100'}`} aria-hidden="true">
        <div className="grid w-[170px] gap-3.5 text-center">
          <b className="animate-[loaderPulse_1s_ease-in-out_infinite] font-mono text-[22px] font-bold text-cyan-400">&lt;AME/&gt;</b>
          <span className="h-0.5 overflow-hidden rounded-full bg-white/8 after:block after:h-full after:w-[45%] after:animate-[loadBar_900ms_ease-in-out_infinite] after:bg-linear-to-r after:from-cyan-400 after:to-purple-500 after:content-['']" />
        </div>
      </div>
      <div className="pointer-events-none fixed top-[var(--mouse-y)] left-[var(--mouse-x)] z-[100] hidden h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/6 blur-[42px] md:block" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <i className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/6 blur-[100px]" />
        <i className="absolute top-[35%] -right-48 h-[28rem] w-[28rem] rounded-full bg-purple-500/7 blur-[120px]" />
      </div>

      <Header data={data} isRtl={isRtl} isDark={isDark} isMenuOpen={isMenuOpen} onNavigate={scrollToSection} onLanguageChange={() => setLanguage(isRtl ? 'en' : 'fa')} onThemeChange={() => setIsDark((value) => !value)} onMenuChange={() => setIsMenuOpen((value) => !value)} />

      <main className="relative z-10">
        <Hero data={data} isRtl={isRtl} onContact={() => scrollToSection('contact')} />
        <Marquee items={data.marquee} />
        <About data={data} isRtl={isRtl} />
        <Skills data={data} isRtl={isRtl} />
        <Journey data={data} isRtl={isRtl} />
        <Projects data={data} isRtl={isRtl} />
        <Contact data={data} isRtl={isRtl} />
      </main>

      <Footer data={data} isRtl={isRtl} />
    </div>
  )
}

export default App
