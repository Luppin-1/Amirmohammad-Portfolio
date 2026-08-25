export function Footer({ data, isRtl }) {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] py-7">
      <div className="mx-auto flex w-[calc(100%-2rem)] max-w-[1280px] flex-col items-center justify-between gap-3 text-center sm:flex-row md:w-[calc(100%-8rem)]">
        <span className="font-mono text-sm font-bold text-cyan-400">&lt;{data.initials}/&gt;</span>
        <p className="text-xs text-[var(--muted)]">{isRtl ? 'با دقت طراحی و توسعه داده شده' : 'Designed and built with care'}</p>
        <small className="font-numbers text-[11px] text-[var(--muted)]">© {new Date().getFullYear()}</small>
      </div>
    </footer>
  )
}
