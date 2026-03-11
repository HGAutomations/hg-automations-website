import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#07090F', borderTop: '1px solid #141726' }}>
      <div className="container-wide pt-12 pb-8 md:pt-16 md:pb-10">

        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10 md:mb-12">

          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            <img src="/HGLogoPure.svg" alt="HG Automations" className="h-8 w-auto" />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#3E3C36' }}>
              KI-gestützte Telefonautomatisierung für serviceorientierte Betriebe in Deutschland.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#2A2820' }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Lösungen', href: '#loesung' },
                { label: 'Branchen', href: '#branchen' },
                { label: 'Über uns', href: '#warum' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-300 hover:text-white inline-block hover:translate-x-1"
                    style={{ color: '#4A4840' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#2A2820' }}>
              Rechtliches
            </p>
            <ul className="flex flex-col gap-2.5 mb-6">
              {[
                { label: 'Impressum', href: '/impressum' },
                { label: 'Datenschutz', href: '/datenschutz' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-300 hover:text-white inline-block hover:translate-x-1"
                    style={{ color: '#4A4840' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-blue text-white text-xs font-semibold transition-all duration-300 hover:bg-brand-blue-light hover:shadow-[0_4px_20px_rgba(25,37,170,0.4)] hover:-translate-y-0.5"
            >
              Telefonservice anfragen
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid #0F1120' }}
        >
          <p className="text-xs" style={{ color: '#2A2820' }}>
            © {year} HG Automations. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <img src="/dsgvokonform.png" alt="DSGVO-konform" className="h-6 w-auto transition-opacity duration-300 hover:opacity-100" style={{ opacity: 0.35 }} />
            <img src="/made-in-germany.svg" alt="Made in Germany" className="h-6 w-auto transition-opacity duration-300 hover:opacity-100" style={{ opacity: 0.35 }} />
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
