const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 5l-7 7" stroke="#1925AA" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="5" r="3" fill="#1925AA" opacity="0.3" />
      </svg>
    ),
    title: 'Anrufe gehen unter',
    body: 'Im laufenden Tagesgeschäft bleibt das Telefon zu oft unbeantwortet – und damit auch Kundenanfragen.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Team im Einsatz',
    body: 'Techniker und Mitarbeiter sind häufig unterwegs – niemand ist erreichbar, um Anrufe professionell entgegenzunehmen.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Terminabstimmung kostet Zeit',
    body: 'Mehrfaches Hin- und Hertelefonieren für Termine bindet wertvolle Zeit, die für den eigentlichen Betrieb fehlt.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Notfälle nicht sofort erkannt',
    body: 'Dringende Anliegen werden erst spät weitergeleitet – ohne System zur Priorisierung fehlt die nötige Reaktionsgeschwindigkeit.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-surface-elevated">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1925AA' }}>
            Die Herausforderung
          </p>
          <h2 className="text-heading-1 font-bold text-white mb-4">
            Was passiert, wenn der Hörer nicht abgehoben wird.
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#9E9B94' }}>
            Für viele Betriebe ist Erreichbarkeit am Telefon täglich eine Herausforderung.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 p-5 md:p-6 rounded-xl border border-surface-border bg-surface-card transition-all duration-200 hover:border-brand-blue/30 hover:shadow-card-hover"
              style={{ backgroundColor: '#161A30' }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                style={{ backgroundColor: 'rgba(25,37,170,0.15)', color: '#6B7ECC' }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1 text-sm md:text-base">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9B94' }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
