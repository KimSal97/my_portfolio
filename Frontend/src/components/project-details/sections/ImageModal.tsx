import { useEffect } from "react"

type ImageModalProps = {
  open: boolean
  src: string
  alt: string
  caption?: string
  onClose: () => void
}

export function ImageModal({ open, src, alt, caption, onClose }: ImageModalProps) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      onMouseDown={onClose}
    >
      <div
        className="relative w-full max-w-6xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 rounded-full bg-white/10 px-3 py-2 text-white/90 hover:bg-white/20 ring-1 ring-white/20"
          aria-label="Close image"
        >
          ✕
        </button>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-950 shadow-2xl">
          <img
            src={src}
            alt={alt}
            className="max-h-[80vh] w-full object-contain"
          />
        </div>

        {caption && (
          <p className="mt-3 text-center text-sm text-white/70">
            {caption}
          </p>
        )}
      </div>
    </div>
  )
}
