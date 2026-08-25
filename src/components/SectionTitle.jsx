export function SectionTitle({ eyebrow, children }) {
  return (
    <div className="reveal mb-10 flex flex-col items-center text-center md:mb-[52px]">
      <span className="font-mono text-xs font-semibold uppercase tracking-[2px] text-cyan-400">
        {eyebrow}
      </span>
      <h2 className="mt-2 mb-3.5 font-display text-[31px] font-bold tracking-[-0.7px] text-[var(--text)] md:text-[45px]">
        {children}
      </h2>
      <i className="h-px w-16 bg-linear-to-r from-cyan-400 to-purple-500" />
    </div>
  )
}
