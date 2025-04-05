'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Values() {
  const [selectedValue, setSelectedValue] = useState(0)
  const values = [
    {
      img: '/img/vrednosti-integritet.jpg',
      alt: 'Integritet',
      title: 'Integritet',
      text: 'Biramo ispravno, ne brže ili lakše. Stojimo iza svojih reči i dela, jer verujemo da je integritet temelj svakog uspeha.',
    },
    {
      img: '/img/vrednosti-majstorstvo.jpg',
      alt: 'Majstorstvo',
      title: 'Majstorstvo',
      text: 'Naš cilj je da podignemo stručnost na najviši nivo, inoviramo i postavljamo prava pitanja kako bismo našli najbolja rešenja za izazove pred nama.',
    },
    {
      img: '/img/vrednosti-profesionalizam.jpg',
      alt: 'Profesionalizam',
      title: 'Profesionalizam',
      text: 'Posvećeni smo kvalitetu, ponosimo se svojim radom i uvek se trudimo da završimo svaki zadatak sa vrhunskim rezultatom.',
    },
    {
      img: '/img/vrednosti-inspiracija.jpg',
      alt: 'Inspiracija',
      title: 'Inspiracija',
      text: 'Trudimo se da budemo inspiracija drugima, motivišući ljude da postanu bolji i ostvare više nego što su mislili da mogu.',
    },
    {
      img: '/img/vrednosti-neprepotentnost.jpg',
      alt: 'Neprepotentnost',
      title: 'Neprepotentnost',
      text: 'Svesni smo svojih granica i prihvatamo činjenicu da ne možemo znati sve. Greške su deo procesa učenja, a mi uvek težimo napretku.',
    },
  ]

  return (
    <section
      id="vrednosti"
      className="relative w-full py-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900/95"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#e4f1f7] via-[#89c2d9] to-[#61a5c2] [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] [text-shadow:0_1px_2px_rgba(0,0,0,0.2),0_1px_15px_rgba(97,165,194,0.3)] leading-[1.3]">
            Naše vrednosti
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Left Panel - Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedValue}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="sticky top-24 h-[300px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden border border-devclub/30 shadow-[0_0_30px_-5px_rgba(97,165,194,0.3)]"
            >
              <Image
                src={values[selectedValue].img}
                alt={values[selectedValue].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {values[selectedValue].title}
                </h3>
                <p className="text-blue-50/90 text-sm md:text-base">{values[selectedValue].text}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Panel - Values List */}
          <div className="space-y-2 md:space-y-3">
            {values.map((value, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedValue(index)}
                whileHover={{ x: 8 }}
                className={`w-full text-left px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl border transition-all duration-300 ${
                  selectedValue === index
                    ? 'border-devclub bg-white/10 shadow-[0_0_30px_-5px_rgba(97,165,194,0.3)]'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <h3 className="text-lg md:text-2xl font-bold text-white">{value.title}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
