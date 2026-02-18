import { useEffect, useState } from "react"

export function useURLScroll(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    if (window.location.hash.startsWith("#project/")) return

    const observer = new IntersectionObserver(
      (entries) => {
        let maxEntry: IntersectionObserverEntry | undefined

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!maxEntry || entry.intersectionRatio > maxEntry.intersectionRatio) {
              maxEntry = entry
            }
          }
        })

        if (maxEntry) {
          const target = maxEntry.target as HTMLElement
          const id = target.getAttribute("id")
          if (id && id !== activeId) {
            setActiveId(id)
            window.history.replaceState(null, "", `#${id}`)
          }
        }
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: 0.5,
      }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, offset, activeId])

  return activeId
}
