export function About({ language }) {
  const isPersian = language === 'fa'

  // متن‌ها و آمار بخش «درباره من»؛ برای ویرایش محتوا فقط این قسمت را تغییر بده.
  const content = isPersian
    ? {
        eyebrow: 'من کی هستم', title: 'درباره من',
        paragraphs: [
          'دانشجوی ترم پنج مهندسی کامپیوتر دانشگاه سمنان هستم و مسیر حرفه‌ای خودم را روی توسعه فرانت‌اند متمرکز کرده‌ام. تجربه ساخت پروژه‌های شخصی با React، JavaScript و Tailwind CSS را دارم و آموخته‌هایم را پیوسته در گیت‌هاب به پروژه‌ قابل مشاهده تبدیل می‌کنم.',
          'کسب رتبه اول مسابقه برنامه‌نویسی درون‌دانشگاهی، علاقه من به حل مسئله و تفکر الگوریتمی را جدی‌تر کرد. حالا به دنبال فرصتی هستم تا در کنار یک تیم حرفه‌ای، روی پروژه‌‌های واقعی کار کنم و با بازخورد مستمر سریع‌تر رشد کنم.',
        ],
        stats: [['۱۲+', 'پروژه و مینی پروژه'], ['رتبه ۱', 'مسابقه برنامه‌نویسی'], ['۶+', 'دوره تخصصی']],
      }
    : {
        eyebrow: 'My story', title: 'About me',
        paragraphs: [
          'I am a fourth-semester Computer Engineering student at Semnan University, focused on front-end development. I build personal projects with React, JavaScript and Tailwind CSS, consistently turning what I learn into visible work on GitHub.',
          'Winning first place in an internal programming competition deepened my interest in problem solving and algorithmic thinking. I am now looking for an opportunity to contribute to real products, learn from a professional team and grow quickly through feedback.',
        ],
        stats: [['12+', 'Public repositories'], ['1st', 'ICPC competition'], ['6+', 'Technical courses']],
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
          {content.stats.map(([number, label]) => <div className="flex flex-col items-center border-b border-[var(--border)] px-4 py-5 text-center last:border-0 min-[480px]:border-e min-[480px]:border-b-0 sm:px-5 sm:py-7" key={label}><strong className="font-numbers text-2xl text-cyan-400 sm:text-3xl">{number}</strong><span className="mt-1.5 text-[10px] text-[var(--muted)] sm:mt-2 sm:text-xs">{label}</span></div>)}
        </div>

      </div>
    </section>
  )
}
