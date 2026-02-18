import React from "react"

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  )
}
