export function ImageSlot({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="rounded-xl border border-white/10 overflow-hidden bg-white/5">
      <img src={src} alt={alt} className="w-full object-cover" />
      {caption && (
        <figcaption className="px-4 py-3 text-sm text-white/60">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
