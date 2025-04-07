import Header from '../components/Header'
import Footer from '../components/Footer'
import Mission from '../components/Mission'
import Membership from '../components/Membership'
import Partners from '../components/Partners'
import Projects from '../components/Projects'
import TeamMembers from '../components/TeamMembers'
import Values from '../components/Values'

export default function Home() {
  return (
    <main>
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
