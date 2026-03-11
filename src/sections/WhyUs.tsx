import { motion } from 'framer-motion'

const points = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Definierte, nachvollziehbare Prozesse',
    body: 'Kein Rauschen, keine Improvisation. Was der Voice Bot tut, ist klar strukturiert und vollständig dokumentiert.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Technologie, die sich nicht aufdrängt',
    body: 'Aktuelle KI-Technologie, eingesetzt wo sie nützt – ohne unnötige Komplexität oder Abhängigkeiten für Ihren Betrieb.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Klare, natürliche Sprachführung auf Deutsch',
    body: 'Der Voice Bot kommuniziert professionell und verständlich – Ihre Kunden merken keinen Unterschied zur persönlichen Betreuung.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Entwickelt für deutsche Betriebe',
    body: 'Von Anfang an auf den deutschen Markt ausgerichtet – rechtlich konform, sprachlich passend, DSGVO-konform.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    },
  },
}

export default function WhyUs() {
  return (
    <section id="warum" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1925AA' }}>
              Warum HG Automations
            </p>
            <h2 className="text-heading-1 font-bold text-white mb-4">
              Automatisierung, die Ihren Betrieb voranbringt.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: '#9E9B94' }}>
              Kein generisches Produkt von der Stange. HG Automations wurde gezielt für serviceorientierte Betriebe in Deutschland entwickelt.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 items-center">
              <img src="/dsgvokonform.png" alt="DSGVO-konform" className="h-10 w-auto opacity-90" />
              <img src="/made-in-germany.svg" alt="Made in Germany" className="h-10 w-auto opacity-90" />
            </div>
          </motion.div>

          {/* Right: Points */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col gap-4"
          >
            {points.map((p) => (
              <motion.div
                variants={itemVariants}
                key={p.title}
                className="group flex gap-4 p-5 md:p-6 rounded-xl border border-surface-border transition-all duration-300 hover:border-brand-blue/40 hover:shadow-[0_8px_30px_rgba(25,37,170,0.12)] hover:-translate-y-1 bg-surface-card"
                style={{ backgroundColor: '#111527' }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(25,37,170,0.18)', color: '#6B7ECC' }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 text-sm md:text-base">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9E9B94' }}>{p.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
