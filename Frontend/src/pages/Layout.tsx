import { useEffect, useState } from "react"
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { ProjectsTabs } from '../components/ProjectsTabs'
import { Education } from '../components/Education'
import { Footer } from '../components/Footer'
import { I18nProvider } from '../i18n/I18nProvider'
import { ProjectDetails } from '../components/project-details/ProjectDetails'

export default function Layout() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash 
      if (hash.startsWith("#project/")) {
        const id = decodeURIComponent(hash.replace("#project/", ""))
        setSelectedProjectId(id || null)
      } else {
        setSelectedProjectId(null)
      }
    }

    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)
    return () => window.removeEventListener("hashchange", syncFromHash)
  }, [])

  const handleSelectProject = (id: string) => {
    setSelectedProjectId(id)
    window.history.pushState(null, "", `#project/${encodeURIComponent(id)}`)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBack = () => {
    setSelectedProjectId(null)
    window.history.pushState(null, "", `#projects`)
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }, 0)
  }

  return (
    <I18nProvider>
      <div className="min-h-dvh bg-gray-950 text-white">
        <Navbar />

        <main>
          {!selectedProjectId ? (
            <>
              <Hero />
              <div className="h-32 bg-gradient-to-b from-gray-950 to-gray-900"></div>
              <About />
              <Education />
              <div className="h-32 bg-gradient-to-b from-gray-900 to-gray-950"></div>

              <ProjectsTabs onSelectProject={handleSelectProject} />
            </>
          ) : (
            <ProjectDetails
              projectId={selectedProjectId}
              onBack={handleBack}
            />
          )}
        </main>

        {!selectedProjectId && <Footer />}
      </div>
    </I18nProvider>
  )
}
