import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Award,
  Menu,
  X,
  FlaskConical,
  Pill,
  Sparkles,
  HeartPulse,
  Wheat,
  MessageCircle,
  Stethoscope,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const PRODUCT_CATEGORIES = [
  {
    icon: Pill,
    title: 'Tablets & Capsules',
    desc: 'GMP-certified oral formulations — vitamins, minerals, and analgesics for daily wellness and pain management.',
    products: [
      { name: 'RECOBEX-Z Capsules', composition: 'B-Complex with Zinc' },
      { name: 'RECOBEX-C Tablets', composition: 'Multivitamins, Minerals, Cyanocobalamin & Grape Seed Extract' },
      { name: 'NEAVITE-B Tablet', composition: 'Mecobalamin, Folic Acid, Alpha Lipoic Acid, B1, B2, B6, Inositol & Chromium Chloride' },
      { name: 'E-CAL Capsules', composition: 'Vitamin E, Calcium Panthothenate & B-Complex' },
      { name: 'ONE PLUS Tablet', composition: 'Aceclofenac with Paracetamol' },
    ],
  },
  {
    icon: Sparkles,
    title: 'Skin Care Products',
    desc: 'Medicated dermatological formulations — antifungal, anti-inflammatory and skin restoration therapies.',
    products: [
      { name: 'F-NIL Soap', composition: 'Ketoconazole' },
      { name: 'SOFTEE Soap', composition: 'Aloe Vera, Glycerin & Vitamin E' },
      { name: 'CLOSEAL S Ointment', composition: 'Clobetasol Propionate & Salicylic Acid' },
      { name: 'CLOSEAL S Lotion', composition: 'Clobetasol Propionate & Salicylic Acid' },
      { name: 'CLOSEAL PLUS', composition: 'Itraconazole, Ofloxacin, Ornidazole & Clobetasol Propionate' },
      { name: 'CINWIN AD Gel', composition: 'Clindamycin Phosphate & Adapalene Gel' },
      { name: 'F-NIL Cream', composition: 'Ketoconazole' },
      { name: 'F-NIL Shampoo', composition: 'Ketoconazole' },
      { name: 'SCAVITE Lotion', composition: 'Permethrin' },
    ],
  },
  {
    icon: Wheat,
    title: 'Food Products',
    desc: 'Nutritional supplement powders for recovery, sustained health, and daily nutritional support.',
    products: [
      { name: 'RECOBEX Powder', composition: 'Nutritional Supplement Powder' },
      { name: 'RECOBEX D Powder', composition: 'Nutritional Supplement Powder' },
    ],
  },
]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg shadow-primary/10' : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary">
              <FlaskConical className="h-5 w-5 text-white" strokeWidth={2.2} />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/30 group-hover:ring-accent/50 transition" />
            </span>
            <span className={`font-display font-bold tracking-tight text-lg ${scrolled ? 'text-ink' : 'text-white'} transition-colors`}>
              SMJ Pharma
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-tight lift-on-hover ${
                  scrolled ? 'text-ink/70 hover:text-primary' : 'text-white/90 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex magnetic-btn btn-gradient items-center gap-1.5 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-accent/30"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden p-2 rounded-full ${scrolled ? 'text-ink' : 'text-white'}`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deep/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-display font-bold text-xl text-ink">SMJ Pharma</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-divider/40">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn btn-gradient flex items-center justify-center gap-2 text-white px-6 py-4 rounded-full font-semibold w-full"
          >
            Get in Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 })
      gsap.from('.hero-cta, .hero-meta', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.8, stagger: 0.12 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2400&q=80"
          alt="Pharmaceutical laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/60 to-primary-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
      </div>

      {/* Floating molecule particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[18%] h-3 w-3 rounded-full bg-accent/60 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[35%] right-[10%] h-2 w-2 rounded-full bg-white/30 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[55%] right-[25%] h-1.5 w-1.5 rounded-full bg-accent/40 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[20%] right-[32%] h-2 w-2 rounded-full bg-white/20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[45%] right-[14%] h-1 w-1 rounded-full bg-accent/50 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div className="px-6 sm:px-10 lg:px-16 max-w-5xl">
          <p className="hero-meta font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
            Est. 2012 · Tamil Nadu, India
          </p>
          <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight">
            <span className="hero-line-1 block text-4xl sm:text-6xl md:text-7xl">
              Exploring Healthy Life
            </span>
            <span
              className="hero-line-2 gradient-text block font-serif italic font-medium text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-2"
              style={{ lineHeight: '0.92' }}
            >
              Through Innovations.
            </span>
          </h1>

          <p className="hero-meta mx-auto max-w-xl text-white/70 text-base sm:text-lg mt-8 leading-relaxed">
            Pharmaceutical marketing company trusted by doctors across Tamil Nadu — delivering quality products since 2012.
            <span className="text-white"> Every life is an inspiration.</span>
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="magnetic-btn btn-gradient group inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-4 rounded-full shadow-2xl shadow-accent/40"
            >
              View Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+910000000000"
              className="lift-on-hover inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium px-7 py-4 rounded-full"
            >
              <Phone className="h-4 w-4" />
              Call: [Phone to be added]
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono uppercase text-[10px] tracking-[0.3em]">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Product Shuffler
---------------------------------------------------------------- */
function ProductShuffler() {
  const items = [
    { tag: 'Tablets & Capsules', label: 'RECOBEX-Z · NEAVITE-B · ONE PLUS', note: 'GMP Batch' },
    { tag: 'Skin Care', label: 'F-NIL · CLOSEAL · CINWIN AD GEL', note: 'Dermal Range' },
    { tag: 'Food Supplements', label: 'RECOBEX Powder · RECOBEX D', note: 'Nutraceutical' },
  ]
  const [stack, setStack] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1 - offset * 0.25,
              transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 bg-white border border-divider rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-muted">{item.note}</span>
            </div>
            <div className="mt-4 font-display text-base font-semibold text-ink leading-tight">
              {item.label}
            </div>
            <div className="mt-3 flex items-center gap-1">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-1 w-1 rounded-full"
                  style={{ background: idx < 24 - offset * 6 ? '#FF6B4A' : '#E6E4F3' }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Pharmaceutical Capsule Drop (signature animation)
---------------------------------------------------------------- */
function CapsuleDrop() {
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(14)

  const statuses = [
    { text: 'All batches on schedule · Quality verified', label: 'Stable', tone: 'emerald' },
    { text: 'New formulation in process · Zone 3', label: 'Active', tone: 'accent' },
    { text: 'Lab analysis running · ETA 4 hrs', label: 'Testing', tone: 'primary' },
    { text: 'Batch cleared · GMP certified', label: 'Cleared', tone: 'emerald' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % statuses.length
        if (statuses[next].label === 'Cleared') setCount((c) => c + 1)
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const drops = [
    { left: '14%', delay: '0.0s', dur: '2.6s', size: 15 },
    { left: '25%', delay: '1.3s', dur: '3.0s', size: 12 },
    { left: '38%', delay: '0.6s', dur: '2.8s', size: 17 },
    { left: '50%', delay: '1.8s', dur: '2.4s', size: 13 },
    { left: '62%', delay: '0.9s', dur: '3.1s', size: 16 },
    { left: '74%', delay: '2.0s', dur: '2.7s', size: 12 },
    { left: '85%', delay: '0.4s', dur: '2.9s', size: 14 },
  ]

  const ripples = [
    { left: '22%', delay: '0.2s' },
    { left: '48%', delay: '1.0s' },
    { left: '76%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === 'emerald' ? 'text-emerald-600' :
    status.tone === 'accent' ? 'text-accent-dark' : 'text-primary'
  const toneDot =
    status.tone === 'emerald' ? 'bg-emerald-500' :
    status.tone === 'accent' ? 'bg-accent' : 'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/15"
      style={{ background: 'linear-gradient(180deg, #F1EEFC 0%, #DCD3F7 70%, #C6B9F0 100%)' }}
    >
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-white/60 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-white/50 blur-xl" />

      {/* Header */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <FlaskConical className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            Batch Monitor
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">{String(count).padStart(2, '0')}</span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">batches</span>
        </div>
      </div>

      {/* Flask / source element */}
      <svg className="absolute left-3 right-3 top-9 h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
        <rect x="0" y="6" width="400" height="8" rx="4" fill="#4C3AE3" fillOpacity="0.18" />
        <rect x="0" y="7" width="400" height="2" fill="#1B1440" fillOpacity="0.3" />
        <rect x="0" y="4" width="6" height="12" rx="1.5" fill="#1B1440" fillOpacity="0.4" />
        <rect x="394" y="4" width="6" height="12" rx="1.5" fill="#1B1440" fillOpacity="0.4" />
        {[60, 152, 248, 340].map((x) => (
          <g key={x}>
            <rect x={x - 3} y="0" width="6" height="8" rx="2" fill="#4C3AE3" fillOpacity="0.5" />
            <rect x={x - 6} y="12" width="12" height="4" rx="2" fill="#FF6B4A" fillOpacity="0.6" />
          </g>
        ))}
      </svg>

      {/* Capsule/pill drop field */}
      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {drops.map((d, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: d.left,
              width: `${d.size}px`,
              height: `${Math.round(d.size * 2)}px`,
              animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
              filter: 'drop-shadow(0 1px 3px rgba(26,58,92,0.25))',
              transform: 'translateX(-50%)',
            }}
            viewBox="0 0 14 28"
          >
            <defs>
              <linearGradient id={`cap-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6B4A" />
                <stop offset="50%" stopColor="#7C6AF0" />
                <stop offset="100%" stopColor="#1B1440" />
              </linearGradient>
            </defs>
            <rect x="1" y="1" width="12" height="26" rx="6" fill={`url(#cap-${i})`} />
            <line x1="1" y1="14" x2="13" y2="14" stroke="white" strokeWidth="0.8" strokeOpacity="0.5" />
            <ellipse cx="5" cy="7" rx="2" ry="4" fill="white" fillOpacity="0.3" />
          </svg>
        ))}
      </div>

      {/* Lab bench surface */}
      <svg className="absolute bottom-9 left-3 right-3 h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
        <line x1="0" y1="6" x2="200" y2="6" stroke="#4C3AE3" strokeOpacity="0.4" strokeWidth="1.5" />
        {[20, 50, 80, 110, 140, 170].map((x) => (
          <line key={x} x1={x} y1="4" x2={x} y2="8" stroke="#4C3AE3" strokeOpacity="0.3" strokeWidth="1" />
        ))}
      </svg>

      {/* Molecule ripples */}
      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-primary/40"
            style={{ left: r.left, width: '4px', height: '4px', animation: `rain-ripple 2.4s ease-out ${r.delay} infinite` }}
          />
        ))}
      </div>

      {/* Status bar */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full ${toneDot}`}>
            {status.tone === 'accent' && (
              <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />
            )}
          </span>
          <span
            key={status.text}
            className={`font-mono text-[10px] truncate ${toneText}`}
            style={{ animation: 'rain-fadein 0.35s ease-out' }}
          >
            {status.text}
          </span>
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}>
          {status.label}
        </span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Doctor Appointment Scheduler
---------------------------------------------------------------- */
function DoctorScheduler() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const [step, setStep] = useState(0)
  const activeDay = 3

  useEffect(() => {
    const interval = setInterval(() => setStep((prev) => (prev + 1) % 5), 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0: return { x: 8, y: 110, opacity: 0 }
      case 1: return { x: 60, y: 60, opacity: 1 }
      case 2: return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 3: return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4: return { x: 130, y: 130, opacity: 1 }
      default: return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-white border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">Week 14 · June</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          Doctor Visit
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay
                ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30'
                : 'bg-background text-ink'
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 9}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4 ? 'bg-accent text-white scale-[1.02] shadow-md shadow-accent/30' : 'bg-divider/40 text-muted'
        }`}
      >
        {step >= 3 ? '✓ Consultation Booked' : 'Select a date'}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, opacity: cursorPos.opacity, transform: step === 3 ? 'scale(0.85)' : 'scale(1)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#17152E" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
      })
      gsap.from('.feature-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', once: true },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: '01 / Products',
      heading: 'Full Spectrum Range',
      sub: 'Tablets · Skin Care · Supplements',
      text: 'From B-complex vitamins to antifungal dermal formulations, our product portfolio covers the essential therapeutic categories prescribed daily by doctors.',
      Component: ProductShuffler,
    },
    {
      eyebrow: '02 / Quality',
      heading: 'GMP Batch Monitoring',
      sub: 'Raw material to finished product',
      text: 'Every batch is tested from raw material intake to finished product release at senior testing laboratories. Full analytical report accompanies every product.',
      Component: CapsuleDrop,
    },
    {
      eyebrow: '03 / Service',
      heading: 'Doctor Support',
      sub: 'Fast courier · Ethical promotion',
      text: 'Our technically qualified team periodically meets doctors, ensuring product availability via fastest courier to hospitals and chemists across the region.',
      Component: DoctorScheduler,
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ Our Core Pillars</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            Three pillars.
            <span className="block font-serif italic font-medium text-primary mt-1">One principle.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="feature-card group relative bg-surface border border-divider rounded-5xl p-7 hover:border-primary/40 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{card.eyebrow}</span>
                <ArrowUpRight className="h-5 w-5 text-ink/30 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" strokeWidth={1.8} />
              </div>
              <card.Component />
              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">{card.heading}</h3>
                <p className="font-serif italic text-primary text-sm mt-1">{card.sub}</p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) requestAnimationFrame(animate)
              else setCount(target)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: '01', title: 'Experience', target: 14, suffix: '+', label: 'years of excellence',
      desc: 'Marketing ethical pharmaceutical products since 2012. Trusted by doctors and distributors across Tamil Nadu.',
    },
    {
      n: '02', title: 'Quality', target: 100, suffix: '%', label: 'GMP certified',
      desc: 'Every batch tested from raw material to finished product. Full analytical report for every single formulation we produce.',
    },
    {
      n: '03', title: 'Portfolio', target: 3, suffix: '', label: 'product ranges',
      desc: 'Tablets & Capsules, Skin Care Products, and Food Supplements — covering essential therapeutic categories for daily healthcare.',
    },
  ]

  return (
    <section ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/[0.08] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5">╱ Our Numbers</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              The numbers behind
              <span className="block font-serif italic font-medium text-primary">the trust.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Three figures that define how we work — not marketing, just what we deliver every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-xl shadow-primary/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`pillar-card relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{p.n} / {p.title}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent/40 group-hover:bg-accent group-hover:scale-150 transition-all duration-500" />
              </div>
              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-extrabold text-[6rem] sm:text-[8rem] md:text-[9rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-accent mb-3 sm:mb-4">{p.suffix}</span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mt-5">{p.label}</p>
              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">{p.desc}</p>
              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div className="h-full bg-gradient-to-r from-transparent via-accent to-transparent" style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — Sticky Stack
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card, start: 'top top+=100',
            endTrigger: cards[cards.length - 1], end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92, filter: 'blur(6px) saturate(0.7)', opacity: 0.5, ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01', title: 'Research & Formulation', tagline: 'Quality from source.',
      text: 'We identify therapeutic needs and source only GMP-grade raw materials. Every formulation is developed to meet the highest pharmaceutical standards before production begins.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200&q=80',
      alt: 'Pharmaceutical research laboratory',
      meta: 'Step 1 / Research',
    },
    {
      num: '02', title: 'Quality Testing', tagline: 'Verified. Certified.',
      text: 'Every product is tested at senior testing laboratories with full analytical reports. From raw material intake to finished goods — no batch leaves without complete verification.',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&q=80',
      alt: 'Quality testing in pharmaceutical lab',
      meta: 'Step 2 / Testing',
    },
    {
      num: '03', title: 'Distribution & Support', tagline: 'Delivered with care.',
      text: 'Products are distributed via leading distributors and fastest courier to hospitals and chemists. Our marketing team stays in close contact with doctors, ensuring availability and support.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
      alt: 'Pharmaceutical distribution and delivery',
      meta: 'Step 3 / Deliver',
    },
  ]

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ How We Work</span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Three steps.
          <span className="block font-serif italic font-medium text-primary">No compromises.</span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{step.meta}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    SMJ Protocol
                  </span>
                </div>
                <div className="my-12">
                  <span className="font-display font-extrabold text-[7rem] sm:text-[10rem] leading-none text-accent/15 -mb-4 block">{step.num}</span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">{step.title}</h3>
                  <p className="font-serif italic text-primary text-2xl sm:text-3xl mt-3">{step.tagline}</p>
                </div>
                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>
              <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full bg-deep">
                <img src={step.image} alt={step.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/15" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink">Step {step.num}</span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/70">{step.num} / SMJ Pharma</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   ProductCatalog
---------------------------------------------------------------- */
function ProductCatalog() {
  const headerRef = useRef(null)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [catVisible, setCatVisible] = useState({})
  const catRefs = useRef([])

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const observers = catRefs.current.map((el, idx) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCatVisible(prev => ({ ...prev, [idx]: true }))
            obs.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <section id="products" className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={`flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">╱ Our Products</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              Full product range,
              <span className="block font-serif italic font-medium text-accent">under one roof.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">
            GMP-certified formulations across tablets & capsules, skin care and nutritional supplements — 16 products total.
          </p>
        </div>

        <div className="space-y-16">
          {PRODUCT_CATEGORIES.map((cat, catIdx) => {
            const Icon = cat.icon
            const isVisible = !!catVisible[catIdx]
            return (
              <div key={catIdx} ref={el => catRefs.current[catIdx] = el}>
                <div className={`flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-5 border-b border-white/10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-accent" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">{cat.title}</h3>
                      <p className="text-white/45 text-sm mt-0.5 leading-relaxed max-w-lg">{cat.desc}</p>
                    </div>
                  </div>
                  <span className="sm:ml-auto font-mono text-[10px] text-white/30 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full self-start sm:self-auto">
                    {cat.products.length} products
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.products.map((prod, prodIdx) => (
                    <div
                      key={prodIdx}
                      style={{ transitionDelay: isVisible ? `${prodIdx * 60}ms` : '0ms' }}
                      className={`group bg-white/[0.03] border border-white/10 hover:border-accent/40 hover:bg-white/[0.06] rounded-2xl p-5 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h4 className="font-display font-semibold text-white text-base leading-tight">{prod.name}</h4>
                          <p className="font-mono text-xs uppercase tracking-wide text-white/70 mt-1.5 leading-relaxed">{prod.composition}</p>
                        </div>
                        <span className="font-mono text-[9px] text-white/20 tracking-widest mt-0.5 flex-shrink-0">{String(prodIdx + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-accent/50 text-[10px] font-mono uppercase tracking-widest">
                        <span className="h-0.5 w-3 bg-accent/40 rounded-full" />
                        GMP Verified
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Image Modal / Lightbox
---------------------------------------------------------------- */
function ImageModal({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-center justify-center p-4 transition-all duration-300 ${item ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative z-10 max-w-lg w-full bg-deep border border-white/15 rounded-4xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-white" />
        </button>
        <div className="relative w-full aspect-[4/3] bg-black/40">
          {item && (
            item.image
              ? <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
              : <div className="w-full h-full flex items-center justify-center">
                  {item.icon && <item.icon className="h-16 w-16 text-accent/40" strokeWidth={1.5} />}
                </div>
          )}
        </div>
        {item && (
          <div className="px-6 py-5">
            <h4 className="font-display font-bold text-lg text-white">{item.name}</h4>
            <p className="font-mono text-xs uppercase tracking-widest text-white/70 mt-1">{item.sub}</p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Gallery
---------------------------------------------------------------- */
function Gallery() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const galleryCategories = [
    {
      title: 'Tablets & Capsules',
      icon: Pill,
      items: [
        { name: 'RECOBEX-Z Capsules', sub: 'B-Complex with Zinc', bg: 'linear-gradient(to bottom right,rgba(26,58,92,.25),rgba(26,58,92,.08))', image: '/recobex-z.png' },
        { name: 'RECOBEX-C Tablets', sub: 'Multivitamins, Minerals, Cyanocobalamin & Grape Seed Extract', bg: 'linear-gradient(to bottom right,rgba(201,168,76,.2),rgba(201,168,76,.05))', image: '/recobex-c.png' },
        { name: 'NEAVITE-B Tablet', sub: 'Mecobalamin, Folic Acid & Alpha Lipoic Acid', bg: 'linear-gradient(to bottom right,rgba(26,58,92,.2),rgba(26,58,92,.05))', image: '/neavite-b.jpeg' },
        { name: 'E-CAL Capsules', sub: 'Vitamin E, Calcium Panthothenate & B-Complex', bg: 'linear-gradient(to bottom right,rgba(201,168,76,.15),rgba(201,168,76,.05))', image: '/e-cal.jpeg' },
        { name: 'ONE PLUS Tablet', sub: 'Aceclofenac with Paracetamol', bg: 'linear-gradient(to bottom right,rgba(26,58,92,.25),rgba(26,58,92,.08))', image: '/one-plus.jpeg' },
      ],
    },
    {
      title: 'Skin Care Products',
      icon: Sparkles,
      items: [
        { name: 'F-NIL Soap', sub: 'Ketoconazole Medicated Soap', bg: 'linear-gradient(to bottom right,rgba(201,168,76,.15),rgba(201,168,76,.05))', image: '/f-nil-soap.png' },
        { name: 'SOFTEE Soap', sub: 'Aloe Vera, Glycerin & Vitamin E', bg: 'linear-gradient(to bottom right,rgba(26,58,92,.15),rgba(26,58,92,.05))', image: '/softee-soap.jpeg' },
        { name: 'CLOSEAL S Ointment', sub: 'Clobetasol Propionate & Salicylic Acid', bg: 'linear-gradient(to bottom right,rgba(201,168,76,.2),rgba(201,168,76,.05))', image: '/closeal-s-ointment.png' },
        { name: 'CLOSEAL S Lotion', sub: 'Clobetasol Propionate & Salicylic Acid', bg: 'linear-gradient(to bottom right,rgba(26,58,92,.2),rgba(26,58,92,.05))', image: '/closeal-s-lotion.png' },
        { name: 'CLOSEAL PLUS', sub: 'Itraconazole, Ofloxacin, Ornidazole & Clobetasol Propionate', bg: 'linear-gradient(to bottom right,rgba(201,168,76,.15),rgba(201,168,76,.05))', image: '/closeal-plus-cream.jpeg' },
        { name: 'CINWIN AD Gel', sub: 'Clindamycin Phosphate & Adapalene Gel', bg: 'linear-gradient(to bottom right,rgba(26,58,92,.2),rgba(26,58,92,.05))', image: '/cinwin-ad-gel.png' },
        { name: 'F-NIL Cream', sub: 'Ketoconazole Cream', bg: 'linear-gradient(to bottom right,rgba(26,58,92,.2),rgba(26,58,92,.05))', image: '/f-nil-cream.png' },
        { name: 'F-NIL Shampoo', sub: 'Ketoconazole Shampoo', bg: 'linear-gradient(to bottom right,rgba(201,168,76,.2),rgba(201,168,76,.05))', image: '/f-nil-shampoo.png' },
        { name: 'SCAVITE Lotion', sub: 'Permethrin Lotion', bg: 'linear-gradient(to bottom right,rgba(26,58,92,.15),rgba(26,58,92,.05))', image: '/scavite-lotion.jpeg' },
      ],
    },
    {
      title: 'Food Products',
      icon: Wheat,
      items: [
        { name: 'RECOBEX Powder', sub: 'Nutritional Supplement Powder', bg: 'linear-gradient(to bottom right,rgba(26,58,92,.2),rgba(26,58,92,.05))', image: '/recobex-powder-new.png' },
        { name: 'RECOBEX D Powder', sub: 'Nutritional Supplement Powder', bg: 'linear-gradient(to bottom right,rgba(201,168,76,.2),rgba(201,168,76,.05))', image: '/recobex-d.png' },
      ],
    },
  ]

  return (
    <section id="gallery" ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white">
      <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">╱ SMJ Gallery</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
            Our product
            <span className="block font-serif italic font-medium text-accent">showcase.</span>
          </h2>
        </div>

        <div className="space-y-16">
          {galleryCategories.map(({ title, icon: Icon, items }) => (
            <div key={title}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-8 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-accent" strokeWidth={2} />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">{title}</h3>
                <div className="flex-1 h-px bg-white/10" />
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest hidden sm:block">
                  {items.length} products
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedItem({ ...item, icon: Icon })}
                    style={{ transitionDelay: visible ? `${i * 60}ms` : '0ms', backgroundImage: item.bg }}
                    className={`group relative rounded-4xl border border-white/10 hover:border-accent/40 p-6 transition-all duration-700 ease-out cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  >
                    <div className="relative h-36 rounded-2xl overflow-hidden mb-5">
                      {item.image ? (
                        <>
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Icon className="h-12 w-12 text-accent/50" strokeWidth={1.5} />
                        </div>
                      )}
                      <span className="absolute top-2 right-2 font-mono text-[8px] uppercase tracking-widest text-white/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {title}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-white mb-1">{item.name}</h4>
                    <p className="font-mono text-xs uppercase tracking-widest text-white/70">{item.sub}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-accent/70 text-xs font-mono uppercase tracking-widest">
                      <span className="h-1 w-4 bg-accent/50 rounded-full" />
                      GMP Verified
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 font-mono text-xs uppercase tracking-widest mt-12">
          Product images available on request · info@smjpharma.com
        </p>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      Icon: ShieldCheck,
      title: 'GMP Certified',
      text: 'Manufactured as per Good Manufacturing Practice, compliant with the latest schedule. Quality is non-negotiable at every stage.',
    },
    {
      Icon: Award,
      title: 'Analytically Verified',
      text: 'Every batch carries a complete analytical report. Tests conducted by the most senior testing laboratories — from raw material to finished product.',
    },
    {
      Icon: Stethoscope,
      title: 'Doctor-Trusted',
      text: 'Promoted ethically by meeting practicing doctors. Reported by doctors from different segments for ultimate patient comfort, cure and satisfaction.',
    },
  ]

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ Why Trust Us</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">
            More than a medicine.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-white border border-divider rounded-4xl p-6 hover:border-primary/40 transition-all duration-700 ease-out shadow-sm ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <Icon className="h-6 w-6 text-primary mb-3" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="magnetic-btn btn-gradient inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full shadow-xl shadow-primary/30">
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact
---------------------------------------------------------------- */
function ContactForm() {
  const contacts = [
    {
      icon: Phone,
      label: 'Call directly',
      value: '[Phone number to be added] / [Phone number to be added]',
      href: 'tel:+910000000000',
      color: 'bg-primary/10 border-primary/20 group-hover:bg-primary',
      iconColor: 'text-primary group-hover:text-white',
    },
    {
      icon: Mail,
      label: 'Email us',
      value: 'info@smjpharma.com',
      href: 'mailto:info@smjpharma.com',
      color: 'bg-primary/10 border-primary/20 group-hover:bg-primary',
      iconColor: 'text-primary group-hover:text-white',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '[Address to be added], Tamil Nadu, India',
      href: null,
      color: 'bg-primary/10 border-primary/20',
      iconColor: 'text-primary',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat with us',
      href: 'https://wa.me/910000000000',
      external: true,
      color: 'bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500',
      iconColor: 'text-emerald-600 group-hover:text-white',
    },
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">╱ Contact</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            How can we
            <span className="block font-serif italic font-medium text-primary">help you?</span>
          </h2>
          <p className="text-muted text-lg mt-6 leading-relaxed max-w-2xl">
            Reach out through any of the channels below and we will get back to you as soon as possible to discuss your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {contacts.map(({ icon: Icon, label, value, href, external, color, iconColor }, i) => {
            const inner = (
              <>
                <span className={`h-14 w-14 rounded-2xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${color}`}>
                  <Icon className={`h-6 w-6 transition-colors duration-300 ${iconColor}`} strokeWidth={1.8} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted mb-1">{label}</span>
                  <span className="font-display font-semibold text-ink text-lg leading-snug break-words">{value}</span>
                </span>
              </>
            )
            const cls = `group flex items-center gap-5 bg-white border border-divider rounded-3xl p-6 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 ${href ? 'lift-on-hover' : ''}`
            return href ? (
              <a key={i} href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                {inner}
              </a>
            ) : (
              <div key={i} className={cls}>{inner}</div>
            )
          })}
        </div>

        <div className="p-6 sm:p-8 rounded-4xl bg-primary/5 border border-primary/15">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">Our Commitment</p>
          <p className="text-muted leading-relaxed max-w-2xl">
            We understand the needs of the medical profession. Your enquiry will be handled with full dedication and sincerity by our technically qualified team.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-deep text-white rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-primary/20 blur-3xl" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        <div className="border-b border-white/10 pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Quality you can
            <span className="font-serif italic font-medium gradient-text block">trust.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-md">SMJ Pharma — pharmaceutical marketer, serving doctors and patients across Tamil Nadu since 2012.</p>
            <a href="#contact" className="magnetic-btn btn-gradient inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full self-start sm:self-auto">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
                <FlaskConical className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
              <span className="font-display font-bold text-lg">SMJ Pharma</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Pharmaceutical marketer committed to delivering quality medicines to improve health and wellbeing.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mt-6">Est. 2012 · Tamil Nadu, India</p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Products</p>
            <ul className="space-y-2.5">
              {PRODUCT_CATEGORIES.map((cat, i) => (
                <li key={i}>
                  <a href="#products" className="text-white/65 hover:text-accent transition text-sm">{cat.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Company</p>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-white/65 hover:text-accent transition text-sm">About Us</a></li>
              <li><a href="#process" className="text-white/65 hover:text-accent transition text-sm">Our Process</a></li>
              <li><a href="#gallery" className="text-white/65 hover:text-accent transition text-sm">Gallery</a></li>
              <li><a href="#contact" className="text-white/65 hover:text-accent transition text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li><a href="tel:+910000000000" className="text-white/65 hover:text-accent transition text-sm">[Phone to be added]</a></li>
              <li><a href="tel:+910000000000" className="text-white/65 hover:text-accent transition text-sm">[Phone to be added]</a></li>
              <li><a href="mailto:info@smjpharma.com" className="text-white/65 hover:text-accent transition text-sm">info@smjpharma.com</a></li>
              <li className="text-white/65 text-sm">[Address to be added], Tamil Nadu</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
              System Operational · Accepting Enquiries
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-xs font-mono">
            <Link to="/privacy" className="hover:text-accent transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition">Terms of Use</Link>
            <span>© 2026 SMJ Pharma</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ProductCatalog />
        <Gallery />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
