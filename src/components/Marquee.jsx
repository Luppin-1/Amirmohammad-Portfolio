export function Marquee({ items }) {
  const repeatedItems = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-4" aria-hidden="true">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <span className="flex items-center gap-6 px-6 font-mono text-xs tracking-[1.5px] text-[var(--muted)]" key={`${item}-${index}`}>
            {item}
            <b className="text-cyan-400">✦</b>
          </span>
        ))}
      </div>
    </div>
  )
}
