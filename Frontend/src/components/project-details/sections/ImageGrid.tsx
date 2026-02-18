import { ImageSlot } from "./ImageSlot";

export function ImageGrid({
  items,
}: {
  items: { src: string; alt: string; caption?: string }[]
}) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 items-stretch">
      {items.map((it) => (
        <ImageSlot key={it.alt} src={it.src} alt={it.alt} caption={it.caption} />
      ))}
    </div>
  )
}
