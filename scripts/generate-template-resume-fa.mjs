import fs from 'node:fs'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const { chromium } = require('C:/Users/amiran/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright')

const scriptsDir = path.dirname(fileURLToPath(import.meta.url))
const projectDir = path.resolve(scriptsDir, '..')
const outputDir = path.join(projectDir, 'output', 'pdf')
const publicDir = path.join(projectDir, 'public')
const fontsDir = path.join(projectDir, 'tmp', 'pdfs', 'template-fonts')

const dataUrl = (file, mime) => `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`
const regularFont = dataUrl(path.join(fontsDir, 'IRANSans-Regular.ttf'), 'font/ttf')
const boldFont = dataUrl(path.join(fontsDir, 'IRANSansFaNum-Bold.ttf'), 'font/ttf')
const photo = dataUrl(path.join(publicDir, 'amir-mohammad-ehsani.jpg'), 'image/jpeg')

fs.mkdirSync(outputDir, { recursive: true })

const html = `<!doctype html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="utf-8">
    <style>
      @page { size: 595.92pt 842.88pt; margin: 0; }
      @font-face { font-family: 'TemplateIranSans'; src: url('${regularFont}') format('truetype'); font-weight: 400; }
      @font-face { font-family: 'TemplateIranSans'; src: url('${boldFont}') format('truetype'); font-weight: 700; }
      * { box-sizing: border-box; }
      html, body { margin: 0; padding: 0; background: #fff; }
      body { color: #151515; font-family: 'TemplateIranSans', Tahoma, sans-serif; }
      .page { width: 595.92pt; height: 842.88pt; position: relative; overflow: hidden; background: #fff; }
      .sidebar { position: absolute; top: 22pt; right: 21pt; bottom: 18pt; width: 177pt; border-radius: 9pt; background: #1b2c42; color: #fff; padding: 17pt 10pt 14pt; text-align: center; }
      .avatar { width: 80pt; height: 80pt; object-fit: cover; object-position: 50% 18%; border: 1.65pt solid #fff; border-radius: 50%; }
      .name { margin: 10pt 0 2pt; font-size: 19pt; font-weight: 700; line-height: 1.25; white-space: nowrap; }
      .role { margin: 0; color: #b7c1ce; font-size: 9.6pt; line-height: 1.35; }
      .dash { margin: 7pt 0 13pt; border-top: 1pt dashed #bcc5cf; opacity: .88; }
      .details { font-size: 8.2pt; line-height: 1.65; color: #fff; }
      .contact-title, .sidebar-title { margin: 14pt 0 8pt; border: .8pt solid #fff; border-radius: 7pt; padding: 3.5pt 4pt 4pt; font-size: 11.5pt; font-weight: 700; line-height: 1; }
      .contact-line { margin: 6pt 0; color: #eef3f8; font-family: 'TemplateIranSans', Arial, sans-serif; font-size: 7.55pt; direction: ltr; unicode-bidi: plaintext; white-space: nowrap; }
      .contact-line.latin { font-family: Arial, sans-serif; font-variant-numeric: lining-nums; }
      .contact-line.location { direction: rtl; font-family: 'TemplateIranSans', Tahoma, sans-serif; font-size: 8pt; }
      .skills { display: flex; flex-wrap: wrap; justify-content: center; gap: 3pt 4pt; }
      .skill { border-radius: 1.5pt; padding: 2.4pt 4.1pt 2.2pt; background: #35445b; color: #fff; font-family: Arial, sans-serif; font-size: 6.75pt; line-height: 1; white-space: nowrap; }
      .language { margin-top: 8pt; font-size: 8.4pt; line-height: 1.6; }
      .social { display: grid; gap: 4pt; margin-top: 8pt; font-family: 'TemplateIranSans', Tahoma, sans-serif; direction: rtl; }
      .social a, .github a { color: inherit; text-decoration: none; }
      .social a { display: block; border: .55pt solid #53637a; border-radius: 4pt; padding: 3.5pt 4pt; color: #e8eef6; font-size: 7.7pt; line-height: 1; }
      .main { position: absolute; top: 33pt; left: 28pt; width: 333pt; text-align: right; }
      .section { margin: 0 0 11pt; }
      .section-title { width: 282pt; margin: 0 auto 7pt; padding: 4pt 8pt 5pt; border-radius: 8pt; background: #1b2c42; color: #fff; text-align: center; font-size: 11.5pt; font-weight: 700; line-height: 1; }
      .summary { margin: 0 1pt; font-size: 8.5pt; font-weight: 700; line-height: 1.58; text-align: justify; }
      .brand-cod24 { color: #c8343b; }
      .tech-list { direction: ltr; unicode-bidi: isolate; font-family: Arial, sans-serif; }
      .experience { padding: 0 5pt; }
      .experience-head { display: flex; align-items: baseline; justify-content: space-between; gap: 8pt; }
      .experience h3 { margin: 0; font-size: 9.4pt; font-weight: 700; }
      .date { color: #5d6673; font-size: 7.1pt; white-space: nowrap; }
      .company { margin-top: 1pt; color: #273b55; font-size: 7.65pt; font-weight: 700; }
      ul { margin: 4pt 0 0; padding: 0 12pt 0 0; }
      li { margin: 0 0 2.2pt; font-size: 7.45pt; line-height: 1.45; }
      .education { padding: 0 5pt; }
      .education h3 { margin: 0; font-size: 9.4pt; font-weight: 700; }
      .education p { margin: 2.2pt 0 0; font-size: 8pt; line-height: 1.45; }
      .award { margin-top: 5pt !important; font-weight: 700; }
      .projects { display: grid; gap: 7pt; padding: 0 5pt; }
      .project h3 { margin: 0; font-family: Arial, 'TemplateIranSans', sans-serif; font-size: 8.8pt; font-weight: 700; direction: ltr; text-align: right; }
      .project p { margin: 2pt 0 0; font-size: 7.35pt; line-height: 1.45; }
      .project .stack { margin-top: 1.8pt; color: #44536a; font-family: Arial, sans-serif; font-size: 6.8pt; direction: ltr; text-align: right; }
      .github { margin: 7pt 5pt 0; color: #273b55; font-family: Arial, sans-serif; font-size: 7.2pt; direction: ltr; text-align: right; }
    </style>
  </head>
  <body>
    <article class="page">
      <aside class="sidebar">
        <img class="avatar" src="${photo}" alt="امیرمحمد احسانی">
        <h1 class="name">امیرمحمد احسانی</h1>
        <p class="role">توسعه‌دهنده جونیور فرانت‌اند</p>
        <div class="dash"></div>

        <div class="contact-title">اطلاعات تماس</div>
        <div class="contact-line latin" lang="en">amir85.ehsani12@gmail.com</div>
        <div class="contact-line latin" lang="en">+98 990 627 7528</div>
        <div class="contact-line location">تهران، ایران</div>

        <div class="sidebar-title">مهارت‌ها</div>
        <div class="skills">
          <span class="skill">React</span><span class="skill">JavaScript</span><span class="skill">TypeScript</span>
          <span class="skill">Tailwind CSS</span><span class="skill">HTML5</span><span class="skill">CSS3</span>
          <span class="skill">Axios</span><span class="skill">React Router</span><span class="skill">Vite</span>
          <span class="skill">Git</span><span class="skill">GitHub</span><span class="skill">Prettier</span>
        </div>

        <div class="sidebar-title">زبان</div>
        <div class="language"><strong>انگلیسی:</strong> متوسط رو به بالا</div>

        <div class="sidebar-title">لینک‌ها</div>
        <div class="social">
          <a href="https://github.com/Luppin-1">پروفایل گیت‌هاب</a>
          <a href="https://www.linkedin.com/in/amirmohammad-ehsani-2958023b3">پروفایل لینکدین</a>
          <a href="https://t.me/AmirMohammad_Ehsani">تلگرام</a>
          <a href="https://luppin-1.github.io/Amirmohammad-Portfolio/">وب‌سایت شخصی</a>
        </div>
      </aside>

      <main class="main">
        <section class="section">
          <h2 class="section-title">خلاصه رزومه</h2>
          <p class="summary">توسعه‌دهنده جونیور فرانت‌اند و دانشجوی مهندسی کامپیوتر دانشگاه سمنان با تجربه بازطراحی کامل رابط کاربری وب‌سایت <span class="brand-cod24">Cod24</span> با <span class="tech-list">React, JavaScript, TypeScript &amp; Tailwind CSS</span> رابط‌های رسپانسیو و کامپوننت‌محور می‌سازم و برای همکاری در موقعیت‌های Junior Front-end آماده‌ام.</p>
        </section>

        <section class="section">
          <h2 class="section-title">سوابق کاری</h2>
          <div class="experience">
            <div class="experience-head"><h3>کارآموز توسعه فرانت‌اند</h3><span class="date">تیر ۱۴۰۵ - اکنون</span></div>
            <div class="company">Cod24</div>
            <ul>
              <li>بازطراحی و توسعه کامل رابط کاربری وب‌سایت با React و Tailwind CSS.</li>
              <li>ساخت کامپوننت‌های قابل استفاده مجدد با JavaScript و TypeScript.</li>
              <li>پیاده‌سازی React Router، اتصال به API با Axios و همکاری با توسعه‌دهنده بک‌اند و مدیر پروژه.</li>
            </ul>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">سوابق تحصیلی</h2>
          <div class="education">
            <h3>کارشناسی مهندسی کامپیوتر</h3>
            <p>دانشگاه سمنان - شروع تحصیل: ۱۴۰۳</p>
            <p class="award">افتخار: رتبه اول مسابقه برنامه‌نویسی تیمی درون‌دانشگاهی دانشگاه سمنان</p>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">پروژه‌ها</h2>
          <div class="projects">
            <article class="project"><h3>Login Page (React.js)</h3><p>رابط ورود رسپانسیو با اتصال به API، نمایش خطا و مدیریت وضعیت بارگذاری.</p><div class="stack">React · Axios · Tailwind CSS</div></article>
            <article class="project"><h3>Fashion Store (React)</h3><p>فهرست محصولات متصل به API همراه با صفحه جزئیات محصول و مسیریابی سمت کاربر.</p><div class="stack">React · React Router</div></article>
            <article class="project"><h3>Bilingual Portfolio</h3><p>پورتفولیوی فارسی و انگلیسی با پشتیبانی RTL/LTR، تم روشن و تیره و طراحی رسپانسیو.</p><div class="stack">React · Vite · Tailwind CSS</div></article>
          </div>
          <div class="github"><a href="https://github.com/Luppin-1">github.com/Luppin-1</a></div>
        </section>
      </main>
    </article>
  </body>
</html>`

const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' })
try {
  const page = await browser.newPage({ viewport: { width: 800, height: 1132 }, deviceScaleFactor: 1 })
  await page.setContent(html, { waitUntil: 'load' })
  const outputFile = path.join(outputDir, 'AmirMohammad-Ehsani-Resume-FA.pdf')
  await page.pdf({ path: outputFile, width: '8.277in', height: '11.707in', printBackground: true, preferCSSPageSize: true })
  await page.close()
  fs.copyFileSync(outputFile, path.join(publicDir, 'AmirMohammad-Ehsani-Resume-FA.pdf'))
  fs.copyFileSync(outputFile, path.join(publicDir, 'AmirMohammad-Ehsani-Resume.pdf'))
  console.log(outputFile)
} finally {
  await browser.close()
}
