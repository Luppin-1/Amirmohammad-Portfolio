export function About({ language }) {
  const isPersian = language === 'fa'

  // متن‌ها و آمار بخش «درباره من»؛ برای ویرایش محتوا فقط این قسمت را تغییر بده.
  const content = isPersian
    ? {
        eyebrow: 'من کی هستم', title: 'درباره من',
        paragraphs: [
          'دانشجوی مهندسی کامپیوتر دانشگاه سمنان و کارآموز توسعه فرانت‌اند در Cod24 هستم. در این دوره، بازطراحی کامل رابط کاربری سایت را با React، JavaScript، TypeScript و Tailwind CSS انجام داده‌ام و تجربه کار روی یک محصول واقعی را به دست آورده‌ام.',
          'در کنار همکاری با توسعه‌دهنده بک‌اند و مدیر پروژه، روی ساخت کامپوننت‌های قابل استفاده مجدد، طراحی واکنش‌گرا، اتصال به API و کیفیت کد تمرکز داشته‌ام. اکنون به دنبال موقعیت توسعه‌دهنده جونیور فرانت‌اند هستم تا این تجربه را در یک تیم حرفه‌ای ادامه دهم.',
        ],
        stats: [['۱۲+', 'پروژه و مینی پروژه'], ['cod24', 'تجربه پروژه واقعی'], ['رتبه ۱', 'مسابقه برنامه‌نویسی']],
      }
    : {
        eyebrow: 'My story', title: 'About me',
        paragraphs: [
          'I am a Computer Engineering student at Semnan University and a Front-End Developer Intern at Cod24. During this internship, I redesigned and developed the complete website interface with React, JavaScript, TypeScript and Tailwind CSS, gaining hands-on experience on a real product.',
          'I have worked closely with a back-end developer and project manager while focusing on reusable components, responsive design, API integration and code quality. I am now seeking a Junior Front-End Developer role where I can contribute and continue growing within a professional team.',
        ],
        stats: [['12+', 'Public repositories'], ['cod24', 'Complete website redesign'], ['1st', 'ICPC competition']],
      }

  return (
    <section id="about" className="scroll-mt-16 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-1.5rem)] max-w-[820px] sm:w-[calc(100%-3rem)] md:w-[calc(100%-6rem)]">
        {/* عنوان بخش */}
        <div className="reveal mb-8 text-center sm:mb-10">
          <span className={`${isPersian ? 'font-vazir text-xs sm:text-sm' : 'font-mono text-[10px] tracking-wide sm:text-xs'} font-medium text-cyan-400`}>
            {content.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-[clamp(28px,8vw,36px)] font-bold sm:text-4xl md:text-5xl">{content.title}</h2>
        </div>

        {/* پاراگراف‌های معرفی */}
        <div className="space-y-4 text-sm leading-7 text-[var(--muted)] sm:space-y-5 sm:text-[15px] sm:leading-8 md:text-lg md:leading-9">{content.paragraphs.map((paragraph) => <p className="reveal" key={paragraph}>{paragraph}</p>)}</div>

        {/* کارت‌های آماری پایین بخش */}
        <div className="reveal mt-9 grid overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] min-[480px]:grid-cols-3 sm:mt-12">
          {content.stats.map(([number, label]) => <div className="flex flex-col items-center border-b border-[var(--border)] px-4 py-5 text-center last:border-0 min-[480px]:border-e min-[480px]:border-b-0 sm:px-5 sm:py-7" key={label}><strong className="font-numbers text-xl text-cyan-400 sm:text-2xl">{number}</strong><span className="mt-1.5 text-[10px] text-[var(--muted)] sm:mt-2 sm:text-xs">{label}</span></div>)}
        </div>

      </div>
    </section>
  )
}
