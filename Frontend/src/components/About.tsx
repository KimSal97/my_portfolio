import { useState } from 'react'
import { useI18n } from "../i18n/useI18n"
import { motion, AnimatePresence } from 'framer-motion'
import Me from '../assets/me.jpg'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function About() {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)

  const slides = [
    t('about.p1'),
    t('about.p2'),
    t('about.p3'),
  ]

  const next = () => setIndex((i) => (i + 1) % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  return (
    <section id="about" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="mb-8 text-4xl font-extrabold tracking-tight font-serif">
          {t('about.title')}
        </h2>

        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-[#0B1320] shadow-xl">

          {/* FAST BILDE */}
          <img
            src={Me}
            alt="Kim Salihu"
            className="h-64 w-full object-cover"
          />

          {/* TEKST + PILER */}
          <div className="flex items-center justify-between gap-6 p-8">

            <button
              onClick={prev}
              className="rounded-full bg-gray-700 p-3 hover:bg-indigo-500 transition"
            >
              <ChevronLeft size={26} strokeWidth={3}/>
            </button>

            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="flex-1 text-xl font-bold leading-relaxed font-serif"
              >
                {slides[index]}
              </motion.p>
            </AnimatePresence>

            <button
              onClick={next}
              className="rounded-full bg-gray-700 p-3 hover:bg-indigo-500 transition"
            >
              <ChevronRight size={26} strokeWidth={3}/>
            </button>

          </div>

          {/* DOTS */}
          <div className="pb-8 flex justify-center gap-3">
            {slides.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                className="h-3 w-3 rounded-full"
                animate={
                  i === index
                    ? { scale: 1.3, backgroundColor: "#6a6ce2ff", boxShadow: "0 0 10px rgba(99,102,241,0.8)" }
                    : { scale: 1, backgroundColor: "#6b7280" }
                }
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}