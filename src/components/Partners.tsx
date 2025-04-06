'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Partners() {
  const partners = [
    {
      name: 'Code Tailor',
      img: '/img/prijatelji/ct-logo-black.png',
      url: 'https://codetailor.rs',
    },
    {
      name: 'Škola Rajak',
      img: '/img/prijatelji/skola-rajak.png',
      url: 'https://www.rajak.rs/',
      dark: true,
    },
    {
      name: 'Podcast IT tipa',
      img: '/img/prijatelji/podcast-it-tipa-1024x359.png',
      url: 'https://itpodkast.com/',
    },
    {
      name: 'Culture Impact',
      img: '/img/prijatelji/culture-impact.jpeg',
      url: 'https://culturemanagement.rs/',
    },
    {
      name: 'VeloxDB',
      img: '/img/prijatelji/veloxdb.png',
      url: 'https://www.vlxdb.com/',
      dark: true,
    },
    {
      name: 'Positive Tech',
      img: '/img/prijatelji/positivetech-logo-dark.png',
      url: 'https://positivetechit.com/',
      dark: true,
    },
    { name: 'NTP NS', img: '/img/prijatelji/ntpns.png', url: 'https://ntpns.rs/' },
    { name: 'Heapspace', img: '/img/prijatelji/heapspace.png', url: 'https://heapspace.rs/' },
  ]

  return (
    <section id="partneri" className="relative w-full py-24 overflow-hidden bg-slate-950/95">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-devclub">
            Naši prijatelji
          </h2>
          <p className="text-base md:text-lg text-blue-50/90">
            Firme i organizacije koje podržavaju rad <em>Developers club</em>-a.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {partners.map((partner, i) => (
            <Link
              href={partner.url}
              target="_blank"
              key={i}
              className="group flex items-center justify-center p-6 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.03] hover:from-devclub/10 hover:to-devclub/5 border-2 border-white/10 hover:border-devclub/30 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(97,165,194,0.3)]"
            >
              <div
                className={`relative w-full h-12 ${
                  partner.dark
                    ? 'bg-gray-900/90 backdrop-blur-sm rounded-lg'
                    : 'bg-white/90 backdrop-blur-sm rounded-lg'
                }`}
              >
                <Image
                  src={partner.img}
                  alt={partner.name}
                  fill
                  loading="eager"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
