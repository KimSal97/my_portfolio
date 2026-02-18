import { useState } from "react"
import { ImageModal } from "./ImageModal"

interface ImageSlotProps {
  src: string
  alt: string
  caption?: string
}

export function ImageSlot({ src, alt, caption }: ImageSlotProps) {
  const [open, setOpen] = useState(false)

  return (
    <figure className="mt-8">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mx-auto block w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        aria-label="Open image"
      >
        <img
          src={src}
          alt={alt}
          className="block w-full h-auto object-contain"
          loading="lazy"
        />
      </button>

      {caption && (
        <figcaption className="mt-4 text-center text-sm text-white/60">
          {caption}
        </figcaption>
      )}

      <ImageModal
        open={open}
        src={src}
        alt={alt}
        caption={caption}
        onClose={() => setOpen(false)}
      />
    </figure>
  )
}
