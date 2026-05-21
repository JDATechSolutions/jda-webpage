import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

function TestimonialsSection() {

  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [

    {
      name: "Arjun Kumar",
      role: "Office Administrator",
      image: "https://i.pravatar.cc/100?img=12",
      feedback:
        "Professional installation and excellent support. Their CCTV and networking setup was completed perfectly and on time.",
    },

    {
      name: "Vishnu Raj",
      role: "Business Owner",
      image: "https://i.pravatar.cc/100?img=32",
      feedback:
        "Very reliable service and clean installation work. The team was professional and highly knowledgeable.",
    },

    {
      name: "Naveen Das",
      role: "Store Manager",
      image: "https://i.pravatar.cc/100?img=45",
      feedback:
        "Fast response, quality equipment, and smooth setup. Highly recommended for CCTV and computer services.",
    },

    {
      name: "Rahul Menon",
      role: "Company Director",
      image: "https://i.pravatar.cc/100?img=55",
      feedback:
        "Excellent customer service and premium quality installation. Everything was handled professionally.",
    },

    {
      name: "Ajith Kumar",
      role: "Retail Shop Owner",
      image: "https://i.pravatar.cc/100?img=60",
      feedback:
        "Their networking and CCTV setup improved our business security greatly. Smooth and reliable support.",
    },

  ]

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (

    <section className="max-w-7xl mx-auto px-6 py-24 overflow-hidden">

      {/* HEADER */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
  once: true,
  amount: 0.15,
}}
        className="text-center mb-20"
      >

        <p className="text-cyan-400 font-semibold mb-4 tracking-[3px] uppercase">
          CLIENT FEEDBACK
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          What Clients Say
        </h2>

        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-8">
          Trusted by homes, offices, and businesses for reliable
          IT & security solutions.
        </p>

      </motion.div>

      {/* SLIDER */}

      <div className="relative flex items-center justify-center perspective-[2000px]">

        {/* LEFT BUTTON */}

        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={prevSlide}
          className="
            absolute
            left-0
            md:left-10
            z-30
            w-14
            h-14
            rounded-full
            bg-[#111827]/80
            backdrop-blur-lg
            border
            border-cyan-400/20
            hover:border-cyan-400
            text-2xl
            shadow-2xl
            transition-all
            duration-500
          "
        >
          ←
        </motion.button>

        {/* TESTIMONIAL CARDS */}

        <div className="relative w-full h-[420px] flex items-center justify-center">

          {testimonials.map((item, index) => {

            const offset =
              (index - activeIndex + testimonials.length) %
              testimonials.length

            let position = offset

            if (position > testimonials.length / 2) {
              position -= testimonials.length
            }

            return (

              <motion.div
                key={index}
                animate={{
                  x: position * 280,
                  scale: position === 0 ? 1 : 0.78,
                  rotateY: position * -35,
                  opacity:
                    Math.abs(position) > 1
                      ? 0
                      : position === 0
                      ? 1
                      : 0.35,
                  zIndex: position === 0 ? 20 : 10,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  w-[370px]
                  md:w-[420px]
                  rounded-[35px]
                  overflow-hidden
                  border
                  border-cyan-400/10
                  bg-white/5
                  backdrop-blur-2xl
                  shadow-[0_20px_80px_rgba(0,255,255,0.08)]
                  p-8
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                {/* GLOW */}

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

                <div className="relative z-10">

                  {/* PROFILE */}

                  <div className="flex items-center gap-4 mb-8">

                    <div className="relative">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="
                          w-16
                          h-16
                          rounded-full
                          object-cover
                          border-2
                          border-cyan-400
                        "
                      />

                      <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md"></div>

                    </div>

                    <div>

                      <h3 className="text-2xl font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-gray-400 text-sm">
                        {item.role}
                      </p>

                    </div>

                  </div>

                  {/* FEEDBACK */}

                  <p className="text-gray-300 leading-8 text-lg">
                    {item.feedback}
                  </p>

                </div>

              </motion.div>

            )

          })}

        </div>

        {/* RIGHT BUTTON */}

        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={nextSlide}
          className="
            absolute
            right-0
            md:right-10
            z-30
            w-14
            h-14
            rounded-full
            bg-[#111827]/80
            backdrop-blur-lg
            border
            border-cyan-400/20
            hover:border-cyan-400
            text-2xl
            shadow-2xl
            transition-all
            duration-500
          "
        >
          →
        </motion.button>

      </div>

    </section>

  )

}

export default TestimonialsSection