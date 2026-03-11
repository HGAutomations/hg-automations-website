const steps = [
  {
    number: '01',
    title: 'Kunde ruft an',
    body: 'Der Anruf geht beim Voice Bot ein – sofort, ohne Klingeln ins Leere.',
  },
  {
    number: '02',
    title: 'KI erfasst das Anliegen',
    body: 'Name, Anliegen und Dringlichkeit werden strukturiert und auf Deutsch aufgenommen.',
  },
  {
    number: '03',
    title: 'Termin oder Priorisierung',
    body: 'Terminwünsche werden vorbereitet, Notfälle werden sofort priorisiert weitergeleitet.',
  },
  {
    number: '04',
    title: 'Informationen in Ihrem Betrieb',
    body: 'Alle Informationen landen strukturiert im Prozess Ihres Unternehmens – bereit zur Bearbeitung.',
  },
]

export default function Process() {
  return (
    <section id="prozess" className="section-padding bg-surface-elevated">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1925AA' }}>
            So funktioniert es
          </p>
          <h2 className="text-heading-1 font-bold text-white mb-4">
            In vier Schritten zum automatisierten Telefonservice.
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9B94' }}>
            Der Ablauf ist einfach – und läuft nach der Einrichtung ohne Aufwand für Ihr Team.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-[calc(100%-1rem)] w-8 h-0.5 z-0"
                  style={{ background: 'linear-gradient(to right, rgba(25,37,170,0.5), rgba(25,37,170,0.1))' }}
                  aria-hidden
                />
              )}

              <div
                className="relative z-10 flex flex-col gap-3 p-5 md:p-6 rounded-xl border border-surface-border h-full"
                style={{ backgroundColor: '#0C0E1A' }}
              >
                {/* Step number */}
                <span
                  className="text-3xl font-bold leading-none"
                  style={{ color: 'rgba(25,37,170,0.5)', fontVariantNumeric: 'tabular-nums' }}
                >
                  {step.number}
                </span>
                <h3 className="font-semibold text-white text-sm md:text-base">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9B94' }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
