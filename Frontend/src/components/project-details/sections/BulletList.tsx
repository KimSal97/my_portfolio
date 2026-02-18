export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 text-white/70 space-y-2">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  )
}
