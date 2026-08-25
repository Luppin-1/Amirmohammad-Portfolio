import { Icon } from './Icon'
import { cn } from '../utils/cn'

const sectionIds = ['about', 'skills', 'experience', 'projects', 'contact']

export function Header({ data, isRtl, isDark, isMenuOpen, onMenuChange, onThemeChange, onLanguageChange, onNavigate }) {
  const iconButton = 'grid place-items-center rounded-lg p-2 text-[var(--muted)] transition-colors hover:bg-cyan-400/8 hover:text-cyan-400'

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-slate-400/10 bg-[color-mix(in_srgb,var(--bg)_76%,transparent)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 w-[calc(100%-2rem)] max-w-[1152px] items-center justify-between [direction:ltr] md:w-[calc(100%-3rem)]">
        <button
          className="flex items-center font-mono text-lg font-bold drop-shadow-[0_0_12px_rgba(0,212,255,.35)]"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Home"
        >
          <span className="font-normal text-[var(--muted)]">&lt;</span>
          <strong className="text-cyan-400">AM</strong>
          <strong className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,.5)]">E</strong>
          <span className="font-normal text-[var(--muted)]">/&gt;</span>
        </button>

        <div
          className={cn(
            'fixed top-16 inset-x-4 flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-2xl transition-all duration-300 md:static md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none',
            isMenuOpen
              ? 'translate-y-0 opacity-100 pointer-events-auto'
              : '-translate-y-4 opacity-0 pointer-events-none md:translate-y-0 md:opacity-100 md:pointer-events-auto',
          )}
        >
          {data.nav.map((label, index) => (
            <button
              key={label}
              onClick={() => onNavigate(sectionIds[index])}
              className="rounded-lg px-3.5 py-2.5 text-sm text-[var(--muted)] transition-colors hover:bg-cyan-400/5 hover:text-cyan-400"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            className="rounded-lg px-2.5 py-2 font-mono text-xs font-bold text-[var(--muted)] transition-colors hover:bg-cyan-400/8 hover:text-cyan-400"
            onClick={onLanguageChange}
          >
            {isRtl ? 'EN' : 'FA'}
          </button>
          <button className={iconButton} onClick={onThemeChange} aria-label="Toggle theme">
            <Icon name={isDark ? 'sun' : 'moon'} />
          </button>
          <button className={`${iconButton} md:hidden`} onClick={onMenuChange} aria-label="Menu">
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>
    </header>
  )
}
