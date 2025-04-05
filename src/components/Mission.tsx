'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Mission() {
  const missionItems = [
    {
      img: '/img/okupljamo.jpg',
      alt: 'Okupljamo',
      title: 'Povezivanje',
      text: 'Stvaramo digitalni ekosistem gde se IT profesionalci povezuju, razmenjuju ideje i grade budućnost tehnologije zajedno.',
    },
    {
      img: '/img/kreiramo.jpg',
      alt: 'Kreiramo',
      title: 'Inovacija',
      text: 'Razvijamo napredne platforme i događaje koji omogućavaju članovima da budu na čelu tehnoloških trendova i inovacija.',
    },
    {
      img: '/img/edukujemo.jpg',
      alt: 'Edukujemo',
      title: 'Transformacija',
      text: 'Kroz napredne edukativne programe i mentorstva, transformišemo talente u lidere koji oblikuju budućnost tehnologije.',
    },
  ]

  return (
    <section
      id="misija"
      className="relative w-full py-16 overflow-hidden border-y border-white/5 bg-gradient-to-b from-slate-950/95 to-slate-900/95"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#e4f1f7] via-[#89c2d9] to-[#61a5c2] [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] [text-shadow:0_1px_2px_rgba(0,0,0,0.2),0_1px_15px_rgba(97,165,194,0.3)] leading-[1.3]"
            >
              Naša Vizija
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-blue-50 leading-relaxed px-4 md:px-0"
            >
              Oblikujemo budućnost tehnologije kroz zajednicu inovatora, pionira i vizionara koji
              zajedno grade digitalni svet sutrašnjice.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {missionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, margin: '-25px' }}
                className="group overflow-hidden flex flex-col h-full rounded-lg md:rounded-xl transform-gpu border-2 border-white/10 transition-all duration-300 hover:border-devclub/50 hover:shadow-[0_0_30px_-5px_rgba(97,165,194,0.3)] hover:-translate-y-1 bg-white/5 backdrop-blur-sm"
              >
                <div className="relative h-48 md:h-60 overflow-hidden border-b border-white/10">
                  <div className="h-full w-full">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                </div>
                <div className="bg-devclub py-4 md:py-5 px-4 md:px-6 transition-colors duration-500 group-hover:bg-devclub/90">
                  <div className="text-devclub-light text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">
                    {item.alt}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="p-4 md:p-6 bg-white flex-grow">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
