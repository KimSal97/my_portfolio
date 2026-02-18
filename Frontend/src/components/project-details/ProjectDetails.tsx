import { projects } from "../../data/projects"
import { motion } from "framer-motion"
import { useI18n } from "../../i18n/useI18n"
import { caseStudies } from "./case-studies"
import { Section } from "./sections/Section"
import { ImageSlot } from "./sections/ImageSlot"
import { ImageGrid } from "./sections/ImageGrid"
import { BulletList } from "./sections/BulletList"

interface ProjectDetailsProps {
  projectId: string
  onBack: () => void
}

export function ProjectDetails({ projectId, onBack }: ProjectDetailsProps) {
  const { t } = useI18n()
  const project = projects.find((p) => p.id === projectId)
  const caseStudy = caseStudies[projectId]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <p>Project not found.</p>
      </div>
    )
  }

  const title = caseStudy?.titleKey ? t(caseStudy.titleKey) : project.title
  const lead = caseStudy?.leadKey ? t(caseStudy.leadKey) : project.description

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <button onClick={onBack} className="text-indigo-400 hover:text-indigo-300 text-sm">
          ← {t("project.back")}
        </button>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-4xl font-bold"
        >
          {title}
        </motion.h1>

        <p className="mt-4 text-white/70">{lead}</p>

        {caseStudy?.hero && (
          <div className="mt-8">
            <ImageSlot
              src={caseStudy.hero.src}
              alt={caseStudy.hero.alt}
              caption={caseStudy.hero.captionKey ? t(caseStudy.hero.captionKey) : undefined}
            />
          </div>
        )}

        {caseStudy?.sections?.map((sec, idx) => {
          const titleText = t(sec.titleKey)

          return (
            <Section key={idx} title={titleText}>
              {sec.type === "text" && (
                <p className="text-white/70">{t(sec.bodyKey)}</p>
              )}

              {sec.type === "bullets" && (
                <BulletList items={sec.itemsKeys.map((k) => t(k))} />
              )}

              {sec.images?.length ? (
                sec.layout === "grid" ? (
                  <ImageGrid
                    items={sec.images.map((img) => ({
                      src: img.src,
                      alt: img.alt,
                      caption: img.captionKey ? t(img.captionKey) : undefined,
                    }))}
                  />
                ) : (
                  <div className="mt-6 space-y-4">
                    {sec.images.map((img) => (
                      <ImageSlot
                        key={img.alt}
                        src={img.src}
                        alt={img.alt}
                        caption={img.captionKey ? t(img.captionKey) : undefined}
                      />
                    ))}
                  </div>
                )
              ) : null}
            </Section>
          )
        })}

        <div className="mt-12 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
