import { useState } from "react"
import { chefItems } from "../../data/chef"
import { ImageModal } from "../project-details/sections/ImageModal"
import { useI18n } from "../../i18n/useI18n"

export function ChefGallery() {
  const { t } = useI18n()

  const [selected, setSelected] = useState<null | {
    src: string
    alt: string
    caption?: string
  }>(null)

  return (
    <>
       <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {chefItems.map((item) => {
          const desc = t(item.description)

          return (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg cursor-pointer"
              onClick={() =>
                setSelected({
                  src: item.imageUrl,
                  alt: desc,
                  caption: desc,
                })
              }
            >
              <div className="aspect-video overflow-hidden bg-black/20">
                <img
                  src={item.imageUrl}
                  alt={desc}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <p className="text-sm text-white/80">{desc}</p>
              </div>
            </article>
          )
        })}
      </div>

      <ImageModal
        open={!!selected}
        src={selected?.src ?? ""}
        alt={selected?.alt ?? ""}
        caption={selected?.caption}
        onClose={() => setSelected(null)}
      />
    </>
  )
}