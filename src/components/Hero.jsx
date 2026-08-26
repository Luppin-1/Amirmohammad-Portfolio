export function Hero({ language, onContact }) {
  // این مقدار مشخص می‌کند کدام نسخه محتوایی نمایش داده شود.
  const isPersian = language === 'fa'

  // مسیر پایه در Local برابر / و در GitHub Pages برابر /Amirmohammad-Portfolio/ است.
  const baseUrl = import.meta.env.BASE_URL

  // موارد داخل نوار متحرک پایین Hero
  const technologies = ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'GitHub', 'C++', 'Problem Solving', 'Responsive Design', 'UI/UX Designer']

  // استایل مشترک دو دکمه Hero
  const buttonStyle = 'inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition duration-300 hover:-translate-y-1 min-[420px]:flex-none sm:min-h-12 sm:px-5 sm:py-3 sm:text-sm'

  return (
    <>
      <section className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-24 lg:h-svh lg:min-h-[640px] lg:max-h-[760px] lg:pt-20 lg:pb-[52px]">
        {/* شبکه ظریف پس‌زمینه */}
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(100,116,139,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,.1)_1px,transparent_1px)] [background-size:50px_50px]" />

        {/* dir=ltr باعث می‌شود شماره ستون‌های Grid همیشه از چپ محاسبه شوند. */}
        <div dir="ltr" className={`relative z-10 mx-auto grid w-[calc(100%-1.5rem)] items-center gap-10 sm:w-[calc(100%-3rem)] sm:gap-12 md:w-[calc(100%-6rem)] lg:max-w-[1280px] lg:gap-[clamp(44px,5vw,72px)] ${isPersian ? 'lg:grid-cols-[.8fr_1.2fr]' : 'lg:grid-cols-[1.2fr_.8fr]'}`}>
          {/* تصویر در فارسی ستون چپ و در انگلیسی ستون راست است. */}
          <div className={`reveal relative order-1 h-[190px] w-[190px] justify-self-center min-[380px]:h-[215px] min-[380px]:w-[215px] sm:h-[245px] sm:w-[245px] lg:row-start-1 lg:h-[290px] lg:w-[290px] ${isPersian ? 'lg:col-start-1' : 'lg:col-start-2 lg:translate-x-[clamp(24px,2.5vw,40px)]'}`}>
            {/* نور و حلقه متحرک دور تصویر */}
            <div className="absolute -inset-[25px] animate-[pulseGlow_3s_ease-in-out_infinite] rounded-full bg-[conic-gradient(from_30deg,#22d3ee,#a855f7,#f472b6,#22d3ee)] opacity-20 blur-[34px]" />
            <div className="absolute -inset-[17px] animate-[spin_12s_linear_infinite] rounded-full border border-transparent border-t-cyan-400/50 border-r-purple-500/20" />
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400 via-purple-500 to-pink-400 p-1">
              <img className="h-full w-full rounded-full object-cover object-[50%_21%] saturate-75 transition duration-700 hover:scale-[1.035] hover:saturate-100" src={`${baseUrl}amir-mohammad-ehsani.jpg`} alt={isPersian ? 'امیرمحمد احسانی' : 'AmirMohammad Ehsani'} />
            </div>

            {/* دو کارت آماری شناور روی تصویر */}
            <div className={`absolute bottom-0 z-30 min-w-[98px] animate-[float_4s_ease-in-out_infinite] rounded-xl border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-center backdrop-blur-xl min-[380px]:min-w-[110px] min-[380px]:px-3 sm:min-w-[120px] sm:px-4 sm:py-2.5 ${isPersian ? '-left-2 sm:-left-5' : '-right-2 sm:-right-5'}`}>
              <strong className="block font-numbers text-base font-bold text-cyan-400 sm:text-xl">{isPersian ? '+۱۲' : '12'}</strong>
              <small className="text-[9px] text-[var(--muted)] sm:text-[11px]">{isPersian ? 'پروژه و مینی پروژه' : 'Public repositories'}</small>
            </div>
            <div className={`absolute top-1 z-30 min-w-[98px] animate-[float_4s_ease-in-out_infinite] rounded-xl border border-[var(--border)] bg-[var(--surface)] px-2.5 py-2 text-center backdrop-blur-xl [animation-delay:-2s] min-[380px]:min-w-[110px] min-[380px]:px-3 sm:min-w-[120px] sm:px-4 sm:py-2.5 ${isPersian ? '-right-2 sm:-right-6' : '-left-2 sm:-left-6'}`}>
              <strong className="block font-numbers text-base font-bold text-purple-500 sm:text-xl">{isPersian ? 'رتبه ۱' : '1st'}</strong>
              <small className="text-[9px] text-[var(--muted)] sm:text-[11px]">{isPersian ? 'مسابقه برنامه‌نویسی' : 'ICPC competition'}</small>
            </div>
          </div>

          {/* متن Hero */}
          <div dir={isPersian ? 'rtl' : 'ltr'} className={`reveal order-2 flex w-full max-w-[700px] flex-col items-center text-center lg:row-start-1 lg:items-start lg:text-start ${isPersian ? 'lg:col-start-2 lg:justify-self-end' : 'lg:col-start-1 lg:justify-self-start lg:pl-[clamp(24px,2.5vw,40px)]'}`}>
            <div className="mb-4 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1.5 text-center text-[10px] leading-5 font-semibold text-emerald-400 sm:mb-5 sm:text-xs">
              <i className="h-2 w-2 rounded-full bg-emerald-400" />
              {isPersian ? 'آماده همکاری به‌عنوان کارآموز فرانت‌اند' : 'Open to front-end internship opportunities'}
            </div>
            <h1 className={`bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text font-display text-[clamp(34px,10vw,42px)] font-bold text-transparent sm:text-[46px] lg:text-[clamp(48px,5vw,70px)] xl:whitespace-nowrap ${isPersian ? 'pb-2 leading-[1.35]' : 'leading-[1.12]'}`}>
              {isPersian ? 'امیرمحمد احسانی' : 'AmirMohammad Ehsani'}
            </h1>
            <div className="mt-4 flex items-center gap-2.5 text-sm font-medium text-cyan-400 sm:mt-5 sm:text-[15px] lg:mt-7 lg:text-lg">
              <span className="h-px w-8 bg-cyan-400/50" />
              {isPersian ? 'توسعه‌دهنده فرانت‌اند' : 'Front-end Developer'}
            </div>
            <div className="mt-2.5 text-[10px] leading-5 text-[var(--muted)] sm:mt-3 sm:text-xs">
              {isPersian ? 'دانشجوی مهندسی کامپیوتر · حل‌کننده مسئله' : 'Computer Engineering Student · Problem Solver'}
            </div>
            <p className="mt-4 mb-5 max-w-[680px] text-[13px] leading-7 text-[var(--muted)] sm:mt-5 sm:mb-6 sm:text-[15px] sm:leading-[1.9] lg:text-lg">
              {isPersian
                ? 'با React و JavaScript رابط‌های کاربری سریع، زیبا و سازگار با انواع دستگاه‌ها طراحی می‌کنم و از تبدیل ایده‌ها به تجربه‌های واقعی و کاربردی در وب لذت می‌برم.'
                : 'I build fast, responsive and thoughtfully crafted interfaces with React and JavaScript — turning simple ideas into tangible web experiences.'}
            </p>
            {/* دکمه دانلود رزومه و رفتن به بخش تماس */}
            <div className="flex w-full flex-wrap justify-center gap-2.5 min-[420px]:w-auto sm:gap-3.5 lg:justify-start">
              <a className={`${buttonStyle} border-cyan-400/50 bg-cyan-400/8 text-cyan-400`} href={`${baseUrl}AmirMohammad-Ehsani-Resume.pdf`} download>
                ↓ {isPersian ? 'دانلود رزومه' : 'Download CV'}
              </a>
              <button className={`${buttonStyle} border-[var(--border)] text-[var(--text)]`} onClick={onContact}>
                ✉ {isPersian ? 'ارتباط با من' : 'Get in touch'}
              </button>
            </div>
          </div>
        </div>

        {/* دکمه رفتن به بخش درباره من */}
        <a className="group absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] text-[var(--muted)] transition-colors duration-500 hover:text-cyan-400 lg:bottom-4" href="#about" aria-label={isPersian ? 'رفتن به بخش درباره من' : 'Go to About section'}>
          <span>{isPersian ? 'بخش بعدی' : 'Next section'}</span>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm transition-all duration-500 group-hover:translate-y-1 group-hover:border-cyan-400/50">↓</span>
        </a>
      </section>

      {/* نوار تکنولوژی‌ها به Hero متصل است و فایل جدا ندارد. */}
      <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--surface)] py-4" aria-hidden="true">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] whitespace-nowrap">
          {[...technologies, ...technologies].map((item, index) => <span className="flex items-center gap-6 px-6 font-mono text-xs text-[var(--muted)]" key={`${item}-${index}`}>{item}<b className="text-cyan-400">✦</b></span>)}
        </div>
      </div>
    </>
  )
}
