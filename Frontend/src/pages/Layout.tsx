import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { ProjectsTabs } from '../components/ProjectsTabs'
import { Education } from '../components/Education'
import { Footer } from '../components/Footer'
import { I18nProvider } from '../i18n/I18nProvider'

export default function Layout() {
  return (
    <I18nProvider>
      <div className="min-h-dvh bg-gray-950 text-white">
        <Navbar />
        <main>
          <Hero />
          <div className="h-32 bg-gradient-to-b from-gray-950 to-gray-900"></div>
          <About />
          <Education />
          <div className="h-32 bg-gradient-to-b from-gray-900 to-gray-950"></div>
          <ProjectsTabs />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
