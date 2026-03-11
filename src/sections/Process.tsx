import { motion } from 'framer-motion'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    },
  },
}

export default function Process() {
  return (
    <section id="prozess" className="section-padding bg-surface-elevated overflow-hidden">
      <div className="container-narrow">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1925AA' }}>
            So funktioniert es
          </p>
          <h2 className="text-heading-1 font-bold text-white mb-4">
            In vier Schritten zum automatisierten Telefonservice.
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9B94' }}>
            Der Ablauf ist einfach – und läuft nach der Einrichtung ohne Aufwand für Ihr Team.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => (
            <motion.div variants={itemVariants} key={step.number} className="relative flex flex-col group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.2, ease: "easeInOut" }}
                  className="hidden lg:block absolute top-6 left-[calc(100%-1rem)] w-8 h-0.5 z-0 origin-left"
                  style={{ background: 'linear-gradient(to right, rgba(25,37,170,0.5), rgba(25,37,170,0.1))' }}
                  aria-hidden
                />
              )}

              <div
                className="relative z-10 flex flex-col gap-3 p-5 md:p-6 rounded-xl border border-surface-border h-full transition-all duration-300 group-hover:border-brand-blue/40 group-hover:shadow-[0_8px_30px_rgba(25,37,170,0.12)] group-hover:-translate-y-1"
                style={{ backgroundColor: '#0C0E1A' }}
              >
                {/* Step number */}
                <span
                  className="text-3xl font-bold leading-none transition-colors duration-300 group-hover:text-brand-blue"
                  style={{ color: 'rgba(25,37,170,0.5)', fontVariantNumeric: 'tabular-nums' }}
                >
                  {step.number}
                </span>
                <h3 className="font-semibold text-white text-sm md:text-base">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9E9B94' }}>{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
