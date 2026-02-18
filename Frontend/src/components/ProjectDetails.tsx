import { projects } from "../data/projects"
import { motion } from "framer-motion"
import { useI18n } from "../i18n/useI18n"

interface ProjectDetailsProps {
  projectId: string
  onBack: () => void
}

function ImageSlot({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="mt-6 rounded-xl border border-white/10 overflow-hidden bg-white/5">
      <img src={src} alt={alt} className="w-full object-cover" />
      {caption && (
        <figcaption className="px-4 py-3 text-sm text-white/60">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function ProjectDetails({ projectId, onBack }: ProjectDetailsProps) {
  const { t } = useI18n()
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <p>Project not found.</p>
      </div>
    )
  }

  const isStorage = project.id === "storage-management"

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <button
          onClick={onBack}
          className="text-indigo-400 hover:text-indigo-300 text-sm"
        >
          ← {t("project.back")}
        </button>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-4xl font-bold"
        >
          {isStorage ? t("project.storage.title") : project.title}
        </motion.h1>

        <p className="mt-4 text-white/70">
          {isStorage ? t("project.storage.lead") : project.description}
        </p>

        {/* HERO IMAGE SLOT */}
        <ImageSlot
          src="/images/storage/hero.png"
          alt="Storage Management hero"
          caption="[IMAGE] Dashboard overview (replace with your screenshot)"
        />

        {isStorage ? (
          <>
            {/* PROBLEM */}
            <section className="mt-14">
              <h2 className="text-2xl font-semibold mb-4">
                {t("project.section.problem")}
              </h2>
              <p className="text-white/70">
                {t("project.storage.problem")}
              </p>

              <ImageSlot
                src="/images/storage/problem.png"
                alt="Problem screenshot"
                caption="[IMAGE] Example: low stock warning / inventory overview"
              />
            </section>

            {/* SOLUTION */}
            <section className="mt-14">
              <h2 className="text-2xl font-semibold mb-4">
                {t("project.section.solution")}
              </h2>
              <p className="text-white/70">
                {t("project.storage.solution")}
              </p>

              <ImageSlot
                src="/images/storage/solution.png"
                alt="Solution screenshot"
                caption="[IMAGE] Example: order/cart flow or products page"
              />
            </section>

            {/* ARCHITECTURE */}
            <section className="mt-14">
              <h2 className="text-2xl font-semibold mb-4">
                {t("project.section.architecture")}
              </h2>

              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>{t("project.storage.arch.1")}</li>
                <li>{t("project.storage.arch.2")}</li>
                <li>{t("project.storage.arch.3")}</li>
                <li>{t("project.storage.arch.4")}</li>
              </ul>

              <ImageSlot
                src="/images/storage/architecture.png"
                alt="Architecture diagram"
                caption="[IMAGE] Diagram: Routes → Controller → Service → Repository"
              />
            </section>

            {/* FEATURES */}
            <section className="mt-14">
              <h2 className="text-2xl font-semibold mb-4">
                {t("project.section.features")}
              </h2>

              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>{t("project.storage.features.1")}</li>
                <li>{t("project.storage.features.2")}</li>
                <li>{t("project.storage.features.3")}</li>
                <li>{t("project.storage.features.4")}</li>
                <li>{t("project.storage.features.5")}</li>
                <li>{t("project.storage.features.6")}</li>
              </ul>

              <ImageSlot
                src="/images/storage/features.png"
                alt="Features screenshot"
                caption="[IMAGE] Example: statistics page or order history"
              />
            </section>

            {/* ROLE */}
            <section className="mt-14">
              <h2 className="text-2xl font-semibold mb-4">
                {t("project.section.role")}
              </h2>
              <p className="text-white/70">
                {t("project.storage.role")}
              </p>
            </section>

            {/* CHALLENGES */}
            <section className="mt-14">
              <h2 className="text-2xl font-semibold mb-4">
                {t("project.section.challenges")}
              </h2>
              <p className="text-white/70">
                {t("project.storage.challenges")}
              </p>
            </section>
          </>
        ) : (
          <>
            {/* Simple fallback for other projects (we can expand later) */}
            <section className="mt-14">
              <h2 className="text-2xl font-semibold mb-4">
                {t("projects.description")}
              </h2>
              <p className="text-white/70">
                {project.description}
              </p>
            </section>
          </>
        )}

        {/* TAGS */}
        <div className="mt-12 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
