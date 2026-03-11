export default function CTA() {
  return (
    <section className="section-padding bg-surface-elevated">
      <div className="container-narrow">
        <div
          className="relative overflow-hidden rounded-2xl border border-brand-blue/30 p-8 md:p-12 text-center"
          style={{ backgroundColor: '#0D1035' }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(25,37,170,0.3) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6B7ECC' }}>
              Jetzt starten
            </p>
            <h2 className="text-heading-1 font-bold text-white mb-4">
              Bereit, Ihren Telefonservice zu automatisieren?
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: '#9E9B94' }}>
              Starten Sie jetzt und erfahren Sie, wie HG Automations Ihren Betrieb entlasten kann.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-brand-blue text-white font-semibold text-sm transition-all duration-200 hover:bg-brand-blue-light hover:shadow-brand focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base"
              >
                Telefonservice automatisieren
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-surface-border text-sm font-semibold transition-all duration-200 hover:bg-surface-card hover:border-brand-blue/40"
                style={{ color: '#E8E6E0' }}
              >
                Fragen lesen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
