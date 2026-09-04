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
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <style>
      @page { size: 595.92pt 842.88pt; margin: 0; }
      @font-face { font-family: 'TemplateIranSans'; src: url('${regularFont}') format('truetype'); font-weight: 400; }
      @font-face { font-family: 'TemplateIranSans'; src: url('${boldFont}') format('truetype'); font-weight: 700; }
      * { box-sizing: border-box; }
      html, body { margin: 0; padding: 0; background: #fff; }
      body { color: #151515; font-family: 'TemplateIranSans', Arial, sans-serif; }
      .page { width: 595.92pt; height: 842.88pt; position: relative; overflow: hidden; background: #fff; }
      .sidebar { position: absolute; top: 22pt; right: 21pt; bottom: 18pt; width: 177pt; border-radius: 9pt; background: #1b2c42; color: #fff; padding: 17pt 10pt 14pt; text-align: center; }
      .avatar { width: 80pt; height: 80pt; object-fit: cover; object-position: 50% 18%; border: 1.65pt solid #fff; border-radius: 50%; }
      .name { margin: 10pt 0 2pt; font-size: 14.2pt; font-weight: 700; line-height: 1.25; white-space: nowrap; }
      .role { margin: 0; color: #b7c1ce; font-size: 8.4pt; line-height: 1.35; }
      .dash { margin: 7pt 0 13pt; border-top: 1pt dashed #bcc5cf; opacity: .88; }
      .contact-title, .sidebar-title { margin: 14pt 0 8pt; border: .8pt solid #fff; border-radius: 7pt; padding: 3.5pt 4pt 4pt; font-size: 10.3pt; font-weight: 700; line-height: 1; }
      .contact-line { margin: 6pt 0; color: #eef3f8; font-family: Arial, sans-serif; font-size: 7.3pt; white-space: nowrap; }
      .contact-line.location { font-family: 'TemplateIranSans', Arial, sans-serif; font-size: 7.55pt; }
      .skills { display: flex; flex-wrap: wrap; justify-content: center; gap: 3pt 4pt; }
      .skill { border-radius: 1.5pt; padding: 2.4pt 4.1pt 2.2pt; background: #35445b; color: #fff; font-family: Arial, sans-serif; font-size: 6.6pt; line-height: 1; white-space: nowrap; }
      .language { margin-top: 8pt; font-family: Arial, sans-serif; font-size: 7.75pt; line-height: 1.6; }
      .social { display: grid; gap: 4pt; margin-top: 8pt; font-family: Arial, sans-serif; }
      .social a, .github a { color: inherit; text-decoration: none; }
      .social a { display: block; border: .55pt solid #53637a; border-radius: 4pt; padding: 3.5pt 4pt; color: #e8eef6; font-size: 7.1pt; line-height: 1; }
      .main { position: absolute; top: 33pt; left: 28pt; width: 333pt; text-align: left; }
      .section { margin: 0 0 11pt; }
      .section-title { width: 282pt; margin: 0 auto 7pt; padding: 4pt 8pt 5pt; border-radius: 8pt; background: #1b2c42; color: #fff; text-align: center; font-size: 10.5pt; font-weight: 700; line-height: 1; }
      .summary { margin: 0 1pt; font-family: Arial, sans-serif; font-size: 8.2pt; font-weight: 700; line-height: 1.58; text-align: justify; }
      .brand-cod24 { color: #c8343b; }
      .experience { padding: 0 5pt; }
      .experience-head { display: flex; align-items: baseline; justify-content: space-between; gap: 8pt; }
      .experience h3 { margin: 0; font-family: Arial, sans-serif; font-size: 9.1pt; font-weight: 700; }
      .date { color: #5d6673; font-family: Arial, sans-serif; font-size: 7.1pt; white-space: nowrap; }
      .company { margin-top: 1pt; color: #273b55; font-family: Arial, sans-serif; font-size: 7.65pt; font-weight: 700; }
      ul { margin: 4pt 0 0; padding: 0 0 0 12pt; }
      li { margin: 0 0 2.2pt; font-family: Arial, sans-serif; font-size: 7.35pt; line-height: 1.45; }
      .education { padding: 0 5pt; }
      .education h3 { margin: 0; font-family: Arial, sans-serif; font-size: 9.1pt; font-weight: 700; }
      .education p { margin: 2.2pt 0 0; font-family: Arial, sans-serif; font-size: 7.8pt; line-height: 1.45; }
      .award { margin-top: 5pt !important; font-weight: 700; }
      .projects { display: grid; gap: 7pt; padding: 0 5pt; }
      .project h3 { margin: 0; font-family: Arial, sans-serif; font-size: 8.6pt; font-weight: 700; }
      .project p { margin: 2pt 0 0; font-family: Arial, sans-serif; font-size: 7.2pt; line-height: 1.45; }
      .project .stack { margin-top: 1.8pt; color: #44536a; font-family: Arial, sans-serif; font-size: 6.65pt; }
      .github { margin: 7pt 5pt 0; color: #273b55; font-family: Arial, sans-serif; font-size: 7.2pt; }
    </style>
  </head>
  <body>
    <article class="page">
      <aside class="sidebar">
        <img class="avatar" src="${photo}" alt="AmirMohammad Ehsani">
        <h1 class="name">AmirMohammad Ehsani</h1>
        <p class="role">Junior Front-End Developer</p>
        <div class="dash"></div>

        <div class="contact-title">CONTACT</div>
        <div class="contact-line">amir85.ehsani12@gmail.com</div>
        <div class="contact-line">+98 990 627 7528</div>
        <div class="contact-line location">Tehran, Iran</div>

        <div class="sidebar-title">SKILLS</div>
        <div class="skills">
          <span class="skill">React</span><span class="skill">JavaScript</span><span class="skill">TypeScript</span>
          <span class="skill">Tailwind CSS</span><span class="skill">HTML5</span><span class="skill">CSS3</span>
          <span class="skill">Axios</span><span class="skill">React Router</span><span class="skill">Vite</span>
          <span class="skill">Git</span><span class="skill">GitHub</span><span class="skill">Prettier</span>
        </div>

        <div class="sidebar-title">LANGUAGE</div>
        <div class="language"><strong>English:</strong> Upper-intermediate</div>

        <div class="sidebar-title">SOCIAL</div>
        <div class="social">
          <a href="https://github.com/Luppin-1">GitHub Profile</a>
          <a href="https://www.linkedin.com/in/amirmohammad-ehsani-2958023b3">LinkedIn Profile</a>
          <a href="https://t.me/AmirMohammad_Ehsani">Telegram</a>
          <a href="https://luppin-1.github.io/Amirmohammad-Portfolio/">Portfolio Website</a>
        </div>
      </aside>

      <main class="main">
        <section class="section">
          <h2 class="section-title">PROFESSIONAL SUMMARY</h2>
          <p class="summary">Junior front-end developer and Computer Engineering student with hands-on experience redesigning the complete <span class="brand-cod24">Cod24</span> website interface. I build responsive, component-based interfaces with React, JavaScript, TypeScript and Tailwind CSS, and I am ready to contribute in a Junior Front-End Developer role.</p>
        </section>

        <section class="section">
          <h2 class="section-title">EXPERIENCE</h2>
          <div class="experience">
            <div class="experience-head"><h3>Front-End Developer Intern</h3><span class="date">Jul 2026 - Present</span></div>
            <div class="company">Cod24</div>
            <ul>
              <li>Redesigned and developed the complete website interface with React and Tailwind CSS.</li>
              <li>Built reusable, component-based UI elements with JavaScript and TypeScript.</li>
              <li>Implemented React Router, integrated back-end services with Axios, and collaborated with a back-end developer and project manager.</li>
            </ul>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">EDUCATION</h2>
          <div class="education">
            <h3>B.Sc. in Computer Engineering</h3>
            <p>Semnan University - 2024 to Expected Summer 2028</p>
            <p class="award">Achievement: 1st place in an internal team-based programming competition at Semnan University.</p>
          </div>
        </section>

        <section class="section">
          <h2 class="section-title">SELECTED PROJECTS</h2>
          <div class="projects">
            <article class="project"><h3>Login Page (React.js)</h3><p>Responsive login interface with API integration, error feedback and loading-state management.</p><div class="stack">React - Axios - Tailwind CSS</div></article>
            <article class="project"><h3>Fashion Store (React)</h3><p>API-powered product catalog with product detail pages and client-side routing.</p><div class="stack">React - React Router</div></article>
            <article class="project"><h3>Bilingual Portfolio</h3><p>Persian-English portfolio with RTL/LTR support, light and dark themes, and responsive design.</p><div class="stack">React - Vite - Tailwind CSS</div></article>
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
  const outputFile = path.join(outputDir, 'AmirMohammad-Ehsani-Resume-EN.pdf')
  await page.pdf({ path: outputFile, width: '8.277in', height: '11.707in', printBackground: true, preferCSSPageSize: true })
  await page.close()
  fs.copyFileSync(outputFile, path.join(publicDir, 'AmirMohammad-Ehsani-Resume-EN.pdf'))
  console.log(outputFile)
} finally {
  await browser.close()
}
