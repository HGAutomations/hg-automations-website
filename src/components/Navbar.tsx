import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Lösungen', href: '#loesung' },
  { label: 'Branchen', href: '#branchen' },
  { label: 'Chatbot', href: '#zukunft', badge: 'In Vorbereitung' },
  { label: 'Dashboard', href: '#zukunft', badge: 'In Vorbereitung' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Über uns', href: '#warum' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-base/90 backdrop-blur-xl border-b border-surface-border shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <a
            href="#"
            aria-label="HG Automations – Startseite"
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <img
              src="/HGLogoPure.svg"
              alt="HG Automations"
              className="h-8 md:h-9 w-auto transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
            />
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-white hover:bg-surface-card focus-visible:text-white focus-visible:bg-surface-card hover:-translate-y-0.5"
                  style={{ color: link.badge ? '#52504A' : '#8A8880' }}
                >
                  {link.label}
                  {link.badge && (
                    <span
                      className="hidden xl:inline-flex text-[9px] font-semibold px-1.5 py-0.5 rounded border leading-none tracking-wide"
                      style={{
                        color: '#52504A',
                        borderColor: '#1A1E33',
                        backgroundColor: '#0F1120',
                      }}
                    >
                      Bald
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#kontakt"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-blue text-white text-sm font-semibold transition-all duration-300 hover:bg-brand-blue-light hover:shadow-[0_4px_20px_rgba(25,37,170,0.4)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base"
          >
            Telefonservice anfragen
          </a>

          {/* Hamburger */}
          <button
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px] rounded-lg hover:bg-surface-card transition-colors"
          >
            <span
              className={`block h-px w-5 transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`}
              style={{ backgroundColor: '#8A8880' }}
            />
            <span
              className={`block h-px w-5 transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`}
              style={{ backgroundColor: '#8A8880' }}
            />
            <span
              className={`block h-px w-5 transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`}
              style={{ backgroundColor: '#8A8880' }}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-surface-border"
            style={{ backgroundColor: '#0A0C18' }}
          >
            <ul className="container-wide py-3 flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium transition-colors hover:bg-surface-card"
                    style={{ color: link.badge ? '#52504A' : '#C8C5BE' }}
                  >
                    {link.label}
                    {link.badge && (
                      <span
                        className="text-[9px] font-semibold px-2 py-0.5 rounded border leading-none tracking-wide"
                        style={{ color: '#52504A', borderColor: '#1A1E33', backgroundColor: '#0F1120' }}
                      >
                        In Vorbereitung
                      </span>
                    )}
                  </a>
                </li>
              ))}
              <li className="pt-3 pb-1">
                <a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 rounded-lg bg-brand-blue text-white text-sm font-semibold transition-all duration-300 hover:bg-brand-blue-light hover:shadow-[0_4px_20px_rgba(25,37,170,0.4)]"
                >
                  Telefonservice anfragen
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
