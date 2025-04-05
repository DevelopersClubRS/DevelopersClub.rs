'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TeamMembers() {
  const members = [
    { name: "Aleksandar Sabo", img: "/img/members/aleksandar-sabo.jpg" },
    { name: "Sebastian Novak", img: "/img/members/sebastian-novak.jpeg" },
    { name: "Dejan Miličić", img: "/img/members/dejan-milicic.jpg" },
    { name: "Silvija Baro-Čalija", img: "/img/members/silvija-baro-čalija.jpg" },
    { name: "Ognjen Stanić", img: "/img/members/ognjen-stanić.jpg" },
    { name: "Nikola Knežević", img: "/img/members/nikola-knezevic.jpg" }
  ]

  return (
    <section id="members" className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-slate-950">
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
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#e4f1f7] via-[#89c2d9] to-[#61a5c2] [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] [text-shadow:0_1px_2px_rgba(0,0,0,0.2),0_1px_15px_rgba(97,165,194,0.3)] leading-[1.1]">
            Upoznaj naš tim
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden border-2 border-white/10 transition-all duration-300 md:group-hover:border-devclub/50 md:group-hover:shadow-[0_0_30px_-5px_rgba(97,165,194,0.3)]">
                <Image 
                  src={member.img} 
                  alt={member.name} 
                  fill
                  className="object-cover transition-transform duration-500 md:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
                  <h5 className="text-white font-semibold text-center text-xs md:text-base">{member.name}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}