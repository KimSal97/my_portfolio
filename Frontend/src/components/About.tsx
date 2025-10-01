import { useState } from 'react'
import { useI18n } from "../i18n/useI18n"
import { motion, AnimatePresence } from 'framer-motion'
import Me from '../assets/me.jpg'
import { ChevronLeft, ChevronRight } from 'lucide-react'


type Slide = {
  text: string
  image: string
}

export function About() {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)

  const slides: Slide[] = [
    { text: t('about.p1'), image: Me },
    { text: t('about.p2'), image: '/images/vfx.jpg' },
    { text: t('about.p3'), image: '/images/code.jpg' },
    { text: t('about.degrees'), image: '/images/study.jpg' },
  ]

  const next = () => setIndex((i) => (i + 1) % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  return (
    <section id="about" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight font-serif">
          {t('about.title')}
        </h2>

        <div className="relative mx-auto w-full max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl bg-[#0B1320] shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={slides[index].image}
                  alt=""
                  className="h-64 w-full object-cover"
                />
                <div className="p-8">
                  <p className="text-xl font-bold text-white leading-relaxed font-serif">
                    {slides[index].text}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Left arrow */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-gray-700/80 p-3 text-white hover:bg-indigo-500 transition"
            >
              <ChevronLeft size={28} strokeWidth={3} />
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-gray-700/80 p-3 text-white hover:bg-indigo-500 transition"
            >
              <ChevronRight size={28} strokeWidth={3} />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-3">
            {slides.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                className="h-3 w-3 rounded-full"
                animate={
                  i === index
                    ? { scale: 1.3, backgroundColor: "#6a6ce2ff", boxShadow: "0 0 10px rgba(99,102,241,0.8)" }
                    : { scale: 1, backgroundColor: "#6b7280", boxShadow: "0 0 0 rgba(0,0,0,0)" }
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
