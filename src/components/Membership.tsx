'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BeakerIcon, UserGroupIcon, RocketLaunchIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

export default function Membership() {
  const benefits = [
    {
      icon: BeakerIcon,
      text: "Pristup ekskluzivnim događajima i radionicama"
    },
    {
      icon: UserGroupIcon,
      text: "Mogućnost umrežavanja sa stručnjacima iz različitih oblasti IT industrije"
    },
    {
      icon: RocketLaunchIcon,
      text: "Priliku da učestvujete u zajedničkim projektima i stvarate inovativna rešenja"
    },
    {
      icon: AcademicCapIcon,
      text: "Pristup resursima koji vam pomažu da postanete autoritet u svojoj oblasti"
    }
  ]

  return (
    <section 
      id="membership"
      className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#e4f1f7] via-[#89c2d9] to-[#61a5c2] [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] [text-shadow:0_1px_2px_rgba(0,0,0,0.2),0_1px_15px_rgba(97,165,194,0.3)] leading-[1.1]">
              Prednosti članstva u Developers Club-u
            </h2>
            <p className="text-lg text-blue-50">Kao član Developers Club-a, dobićete:</p>

            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-devclub/10 group-hover:bg-devclub/20 transition-colors duration-300">
                    <benefit.icon className="w-5 h-5 text-devclub" />
                  </div>
                  <span className="text-lg text-blue-50/90 group-hover:text-blue-50 pt-1 transition-colors duration-300">
                    {benefit.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/20">
              <Image 
                src="/img/welcome.jpg" 
                alt="Welcome to Developers Club" 
                width={600} 
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}