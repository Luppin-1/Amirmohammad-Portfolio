export function Projects({ language }) {
  const isPersian = language === 'fa'

  // اطلاعات هر پروژه شامل شماره، نام، توضیح، تکنولوژی‌ها و لینک GitHub است.
  const projects = isPersian
    ? [
        { number: '۰۱', title: 'فروشگاه پوشاک', type: 'React · E-commerce', description: 'فروشگاه ساده React با فهرست محصولات و مسیر جداگانه برای مشاهده جزئیات هر محصول؛ تازه‌ترین پروژه عمومی من.', stack: ['React', 'JavaScript', 'Routing'], link: 'https://github.com/Luppin-1/fashion-store-react' },
        { number: '۰۲', title: 'مدیریت وظایف', type: 'React · Productivity', description: 'اپلیکیشن Todo با ساختار کامپوننتی، React Hooks و مدیریت State؛ ساخته‌شده با Vite و Tailwind CSS.', stack: ['React', 'Vite', 'Tailwind'], link: 'https://github.com/Luppin-1/Todo-app-react' },
        { number: '۰۳', title: 'صفحه ورود', type: 'React · UI', description: 'پیاده‌سازی یک رابط ورود با استفاده از API، رسپانسیو و قابل توسعه با تمرکز بر ساختار فرم و تجربه کاربری.', stack: ['React', 'Vite', 'Tailwind'], link: 'https://github.com/Luppin-1/Login-project-react' },
        { number: '۰۴', title: 'وب‌سایت رستوران', type: 'Landing Page', description: 'لندینگ رستوران با طراحی واکنش‌گرا و تعاملات کاربری؛ پیاده‌سازی‌شده با فناوری‌های خالص وب.', stack: ['HTML', 'CSS', 'JavaScript'], link: 'https://github.com/Luppin-1/Restuarant' },
        { number: '۰۵', title: 'تمرین الگوریتم', type: 'Problem Solving', description: 'مجموعه تمرین‌های الگوریتمی برای تقویت حل مسئله و آماده‌سازی مسابقات برنامه‌نویسی.', stack: ['C++', 'Algorithms', 'ICPC'], link: 'https://github.com/Luppin-1/algorithm-practice' },
        { number: '۰۶', title: 'آزمایشگاه مینی‌پروژه‌ها', type: 'JavaScript Labs', description: 'مجموعه‌ای از تجربه‌های کوچک شامل منوی راست‌کلیک، بازی اعداد، لودینگ و تغییر تم روشن و تیره.', stack: ['JavaScript', 'CSS', 'UI Motion'], link: 'https://github.com/Luppin-1?tab=repositories' },
      ]
    : [
        { number: '01', title: 'Fashion Store', type: 'React · E-commerce', description: 'A React storefront featuring a product collection and dedicated detail routes — my most recent public project.', stack: ['React', 'JavaScript', 'Routing'], link: 'https://github.com/Luppin-1/fashion-store-react' },
        { number: '02', title: 'Todo App', type: 'React · Productivity', description: 'A component-driven task manager using React Hooks and state, built with Vite and Tailwind CSS.', stack: ['React', 'Vite', 'Tailwind'], link: 'https://github.com/Luppin-1/Todo-app-react' },
        { number: '03', title: 'Login Experience', type: 'React · UI', description: 'A clean, responsive and extensible login interface focused on form structure and user experience.', stack: ['React', 'Vite', 'Tailwind'], link: 'https://github.com/Luppin-1/Login-project-react' },
        { number: '04', title: 'Restaurant Website', type: 'Landing Page', description: 'A responsive restaurant landing page with interactive UI, built using the core web platform.', stack: ['HTML', 'CSS', 'JavaScript'], link: 'https://github.com/Luppin-1/Restuarant' },
        { number: '05', title: 'Algorithm Practice', type: 'Problem Solving', description: 'A growing collection of algorithm exercises for strengthening problem-solving and contest skills.', stack: ['C++', 'Algorithms', 'ICPC'], link: 'https://github.com/Luppin-1/algorithm-practice' },
        { number: '06', title: 'Mini Projects Lab', type: 'JavaScript Labs', description: 'Small experiments including a context menu, number game, loading effects and a light/dark theme.', stack: ['JavaScript', 'CSS', 'UI Motion'], link: 'https://github.com/Luppin-1?tab=repositories' },
      ]

  // رنگ اختصاصی هر کارت پروژه؛ ترتیب آن با آرایه projects یکسان است.
  const projectThemes = [
    {
      border: 'hover:border-cyan-400/45', shadow: 'hover:shadow-[0_24px_70px_rgba(34,211,238,.12)]',
      glow: 'bg-cyan-500/12', accent: 'text-cyan-400', title: 'group-hover:text-cyan-400',
      badge: 'border-cyan-400/25 bg-cyan-400/8 text-cyan-300 group-hover:border-cyan-400/45',
      tag: 'border-cyan-400/20 bg-cyan-400/6 group-hover:border-cyan-400/35 group-hover:text-cyan-300',
      line: 'from-transparent via-cyan-400 to-transparent', link: 'text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10',
    },
    {
      border: 'hover:border-purple-400/45', shadow: 'hover:shadow-[0_24px_70px_rgba(192,132,252,.12)]',
      glow: 'bg-purple-500/12', accent: 'text-purple-400', title: 'group-hover:text-purple-400',
      badge: 'border-purple-400/25 bg-purple-400/8 text-purple-300 group-hover:border-purple-400/45',
      tag: 'border-purple-400/20 bg-purple-400/6 group-hover:border-purple-400/35 group-hover:text-purple-300',
      line: 'from-transparent via-purple-400 to-transparent', link: 'text-purple-400 hover:border-purple-400/50 hover:bg-purple-400/10',
    },
    {
      border: 'hover:border-emerald-400/45', shadow: 'hover:shadow-[0_24px_70px_rgba(52,211,153,.12)]',
      glow: 'bg-emerald-500/12', accent: 'text-emerald-400', title: 'group-hover:text-emerald-400',
      badge: 'border-emerald-400/25 bg-emerald-400/8 text-emerald-300 group-hover:border-emerald-400/45',
      tag: 'border-emerald-400/20 bg-emerald-400/6 group-hover:border-emerald-400/35 group-hover:text-emerald-300',
      line: 'from-transparent via-emerald-400 to-transparent', link: 'text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-400/10',
    },
    {
      border: 'hover:border-amber-400/45', shadow: 'hover:shadow-[0_24px_70px_rgba(251,191,36,.12)]',
      glow: 'bg-amber-500/12', accent: 'text-amber-400', title: 'group-hover:text-amber-400',
      badge: 'border-amber-400/25 bg-amber-400/8 text-amber-300 group-hover:border-amber-400/45',
      tag: 'border-amber-400/20 bg-amber-400/6 group-hover:border-amber-400/35 group-hover:text-amber-300',
      line: 'from-transparent via-amber-400 to-transparent', link: 'text-amber-400 hover:border-amber-400/50 hover:bg-amber-400/10',
    },
    {
      border: 'hover:border-blue-400/45', shadow: 'hover:shadow-[0_24px_70px_rgba(96,165,250,.12)]',
      glow: 'bg-blue-500/12', accent: 'text-blue-400', title: 'group-hover:text-blue-400',
      badge: 'border-blue-400/25 bg-blue-400/8 text-blue-300 group-hover:border-blue-400/45',
      tag: 'border-blue-400/20 bg-blue-400/6 group-hover:border-blue-400/35 group-hover:text-blue-300',
      line: 'from-transparent via-blue-400 to-transparent', link: 'text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10',
    },
    {
      border: 'hover:border-pink-400/45', shadow: 'hover:shadow-[0_24px_70px_rgba(244,114,182,.12)]',
      glow: 'bg-pink-500/12', accent: 'text-pink-400', title: 'group-hover:text-pink-400',
      badge: 'border-pink-400/25 bg-pink-400/8 text-pink-300 group-hover:border-pink-400/45',
      tag: 'border-pink-400/20 bg-pink-400/6 group-hover:border-pink-400/35 group-hover:text-pink-300',
      line: 'from-transparent via-pink-400 to-transparent', link: 'text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/10',
    },
  ]

  return (
    <section id="projects" className="scroll-mt-16 border-y border-[var(--border)] bg-[var(--section)] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-1.5rem)] max-w-[1280px] sm:w-[calc(100%-3rem)] md:w-[calc(100%-6rem)]">
        {/* عنوان بخش پروژه‌ها */}
        <div className="reveal mb-8 text-center sm:mb-10">
          <span className={`${isPersian ? 'font-vazir text-[11px]' : 'font-mono text-[10px] tracking-wide'} block font-normal text-cyan-400`}>
            {isPersian ? 'منتخب کارهای من' : 'Selected work'}
          </span>
          <h2 className="mt-2 font-display text-[clamp(28px,8vw,36px)] font-bold sm:text-4xl md:text-5xl">{isPersian ? 'پروژه‌های منتخب' : 'Featured projects'}</h2>
        </div>

        {/* کارت پروژه‌ها؛ map برای هر پروژه یک کارت می‌سازد. */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project, index) => (
            <article
              className={`reveal group relative flex min-h-[310px] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] p-4 backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:scale-[1.008] min-[400px]:p-5 sm:min-h-[340px] sm:p-6 lg:min-h-[350px] lg:rounded-[20px] ${projectThemes[index].border} ${projectThemes[index].shadow}`}
              key={project.title}
            >
              {/* Glow محو داخل کارت */}
              <span className={`pointer-events-none absolute -top-20 -end-16 h-48 w-48 rounded-full opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100 ${projectThemes[index].glow}`} />

              {/* خط گرادیانی بالای کارت هنگام Hover */}
              <span className={`absolute inset-x-0 top-0 h-px origin-center scale-x-0 bg-linear-to-r transition-transform duration-700 group-hover:scale-x-100 ${projectThemes[index].line}`} />

              {/* شماره و نوع پروژه */}
              <div className="relative flex min-w-0 items-center justify-between gap-3 sm:gap-4">
                <span className={`font-numbers shrink-0 text-xl font-bold transition-transform duration-700 group-hover:scale-105 sm:text-2xl ${projectThemes[index].accent}`}>{project.number}</span>
                <em className={`max-w-[72%] truncate rounded-full border px-2.5 py-1 font-mono text-[8px] not-italic transition-colors duration-500 sm:px-3 sm:py-1.5 sm:text-[9px] ${projectThemes[index].badge}`}>{project.type}</em>
              </div>

              {/* نام و توضیح پروژه */}
              <div className="relative mt-6 transition-transform duration-700 group-hover:-translate-y-0.5 sm:mt-8">
                <h3 className={`font-display text-xl leading-8 font-semibold text-[var(--text)] transition-colors duration-500 sm:text-2xl ${projectThemes[index].title}`}>{project.title}</h3>
                <p className="mt-2.5 text-xs leading-6 text-[var(--muted)] sm:mt-3 sm:text-sm sm:leading-7">{project.description}</p>
              </div>

              {/* تکنولوژی‌های پروژه */}
              <div className="relative mt-auto flex flex-wrap gap-1.5 pt-5 pe-11 sm:gap-2 sm:pt-6 sm:pe-14">
                {project.stack.map((item) => (
                  <span className={`rounded-full border px-2.5 py-1 text-[9px] text-[var(--muted)] transition-all duration-500 sm:px-3 sm:text-[10px] ${projectThemes[index].tag}`} key={item}>{item}</span>
                ))}
              </div>

              {/* لینک ورود به مخزن پروژه */}
              <a className={`absolute end-4 bottom-4 grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-[var(--chip)] text-base transition-all duration-700 ease-out group-hover:-rotate-45 group-hover:scale-105 sm:end-5 sm:bottom-5 sm:h-11 sm:w-11 sm:text-lg ${projectThemes[index].link}`} href={project.link} target="_blank" rel="noreferrer" aria-label={project.title}>↗</a>

              {/* خط رنگی پایین کارت */}
              <span className={`absolute inset-x-0 bottom-0 h-px origin-start scale-x-0 bg-linear-to-r transition-transform duration-700 group-hover:scale-x-100 ${projectThemes[index].line}`} />
            </article>
          ))}
        </div>

        {/* لینک مشاهده تمام مخزن‌ها در GitHub */}
        <div className="reveal mt-5 sm:mt-7">
          <a className="group flex items-center justify-between gap-4 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-[0_18px_50px_rgba(34,211,238,.08)] sm:rounded-2xl sm:p-6" href="https://github.com/Luppin-1" target="_blank" rel="noreferrer">
            <span className="min-w-0"><b className="font-display text-base transition-colors duration-1000 ease-out group-hover:text-cyan-400 sm:text-lg">GitHub</b><small className="mt-1 block truncate font-mono text-[9px] text-[var(--muted)] sm:text-[10px]">@Luppin-1 · 12 repositories</small></span>
            <span className="text-xl text-cyan-400 transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:-rotate-45 group-hover:scale-110">↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}
