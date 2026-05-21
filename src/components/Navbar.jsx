import { useEffect, useState } from "react"

import { motion } from "framer-motion"

import { HiMenu, HiX } from "react-icons/hi"



function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  const [activeSection, setActiveSection] = useState("home")

  /* SCROLL EFFECT */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 30)

      const sections = [
        "home",
        "services",
        "about",
        "projects",
        "contact",
      ]

      sections.forEach((section) => {

        const element = document.getElementById(section)

        if (element) {

          const top = element.offsetTop - 140

          const height = element.offsetHeight

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActiveSection(section)
          }

        }

      })

    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [])

  const navLinks = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "Services",
      id: "services",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ]

  return (

    <motion.nav

      initial={{
        y: -80,
        opacity: 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}

      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${

        scrolled

          ? "bg-[#050816]/65 backdrop-blur-3xl border-b border-cyan-400/10 shadow-[0_10px_50px_rgba(0,0,0,0.45)]"

          : "bg-transparent"

      }`}
    >

      {/* PREMIUM TOP LIGHT */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[520px] h-[220px] bg-cyan-500/10 blur-3xl"></div>

        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

      </div>

      {/* NAVBAR CONTAINER */}

      <div
  className={`max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10 transition-all duration-500 ${
    scrolled
      ? "py-2 md:py-2"
      : "py-3 md:py-3"
  }`}
>

        {/* LOGO */}

        <motion.div

          whileHover={{
            scale: 1.04,
            y: -2,
          }}

          transition={{
            duration: 0.3,
          }}

          className="flex items-center"

        >

          <img

            src="/logo.png"

            alt="JDA Logo"

        className={`object-contain brightness-150 contrast-125 saturate-150 drop-shadow-[0_0_40px_rgba(34,211,238,0.75)] transition-all duration-500 ${
  scrolled
    ? "w-24 md:w-36"
    : "w-36 md:w-44"
}`}


          />

        </motion.div>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center">

          <ul className="relative flex items-center gap-3 bg-white/[0.04] border border-white/10 backdrop-blur-2xl px-4 py-3 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.25)] overflow-hidden">

            {/* INSIDE GLOW */}

            <div className="absolute inset-0 pointer-events-none">

              <div className="absolute left-0 top-0 w-[120px] h-full bg-cyan-500/5 blur-2xl"></div>

            </div>

            {navLinks.map((link) => (

              <li key={link.id} className="relative">

                <motion.a

                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}

                  transition={{
                    duration: 0.25,
                  }}

                  href={`#${link.id}`}

                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${

                    activeSection === link.id

                      ? "text-cyan-200 drop-shadow-[0_0_14px_rgba(34,211,238,0.95)]"

                      : "text-gray-300 hover:text-cyan-300 hover:-translate-y-1 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.85)]"

                  }`}

                >

                  {/* ACTIVE PILL */}

                  {activeSection === link.id && (

                    <motion.div

                      layoutId="navbar-pill"

                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}

                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 border border-cyan-400/20 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.18)]"

                    />

                  )}

                  <span className="relative z-10">

                    {link.name}

                  </span>

                </motion.a>

              </li>

            ))}

          </ul>

        </div>

        {/* MOBILE MENU BUTTON */}

        <motion.button

          whileHover={{
            scale: 1.08,
            y: -2,
          }}

          whileTap={{
            scale: 0.9,
          }}

          transition={{
            duration: 0.25,
          }}

          onClick={() => setMenuOpen(!menuOpen)}

          className="md:hidden relative z-20 text-white text-3xl bg-white/5 border border-white/10 backdrop-blur-2xl p-2 rounded-2xl hover:text-cyan-300 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"

        >

          {menuOpen ? <HiX /> : <HiMenu />}

        </motion.button>

      </div>

      {/* MOBILE MENU */}

      <motion.div

        initial={false}

        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}

        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}

        className="md:hidden overflow-hidden bg-[#050816]/95 backdrop-blur-3xl border-t border-white/10"

      >

        <div className="px-6 py-6">

          <ul className="flex flex-col gap-4">

            {navLinks.map((link, index) => (

              <motion.li

                key={link.id}

                initial={{
                  opacity: 0,
                  x: -30,
                }}

                animate={{
                  opacity: menuOpen ? 1 : 0,
                  x: menuOpen ? 0 : -30,
                }}

                transition={{
                  delay: index * 0.06,
                  duration: 0.4,
                }}

              >

                <motion.a

                  whileHover={{
                    x: 6,
                    scale: 1.02,
                  }}

                  transition={{
                    duration: 0.25,
                  }}

                  href={`#${link.id}`}

                  onClick={() => setMenuOpen(false)}

                  className={`block px-5 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${

                    activeSection === link.id

                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/20 text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.25)]"

                      : "text-gray-300 hover:bg-white/5 hover:text-cyan-300 hover:shadow-[0_0_18px_rgba(34,211,238,0.18)]"

                  }`}

                >

                  {link.name}

                </motion.a>

              </motion.li>

            ))}

          </ul>

        </div>

      </motion.div>

    </motion.nav>

  )

}

export default Navbar

