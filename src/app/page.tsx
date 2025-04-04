import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Membership from '@/components/Membership'
import Mission from '@/components/Mission'
import Partners from '@/components/Partners'
import Projects from '@/components/Projects'
import TeamMembers from '@/components/TeamMembers'
import Values from '@/components/Values'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="container mx-auto px-4">
        <Suspense
          fallback={<div className="h-96 flex items-center justify-center">Loading mission...</div>}
        >
          <Mission />
        </Suspense>

        <Suspense
          fallback={
            <div className="h-96 flex items-center justify-center">
              Loading membership benefits...
            </div>
          }
        >
          <Membership />
        </Suspense>

        <Suspense
          fallback={
            <div className="h-96 flex items-center justify-center">Loading our values...</div>
          }
        >
          <Values />
        </Suspense>

        <Suspense
          fallback={
            <div className="h-96 flex items-center justify-center">Loading team members...</div>
          }
        >
          <TeamMembers />
        </Suspense>

        <Suspense
          fallback={
            <div className="h-96 flex items-center justify-center">Loading projects...</div>
          }
        >
          <Projects />
        </Suspense>

        <Suspense
          fallback={
            <div className="h-96 flex items-center justify-center">Loading partners...</div>
          }
        >
          <Partners />
        </Suspense>
      </div>

      <Footer />
    </main>
  )
}
