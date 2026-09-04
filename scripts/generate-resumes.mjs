import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const { chromium } = require('C:/Users/amiran/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright')

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectDir = path.resolve(scriptDir, '..')
const outputDir = path.join(projectDir, 'output', 'pdf')
const publicDir = path.join(projectDir, 'public')
const photoPath = path.join(publicDir, 'amir-mohammad-ehsani.jpg')
const photoData = `data:image/jpeg;base64,${fs.readFileSync(photoPath).toString('base64')}`

fs.mkdirSync(outputDir, { recursive: true })

const links = {
  email: 'mailto:amir85.ehsani12@gmail.com',
  phone: 'tel:+989906277528',
  github: 'https://github.com/Luppin-1',
  linkedin: 'https://www.linkedin.com/in/amirmohammad-ehsani-2958023b3',
  portfolio: 'https://luppin-1.github.io/Amirmohammad-Portfolio/',
  login: 'https://github.com/Luppin-1/Login-project-react',
  fashion: 'https://github.com/Luppin-1/fashion-store-react',
}

const sharedCss = `
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: #e8eef5; }
  body { font-family: Arial, Tahoma, sans-serif; color: #172033; }
  a { color: inherit; text-decoration: none; }
  .page { width: 210mm; height: 297mm; margin: 0 auto; background: #fff; overflow: hidden; }
  .hero { height: 59mm; padding: 11mm 15mm 8mm; color: #fff; background: linear-gradient(125deg, #0b1728 0%, #122844 70%, #0b4050 100%); position: relative; }
  .hero::after { content: ''; position: absolute; inset: auto 0 0; height: 2.2mm; background: linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6); }
  .identity { display: flex; align-items: center; gap: 7mm; }
  .photo { width: 31mm; height: 31mm; border-radius: 50%; object-fit: cover; object-position: center 18%; border: 1.2mm solid rgba(255,255,255,.9); box-shadow: 0 0 0 1.2mm rgba(34,211,238,.22); }
  h1 { margin: 0 0 1.6mm; font-size: 23pt; line-height: 1.1; letter-spacing: -.35px; }
  .role { margin: 0; color: #67e8f9; font-weight: 700; font-size: 11pt; }
  .contact { display: flex; flex-wrap: wrap; gap: 2.1mm 5mm; margin-top: 4mm; color: #dbeafe; font-size: 7.6pt; }
  .contact a, .contact span { white-space: nowrap; }
  .contact a:hover { color: #67e8f9; }
  main { padding: 7mm 15mm 8mm; }
  .section { margin-top: 4.7mm; }
  .section:first-child { margin-top: 0; }
  .section-title { display: flex; align-items: center; gap: 3mm; margin: 0 0 2.8mm; color: #0f5d78; font-size: 10.5pt; font-weight: 800; text-transform: uppercase; letter-spacing: .65px; }
  .section-title::after { content: ''; height: .45mm; flex: 1; background: linear-gradient(90deg, #22d3ee, #dbe7f0); }
  .summary { margin: 0; font-size: 8.5pt; line-height: 1.55; color: #354156; }
  .row-head { display: flex; align-items: baseline; justify-content: space-between; gap: 4mm; }
  .item-title { margin: 0; font-size: 9.6pt; font-weight: 800; color: #111827; }
  .item-meta { margin-top: .5mm; color: #526076; font-size: 7.8pt; }
  .date { color: #0f6e87; font-size: 7.7pt; font-weight: 700; white-space: nowrap; }
  ul { margin: 1.8mm 0 0; padding-inline-start: 4.6mm; }
  li { margin: 0 0 1mm; color: #354156; font-size: 8pt; line-height: 1.42; }
  li::marker { color: #0891b2; }
  .projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; }
  .project { min-height: 38mm; padding: 3.2mm; border: .35mm solid #d7e4ed; border-top: 1.1mm solid #1a9cbb; border-radius: 2.6mm; background: #f8fbfd; }
  .project h3 { margin: 0 0 1.4mm; font-size: 8.8pt; color: #102a43; }
  .project p { margin: 0 0 2mm; font-size: 7.4pt; line-height: 1.42; color: #45546b; }
  .tags { display: flex; flex-wrap: wrap; gap: 1mm; margin-top: auto; }
  .tag { padding: .55mm 1.4mm; border-radius: 99px; background: #e5f6fa; color: #08718b; font-size: 6.5pt; font-weight: 700; }
  .two-col { display: grid; grid-template-columns: 1.25fr .75fr; gap: 7mm; }
  .skills { display: grid; grid-template-columns: 1fr 1fr; gap: 2mm 4mm; }
  .skill-line { font-size: 7.7pt; line-height: 1.45; color: #3d4b60; }
  .skill-line strong { color: #172033; }
  .compact { margin-top: 1.3mm; }
  .compact li { font-size: 7.5pt; margin-bottom: .7mm; }
  .footer { margin-top: 4mm; padding-top: 2.3mm; border-top: .3mm solid #dbe7f0; text-align: center; color: #66758a; font-size: 6.8pt; }
  @media print { html, body { background: #fff; } .page { margin: 0; } }
`

const english = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><style>${sharedCss}</style></head><body>
<article class="page">
  <header class="hero">
    <div class="identity">
      <img class="photo" src="${photoData}" alt="AmirMohammad Ehsani">
      <div><h1>AmirMohammad Ehsani</h1><p class="role">Junior Front-End Developer</p></div>
    </div>
    <div class="contact">
      <a href="${links.email}">amir85.ehsani12@gmail.com</a><a href="${links.phone}">+98 990 627 7528</a><span>Semnan, Iran</span>
      <a href="${links.linkedin}">LinkedIn</a><a href="${links.github}">github.com/Luppin-1</a><a href="${links.portfolio}">Live Portfolio</a>
    </div>
  </header>
  <main>
    <section class="section"><h2 class="section-title">Professional Summary</h2>
      <p class="summary">Junior front-end developer and Computer Engineering student with hands-on experience redesigning and implementing a complete website at Cod24. Builds responsive, component-based React interfaces with JavaScript, TypeScript and Tailwind CSS, integrates APIs with Axios, and collaborates effectively with back-end developers and project managers.</p>
    </section>

    <section class="section"><h2 class="section-title">Experience</h2>
      <div class="row-head"><div><h3 class="item-title">Front-End Developer Intern - Cod24</h3><div class="item-meta">Semnan, Iran</div></div><div class="date">Jul 2026 - Present <br>(Expected Oct 2026)</div></div>
      <ul>
        <li>Redesigned and developed the complete Cod24 website interface with React, creating a more modern, consistent and responsive user experience.</li>
        <li>Built reusable, component-based UI elements with JavaScript, TypeScript and Tailwind CSS.</li>
        <li>Implemented client-side navigation with React Router and connected the front end to back-end services using Axios.</li>
        <li>Collaborated with a back-end developer and project manager while maintaining code quality with ESLint and Prettier.</li>
      </ul>
    </section>

    <section class="section"><h2 class="section-title">Selected Projects</h2>
      <div class="projects">
        <a class="project" href="${links.login}"><h3>Login Page</h3><p>Responsive React login experience with API integration, clear error feedback and loading-state management.</p><div class="tags"><span class="tag">React</span><span class="tag">Axios</span><span class="tag">Tailwind</span></div></a>
        <a class="project" href="${links.fashion}"><h3>Fashion Store</h3><p>Product catalog backed by an API, with dedicated product detail views and client-side routing.</p><div class="tags"><span class="tag">React</span><span class="tag">REST API</span><span class="tag">React Router</span></div></a>
        <a class="project" href="${links.portfolio}"><h3>Bilingual Portfolio</h3><p>Responsive Persian-English portfolio with RTL/LTR support, theme switching, interactive motion and GitHub Pages deployment.</p><div class="tags"><span class="tag">React</span><span class="tag">Vite</span><span class="tag">Tailwind</span></div></a>
      </div>
    </section>

    <section class="section two-col">
      <div><h2 class="section-title">Education</h2><div class="row-head"><div><h3 class="item-title">B.Sc. in Computer Engineering</h3><div class="item-meta">Semnan University</div></div><div class="date">Expected Summer 2028</div></div>
        <ul class="compact"><li>First place in an internal team-based ICPC programming competition at Semnan University.</li></ul>
      </div>
      <div><h2 class="section-title">Languages</h2><div class="skill-line"><strong>Persian:</strong> Native</div><div class="skill-line"><strong>English:</strong> Upper-intermediate</div></div>
    </section>

    <section class="section"><h2 class="section-title">Technical Skills</h2>
      <div class="skills">
        <div class="skill-line"><strong>Front End:</strong> React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS</div>
        <div class="skill-line"><strong>Libraries & Tools:</strong> Axios, React Router, Vite, Git, GitHub</div>
        <div class="skill-line"><strong>Code Quality:</strong> ESLint, Prettier</div>
        <div class="skill-line"><strong>Practices:</strong> Responsive Design, Component-based Design, API Integration</div>
      </div>
    </section>
    <div class="footer">Clickable project, GitHub, LinkedIn and portfolio links are included in this PDF.</div>
  </main>
</article></body></html>`

const faCss = `
  body { font-family: Tahoma, Arial, sans-serif; }
  .hero, main { direction: rtl; }
  .identity { flex-direction: row; }
  h1 { font-size: 21pt; }
  .role { font-size: 10.5pt; }
  .contact { font-size: 7.5pt; }
  .section-title { font-size: 10pt; letter-spacing: 0; }
  .section-title::after { background: linear-gradient(270deg, #22d3ee, #dbe7f0); }
  .summary { font-size: 8.2pt; line-height: 1.72; }
  .item-title { font-size: 9.2pt; }
  .item-meta, .date { font-size: 7.4pt; }
  ul { padding-inline-start: 0; padding-inline-end: 4.8mm; }
  li { font-size: 7.7pt; line-height: 1.55; }
  .project h3 { font-size: 8.5pt; }
  .project p { font-size: 7.1pt; line-height: 1.55; }
  .skill-line { font-size: 7.4pt; line-height: 1.6; }
  .footer { font-size: 6.5pt; }
`

const persian = `<!doctype html>
<html lang="fa" dir="rtl"><head><meta charset="utf-8"><style>${sharedCss}${faCss}</style></head><body>
<article class="page">
  <header class="hero">
    <div class="identity">
      <img class="photo" src="${photoData}" alt="امیرمحمد احسانی">
      <div><h1>امیرمحمد احسانی</h1><p class="role">توسعه‌دهنده جونیور فرانت‌اند</p></div>
    </div>
    <div class="contact">
      <a href="${links.email}">amir85.ehsani12@gmail.com</a><a href="${links.phone}">۰۹۹۰۶۲۷۷۵۲۸</a><span>سمنان، ایران</span>
      <a href="${links.linkedin}">لینکدین</a><a href="${links.github}">github.com/Luppin-1</a><a href="${links.portfolio}">پورتفولیوی آنلاین</a>
    </div>
  </header>
  <main>
    <section class="section"><h2 class="section-title">خلاصه حرفه‌ای</h2>
      <p class="summary">توسعه‌دهنده جونیور فرانت‌اند و دانشجوی مهندسی کامپیوتر با تجربه عملی بازطراحی و پیاده‌سازی کامل رابط کاربری وب‌سایت Cod24. مسلط به ساخت رابط‌های واکنش‌گرا و کامپوننت‌محور با React، JavaScript، TypeScript و Tailwind CSS، ارتباط با API از طریق Axios و همکاری مؤثر با توسعه‌دهنده بک‌اند و مدیر پروژه.</p>
    </section>

    <section class="section"><h2 class="section-title">تجربه کاری</h2>
      <div class="row-head"><div><h3 class="item-title">کارآموز توسعه فرانت‌اند - Cod24</h3><div class="item-meta">سمنان، ایران</div></div><div class="date">تیر ۱۴۰۵ - اکنون<br>(پایان مورد انتظار: مهر ۱۴۰۵)</div></div>
      <ul>
        <li>بازطراحی و توسعه کامل رابط کاربری وب‌سایت Cod24 با React با هدف ایجاد تجربه‌ای مدرن‌تر، یکپارچه و واکنش‌گرا.</li>
        <li>ساخت اجزای رابط کاربری قابل استفاده مجدد و کامپوننت‌محور با JavaScript، TypeScript و Tailwind CSS.</li>
        <li>پیاده‌سازی مسیریابی سمت کاربر با React Router و اتصال فرانت‌اند به سرویس‌های بک‌اند با Axios.</li>
        <li>همکاری با توسعه‌دهنده بک‌اند و مدیر پروژه و حفظ کیفیت و یکدستی کد با ESLint و Prettier.</li>
      </ul>
    </section>

    <section class="section"><h2 class="section-title">پروژه‌های منتخب</h2>
      <div class="projects">
        <a class="project" href="${links.login}"><h3>صفحه ورود</h3><p>رابط ورود واکنش‌گرا با React، ارتباط با API، نمایش شفاف خطاها و مدیریت وضعیت بارگذاری.</p><div class="tags"><span class="tag">React</span><span class="tag">Axios</span><span class="tag">Tailwind</span></div></a>
        <a class="project" href="${links.fashion}"><h3>فروشگاه پوشاک</h3><p>فهرست محصولات متصل به API همراه با صفحه جزئیات هر محصول و مسیریابی سمت کاربر.</p><div class="tags"><span class="tag">React</span><span class="tag">REST API</span><span class="tag">React Router</span></div></a>
        <a class="project" href="${links.portfolio}"><h3>پورتفولیوی دوزبانه</h3><p>پورتفولیوی فارسی و انگلیسی با RTL/LTR، تم روشن و تیره، انیمیشن‌های تعاملی و انتشار روی GitHub Pages.</p><div class="tags"><span class="tag">React</span><span class="tag">Vite</span><span class="tag">Tailwind</span></div></a>
      </div>
    </section>

    <section class="section two-col">
      <div><h2 class="section-title">تحصیلات</h2><div class="row-head"><div><h3 class="item-title">کارشناسی مهندسی کامپیوتر</h3><div class="item-meta">دانشگاه سمنان</div></div><div class="date">فارغ‌التحصیلی مورد انتظار: تابستان ۱۴۰۷</div></div>
        <ul class="compact"><li>کسب رتبه اول در مسابقه برنامه‌نویسی تیمی درون‌دانشگاهی ICPC دانشگاه سمنان.</li></ul>
      </div>
      <div><h2 class="section-title">زبان‌ها</h2><div class="skill-line"><strong>فارسی:</strong> زبان مادری</div><div class="skill-line"><strong>انگلیسی:</strong> متوسط رو به بالا</div></div>
    </section>

    <section class="section"><h2 class="section-title">مهارت‌های فنی</h2>
      <div class="skills">
        <div class="skill-line"><strong>فرانت‌اند:</strong> React، JavaScript، TypeScript، HTML5، CSS3، Tailwind CSS</div>
        <div class="skill-line"><strong>کتابخانه و ابزار:</strong> Axios، React Router، Vite، Git، GitHub</div>
        <div class="skill-line"><strong>کیفیت کد:</strong> ESLint، Prettier</div>
        <div class="skill-line"><strong>روش‌های توسعه:</strong> طراحی واکنش‌گرا، طراحی کامپوننت‌محور، اتصال به API</div>
      </div>
    </section>
    <div class="footer">لینک پروژه‌ها، گیت‌هاب، لینکدین و پورتفولیو در فایل PDF قابل کلیک هستند.</div>
  </main>
</article></body></html>`

async function renderPdf(browser, html, outputPath) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 1800 }, deviceScaleFactor: 1 })
  await page.setContent(html, { waitUntil: 'load' })
  await page.emulateMedia({ media: 'print' })
  await page.pdf({ path: outputPath, format: 'A4', printBackground: true, preferCSSPageSize: true })
  await page.close()
}

const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' })
try {
  const englishPath = path.join(outputDir, 'AmirMohammad-Ehsani-Resume-EN.pdf')
  const persianPath = path.join(outputDir, 'AmirMohammad-Ehsani-Resume-FA.pdf')
  await renderPdf(browser, english, englishPath)
  await renderPdf(browser, persian, persianPath)
  fs.copyFileSync(englishPath, path.join(publicDir, 'AmirMohammad-Ehsani-Resume-EN.pdf'))
  fs.copyFileSync(persianPath, path.join(publicDir, 'AmirMohammad-Ehsani-Resume-FA.pdf'))
  fs.copyFileSync(englishPath, path.join(publicDir, 'AmirMohammad-Ehsani-Resume.pdf'))
  console.log(englishPath)
  console.log(persianPath)
} finally {
  await browser.close()
}
