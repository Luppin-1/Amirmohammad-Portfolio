export function Journey({ language }) {
  const isPersian = language === 'fa'

  // اطلاعات مسیر تحصیلی، دستاوردها و دوره‌ها در این شیء قرار دارد.
  const content = isPersian
    ? {
        eyebrow: 'یادگیری و دستاوردها', title: 'مسیر من', coursesTitle: 'دوره‌ها و آموزش‌ها',
        experiences: [
          { title: 'کارشناسی مهندسی نرم‌افزار', company: 'دانشگاه سمنان', date: '۱۴۰۳ — اکنون', location: 'سمنان', points: ['دانشجوی ترم پنج مهندسی کامپیوتر با تمرکز بر توسعه نرم‌افزار و فرانت‌اند', 'تمرین مستمر مبانی برنامه‌نویسی، الگوریتم و ساختمان داده', 'توسعه پروژه‌های مستقل در کنار مسیر دانشگاهی'] },
          { title: 'رتبه اول مسابقه برنامه‌نویسی ', company: 'مسابقه درون‌دانشگاهی - تیمی', date: 'دستاورد دانشگاهی', location: 'دانشگاه سمنان', points: ['حل مسائل الگوریتمی در محدودیت زمانی', 'تقویت تحلیل مسئله، کار تیمی و پیاده‌سازی راه‌حل با C++', 'کسب مقام نخست در رقابت درون‌دانشگاهی'] },
          { title: 'مسیر توسعه فرانت‌اند', company: 'یادگیری پروژه‌محور و گیت‌هاب', date: 'فعال و در حال رشد', location: 'مستقل', points: ['ساخت پروژه‌های React با معماری کامپوننتی و Hooks', 'طراحی رابط‌های واکنش‌گرا با Tailwind CSS و CSS', 'انتشار و به‌روزرسانی ۱۲ پروژه در GitHub'] },
        ],
        courses: [['React با Vite', 'تاپلرن'], ['Tailwind CSS', 'فرادرس'], ['Asynchronous JavaScript', 'مکتب‌خونه'], ['HTML, CSS و JavaScript پروژه‌محور', 'مکتب‌خونه'], ['توسعه اندروید با Kotlin', 'مکتب‌خونه'], ['مبانی C++ - دوره ۶ ماهه', 'مجتمع فنی تهران']],
      }
    : {
        eyebrow: 'Learning and achievements', title: 'My journey', coursesTitle: 'Courses & training',
        experiences: [
          { title: 'B.Sc. in Software Engineering', company: 'Semnan University', date: '2024 — Present', location: 'Semnan, Iran', points: ['Fourth-semester Computer Engineering student focused on software and front-end development', 'Continuous practice in programming fundamentals, algorithms and data structures', 'Building independent products alongside academic studies'] },
          { title: '1st Place - ICPC Programming Contest', company: 'Internal university team competition', date: 'Academic achievement', location: 'Semnan University', points: ['Solved algorithmic problems under time constraints', 'Strengthened analytical thinking, teamwork and C++ implementation', 'Ranked first in the internal university contest'] },
          { title: 'Front-end Development Track', company: 'Project-based learning and GitHub', date: 'Active and growing', location: 'Independent', points: ['Built React projects using component architecture and Hooks', 'Designed responsive interfaces with Tailwind CSS and vanilla CSS', 'Published and maintained 12 public GitHub repositories'] },
        ],
        courses: [['React with Vite', 'TopLearn'], ['Tailwind CSS', 'Faradars'], ['Asynchronous JavaScript', 'Maktabkhooneh'], ['Project-based HTML, CSS & JavaScript', 'Maktabkhooneh'], ['Android with Kotlin', 'Maktabkhooneh'], ['C++ Fundamentals - 6 months', 'Tehran Technical Complex']],
      }

  return (
    <section id="experience" className="scroll-mt-16 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-1.5rem)] max-w-[1100px] sm:w-[calc(100%-3rem)] md:w-[calc(100%-6rem)]">
        {/* عنوان اصلی بخش */}
        <div className="reveal mb-8 text-center sm:mb-10">
          <span className={`${isPersian ? 'font-vazir text-[11px] sm:text-[13px]' : 'font-mono text-[10px] tracking-wide'} block font-normal text-cyan-400`}>
            {content.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-[clamp(28px,8vw,36px)] font-bold sm:text-4xl md:text-5xl">{content.title}</h2>
        </div>

        {/* Timeline تحصیلات و دستاوردها */}
        <div className="relative space-y-4 before:absolute before:top-4 before:bottom-4 before:start-[15px] before:w-px before:bg-[var(--border)] sm:space-y-5 sm:before:start-[19px]">
          {content.experiences.map((item, index) => (
            <article className="reveal relative grid grid-cols-[32px_minmax(0,1fr)] gap-2.5 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-4 md:gap-6" key={item.title}>
              <div className="font-numbers relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-[var(--bg)] text-[9px] text-cyan-400 sm:h-10 sm:w-10 sm:text-xs">{String(index + 1).padStart(2, '0')}</div>
              <div className="min-w-0 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:rounded-2xl sm:p-5 md:p-7">
                <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:justify-between"><div className="min-w-0"><h3 className="font-display text-base leading-7 font-semibold sm:text-xl">{item.title}</h3><p className="mt-1 text-xs leading-6 text-cyan-400 sm:text-sm">{item.company}</p></div><div className="shrink-0 md:text-end"><span className="font-numbers text-[10px] text-purple-500 sm:text-xs">{item.date}</span><small className="mt-1 block text-[10px] text-[var(--muted)] sm:text-xs">{item.location}</small></div></div>
                <ul className="mt-4 space-y-1.5 text-xs leading-6 text-[var(--muted)] sm:mt-5 sm:space-y-2 sm:text-sm sm:leading-7">{item.points.map((point) => <li className="relative ps-3.5 before:absolute before:top-2.5 before:start-0 before:h-1 before:w-1 before:rounded-full before:bg-cyan-400 sm:ps-4 sm:before:top-3" key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>

        {/* عنوان دوره‌های آموزشی با دو خط ظریف در طرفین */}
        <div className="reveal mt-12 mb-6 flex items-center gap-2.5 sm:mt-16 sm:mb-7 sm:gap-4">
          <span className="h-px flex-1 bg-linear-to-r from-transparent to-cyan-400/30" />
          <h3 className={`${isPersian ? 'font-vazir text-xs sm:text-sm' : 'font-mono text-[10px] tracking-wide sm:text-xs'} shrink-0 font-medium text-cyan-400`}>
            {content.coursesTitle}
          </h3>
          <span className="h-px flex-1 bg-linear-to-l from-transparent to-purple-400/30" />
        </div>

        {/* کارت‌های دوره‌های آموزشی */}
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.courses.map(([course, source], index) => (
            <article
              className="reveal group relative flex min-h-[92px] items-center gap-3 overflow-hidden rounded-xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] p-4 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:border-cyan-400/35 hover:shadow-[0_18px_50px_rgba(34,211,238,.09)] sm:min-h-[105px] sm:gap-4 sm:rounded-2xl sm:p-5"
              key={course}
            >
              {/* نور محو داخل کارت هنگام Hover */}
              <span className="pointer-events-none absolute -top-16 -end-12 h-32 w-32 rounded-full bg-purple-500/10 opacity-0 blur-[45px] transition-opacity duration-700 group-hover:opacity-100" />

              {/* خط رنگی پایین کارت */}
              <span className="absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-linear-to-r from-cyan-400 via-purple-500 to-cyan-400 transition-transform duration-700 group-hover:scale-x-100" />

              {/* شماره دوره */}
              <b className="font-numbers relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-purple-400/25 bg-purple-400/8 text-[10px] text-purple-400 transition-all duration-500 group-hover:scale-105 group-hover:border-purple-400/50 group-hover:bg-purple-400/15 sm:h-10 sm:w-10 sm:text-xs">
                {String(index + 1).padStart(2, '0')}
              </b>

              {/* نام دوره و برگزارکننده */}
              <div className="relative min-w-0 transition-transform duration-700 group-hover:-translate-y-0.5">
                <h4 className="text-xs leading-5 font-semibold text-[var(--text)] transition-colors duration-500 group-hover:text-cyan-400 sm:text-sm">{course}</h4>
                <span className="mt-1 block text-[10px] text-[var(--muted)] sm:mt-1.5 sm:text-[11px]">{source}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
