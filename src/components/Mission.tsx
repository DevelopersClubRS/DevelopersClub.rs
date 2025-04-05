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
      className="relative w-full py-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900/95"
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
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#e4f1f7] via-[#89c2d9] to-[#61a5c2] [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] [text-shadow:0_1px_2px_rgba(0,0,0,0.2),0_1px_15px_rgba(97,165,194,0.3)] leading-[1.1]"
            >
              Naša Vizija
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-blue-50 leading-relaxed"
            >
              Oblikujemo budućnost tehnologije kroz zajednicu inovatora, pionira i vizionara koji
              zajedno grade digitalni svet sutrašnjice.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {missionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, margin: '-50px' }}
                className="overflow-hidden flex flex-col h-full rounded-xl transform-gpu border border-white/10"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="h-full w-full">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                </div>
                <div className="bg-devclub py-5 px-6">
                  <div className="text-devclub-light text-sm font-semibold uppercase tracking-wider mb-1">
                    {item.alt}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="p-6 bg-white flex-grow">
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
