export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#07090F', borderTop: '1px solid #141726' }}>
      <div className="container-wide pt-12 pb-8 md:pt-16 md:pb-10">

        {/* Main row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10 md:mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <img src="/HGLogoPure.svg" alt="HG Automations" className="h-8 w-auto" />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#3E3C36' }}>
              KI-gestützte Telefonautomatisierung für serviceorientierte Betriebe in Deutschland.
            </p>
          </div>

          {/* Navigation */}
          <div>
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
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: '#4A4840' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA */}
          <div>
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
                    className="text-sm transition-colors duration-150 hover:text-white"
                    style={{ color: '#4A4840' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-blue text-white text-xs font-semibold transition-all duration-200 hover:bg-brand-blue-light hover:shadow-brand"
            >
              Telefonservice anfragen
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid #0F1120' }}
        >
          <p className="text-xs" style={{ color: '#2A2820' }}>
            © {year} HG Automations. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <img src="/dsgvokonform.png" alt="DSGVO-konform" className="h-6 w-auto" style={{ opacity: 0.35 }} />
            <img src="/made-in-germany.svg" alt="Made in Germany" className="h-6 w-auto" style={{ opacity: 0.35 }} />
          </div>
        </div>

      </div>
    </footer>
  )
}
