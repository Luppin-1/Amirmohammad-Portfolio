import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

// شناسه هر بخش برای حرکت منو به همان قسمت استفاده می‌شود.
const sectionIds = ['about', 'skills', 'experience', 'projects', 'contact']

export function Header({ language, isDark, isMenuOpen, onNavigate, onLanguageChange, onThemeChange, onMenuChange }) {
  const isPersian = language === 'fa'

  // متن گزینه‌های منو بر اساس زبان فعلی
  const navItems = isPersian
    ? ['درباره من', 'مهارت‌ها', 'مسیر من', 'پروژه‌ها', 'تماس']
    : ['About', 'Skills', 'Journey', 'Projects', 'Contact']

  // کلاس مشترک دکمه‌های تم و منوی موبایل
  const iconButtonStyle = 'grid h-8 w-8 place-items-center rounded-lg leading-none text-[var(--muted)] transition hover:bg-cyan-400/8 hover:text-cyan-400 sm:h-9 sm:w-9'

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-slate-400/10 bg-[color-mix(in_srgb,var(--bg)_76%,transparent)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 w-[calc(100%-1.5rem)] max-w-[1152px] items-center justify-between [direction:ltr] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]">
        {/* لوگو؛ با کلیک روی آن به ابتدای صفحه برمی‌گردیم. */}
        <button className="flex items-center font-mono text-base font-bold sm:text-lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Home">
          <span className="font-normal text-[var(--muted)]">&lt;</span>
          <strong className="text-cyan-400">AM</strong>
          <strong className="text-purple-500">E</strong>
          <span className="font-normal text-[var(--muted)]">/&gt;</span>
        </button>

        {/* منوی دسکتاپ و موبایل */}
        <div dir={isPersian ? 'rtl' : 'ltr'} className={`fixed inset-x-3 top-[68px] flex max-h-[calc(100svh-84px)] flex-col overflow-y-auto rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2.5 text-center shadow-2xl backdrop-blur-2xl transition-all duration-300 sm:inset-x-4 md:static md:flex-row md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none ${isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100'}`}>
          {navItems.map((item, index) => (
            <button className="rounded-lg px-3 py-2.5 text-[13px] text-[var(--muted)] transition hover:bg-cyan-400/5 hover:text-cyan-400 lg:px-3.5 lg:text-sm" onClick={() => onNavigate(sectionIds[index])} key={item}>
              {item}
            </button>
          ))}
        </div>

        {/* دکمه‌های تغییر زبان، تم و بازکردن منوی موبایل */}
        <div className="flex items-center gap-1">
          <button className="rounded-lg px-2 py-2 font-mono text-[11px] font-bold text-[var(--muted)] hover:text-cyan-400 sm:px-2.5 sm:text-xs" onClick={onLanguageChange}>{isPersian ? 'EN' : 'FA'}</button>
          <button className={iconButtonStyle} onClick={onThemeChange} aria-label="Toggle theme">
            {isDark ? <FiSun className="h-[18px] w-[18px]" aria-hidden="true" /> : <FiMoon className="h-[18px] w-[18px]" aria-hidden="true" />}
          </button>
          <button className={`${iconButtonStyle} md:hidden`} onClick={onMenuChange} aria-label="Menu">
            {isMenuOpen ? <FiX className="h-[18px] w-[18px]" aria-hidden="true" /> : <FiMenu className="h-[18px] w-[18px]" aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
