const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Erreichbarkeit verbessern',
    body: 'Jeder Anruf wird entgegengenommen – unabhängig von Tageszeit und Teamverfügbarkeit.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Anfragen strukturiert erfassen',
    body: 'Keine Notizzettel mehr. Anliegen werden vollständig und strukturiert weitergegeben.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Terminvereinbarung unterstützen',
    body: 'Terminwünsche werden aufgenommen und geordnet in den Prozess Ihres Betriebs übergeben.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Notfälle vorqualifizieren',
    body: 'Dringende Fälle werden sofort erkannt und mit Priorität weitergeleitet.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Team entlasten',
    body: 'Mitarbeiter können sich auf ihre eigentliche Arbeit konzentrieren – ohne ständige Telefonunterbrechungen.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Anbindung an Folgeprozesse',
    body: 'Informationen fließen direkt in Kalender und Nachfolgeprozesse – ohne manuelle Übertragung.',
  },
]

export default function Features() {
  return (
    <section id="funktionen" className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1925AA' }}>
            Funktionen & Vorteile
          </p>
          <h2 className="text-heading-1 font-bold text-white mb-4">
            Was der Voice Bot für Ihren Betrieb leistet.
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9B94' }}>
            Weniger Aufwand, mehr Struktur – konkrete Funktionen für den Alltag.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-3 p-5 md:p-6 rounded-xl border border-surface-border transition-all duration-200 hover:border-brand-blue/30 hover:shadow-card-hover"
              style={{ backgroundColor: '#111527' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'rgba(25,37,170,0.18)', color: '#6B7ECC' }}
              >
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1 text-sm md:text-base">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9B94' }}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
