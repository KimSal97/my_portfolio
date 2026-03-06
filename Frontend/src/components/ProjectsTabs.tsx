import { useState } from 'react'
import { useI18n } from "../i18n/useI18n"
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ParticlesBackground } from './ParticlesBackground'
import { VimeoEmbed } from './VimeoEmbed'
import { ChefGallery } from "../components/chef/ChefGallery";

interface ProjectsTabsProps {
  onSelectProject: (id: string) => void
}

function TabButton({
  active,
  onClick,
  children
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-sm ${active ? 'bg-indigo-500 text-white' : 'bg-white/5 text-white/80 hover:bg-white/10'
        }`}
    >
      {children}
    </button>
  )
}

export function ProjectsTabs({ onSelectProject }: ProjectsTabsProps) {
  const { t } = useI18n()
  const [tab, setTab] = useState<'chef' | 'vfx' | 'cs'>('cs')

  return (
    <section id="projects" className="relative bg-gray-950 py-20 text-white">
      <ParticlesBackground type="bubbles" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <header className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('projects.title')}
          </h2>
          <p className="mt-2 text-white/70">
            {t('projects.subtitle')}
          </p>
        </header>

        <div className="mb-8 flex flex-wrap gap-2.5">
          <TabButton active={tab === 'cs'} onClick={() => setTab('cs')}>
            {t('projects.tabs.cs')}
          </TabButton>
          <TabButton active={tab === 'vfx'} onClick={() => setTab('vfx')}>
            {t('projects.tabs.vfx')}
          </TabButton>
          <TabButton active={tab === 'chef'} onClick={() => setTab('chef')}>
            {t('projects.tabs.chef')}
          </TabButton>
        </div>

        {tab === "chef" && (
          <div>
            <p className="mb-6 text-white/70">{t("projects.chef.subtitle")}</p>
            <ChefGallery />
          </div>
        )}

        {tab === 'vfx' && (
          <div>
            <p className="mb-6 text-white/70">{t('projects.vfx.subtitle')}</p>
            <VimeoEmbed videoUrl="https://vimeo.com/709398946" />
          </div>
        )}

        {tab === 'cs' && (
          <div>
            <p className="mb-6 text-white/70">{t('projects.cs.subtitle')}</p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  onSelectProject={onSelectProject}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
