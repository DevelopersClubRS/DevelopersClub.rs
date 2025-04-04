'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav>
        <div>
          <Link href="/">
            <Image
              src="/img/developers-club-logo-white.svg"
              alt="Developers Club"
              width={120}
              height={120}
            />
          </Link>

          <div>
            {['Misija', 'Vrednosti', 'Tim', 'Projekti', 'Partneri'].map((item, index) => (
              <Link 
                key={index}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
            <Link 
              href="https://forms.gle/kFiA1KkoXjrKGMDV6" 
              target="_blank"
            >
              Pridruži se
            </Link>
          </div>
          
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div>
        <div>
          <div>
            <h1>
              Delimo znanje.
              <br />
              <span>
                Gradimo budućnost.
              </span>
            </h1>

            <p>
              Klub Programera je mesto okupljanja IT profesionalaca, gde se razmenjuju ideje,
              iskustva i znanje. Kroz edukativne događaje, zajedničke projekte i razvojne
              inicijative, gradimo snažnu zajednicu stručnjaka koji zajedno oblikuju budućnost
              tehnologije.
            </p>

            <div>
              <Link
                href="https://forms.gle/kFiA1KkoXjrKGMDV6"
                target="_blank"
              >
                Pridruži se i postani deo priče
                <svg
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

      <div>
        <svg
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
