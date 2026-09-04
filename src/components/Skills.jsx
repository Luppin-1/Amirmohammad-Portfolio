export function Skills({ language }) {
  const isPersian = language === 'fa'

  // هر آرایه شامل نام یک گروه و مهارت‌های داخل آن است.
  const groups = isPersian
    ? [
        ['هسته فرانت‌اند', ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React']],
        ['رابط کاربری', ['Tailwind CSS', 'Responsive UI', 'Dark Mode', 'Component UI']],
        ['React و ارتباط با API', ['React Hooks', 'React Router', 'Axios', 'Vite']],
        ['برنامه‌نویسی', ['C++', 'Python', 'Kotlin', 'Algorithms']],
        ['همکاری و کیفیت کد', ['Git', 'GitHub', 'ESLint', 'Prettier']],
        ['توانمندی‌ها', ['Responsive Design', 'Component Design', 'Problem Solving', 'English']],
      ]
    : [
        ['Front-end core', ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React']],
        ['Interface design', ['Tailwind CSS', 'Responsive UI', 'Dark Mode', 'Component UI']],
        ['React & API', ['React Hooks', 'React Router', 'Axios', 'Vite']],
        ['Programming', ['C++', 'Python', 'Kotlin', 'Algorithms']],
        ['Workflow & quality', ['Git', 'GitHub', 'ESLint', 'Prettier']],
        ['Strengths', ['Responsive Design', 'Component Design', 'Problem Solving', 'English']],
      ]

  // رنگ اختصاصی هر کارت؛ ترتیب این آرایه با ترتیب groups یکسان است.
  const cardThemes = [
    {
      title: 'text-cyan-400',
      border: 'border-cyan-400/20 hover:border-cyan-400/50',
      shadow: 'hover:shadow-[0_24px_70px_rgba(34,211,238,.12)]',
      glow: 'bg-cyan-400/8',
      tag: 'border-cyan-400/35 bg-cyan-400/8 text-cyan-300 hover:bg-cyan-400/16',
    },
    {
      title: 'text-purple-400',
      border: 'border-purple-400/20 hover:border-purple-400/50',
      shadow: 'hover:shadow-[0_24px_70px_rgba(192,132,252,.12)]',
      glow: 'bg-purple-400/8',
      tag: 'border-purple-400/35 bg-purple-400/8 text-purple-300 hover:bg-purple-400/16',
    },
    {
      title: 'text-emerald-400',
      border: 'border-emerald-400/20 hover:border-emerald-400/50',
      shadow: 'hover:shadow-[0_24px_70px_rgba(52,211,153,.12)]',
      glow: 'bg-emerald-400/8',
      tag: 'border-emerald-400/35 bg-emerald-400/8 text-emerald-300 hover:bg-emerald-400/16',
    },
    {
      title: 'text-amber-400',
      border: 'border-amber-400/20 hover:border-amber-400/50',
      shadow: 'hover:shadow-[0_24px_70px_rgba(251,191,36,.12)]',
      glow: 'bg-amber-400/8',
      tag: 'border-amber-400/35 bg-amber-400/8 text-amber-300 hover:bg-amber-400/16',
    },
    {
      title: 'text-blue-400',
      border: 'border-blue-400/20 hover:border-blue-400/50',
      shadow: 'hover:shadow-[0_24px_70px_rgba(96,165,250,.12)]',
      glow: 'bg-blue-400/8',
      tag: 'border-blue-400/35 bg-blue-400/8 text-blue-300 hover:bg-blue-400/16',
    },
    {
      title: 'text-pink-400',
      border: 'border-pink-400/20 hover:border-pink-400/50',
      shadow: 'hover:shadow-[0_24px_70px_rgba(244,114,182,.12)]',
      glow: 'bg-pink-400/8',
      tag: 'border-pink-400/35 bg-pink-400/8 text-pink-300 hover:bg-pink-400/16',
    },
  ]

  return (
    <section id="skills" className="scroll-mt-16 border-y border-[var(--border)] bg-[var(--section)] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-1.5rem)] max-w-[1280px] sm:w-[calc(100%-3rem)] md:w-[calc(100%-6rem)]">
        {/* عنوان بخش مهارت‌ها */}
        <div className="reveal mb-8 text-center sm:mb-10">
          <span className={`${isPersian ? 'font-vazir text-[11px]' : 'font-mono text-[10px] tracking-wide'} block font-normal text-cyan-400`}>
            {isPersian ? 'ابزارهایی که با آن‌ها می‌سازم' : 'Tools I build with'}
          </span>
          <h2 className="mt-2 font-display text-[clamp(28px,8vw,36px)] font-bold sm:text-4xl md:text-5xl">{isPersian ? 'مهارت‌ها' : 'Tech stack'}</h2>
        </div>

        {/* ساخت یک کارت برای هر گروه از مهارت‌ها */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {groups.map(([title, items], index) => (
            <article
              className={`reveal group relative min-h-[210px] overflow-hidden rounded-2xl border bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] px-4 py-6 backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:scale-[1.008] sm:min-h-[225px] sm:px-5 sm:py-7 lg:min-h-[245px] lg:rounded-[20px] lg:px-6 lg:py-8 ${cardThemes[index].border} ${cardThemes[index].shadow}`}
              key={title}
            >
              {/* Glow رنگی کارت در زمان Hover */}
              <div className={`pointer-events-none absolute -top-20 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full opacity-0 blur-[70px] transition-opacity duration-700 ease-out group-hover:opacity-100 ${cardThemes[index].glow}`} />

              {/* نور باریک متحرک روی کارت */}
              <div className="pointer-events-none absolute top-0 -left-1/2 h-full w-1/3 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-[500%]" />

              <h3 className={`relative text-center font-display text-base font-bold transition-transform duration-700 ease-out group-hover:-translate-y-0.5 sm:text-lg ${cardThemes[index].title}`}>{title}</h3>

              {/* تبدیل مهارت‌های هر گروه به Tag */}
              <div className="relative mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-2.5">
                {items.map((item) => (
                  <span
                    className={`rounded-full border px-3 py-1.5 text-[10px] font-medium transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.03] sm:px-3.5 sm:text-xs ${cardThemes[index].tag}`}
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
