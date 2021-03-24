import Head from 'next/head'
import { AboutMe } from '../components/AboutMe'
import { BackgroundAnimation } from '../components/BackgroundAnimation'
import { Connect } from '../components/Connect'
import { HeroSection } from '../components/HeroSection'
import { ProjectList } from '../components/ProjectList'
import { TechIUse } from '../components/TechIUse'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vipansh Thakur | Front End Developer  </title>
        <link rel="icon" href="/vip_fc.jpg" />
      </Head>
      <div className="bg-red-300">

        <BackgroundAnimation>
          <div className="container mx-auto">
            <HeroSection />
            <div className="">

              <TechIUse />
              <ProjectList />
              <AboutMe />
              <Connect />
            </div>
          </div>
        </BackgroundAnimation>
      </div>

    </div>
  )
}
