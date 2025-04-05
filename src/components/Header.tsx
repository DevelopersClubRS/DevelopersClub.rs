'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="relative w-full">
      {/* Background container - fixed height instead of responsive */}
      <div className="absolute inset-0 w-full" style={{ height: '100vh' }}>
        <Image
          src="/img/ct-meetup.jpg"
          alt="CT Meetup Background"
          priority
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navigation - keep existing structure */}
      <nav className={`fixed w-full z-50 ${scrolled ? 'bg-black/80' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="relative z-10">
            <Image
              src="/img/developers-club-logo-white.svg"
              alt="Developers Club"
              width={120}
              height={120}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {['Misija', 'Vrednosti', 'Tim', 'Projekti', 'Partneri'].map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="relative text-white transition-all duration-300 group"
                onClick={e => {
                  e.preventDefault()
                  const element = document.getElementById(item.toLowerCase())
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-devclub transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="https://forms.gle/kFiA1KkoXjrKGMDV6"
              target="_blank"
              className="bg-devclub hover:bg-devclub-dark text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-devclub/20 border border-transparent hover:border-white/10"
            >
              Pridruži se
            </Link>
          </div>

          <button
            className="md:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-x-0 top-0 pt-20 pb-6 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-y-0 opacity-100 shadow-xl' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col space-y-4">
              {['Misija', 'Vrednosti', 'Tim', 'Projekti', 'Partneri'].map((item, index) => (
                <Link
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-xl font-medium border-b border-gray-800 pb-2 transition-all duration-300"
                  onClick={e => {
                    e.preventDefault()
                    const element = document.getElementById(item.toLowerCase())
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                      setMobileMenuOpen(false)
                    }
                  }}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="https://forms.gle/kFiA1KkoXjrKGMDV6"
                target="_blank"
                className="bg-devclub hover:bg-devclub-dark text-white px-6 py-3 rounded-full text-xl font-medium transition-all duration-300 hover:scale-105 mt-4 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pridruži se
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero content with fixed height */}
      <div className="relative w-full" style={{ height: '100vh' }}>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="text-white">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
                  Delimo znanje.
                  <br />
                  <span className="text-devclub">Gradimo budućnost.</span>
                </h1>

                <p className="text-sm sm:text-base md:text-xl mb-6 md:mb-8 text-gray-200">
                  Klub Programera je mesto okupljanja IT profesionalaca, gde se razmenjuju ideje,
                  iskustva i znanje. Kroz edukativne događaje, zajedničke projekte i razvojne
                  inicijative, gradimo snažnu zajednicu stručnjaka koji zajedno oblikuju budućnost
                  tehnologije.
                </p>

                <div>
                  <Link
                    href="https://forms.gle/kFiA1KkoXjrKGMDV6"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 bg-devclub hover:bg-devclub-dark text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-devclub/20 border border-transparent hover:border-white/10 group"
                  >
                    Pridruži se i postani deo priče
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - position relative to the bottom of viewport */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer z-10"
        onClick={() => {
          const element = document.getElementById('misija')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </header>
  )
}
