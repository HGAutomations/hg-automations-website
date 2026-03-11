const functions_ = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Anrufe automatisch entgegennehmen',
    body: 'Der Voice Bot nimmt jeden Anruf sofort entgegen – ohne Warteschleife, ohne verlorene Anfrage.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Anliegen strukturiert aufnehmen',
    body: 'Name, Anliegen, Dringlichkeit – alle relevanten Informationen werden klar und vollständig erfasst.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Termine vorbereiten & weitergeben',
    body: 'Terminwünsche werden aufgenommen und strukturiert in Ihren Prozess übergeben.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Notfälle erkennen & priorisieren',
    body: 'Dringende Anliegen werden sofort erkannt und entsprechend weitergeleitet – keine Verzögerung.',
  },
]

export default function Loesung() {
  return (
    <section id="loesung" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1925AA' }}>
              Die Lösung
            </p>
            <h2 className="text-heading-1 font-bold text-white mb-4">
              Der KI Voice Bot übernimmt.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: '#9E9B94' }}>
              Automatisch, auf Deutsch, rund um die Uhr – und ohne dass Ihr Team eingreifen muss.
            </p>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-brand-blue text-white text-sm font-semibold transition-all duration-200 hover:bg-brand-blue-light hover:shadow-brand"
            >
              Jetzt anfragen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right: Feature list */}
          <div className="flex flex-col gap-4">
            {functions_.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 p-4 md:p-5 rounded-xl border border-surface-border transition-all duration-200 hover:border-brand-blue/30"
                style={{ backgroundColor: '#111527' }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(25,37,170,0.2)', color: '#6B7ECC' }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-0.5">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9E9B94' }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
