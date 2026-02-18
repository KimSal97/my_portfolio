import type { Project } from '../data/projects'
import { useI18n } from "../i18n/useI18n"
import { motion } from 'framer-motion'

interface ProjectCardProps {
  project: Project
  onSelectProject?: (id: string) => void
}

export function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  const { t } = useI18n()

  const {
    titleKey,
    descriptionKey,
    tags,
    image,
    repoUrl,
    id,
  } = project

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm"
    >
      {image && (
        <div className="mb-3 aspect-[16/9] overflow-hidden rounded-xl relative">
          <img
            src={image}
            alt={t(titleKey)}
            className="h-full w-full object-cover scale-125 transition duration-500 group-hover:scale-125"
            loading="lazy"
          />


          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      <h3 className="text-lg font-semibold text-white">
        {t(titleKey)}
      </h3>

      <p className="mt-2 text-sm text-white/80">
        {t(descriptionKey)}
      </p>

      <ul className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          onClick={() => onSelectProject?.(id)}
          className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-indigo-500"
        >
          {t("projects.view")}
        </button>

        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/20 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {t("projects.source")}
          </a>
        )}
      </div>
    </motion.article>
  )
}
