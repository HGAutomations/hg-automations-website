import { useState } from 'react'

const faqs = [
  {
    q: 'Wie funktioniert der KI Voice Bot auf Deutsch?',
    a: 'Der Voice Bot ist speziell für die deutsche Sprache entwickelt. Er versteht natürliche Sprache, antwortet klar und professionell und erfasst alle relevanten Informationen strukturiert – ohne unnötige Komplexität für Ihre Kunden.',
  },
  {
    q: 'Ist die Lösung DSGVO-konform?',
    a: 'Ja. HG Automations ist DSGVO-konform. Daten werden entsprechend der europäischen Datenschutzgrundverordnung verarbeitet und gespeichert.',
  },
  {
    q: 'Wie lange dauert die Einrichtung?',
    a: 'Nach der Konfiguration ist der Voice Bot in der Regel schnell einsatzbereit. Der genaue Zeitrahmen hängt von Ihrem Betrieb und den gewünschten Funktionen ab – wir besprechen das gemeinsam im Erstgespräch.',
  },
  {
    q: 'Für welche Branchen ist der Voice Bot geeignet?',
    a: 'Der Voice Bot wurde primär für SHK-Betriebe, Sanitär, Heizung, Klima/Lüftung und Elektro entwickelt. Grundsätzlich eignet er sich für jeden serviceorientierten Betrieb in Deutschland, bei dem telefonische Erreichbarkeit eine Rolle spielt.',
  },
  {
    q: 'Was passiert, wenn ein Anrufer etwas Komplexes möchte?',
    a: 'Bei komplexen Anliegen, die über die Standarderfassung hinausgehen, leitet der Voice Bot den Anrufer entsprechend weiter oder hinterlässt eine strukturierte Nachricht für Ihr Team – so geht keine Information verloren.',
  },
  {
    q: 'Kann ich den Voice Bot an meine bestehenden Prozesse anpassen?',
    a: 'Ja. Der Voice Bot wird auf Ihren Betrieb abgestimmt. Im Onboarding-Gespräch klären wir gemeinsam, welche Szenarien abgedeckt werden sollen und wie die Informationen an Ihr Team weitergegeben werden.',
  },
  {
    q: 'Was ist mit Chatbot und Dashboard?',
    a: 'Chatbot und Dashboard sind bereits in Planung und werden in Kürze als Erweiterungen verfügbar sein. Sie können sich gerne vormerken lassen – sprechen Sie uns im Kontaktformular darauf an.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-surface-border last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
        aria-expanded={open}
        style={{ color: open ? '#E8E6E0' : '#9E9B94' }}
      >
        <span className="text-sm md:text-base font-medium">{q}</span>
        <span
          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-200"
          style={{
            backgroundColor: 'rgba(25,37,170,0.18)',
            color: '#6B7ECC',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        <p className="pb-5 text-sm leading-relaxed" style={{ color: '#9E9B94' }}>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1925AA' }}>
            FAQ
          </p>
          <h2 className="text-heading-1 font-bold text-white mb-4">
            Häufig gestellte Fragen.
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9B94' }}>
            Alles, was Sie vor dem Start wissen möchten.
          </p>
        </div>

        {/* Accordion */}
        <div
          className="max-w-2xl mx-auto rounded-xl border border-surface-border divide-y-0 overflow-hidden"
          style={{ backgroundColor: '#111527' }}
        >
          <div className="px-5 md:px-6">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
