import { Icon } from './Icon'
import { cn } from '../utils/cn'

const statCard = 'absolute z-30 min-w-[120px] rounded-xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_76%,transparent)] px-4 py-2.5 text-center shadow-xl backdrop-blur-xl animate-[float_4s_ease-in-out_infinite]'

function Portrait({ data, isRtl }) {
  return (
    <div
      className={cn(
        'reveal relative order-1 h-[235px] w-[235px] justify-self-center lg:row-start-1 lg:h-[290px] lg:w-[290px]',
        isRtl
          ? 'lg:col-start-1'
          : 'lg:col-start-2 lg:translate-x-[clamp(24px,2.5vw,40px)]',
      )}
    >
      <div className="absolute -inset-[25px] animate-[pulseGlow_3s_ease-in-out_infinite] rounded-full bg-[conic-gradient(from_30deg,#22d3ee,#a855f7,#f472b6,#22d3ee)] opacity-20 blur-[34px]" />

      <div className="absolute -inset-[17px] z-20 animate-[spin_12s_linear_infinite] rounded-full border border-transparent border-t-cyan-400/50 border-r-purple-500/20">
        <i className="absolute top-4 right-7 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_#00d4ff]" />
      </div>
      <div className="absolute -inset-[31px] z-20 animate-[spin_18s_linear_infinite_reverse] rounded-full border border-transparent border-b-purple-500/40">
        <i className="absolute bottom-5 left-10 h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_14px_#a855f7]" />
      </div>

      <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400 via-purple-500 to-pink-400 p-1 shadow-[0_0_45px_rgba(168,85,247,.16)]">
        <img
          className="h-full w-full rounded-full object-cover object-[50%_21%] saturate-75 transition duration-700 hover:scale-[1.035] hover:saturate-100"
          src="/amir-mohammad-ehsani.jpg"
          alt={data.name}
        />
      </div>

      <div className={cn(statCard, 'bottom-0', isRtl ? '-left-5' : '-right-5')}>
        <strong className="block font-numbers text-xl font-bold text-cyan-400 lg:text-2xl">{data.stats[0][0]}</strong>
        <small className="text-[11px] text-[var(--muted)]">{data.stats[0][1]}</small>
      </div>
      <div className={cn(statCard, 'top-1 [animation-delay:-2s]', isRtl ? '-right-6' : '-left-6')}>
        <strong className="block font-numbers text-xl font-bold text-purple-500 lg:text-2xl">{data.stats[1][0]}</strong>
        <small className="text-[11px] text-[var(--muted)]">{data.stats[1][1]}</small>
      </div>
    </div>
  )
}

function HeroCopy({ data, isRtl, onContact }) {
  const buttonClass = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(34,211,238,.12)]'

  return (
    <div
      className={cn(
        'reveal order-2 flex w-full max-w-[700px] flex-col items-center text-center lg:row-start-1 lg:items-start lg:text-start',
        isRtl
          ? 'lg:col-start-2 lg:justify-self-end'
          : 'lg:col-start-1 lg:justify-self-start lg:pl-[clamp(24px,2.5vw,40px)]',
      )}
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1.5 text-xs font-semibold text-emerald-400 lg:mb-6">
        <i className="h-2 w-2 animate-[pulseGlow_2s_ease-in-out_infinite] rounded-full bg-emerald-400 shadow-[0_0_14px_#00f59b]" />
        {data.availability}
      </div>

      <h1 className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text font-display text-[42px] leading-[1.1] font-bold tracking-[-1px] text-transparent lg:text-[clamp(48px,5vw,70px)] xl:whitespace-nowrap">
        {data.name}
      </h1>

      <div className="mt-5 flex items-center justify-center gap-3 text-[15px] font-medium text-cyan-400 lg:mt-7 lg:justify-start lg:text-lg">
        <span className="h-px w-8 bg-cyan-400/50" />
        {data.role}
      </div>
      <div className="mt-3 text-[10px] font-medium text-[var(--muted)] lg:text-xs">{data.kicker}</div>

      <p className="mt-4 mb-5 max-w-[680px] text-[15px] leading-[1.9] text-[var(--muted)] lg:mt-6 lg:mb-7 lg:text-lg">
        {data.intro}
      </p>

      <div className="flex flex-wrap justify-center gap-3.5 lg:justify-start">
        <a className={cn(buttonClass, 'border-cyan-400/50 bg-cyan-400/8 text-cyan-400')} href="/AmirMohammad-Ehsani-Resume.pdf" download>
          <Icon name="download" />
          {isRtl ? 'دانلود رزومه' : 'Download CV'}
        </a>
        <button className={cn(buttonClass, 'border-[var(--border)] bg-transparent text-[var(--text)]')} onClick={onContact}>
          <Icon name="mail" />
          {isRtl ? 'ارتباط با من' : 'Get in touch'}
        </button>
      </div>
    </div>
  )
}

export function Hero({ data, isRtl, onContact }) {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-14 lg:h-svh lg:min-h-[640px] lg:max-h-[760px] lg:pt-20 lg:pb-[52px]">
      <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(100,116,139,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(100,116,139,.1)_1px,transparent_1px)] [background-size:50px_50px] [mask-image:linear-gradient(to_bottom,black_70%,transparent)]" />
      <div className="absolute top-[27%] -left-[35%] h-px w-[70%] animate-[beam_8s_linear_infinite] bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="absolute top-[69%] -right-[35%] h-px w-[70%] animate-[beam_8s_linear_infinite_reverse] bg-linear-to-r from-transparent via-purple-500/25 to-transparent [animation-delay:-4s]" />

      <div
        className={cn(
          'relative z-10 mx-auto grid w-[calc(100%-2rem)] items-center gap-11 md:w-[calc(100%-8rem)] lg:max-w-[1280px] lg:gap-[clamp(44px,5vw,72px)]',
          isRtl ? 'lg:grid-cols-[.8fr_1.2fr]' : 'lg:grid-cols-[1.2fr_.8fr]',
        )}
      >
        <Portrait data={data} isRtl={isRtl} />
        <HeroCopy data={data} isRtl={isRtl} onContact={onContact} />
      </div>
    </section>
  )
}
