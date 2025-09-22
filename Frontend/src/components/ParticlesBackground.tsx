import { useEffect, useMemo, useState } from "react"
import Particles from "@tsparticles/react"
import type { Engine, IOptions, RecursivePartial } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"
import { initParticlesEngine } from "@tsparticles/react"

type ParticlesBackgroundProps = {
  type?: "meteors" | "bubbles"
}

export function ParticlesBackground({ type = "meteors" }: ParticlesBackgroundProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options: RecursivePartial<IOptions> = useMemo(() => {
    switch (type) {
      case "bubbles":
        return {
          background: { color: "transparent" },
          fullScreen: { enable: false },
          particles: {
            number: { value: 80 }, 
            move: {
              direction: "top",
              enable: true,
              speed: { min: 0.5, max: 1.5 },
            },
            shape: { type: "circle" },
            size: { value: { min: 3, max: 8 } },
            opacity: { value: { min: 0.2, max: 0.8 } },
            color: { value: "#38bdf8" },
          },
          detectRetina: true,
        }

      case "meteors":
      default:
        return {
          background: { color: "transparent" },
          fullScreen: { enable: false },
          particles: {
            number: { value: 60 },
            move: { direction: "bottom", enable: true, speed: 4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.6 },
            color: { value: "#a78bfa" },
          },
          detectRetina: true,
        }
    }
  }, [type])

  if (!ready) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Particles
        key={type}
        id={`tsparticles-${type}`}
        options={options}
        className="h-full w-full"
      />
      {type === "bubbles" && (
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-950 to-transparent pointer-events-none" />
      )}
    </div>
  )
}
