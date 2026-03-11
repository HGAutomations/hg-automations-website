import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VoiceBotWidget() {
  const [state, setState] = useState<'idle' | 'terms' | 'calling'>('idle')

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence mode="wait">
        {state === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: [0, -8, 0], 
              scale: 1 
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ 
              duration: 0.3,
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="bg-white rounded-[28px] p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 w-[220px]"
          >
            <div className="flex items-center gap-3 px-2 pt-1 pb-2.5">
              <div className="w-8 h-8 flex items-center justify-center relative">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-blue-100 rounded-full"
                />
                <svg className="relative z-10" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
                  <path d="M16 6C16 6 18.5 13.5 26 16C18.5 18.5 16 26 16 26C16 26 13.5 18.5 6 16C13.5 13.5 16 6 16 6Z" fill="white" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-gray-900 font-medium text-[15px]">Brauchen Sie Hilfe?</span>
            </div>
            <button
              onClick={() => setState('terms')}
              className="w-full bg-[#111111] hover:bg-black text-white rounded-[20px] py-3 px-4 flex items-center justify-center gap-2 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="font-medium text-[15px]">Anruf starten</span>
            </button>
          </motion.div>
        )}

        {state === 'terms' && (
          <motion.div
            key="terms"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-[28px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 w-[320px] sm:w-[360px]"
          >
            <h3 className="text-gray-900 font-semibold text-lg mb-3">Nutzungsbedingungen</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Mit Klick auf "Akzeptieren" und bei jeder Interaktion mit diesem KI-Agenten stimme ich der Aufzeichnung, Speicherung und Weitergabe meiner Kommunikation an Drittanbieter zu, wie in der Datenschutzerklärung beschrieben. Wenn Sie nicht möchten, dass Ihre Gespräche aufgezeichnet werden, nutzen Sie diesen Service bitte nicht.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setState('idle')}
                className="px-5 py-2.5 rounded-full text-gray-700 font-medium text-sm hover:bg-gray-100 transition-colors"
              >
                Abbrechen
              </button>
              <button
                onClick={() => setState('calling')}
                className="px-5 py-2.5 rounded-full bg-[#111111] hover:bg-black text-white font-medium text-sm transition-colors"
              >
                Akzeptieren
              </button>
            </div>
          </motion.div>
        )}

        {state === 'calling' && (
          <motion.div
            key="calling"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-[28px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 w-[220px] flex flex-col items-center"
          >
            <div className="relative w-16 h-16 mb-4 flex items-center justify-center mt-2">
              <motion.div 
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-100 rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
                className="absolute inset-2 bg-blue-200 rounded-full"
              />
              <div className="absolute inset-4 bg-blue-500 rounded-full flex items-center justify-center z-10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
                </svg>
              </div>
            </div>
            <span className="text-gray-900 font-medium text-[15px] mb-1">KI Voice Bot</span>
            <span className="text-gray-500 text-xs mb-6">Verbindungsaufbau...</span>
            
            <button
              onClick={() => setState('idle')}
              className="w-full bg-red-500 hover:bg-red-600 text-white rounded-[20px] py-2.5 px-4 flex items-center justify-center gap-2 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
                <line x1="23" y1="1" x2="1" y2="23"></line>
              </svg>
              <span className="font-medium text-sm">Anruf beenden</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
