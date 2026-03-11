import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 1, 0.8, 1], 
            scale: [0.8, 1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 15, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 65% at 50% -5%, rgba(25,37,170,0.35) 0%, transparent 65%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ 
            opacity: [0, 1, 0.7, 1], 
            scale: [1.2, 1, 1.1, 1],
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0]
          }}
          transition={{ 
            duration: 20, 
            ease: "easeInOut", 
            delay: 0.2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 35% at 85% 55%, rgba(25,37,170,0.12) 0%, transparent 60%)',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.035,
            backgroundImage:
              'linear-gradient(rgba(232,230,224,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,230,224,1) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="container-wide relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">

          {/* Pre-label */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-surface-border bg-surface-card"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" style={{ boxShadow: '0 0 6px rgba(25,37,170,0.8)' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9E9B94' }}>
              KI Voice Bot für den deutschen Mittelstand
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-display font-bold text-white mb-7"
            style={{ letterSpacing: '-0.03em' }}
          >
            Kein verpasster{' '}
            <span
              style={{
                color: '#5B6EF0',
                textShadow: '0 0 40px rgba(91,110,240,0.35)',
              }}
            >
              Anruf
            </span>{' '}
            mehr.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: '#8A8880' }}
          >
            HG Automations automatisiert Ihren Telefonservice –{' '}
            strukturiert, zuverlässig und vollständig auf Deutsch.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-16"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-brand-blue text-white font-semibold text-base transition-all duration-300 hover:bg-brand-blue-light hover:shadow-[0_4px_20px_rgba(25,37,170,0.4)] hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base"
            >
              Telefonservice automatisieren
              <ArrowRight />
            </a>
            <a
              href="#problem"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg border border-surface-border text-base font-medium transition-all duration-300 hover:bg-surface-card hover:border-brand-blue/40 hover:-translate-y-1"
              style={{ color: '#C8C5BE' }}
            >
              Mehr erfahren
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-5 pt-8 border-t"
            style={{ borderColor: '#1A1E33' }}
          >
            <img
              src="/dsgvokonform.png"
              alt="DSGVO-konform"
              className="h-9 w-auto"
              style={{ opacity: 0.75 }}
            />
            <span className="w-px h-6 hidden sm:block" style={{ backgroundColor: '#1E2340' }} aria-hidden />
            <img
              src="/made-in-germany.svg"
              alt="Made in Germany"
              className="h-9 w-auto"
              style={{ opacity: 0.75 }}
            />
            <span className="w-px h-6 hidden sm:block" style={{ backgroundColor: '#1E2340' }} aria-hidden />
            <span className="text-xs font-medium" style={{ color: '#5A5850' }}>
              SHK · Elektro · Handwerk · Dienstleistung
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
