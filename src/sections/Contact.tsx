import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BRANCHEN = [
  'SHK (Sanitär, Heizung, Klima)',
  'Elektro',
  'Sanitär',
  'Heizung',
  'Klima / Lüftung',
  'Sonstige',
]

const AUFKOMMEN = [
  'Bis 20 Anrufe / Tag',
  '20–50 Anrufe / Tag',
  '50–100 Anrufe / Tag',
  'Über 100 Anrufe / Tag',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-surface-border text-sm text-white placeholder-[#52504A] transition-all duration-300 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 focus:shadow-[0_0_15px_rgba(25,37,170,0.2)] appearance-none hover:border-brand-blue/50'
const inputStyle = { backgroundColor: '#0A0C18' }

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5 group">
      <label htmlFor={id} className="text-xs font-medium transition-colors duration-300 group-focus-within:text-brand-blue" style={{ color: '#7A7870' }}>
        {label}
        {required ? (
          <span className="ml-1" style={{ color: '#1925AA' }}>*</span>
        ) : (
          <span className="ml-1.5 text-[10px]" style={{ color: '#3A3830' }}>(optional)</span>
        )}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json() as { success: boolean }
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left (2 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1925AA' }}>
              Kontakt
            </p>
            <h2 className="text-heading-1 font-bold text-white mb-4">
              Sprechen wir über Ihren Betrieb.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: '#8A8880' }}>
              Schildern Sie uns kurz Ihre Situation – wir melden uns zeitnah und unverbindlich bei Ihnen.
            </p>

            <div className="flex flex-col gap-3">
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: '#161A30' }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-surface-border"
                style={{ backgroundColor: '#0F1120' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(25,37,170,0.18)', color: '#6B7ECC' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#7A7870' }}>
                  DSGVO-konform – Ihre Daten werden vertraulich und sicher behandelt.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: '#161A30' }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-surface-border"
                style={{ backgroundColor: '#0F1120' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: 'rgba(25,37,170,0.18)', color: '#6B7ECC' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#7A7870' }}>
                  Antwort innerhalb von 1–2 Werktagen.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-3 rounded-2xl border border-surface-border p-6 md:p-8 relative overflow-hidden"
            style={{ backgroundColor: '#0F1120' }}
          >
            {/* Subtle glow background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-10 relative z-10"
                >
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(25,37,170,0.2)' }}
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#6B7ECC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Vielen Dank für Ihre Anfrage.</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#7A7870' }}>
                    Wir haben Ihre Nachricht erhalten und melden uns zeitnah bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit} 
                  noValidate 
                  className="flex flex-col gap-5 relative z-10"
                >
                  <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY ?? ''} />
                  <input type="hidden" name="subject" value="Neue Anfrage – HG Automations Website" />
                  <input type="checkbox" name="botcheck" tabIndex={-1} style={{ position: 'absolute', left: '-9999px' }} />

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field id="name" label="Name" required>
                      <input
                        id="name" name="name" type="text" required
                        placeholder="Ihr vollständiger Name"
                        className={inputClass} style={inputStyle}
                      />
                    </Field>
                    <Field id="email" label="E-Mail" required>
                      <input
                        id="email" name="email" type="email" required
                        placeholder="ihre@email.de"
                        className={inputClass} style={inputStyle}
                      />
                    </Field>
                  </div>

                  {/* Company + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field id="company" label="Unternehmen" required>
                      <input
                        id="company" name="company" type="text" required
                        placeholder="Unternehmensname"
                        className={inputClass} style={inputStyle}
                      />
                    </Field>
                    <Field id="phone" label="Telefon">
                      <input
                        id="phone" name="phone" type="tel"
                        placeholder="+49 ..."
                        className={inputClass} style={inputStyle}
                      />
                    </Field>
                  </div>

                  {/* Branche + Aufkommen */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field id="branche" label="Branche" required>
                      <select
                        id="branche" name="branche" required defaultValue=""
                        className={inputClass} style={inputStyle}
                      >
                        <option value="" disabled style={{ color: '#52504A' }}>Bitte wählen …</option>
                        {BRANCHEN.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </Field>
                    <Field id="aufkommen" label="Telefonaufkommen">
                      <select
                        id="aufkommen" name="aufkommen" defaultValue=""
                        className={inputClass} style={inputStyle}
                      >
                        <option value="" style={{ color: '#52504A' }}>Bitte wählen …</option>
                        {AUFKOMMEN.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                    </Field>
                  </div>

                  {/* Nachricht */}
                  <Field id="message" label="Nachricht">
                    <textarea
                      id="message" name="message" rows={4}
                      placeholder="Was möchten Sie automatisieren? Was ist Ihre größte Herausforderung?"
                      className={`${inputClass} resize-none`} style={inputStyle}
                    />
                  </Field>

                  {/* Error */}
                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        className="flex items-start gap-3 px-4 py-3 rounded-lg border text-sm overflow-hidden"
                        style={{
                          backgroundColor: 'rgba(220,50,50,0.07)',
                          borderColor: 'rgba(220,50,50,0.25)',
                          color: '#F87171',
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5" aria-hidden>
                          <path d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-1 w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-brand-blue text-white text-sm font-semibold transition-all duration-300 hover:bg-brand-blue-light hover:shadow-[0_4px_20px_rgba(25,37,170,0.4)] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1120] hover:-translate-y-0.5"
                  >
                    {status === 'loading' ? (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        Telefonservice anfragen
                        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center" style={{ fontSize: '10px', color: '#3A3830' }}>
                    Mit dem Absenden stimmen Sie unserer{' '}
                    <a href="/datenschutz" className="underline transition-colors hover:text-neutral-muted">
                      Datenschutzerklärung
                    </a>{' '}
                    zu.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
