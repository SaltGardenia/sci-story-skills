import { useEffect, useMemo, useRef, useState } from 'react'
import { content } from './content.js'

const THEME_KEY = 'sss-theme'
const LANG_KEY = 'sss-lang'

function readStored(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback
  } catch {
    return fallback
  }
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.4 14.2A8.5 8.5 0 0 1 9.8 3.6a8.5 8.5 0 1 0 10.6 10.6Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}

function CodeBlock({ code, copyLabel, copiedLabel }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      // Clipboard unavailable (e.g. http) — still show a copy affordance.
      const ta = document.createElement('textarea')
      ta.value = code
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 1600)
  }

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <div className="codeblock">
      <pre><code>{code}</code></pre>
      <button
        type="button"
        className={`copy-btn${copied ? ' is-copied' : ''}`}
        onClick={copy}
      >
        {copied ? `✓ ${copiedLabel}` : copyLabel}
      </button>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => readStored(THEME_KEY, 'light'))
  const [lang, setLang] = useState(() => readStored(LANG_KEY, 'zh'))
  const t = content[lang]

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme
    try { localStorage.setItem(THEME_KEY, theme) } catch { /* ignore */ }
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    try { localStorage.setItem(LANG_KEY, lang) } catch { /* ignore */ }
  }, [lang, t.htmlLang])

  // Scroll-reveal: add .is-visible when a [data-reveal] block enters the viewport.
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [lang])

  const installCode = useMemo(
    () =>
      'git clone https://github.com/SaltGardenia/sci-story-skills.git\ncd sci-story-skills\nln -sfn "$(pwd)" ~/.agents/skills/sci-story-skill',
    []
  )

  return (
    <>
      <a className="skip-link" href="#main">{lang === 'zh' ? '跳到主要内容' : 'Skip to content'}</a>

      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">📖</span>
            <span className="brand-name">sci-story-skill</span>
          </a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#architecture">{t.nav.architecture}</a>
            <a href="#modes">{t.nav.modes}</a>
            <a href="#knowledge">{t.nav.knowledge}</a>
            <a href="#quickstart">{t.nav.quickstart}</a>
            <a className="nav-github" href="https://github.com/SaltGardenia/sci-story-skills" target="_blank" rel="noreferrer">
              <GitHubIcon /> {t.nav.github}
            </a>
          </nav>
          <div className="nav-controls">
            <div className="segmented" role="tablist" aria-label="Language">
              <span className={`segmented-thumb ${lang === 'zh' ? 'pos-0' : 'pos-1'}`} aria-hidden="true" />
              <button
                type="button"
                role="tab"
                aria-selected={lang === 'zh'}
                className={`segmented-btn ${lang === 'zh' ? 'is-active' : ''}`}
                onClick={() => setLang('zh')}
              >
                中
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={lang === 'en'}
                className={`segmented-btn ${lang === 'en' ? 'is-active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              className="theme-toggle"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              title={theme === 'light' ? 'Dark' : 'Light'}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <span className={`theme-icon ${theme === 'light' ? 'show-sun' : 'show-moon'}`} aria-hidden="true">
                <SunIcon />
                <MoonIcon />
              </span>
            </button>
          </div>
        </div>
      </header>

      <main id="main" className={lang}>
        {/* Hero */}
        <section className="hero" id="top">
          <div className="container">
            <p className="badge">{t.hero.badge}</p>
            <h1 className="display">{t.hero.title}</h1>
            <p className="lede">{t.hero.subtitle}</p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#quickstart">{t.hero.ctaPrimary}</a>
              <a className="btn btn-secondary" href="https://github.com/SaltGardenia/sci-story-skills" target="_blank" rel="noreferrer">
                <GitHubIcon /> {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="chain-panel" data-reveal>
              <p className="chain-label">{t.hero.chainLabel}</p>
              <div className="chain" role="list">
                {t.hero.chain.map((step, i) => (
                  <span className="chain-item" role="listitem" style={{ '--i': i }} key={step}>
                    <span className="chain-chip">{step}</span>
                    {i < t.hero.chain.length - 1 && <span className="chain-arrow" aria-hidden="true">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Three layers */}
        <section className="section" id="architecture">
          <div className="container">
            <header className="section-head" data-reveal>
              <h2>{t.layers.title}</h2>
              <p>{t.layers.subtitle}</p>
            </header>
            <div className="layer-grid">
              {t.layers.items.map((layer) => (
                <article className="layer-card" data-reveal key={layer.id}>
                  <div className="layer-head">
                    <span className="layer-id">{layer.id}</span>
                    <div>
                      <h3>{layer.name}</h3>
                      <code className="layer-dir">{layer.dir}</code>
                    </div>
                  </div>
                  <p className="layer-desc">{layer.desc}</p>
                  <p className="layer-tag">{layer.tag}</p>
                </article>
              ))}
            </div>
            <div className="lock-callout" data-reveal>
              <div>
                <h3>{t.layers.lock.title}</h3>
                <p>{t.layers.lock.body}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modes */}
        <section className="section section-alt" id="modes">
          <div className="container">
            <header className="section-head" data-reveal>
              <h2>{t.modes.title}</h2>
              <p>{t.modes.subtitle}</p>
            </header>
            <div className="mode-grid">
              {t.modes.items.map((mode) => (
                <article className="mode-card" data-reveal key={mode.id}>
                  <span className="mode-id">{mode.id}</span>
                  <h3>{mode.name}</h3>
                  <p>{mode.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Knowledge base */}
        <section className="section" id="knowledge">
          <div className="container">
            <header className="section-head" data-reveal>
              <h2>{t.knowledge.title}</h2>
              <p>{t.knowledge.subtitle}</p>
            </header>
            <div className="stats" data-reveal>
              {t.knowledge.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="library-list">
              {t.knowledge.libraries.map((lib) => (
                <article className="library-row" data-reveal key={lib.name}>
                  <div className="library-name">
                    <h3>{lib.name}</h3>
                    <span className="library-size">{lib.size}</span>
                  </div>
                  <p className="library-finding">{lib.finding}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="section section-alt">
          <div className="container container-narrow">
            <header className="section-head" data-reveal>
              <h2>{t.principles.title}</h2>
            </header>
            <ul className="principles" data-reveal>
              {t.principles.items.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Quick start */}
        <section className="section" id="quickstart">
          <div className="container container-narrow">
            <header className="section-head" data-reveal>
              <h2>{t.quickstart.title}</h2>
              <p>{t.quickstart.step1}</p>
            </header>
            <div data-reveal>
              <CodeBlock code={installCode} copyLabel={t.quickstart.copy} copiedLabel={t.quickstart.copied} />
            </div>
            <p className="step2" data-reveal>{t.quickstart.step2}</p>
            <div className="example-list">
              {t.quickstart.examples.map((ex) => (
                <article className="example" data-reveal key={ex.say}>
                  <p className="example-say">{ex.say}</p>
                  <p className="example-get">
                    <span className="example-arrow" aria-hidden="true">→</span> {ex.get}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>{t.footer.line}</p>
          <p className="footer-meta">
            {t.footer.license} · <a href="https://github.com/SaltGardenia/sci-story-skills" target="_blank" rel="noreferrer">github.com/SaltGardenia/sci-story-skills</a>
          </p>
        </div>
      </footer>
    </>
  )
}
