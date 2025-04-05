import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Membership from '../components/Membership'
import Mission from '../components/Mission'
import Partners from '../components/Partners'
import Projects from '../components/Projects'
import TeamMembers from '../components/TeamMembers'
import Values from '../components/Values'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Mission />
      <Membership />
      <Values />
      <TeamMembers />
      <Projects />
      <Partners />
      <Footer />
    </main>
  )
}
