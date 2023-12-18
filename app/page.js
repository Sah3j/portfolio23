import AboutMe from '@/components/pages/AboutMe'
import HeroSection from '@/components/pages/HeroSection'
import Projects from '@/components/pages/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col px-2 md:px-6 lg:px-10 xl:px-20">
      <section>
        <HeroSection/>
      </section>
      <section>
        <Projects/>
      </section>
      <section>
        <AboutMe/>
      </section>
    </main>
  )
}
