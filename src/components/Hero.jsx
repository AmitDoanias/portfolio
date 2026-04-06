import { useEffect } from 'react'
import { HeroGeometricBackground } from './ui/shape-landing-hero'
import { renderCanvas, stopCanvas } from './ui/canvas'
import { Button } from './ui/button'

function PlusIcon({ className }) {
  return (
    <svg
      className={className}
      width="40" height="40" viewBox="0 0 40 40"
      fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
    >
      <line x1="20" y1="4" x2="20" y2="36" />
      <line x1="4" y1="20" x2="36" y2="20" />
    </svg>
  )
}

// ── LIGHT MODE HERO ──────────────────────────────────────────────────────────
function LightHero() {
  useEffect(() => {
    renderCanvas()
    return () => stopCanvas()
  }, [])

  return (
    <div className="relative z-10 mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-20">
      {/* Badge pill */}
      <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
        <div className="relative flex items-center whitespace-nowrap rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs leading-6 text-gray-500 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
          </span>
          Available for opportunities
        </div>
      </div>

      <div className="mb-10 mt-4 md:mt-6">
        {/* Bordered heading box */}
        <div className="px-2">
          <div className="relative mx-auto h-full max-w-4xl border border-gray-200 p-6
            [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)]
            md:px-12 md:py-16">

            <PlusIcon className="text-violet-500 absolute -left-5 -top-5" />
            <PlusIcon className="text-violet-500 absolute -bottom-5 -left-5" />
            <PlusIcon className="text-violet-500 absolute -right-5 -top-5" />
            <PlusIcon className="text-violet-500 absolute -bottom-5 -right-5" />

            <h1 className="select-none text-center text-5xl font-semibold leading-none tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
                Amit Doanias
              </span>
              .
            </h1>

            <div className="mt-4 flex items-center justify-center gap-1.5">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <p className="text-xs text-green-600 font-medium">Available Now</p>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <h2 className="mt-8 text-xl font-medium text-gray-700 md:text-2xl">
          Project Manager
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 mt-3 max-w-2xl px-6 text-sm text-gray-500 sm:px-6 md:max-w-3xl md:px-20 lg:text-base leading-relaxed">
          Building modern web applications with clean code and great user experience.
          Passionate about bridging design and technology.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#">
            <Button size="lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-4 flex flex-col items-center gap-1 text-gray-400 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>

      {/* Canvas — behind content */}
      <canvas
        className="pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      />
    </div>
  )
}

// ── DARK MODE HERO ───────────────────────────────────────────────────────────
const darkSocialLinks = [
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'CV (EN)',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    label: 'קורות חיים',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
]

function DarkHero() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full
        border border-white/[0.08] bg-white/[0.03] text-white/60 text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-rose-500/80 animate-pulse" />
        Available for opportunities
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 leading-tight text-white">
        Hi, I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
          Amit Doanias
        </span>
      </h1>

      <p className="text-xl sm:text-2xl font-medium mb-4 text-white/70">
        Project Manager
      </p>

      <p className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light tracking-wide text-white/40">
        Building modern web applications with clean code and great user experience.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {darkSocialLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            target={link.href !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200
              bg-white/[0.03] text-white/70 border border-white/[0.08]
              hover:bg-white/10 hover:text-white hover:border-white/20
              hover:shadow-lg hover:-translate-y-0.5"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center gap-2 text-white/20 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </div>
  )
}

// ── MAIN EXPORT ──────────────────────────────────────────────────────────────
export default function Hero({ isDark }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {isDark ? (
        <>
          <HeroGeometricBackground />
          <DarkHero />
        </>
      ) : (
        <LightHero />
      )}
    </section>
  )
}
