import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadFull } from "tsparticles"

function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (

    <Particles

      id="tsparticles"

      init={particlesInit}

      options={{

        fullScreen: {
          enable: false,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {

          number: {
            value: 70,
            density: {
              enable: true,
              area: 900,
            },
        },

          color: {
            value: ["#22d3ee", "#3b82f6", "#67e8f9"],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.60,
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },

          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },

          links: {
            enable: true,
            distance: 150,
            color: "#22d3ee",
            opacity: 0.12,
            width: 1,
          },

        },

        detectRetina: true,

      }}

      className="absolute inset-0 z-0"

    />

  )

}

export default ParticlesBackground