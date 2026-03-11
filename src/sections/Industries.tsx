const industries = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'SHK-Betriebe',
    sub: 'Sanitär · Heizung · Klima',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Elektro',
    sub: 'Elektroinstallation & -service',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Sanitär',
    sub: 'Rohr & Leitungsservice',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="currentColor" opacity="0" />
        <path d="M9.663 17h4.673M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Heizung',
    sub: 'Heizungsanlagen & Wartung',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Klima & Lüftung',
    sub: 'Klimaanlagen & Lüftungssysteme',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Weitere Betriebe',
    sub: 'Serviceorientierte Unternehmen',
  },
]

export default function Industries() {
  return (
    <section id="branchen" className="section-padding bg-surface-elevated">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1925AA' }}>
            Branchen
          </p>
          <h2 className="text-heading-1 font-bold text-white mb-4">
            Für serviceorientierte Betriebe in Deutschland.
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9B94' }}>
            HG Automations wurde für Unternehmen entwickelt, bei denen Erreichbarkeit entscheidend ist.
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.label}
              className="flex flex-col items-center text-center gap-3 p-5 md:p-6 rounded-xl border border-surface-border transition-all duration-200 hover:border-brand-blue/30"
              style={{ backgroundColor: '#0C0E1A' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'rgba(25,37,170,0.18)', color: '#6B7ECC' }}
              >
                {ind.icon}
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{ind.label}</p>
                <p className="text-xs mt-0.5" style={{ color: '#6B6860' }}>{ind.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
