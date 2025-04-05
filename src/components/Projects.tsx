'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Projects() {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-slate-950/95">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#e4f1f7] via-[#89c2d9] to-[#61a5c2] [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] [text-shadow:0_1px_2px_rgba(0,0,0,0.2),0_1px_15px_rgba(97,165,194,0.3)] leading-[1.1]"
          >
            Pogledaj naše projekte i događaje
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-blue-50/90 mb-8 leading-relaxed"
          >
            Pogledajte kako naši članovi rade na inovativnim projektima i učestvuju u ekskluzivnim
            događanjima, gde stiču nova znanja i stvaraju veze sa profesionalcima iz celog sveta.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="https://github.com/developersClubRS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-devclub rounded-lg hover:bg-devclub/90 transition-colors duration-300 group"
            >
              Saznaj više
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
                className="w-3 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
