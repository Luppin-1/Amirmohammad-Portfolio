import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa6'
import { FiExternalLink, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

export function Contact({ language }) {
  const isPersian = language === 'fa'

  // متن بالای بخش تماس
  const eyebrow = isPersian ? 'بیایید با هم کار کنیم' : "Let's work together"
  const title = isPersian ? 'در تماس باشیم' : 'Get in touch'
  const description = isPersian
    ? 'اگر برای موقعیت کارآموزی فرانت‌اند، همکاری روی پروژه یا گفت‌وگو درباره یک ایده دنبال نیروی مشتاق هستید، خوشحال می‌شوم با شما صحبت کنم.'
    : 'If you are hiring a motivated front-end intern, collaborating on a project, or exploring an idea, I would love to hear from you.'

  // اطلاعات، لوگو و رنگ اختصاصی هر کارت
  const contacts = [
    {
      label: isPersian ? 'ایمیل' : 'Email', value: 'amir85.ehsani12@gmail.com', href: 'mailto:amir85.ehsani12@gmail.com', icon: <FiMail />,
      color: 'text-amber-400', border: 'border-amber-400/20 hover:border-amber-400/50', iconBox: 'border-amber-400/30 bg-amber-400/8', accent: 'bg-amber-400', shadow: 'hover:shadow-[0_22px_65px_rgba(251,191,36,.11)]',
    },
    {
      label: isPersian ? 'گیت‌هاب' : 'GitHub', value: 'github.com/Luppin-1', href: 'https://github.com/Luppin-1', icon: <FaGithub />,
      color: 'text-purple-400', border: 'border-purple-400/20 hover:border-purple-400/50', iconBox: 'border-purple-400/30 bg-purple-400/8', accent: 'bg-purple-400', shadow: 'hover:shadow-[0_22px_65px_rgba(192,132,252,.11)]',
    },
    {
      label: isPersian ? 'شماره تماس' : 'Phone', value: '09906277528', href: 'tel:+989906277528', icon: <FiPhone />,
      color: 'text-emerald-400', border: 'border-emerald-400/20 hover:border-emerald-400/50', iconBox: 'border-emerald-400/30 bg-emerald-400/8', accent: 'bg-emerald-400', shadow: 'hover:shadow-[0_22px_65px_rgba(52,211,153,.11)]',
    },
    {
      label: isPersian ? 'لینکدین' : 'LinkedIn', value: 'AmirMohammad Ehsani', href: 'https://www.linkedin.com/in/amirmohammad-ehsani-2958023b3', icon: <FaLinkedinIn />,
      color: 'text-orange-400', border: 'border-orange-400/20 hover:border-orange-400/50', iconBox: 'border-orange-400/30 bg-orange-400/8', accent: 'bg-orange-400', shadow: 'hover:shadow-[0_22px_65px_rgba(251,146,60,.11)]',
    },
    {
      label: isPersian ? 'تلگرام' : 'Telegram', value: '@AmirMohammad_Ehsani', href: 'https://t.me/AmirMohammad_Ehsani', icon: <FaTelegram />,
      color: 'text-cyan-400', border: 'border-cyan-400/20 hover:border-cyan-400/50', iconBox: 'border-cyan-400/30 bg-cyan-400/8', accent: 'bg-cyan-400', shadow: 'hover:shadow-[0_22px_65px_rgba(34,211,238,.11)]',
    },
    {
      label: isPersian ? 'موقعیت مکانی' : 'Location', value: isPersian ? 'سمنان، ایران' : 'Semnan, Iran', href: null, icon: <FiMapPin />,
      color: 'text-blue-400', border: 'border-blue-400/20 hover:border-blue-400/50', iconBox: 'border-blue-400/30 bg-blue-400/8', accent: 'bg-blue-400', shadow: 'hover:shadow-[0_22px_65px_rgba(96,165,250,.11)]',
    },
  ]

  return (
    <>
      <section id="contact" className="scroll-mt-16 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto w-[calc(100%-1.5rem)] max-w-[1120px] sm:w-[calc(100%-3rem)] md:w-[calc(100%-6rem)]">
          {/* عنوان و توضیح بخش تماس */}
          <div className="reveal mb-8 text-center sm:mb-10">
            <span className={`${isPersian ? 'font-vazir text-[11px]' : 'font-mono text-[10px] tracking-wide'} block text-cyan-400`}>{eyebrow}</span>
            <h2 className="mt-2 font-display text-[clamp(28px,8vw,36px)] font-bold sm:text-4xl md:text-5xl">{title}</h2>
          </div>
          <p className="reveal mx-auto max-w-[680px] text-center text-sm leading-7 text-[var(--muted)] sm:text-[15px] sm:leading-8 md:text-lg">{description}</p>

          {/* کارت‌های راه‌های ارتباطی */}
          <div className="mt-9 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 md:gap-5">
            {contacts.map((item) => {
              const Card = item.href ? 'a' : 'div'

              return (
                <div className="reveal" key={item.label}>
                  <Card
                    className={`group relative flex min-h-[98px] items-center gap-3 overflow-hidden rounded-xl border bg-[color-mix(in_srgb,var(--surface)_96%,transparent)] px-3.5 py-4 shadow-[0_12px_35px_rgba(0,0,0,.08)] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 min-[380px]:gap-4 min-[380px]:px-4 sm:min-h-[112px] sm:rounded-2xl sm:px-5 sm:py-5 md:min-h-[118px] md:gap-5 ${item.border} ${item.shadow}`}
                    href={item.href || undefined}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {/* خط رنگی بالای کارت */}
                    <span className={`absolute top-0 right-7 left-7 h-px opacity-40 transition-all duration-700 group-hover:right-4 group-hover:left-4 group-hover:opacity-100 ${item.accent}`} />

                    {/* لوگوی واقعی یا آیکون استاندارد */}
                    <span className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-lg border text-[21px] transition-all duration-700 group-hover:scale-105 min-[380px]:h-12 min-[380px]:w-12 min-[380px]:text-2xl sm:h-14 sm:w-14 sm:rounded-xl sm:text-[28px] ${item.color} ${item.iconBox}`}>{item.icon}</span>

                    {/* عنوان و مقدار راه ارتباطی */}
                    <span className="relative z-10 min-w-0 flex-1">
                      <small className="block text-[10px] font-medium text-[var(--muted)] sm:text-xs">{item.label}</small>
                      <strong className={`mt-1.5 block truncate text-xs font-semibold min-[380px]:text-[13px] sm:mt-2 sm:text-sm md:text-base ${item.color}`}>{item.value}</strong>
                    </span>

                    {item.href && <FiExternalLink className={`relative z-10 ms-auto hidden shrink-0 text-sm opacity-30 transition-all duration-700 group-hover:-translate-y-0.5 group-hover:opacity-100 min-[380px]:block sm:text-base ${item.color}`} />}

                    {/* Glow هماهنگ با رنگ لوگو */}
                    <span className={`pointer-events-none absolute -end-16 h-36 w-36 rounded-full opacity-0 blur-[55px] transition-opacity duration-700 group-hover:opacity-20 ${item.accent}`} />
                  </Card>
                </div>
              )
            })}
          </div>

          {/* آخرین بخش سایت؛ این دکمه کاربر را به ابتدای صفحه برمی‌گرداند. */}
          <a className="reveal group mx-auto mt-10 flex w-fit flex-col items-center gap-2 text-[10px] text-[var(--muted)] transition-colors duration-500 hover:text-cyan-400 sm:mt-12" href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <span>{isPersian ? 'بازگشت به بالا' : 'Back to top'}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan-400/50">↑</span>
          </a>
        </div>
      </section>

      {/* فوتر در همین فایل است تا کامپوننت اضافه ساخته نشود. */}
      <footer className="border-t border-[var(--border)] py-7">
        <div className="mx-auto flex w-[calc(100%-1.5rem)] max-w-[1280px] flex-col items-center justify-between gap-2.5 text-center sm:w-[calc(100%-3rem)] sm:flex-row sm:gap-3 md:w-[calc(100%-6rem)]">
          <span className="font-mono text-sm text-cyan-400">&lt;AME/&gt;</span>
          <p className="text-xs text-[var(--muted)]">{isPersian ? 'با دقت طراحی و توسعه داده شده' : 'Designed and built with care'}</p>
          <small className="font-numbers text-[11px] text-[var(--muted)]">© {new Date().getFullYear()}</small>
        </div>
      </footer>
    </>
  )
}
