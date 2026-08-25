import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  // وضعیت‌های اصلی سایت: زبان، تم، منوی موبایل و لودر اولیه
  const [language, setLanguage] = useState('fa')
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const isPersian = language === 'fa'

  // با تغییر زبان، جهت کل صفحه بین RTL و LTR جابه‌جا می‌شود.
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isPersian ? 'rtl' : 'ltr'
  }, [language, isPersian])

  // لودر را بعد از ۹۰۰ میلی‌ثانیه می‌بندد و موقعیت نشانگر موس را ثبت می‌کند.
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

  // وقتی هر بخش وارد صفحه می‌شود، کلاس visible برای اجرای انیمیشن اضافه می‌شود.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.1 },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [language])

  // حرکت نرم به بخش انتخاب‌شده از منوی سایت
  const goToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    // کلاس تم و فونت با توجه به وضعیت‌های بالا تعیین می‌شود.
    <div className={`${isDark ? 'theme-dark' : 'theme-light'} min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 ${isPersian ? 'font-vazir' : 'font-inter'}`}>
      {/* لودر ابتدایی سایت */}
      <div className={`fixed inset-0 z-[9999] grid place-items-center bg-[#070914] transition duration-500 ${isReady ? 'invisible opacity-0' : 'visible opacity-100'}`} aria-hidden="true">
        <div className="grid w-[170px] gap-3.5 text-center">
          <b className="animate-[loaderPulse_1s_ease-in-out_infinite] font-mono text-[22px] font-bold text-cyan-400">&lt;AME/&gt;</b>
          <span className="h-0.5 overflow-hidden rounded-full bg-white/8 after:block after:h-full after:w-[45%] after:animate-[loadBar_900ms_ease-in-out_infinite] after:bg-linear-to-r after:from-cyan-400 after:to-purple-500 after:content-['']" />
        </div>
      </div>

      {/* هاله کوچک و مینیمال اطراف نشانگر موس */}
      <div className="pointer-events-none fixed top-[var(--mouse-y)] left-[var(--mouse-x)] z-[100] hidden h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/6 blur-[42px] md:block" />

      {/* هدر بیرون main است تا همیشه بالای صفحه ثابت بماند. */}
      <Header language={language} isDark={isDark} isMenuOpen={isMenuOpen} onNavigate={goToSection} onLanguageChange={() => setLanguage(isPersian ? 'en' : 'fa')} onThemeChange={() => setIsDark(!isDark)} onMenuChange={() => setIsMenuOpen(!isMenuOpen)} />

      {/* ترتیب نمایش بخش‌های اصلی سایت */}
      <main>
        <Hero language={language} onContact={() => goToSection('contact')} />
        <About language={language} />
        <Skills language={language} />
        <Journey language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
    </div>
  )
}

export default App
