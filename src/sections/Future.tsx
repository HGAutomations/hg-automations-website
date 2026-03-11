import { motion } from 'framer-motion'

const items = [
  {
    title: 'KI-Chatbot',
    body: 'Ein intelligenter Chatbot für Ihre Website – strukturierte Kommunikation auch im digitalen Kanal.',
    badge: 'In Vorbereitung',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Dashboard',
    body: 'Ein zentrales Übersichts-Dashboard für alle eingehenden Anfragen und Prozessdaten Ihres Betriebs.',
    badge: 'In Vorbereitung',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Weitere Automatisierungen',
    body: 'Zusätzliche Workflows und Prozessautomatisierungen – abgestimmt auf die Anforderungen Ihres Betriebs.',
    badge: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Weitere Branchen',
    body: 'HG Automations erweitert sich kontinuierlich auf neue serviceorientierte Branchen in Deutschland.',
    badge: null,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Future() {
  return (
    <section id="zukunft" className="section-padding bg-surface-elevated">
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
            Erweiterbarkeit
          </p>
          <h2 className="text-heading-1 font-bold text-white mb-4">
            HG Automations wächst mit Ihrem Betrieb.
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#9E9B94' }}>
            Der KI Voice Bot ist der erste Schritt. Weitere Werkzeuge zur Prozessautomatisierung befinden sich bereits in Entwicklung.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
        >
          {items.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item.title}
              className="group relative flex flex-col gap-3 p-5 md:p-6 rounded-xl border border-surface-border transition-all duration-300 hover:border-brand-blue/30 hover:shadow-[0_8px_30px_rgba(25,37,170,0.12)] hover:-translate-y-1"
              style={{ backgroundColor: '#0C0E1A' }}
            >
              {/* Badge */}
              {item.badge && (
                <span
                  className="absolute top-4 right-4 text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                  style={{
                    color: '#9E9B94',
                    borderColor: '#1E2340',
                    backgroundColor: '#161A30',
                  }}
                >
                  {item.badge}
                </span>
              )}

              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: item.badge ? 'rgba(25,37,170,0.1)' : 'rgba(25,37,170,0.18)',
                  color: item.badge ? '#4A5488' : '#6B7ECC',
                }}
              >
                {item.icon}
              </div>

              <div>
                <h3
                  className="font-semibold mb-1 text-sm md:text-base"
                  style={{ color: item.badge ? '#6B6860' : '#E8E6E0' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B6860' }}>{item.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-xs mt-8" 
          style={{ color: '#4A4840' }}
        >
          Chatbot und Dashboard befinden sich aktuell in Entwicklung.
        </motion.p>
      </div>
    </section>
  )
}
