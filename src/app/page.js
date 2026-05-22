"use client";
import Navbar from "../components/Navbar"


import {
  FaVideo,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPrint,
  FaTools,
} from "react-icons/fa"

import {
  FaComputer,
  FaCartShopping,
} from "react-icons/fa6"
import { HiOutlineWifi } from "react-icons/hi"

import {
  motion,
  useScroll,
  useSpring,
  useInView,
} from "framer-motion"

import { useEffect, useState, useRef } from "react"

import TestimonialsSection from "../components/TestimonialsSection"


/* PROJECT IMAGES */



export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  const [clients, setClients] = useState(0)
  const [installations, setInstallations] = useState(0)
  const [experience, setExperience] = useState(0)
  const [openFAQ, setOpenFAQ] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const experienceRef = useRef(null)

 const isMobile =
  typeof window !== "undefined" &&
  window.innerWidth < 768

const isExperienceInView = useInView(experienceRef, {
  once: true,

  amount: isMobile ? 0.9 : 0.4,

  margin: isMobile
    ? "0px 0px -250px 0px"
    : "0px",
})

  /* PREMIUM FADE UP ANIMATION */

  const fadeUp = {

  hidden: {
    opacity: 0,
    y: 90,
    scale: 0.96,
    filter: "blur(10px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },

}

  /* COUNT UP ANIMATION */

  useEffect(() => {

  if (!isExperienceInView) return

  let clientsCount = 0
  let installationsCount = 0
  let experienceCount = 0

  const interval = setInterval(() => {

    if (clientsCount < 85) {
      clientsCount += 10
      setClients(clientsCount)
    }

    if (installationsCount < 420) {
      installationsCount += 64

      setInstallations(
        installationsCount > 420
          ? 420
          : installationsCount
      )
    }

    if (experienceCount < 5) {
      experienceCount += 1
      setExperience(experienceCount)
    }

    if (
      clientsCount >= 85 &&
      installationsCount >= 420 &&
      experienceCount >= 5
    ) {
      clearInterval(interval)
    }

  }, 12)

  return () => clearInterval(interval)

}, [isExperienceInView])

  return (

    <div className="bg-[#0B0F19] min-h-screen text-white overflow-x-hidden relative">

{/* GLOBAL BACKGROUND GLOW */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>

  <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] bg-blue-500/10 blur-3xl rounded-full"></div>

  <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-cyan-400/5 blur-3xl rounded-full"></div>

</div>
      <Navbar />
      {/* PREMIUM SCROLL PROGRESS BAR */}
      <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
      }}
      className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 z-[100] shadow-[0_0_20px_rgba(34,211,238,0.8)]"
      />

      {/* WHATSAPP BUTTON */}

      <motion.a
        whileHover={{
          scale: 1.08,
          y: -3,
        }}
        href="https://wa.me/919345340119"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg z-50 transition duration-300"
      >
        <FaWhatsapp />
      </motion.a>

      {/* HERO SECTION */}

<motion.section
  id="home"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-32 text-center overflow-hidden"
>

  {/* PREMIUM BACKGROUND ORBS */}

  <motion.div
    animate={{
      x: [0, 40, 0],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute top-[10%] left-[10%] w-[320px] h-[320px] bg-cyan-500/20 blur-3xl rounded-full"
  />

  <motion.div
    animate={{
      x: [0, -30, 0],
      y: [0, 40, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-[5%] right-[10%] w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full"
  />

  {/* GRID OVERLAY */}

  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

  {/* HERO CONTENT */}

  <div className="relative z-10 max-w-5xl mx-auto">

    {/* MINI BADGE */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="inline-flex items-center gap-3 border border-cyan-400/20 bg-white/5 backdrop-blur-xl rounded-full px-5 py-2 mb-8"
    >

      <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"></div>

      <p className="text-sm tracking-[3px] text-cyan-300 uppercase">
        Premium IT & Security Solutions
      </p>

    </motion.div>

    {/* MAIN TITLE */}

    <motion.h1
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative text-5xl sm:text-6xl md:text-8xl font-black leading-[0.92] tracking-tight"
    >

      {/* GLOW */}

      <span className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
        JDA
      </span>

      <span className="relative bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
        JDA
        <br />
        Computers &
        <br />
        Security Solutions
      </span>

    </motion.h1>

    {/* DESCRIPTION */}

    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="text-gray-300 mt-8 text-lg md:text-2xl max-w-3xl mx-auto leading-9"
    >
      Professional CCTV installation, networking,
      computer services, and enterprise-grade
      security solutions for homes and businesses.
    </motion.p>

    {/* BUTTONS */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
    >

      {/* BUTTON 1 */}

      <motion.a
        whileHover={{
          scale: 1.05,
          y: -4,
        }}

        whileTap={{
          scale: 0.98,
        }}

        href="https://wa.me/919345340119?text=Hello%20JDA%20Computers%20%26%20Security%20Solutions,%20I%20would%20like%20to%20get%20a%20free%20consultation.%20Please%20contact%20me%20as%20soon%20as%20possible."
        target="_blank"
        rel="noopener noreferrer"

        className="relative overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 px-10 py-5 rounded-2xl font-semibold text-lg shadow-[0_0_35px_rgba(34,211,238,0.35)]"
      >

        <span className="relative z-10">
          Get Free Consultation
        </span>

        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-white/10"></div>

      </motion.a>

      {/* BUTTON 2 */}

      <motion.a
        whileHover={{
          scale: 1.05,
          y: -4,
        }}

        whileTap={{
          scale: 0.98,
        }}

        href="#contact"

        className="border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400 hover:bg-cyan-400/10 px-10 py-5 rounded-2xl font-semibold text-lg transition duration-300"
      >

        Contact Us

      </motion.a>

    </motion.div>

  </div>

</motion.section>

      {/* SERVICES SECTION */}

      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-14 md:py-20"
      >

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl font-bold">
            Our Services
          </h2>

          <p className="text-gray-400 mt-4">
            Professional IT & Security Services for Modern Businesses
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

  {/* CARD 1 */}

  <motion.div
    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 0.7,
      delay: 0,
      ease: "easeOut",
    }}

    viewport={{
      once: true,
      amount: 0.15,
    }}

    style={{
      willChange: "transform, opacity",
      transform: "translateZ(0)",
    }}

    whileHover={{
      y: -8,
      transition: {
        duration: 0.2,
      },
    }}

    className="group relative overflow-hidden bg-[#111827]/80 backdrop-blur-xl p-8 rounded-[28px] border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] transition duration-500 cursor-pointer"
    
  >
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
    <div className="text-5xl mb-6 text-cyan-400">
      <FaVideo />
    </div>

    <h3 className="text-2xl font-semibold mb-4">
      CCTV Installation
    </h3>

    <p className="text-gray-400 leading-7">
      Advanced surveillance solutions for homes,
      offices, and commercial spaces.
    </p>

  </motion.div>

  {/* CARD 2 */}

  <motion.div
    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 0.7,
      delay: 0.1,
      ease: "easeOut",
    }}

    viewport={{
      once: true,
      amount: 0.15,
    }}

    style={{
      willChange: "transform, opacity",
      transform: "translateZ(0)",
    }}

    whileHover={{
      y: -8,
      transition: {
        duration: 0.2,
      },
    }}

    className="group relative overflow-hidden bg-[#111827]/80 backdrop-blur-xl p-8 rounded-[28px] border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] transition duration-500 cursor-pointer"
  >
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
    <div className="text-5xl mb-6 text-cyan-400">
      <FaComputer />
    </div>

    <h3 className="text-2xl font-semibold mb-4">
      Computer Services
    </h3>

    <p className="text-gray-400 leading-7">
      Laptop and desktop sales, repair,
      upgrades, and maintenance solutions.
    </p>

  </motion.div>

  {/* CARD 3 */}

  <motion.div
    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 0.7,
      delay: 0.2,
      ease: "easeOut",
    }}

    viewport={{
      once: true,
      amount: 0.15,
    }}

    style={{
      willChange: "transform, opacity",
      transform: "translateZ(0)",
    }}

    whileHover={{
      y: -8,
      transition: {
        duration: 0.2,
      },
    }}

    className="group relative overflow-hidden bg-[#111827]/80 backdrop-blur-xl p-8 rounded-[28px] border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] transition duration-500 cursor-pointer"
  >
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
    <div className="text-5xl mb-6 text-cyan-400">
      <HiOutlineWifi />
    </div>

    <h3 className="text-2xl font-semibold mb-4">
      Networking Solutions
    </h3>

    <p className="text-gray-400 leading-7">
      Complete networking setup including routers,
      switches, and structured cabling.
    </p>

  </motion.div>

  {/* CARD 4 */}

  <motion.div
    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 0.7,
      delay: 0.3,
      ease: "easeOut",
    }}

    viewport={{
      once: true,
      amount: 0.15,
    }}

    style={{
      willChange: "transform, opacity",
      transform: "translateZ(0)",
    }}

    whileHover={{
      y: -8,
      transition: {
        duration: 0.2,
      },
    }}

    className="group relative overflow-hidden bg-[#111827]/80 backdrop-blur-xl p-8 rounded-[28px] border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] transition duration-500 cursor-pointer"
  >
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
    <div className="text-5xl mb-6 text-cyan-400">
      <FaPrint />
    </div>

    <h3 className="text-2xl font-semibold mb-4">
      Printer Services
    </h3>

    <p className="text-gray-400 leading-7">
      Professional printer repair, servicing,
      cartridge replacement, and setup support.
    </p>

  </motion.div>

  {/* CARD 5 */}

  <motion.div
    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 0.7,
      delay: 0.4,
      ease: "easeOut",
    }}

    viewport={{
      once: true,
      amount: 0.15,
    }}

    style={{
      willChange: "transform, opacity",
      transform: "translateZ(0)",
    }}

    whileHover={{
      y: -8,
      transition: {
        duration: 0.2,
      },
    }}

    className="group relative overflow-hidden bg-[#111827]/80 backdrop-blur-xl p-8 rounded-[28px] border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] transition duration-500 cursor-pointer"
  >
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
    <div className="text-5xl mb-6 text-cyan-400">
     <FaCartShopping />
    </div>

    <h3 className="text-2xl font-semibold mb-4">
      Product Sales
    </h3>

    <p className="text-gray-400 leading-7">
      CCTV cameras, printers, computers,
      accessories, and networking products.
    </p>

  </motion.div>

  {/* CARD 6 */}

  <motion.div
    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    transition={{
      duration: 0.7,
      delay: 0.5,
      ease: "easeOut",
    }}

    viewport={{
      once: true,
      amount: 0.15,
    }}

    style={{
      willChange: "transform, opacity",
      transform: "translateZ(0)",
    }}

    whileHover={{
      y: -8,
      transition: {
        duration: 0.2,
      },
    }}

    className="group relative overflow-hidden bg-[#111827]/80 backdrop-blur-xl p-8 rounded-[28px] border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] transition duration-500 cursor-pointer"
  >
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
    <div className="text-5xl mb-6 text-cyan-400">
     <FaTools />
    </div>

    <h3 className="text-2xl font-semibold mb-4">
      Annual Maintenance
    </h3>

    <p className="text-gray-400 leading-7">
      Reliable yearly maintenance and technical
      support for CCTV and computer systems.
    </p>

  </motion.div>

</div>
      </section>
<div className="max-w-7xl mx-auto px-6">
  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

      {/* ABOUT SECTION */}

      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16 md:py-24"
      >

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-cyan-400 font-semibold mb-4">
              ABOUT COMPANY
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Trusted IT & Security Solutions Provider
            </h2>

            <p className="text-gray-400 mt-8 leading-8 text-lg">
              JDA Computers & Security Solutions provides professional CCTV installation,
              computer services, networking solutions, and smart security systems for homes,
              offices, and commercial businesses.
            </p>

            <p className="text-gray-400 mt-6 leading-8 text-lg">
              We focus on reliability, advanced technology, and customer satisfaction while
              delivering modern IT infrastructure and surveillance solutions.
            </p>

          </div>

          <div className="relative flex items-center justify-center">

  {/* GLOW */}

  <div className="absolute w-[350px] h-[350px] bg-cyan-500/20 blur-3xl rounded-full"></div>

  <motion.img
    initial={{
      opacity: 0,
      y: 40,
      scale: 0.9,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}

    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}

    whileHover={{
      y: -10,
      scale: 1.02,
    }}

    src="/mockupLogo.jpg"

    alt="JDA Premium Logo"

    className="relative z-10 rounded-[32px] shadow-[0_0_60px_rgba(34,211,238,0.18)] border border-white/10"
  />

</div>
        </div>

      </motion.section>
<div className="max-w-7xl mx-auto px-6">
  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
      {/* WHY CHOOSE US SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 font-semibold mb-4">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Why Businesses Trust JDA
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            We provide reliable, secure, and professional IT & security
            solutions with modern technology, expert support, and
            customer-focused service.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

  {/* CARD 1 */}

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}

    whileHover={{
      y: -10,
      scale: 1.02,
    }}

    className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 transition duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
  >

    <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-cyan-500/10 blur-3xl rounded-full"></div>

    <div className="relative z-10">

      <p className="text-cyan-400 text-sm tracking-[4px] mb-4">
        FAST RESPONSE
      </p>

      <h3 className="text-3xl font-black mb-6 leading-tight">
        Quick
        <br />
        Installation
      </h3>

      <p className="text-gray-400 leading-8 text-lg">
        Professional setup with fast deployment,
        minimal downtime, and smooth installation
        experience for homes and businesses.
      </p>

    </div>

  </motion.div>

  {/* CARD 2 */}

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}

    whileHover={{
      y: -10,
      scale: 1.02,
    }}

    className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 transition duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
  >

    <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-blue-500/10 blur-3xl rounded-full"></div>

    <div className="relative z-10">

      <p className="text-cyan-400 text-sm tracking-[4px] mb-4">
        SMART SECURITY
      </p>

      <h3 className="text-3xl font-black mb-6 leading-tight">
        Advanced
        <br />
        Protection
      </h3>

      <p className="text-gray-400 leading-8 text-lg">
        Reliable surveillance and networking
        systems designed for modern security,
        monitoring, and business protection.
      </p>

    </div>

  </motion.div>

  {/* CARD 3 */}

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}

    whileHover={{
      y: -10,
      scale: 1.02,
    }}

    className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 transition duration-500 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
  >

    <div className="absolute top-0 left-0 w-[180px] h-[180px] bg-cyan-400/10 blur-3xl rounded-full"></div>

    <div className="relative z-10">

      <p className="text-cyan-400 text-sm tracking-[4px] mb-4">
        PREMIUM SUPPORT
      </p>

      <h3 className="text-3xl font-black mb-6 leading-tight">
        Dedicated
        <br />
        Technical Team
      </h3>

      <p className="text-gray-400 leading-8 text-lg">
        Experienced professionals providing
        maintenance, troubleshooting,
        upgrades, and long-term support.
      </p>

    </div>

  </motion.div>

</div>
      </section>
<div className="max-w-7xl mx-auto px-6">
  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>


{/* EXPERIENCE SECTION */}

<section
  ref={experienceRef}
  className="max-w-7xl mx-auto px-6 py-16 md:py-24"
>

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#111827] via-[#0B0F19] to-[#050816] p-10 md:p-16"
  >

    {/* BACKGROUND GLOW */}

    <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full"></div>

    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full"></div>

    <div className="relative z-10 grid md:grid-cols-2 gap-14 items-center">

      {/* LEFT SIDE */}

      <div>

        <p className="text-cyan-400 tracking-[5px] text-sm mb-5">
          PREMIUM TECHNOLOGY EXPERIENCE
        </p>

        <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
          Smart Solutions
          <br />
          For Modern
          <br />
          Businesses
        </h2>

        <p className="text-gray-400 text-lg leading-9">
          JDA provides modern CCTV surveillance,
          networking infrastructure, computer
          services, and enterprise-level IT
          solutions with professional quality,
          reliability, and long-term support.
        </p>

      </div>

      {/* RIGHT SIDE */}

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-xl min-h-[160px] flex flex-col justify-center">

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 mb-3">
            {clients}+
          </h3>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-6">
            Trusted Clients
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-xl min-h-[160px] flex flex-col justify-center">

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 mb-3">
            {installations}+
          </h3>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-6">
            Installations
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-xl min-h-[160px] flex flex-col justify-center">

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 mb-3">
            {experience}+
          </h3>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-6">
            Years Experience
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 backdrop-blur-xl min-h-[160px] flex flex-col justify-center">

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 mb-3">
            24/7
          </h3>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-6">
            Technical Support
          </p>

        </div>

      </div>

    </div>

  </motion.div>

</section>

{/* WORK PROCESS SECTION */}

<section className="max-w-7xl mx-auto px-6 py-16 md:py-24">

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center mb-20"
  >

    <p className="text-cyan-400 tracking-[5px] text-sm mb-4">
      OUR PROCESS
    </p>

    <h2 className="text-4xl md:text-6xl font-black leading-tight">
      Simple & Professional
      <br />
      Work Process
    </h2>

  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

    {/* STEP 1 */}

    <motion.div
      whileHover={{
        y: -10,
      }}

      className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111827]/80 backdrop-blur-2xl p-8"
    >

      <div className="text-[70px] font-black text-white/5 absolute top-2 right-6">
        01
      </div>

      <div className="relative z-10">

        <div className="text-5xl text-cyan-400 mb-8">
  <FaPhoneAlt />
</div>
        <h3 className="text-2xl font-black mb-5">
          Consultation
        </h3>

        <p className="text-gray-400 leading-8">
          We understand your security,
          networking, and IT requirements
          before planning the solution.
        </p>

      </div>

    </motion.div>

    {/* STEP 2 */}

<motion.div
  whileHover={{
    y: -10,
  }}

  className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111827]/80 backdrop-blur-2xl p-8"
>

  <div className="text-[70px] font-black text-white/5 absolute top-2 right-6">
    02
  </div>

  <div className="relative z-10">

    <div className="text-5xl text-blue-400 mb-8">
      <HiOutlineWifi />
    </div>

    <h3 className="text-2xl font-black mb-5">
      Planning
    </h3>

    <p className="text-gray-400 leading-8">
      Our team designs the ideal setup
      for performance, security,
      reliability, and scalability.
    </p>

  </div>

</motion.div>

    {/* STEP 3 */}

    <motion.div
      whileHover={{
        y: -10,
      }}

      className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111827]/80 backdrop-blur-2xl p-8"
    >

      <div className="text-[70px] font-black text-white/5 absolute top-2 right-6">
        03
      </div>

      <div className="relative z-10">

        <div className="text-5xl text-cyan-400 mb-8">
  <FaTools />
</div>

        <h3 className="text-2xl font-black mb-5">
          Installation
        </h3>

        <p className="text-gray-400 leading-8">
          Professional installation with
          modern tools and clean
          infrastructure deployment.
        </p>

      </div>

    </motion.div>

    {/* STEP 4 */}

    <motion.div
      whileHover={{
        y: -10,
      }}

      className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111827]/80 backdrop-blur-2xl p-8"
    >

      <div className="text-[70px] font-black text-white/5 absolute top-2 right-6">
        04
      </div>

      <div className="relative z-10">

        <div className="text-5xl text-blue-400 mb-8">
  <FaWhatsapp />
</div>

        <h3 className="text-2xl font-black mb-5">
          Support
        </h3>

        <p className="text-gray-400 leading-8">
          Long-term maintenance,
          troubleshooting, upgrades,
          and dedicated technical support.
        </p>

      </div>

    </motion.div>

  </div>

</section>


{/* TRUSTED BRANDS SECTION */}

<section className="max-w-7xl mx-auto px-6 py-16 md:py-24 overflow-hidden">

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="text-center mb-16"
  >

    <p className="text-cyan-400 tracking-[5px] text-sm mb-4">
      TRUSTED TECHNOLOGY
    </p>

    <h2 className="text-4xl md:text-6xl font-black">
      Brands We Work With
    </h2>

    <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto leading-8">
      We work with trusted technology brands and enterprise-grade systems to deliver reliable, industry-standard IT and security solutions.
    </p>

  </motion.div>

  <div className="relative">

    {/* LEFT FADE */}

    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0B0F19] to-transparent z-10"></div>

    {/* RIGHT FADE */}

    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0B0F19] to-transparent z-10"></div>

    {/* LOGO ROW */}

<motion.div
  animate={{
    x: ["0%", "-50%"],
  }}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  }}
  className="flex gap-8 w-max"
>

  {[
    "HIKVISION",
    "DAHUA",
    "CP PLUS",
    "PRAMA",
    "MATRIX",
    "TP-LINK",
    "HP",
    "DELL",
    "CANON",
    "EPSON",
    "ASUS",
    "LENOVO",
    "EZVIZ",
    "UNV",
    "SEAGATE",
    "WD",

    /* DUPLICATE FOR PERFECT LOOP */

    "HIKVISION",
    "DAHUA",
    "CP PLUS",
    "PRAMA",
    "MATRIX",
    "TP-LINK",
    "HP",
    "DELL",
    "CANON",
    "EPSON",
    "ASUS",
    "LENOVO",
    "EZVIZ",
    "UNV",
    "SEAGATE",
    "WD",
  ].map((brand, index) => (

    <div
      key={index}
      className="min-w-[140px] sm:min-w-[180px] md:min-w-[220px] h-[70px] sm:h-[90px] md:h-[110px] rounded-[20px] md:rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-sm sm:text-lg md:text-2xl font-black tracking-[1px] md:tracking-[2px] text-white/80 hover:text-cyan-300 hover:border-cyan-400 transition duration-300"
    >

      {brand}

    </div>

  ))}

</motion.div>

  </div>

</section>


      {/* PROJECTS SECTION */}

      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-16 md:py-24"
      >

        <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-center mb-14"
>

  <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-cyan-400">
    OUR PROJECTS
  </h2>

</motion.div>

        {/* PREMIUM PROJECT SHOWCASE */}

<div className="flex flex-col gap-20">

  {/* SECTION 1 — PREMIUM COMPUTER SOLUTIONS */}

  <motion.div
  onClick={() =>
  setSelectedProject({
    image: "/computer.png",
    title: "Premium Computer Solutions",
    description:
      "Professional laptop and desktop repair, upgrades, maintenance, software installation, and complete technical support solutions.",
    whatsapp:
      "https://wa.me/919345340119?text=Hi%20JDA%20Computers%20%26%20Security%20Solutions,%0A%0AI%20am%20interested%20in%20your%20Computer%20Services.%0A%0APlease%20contact%20me%20as%20soon%20as%20possible."
  })
}
  id="computer-services"
    initial={{
      opacity: 0,
      y: 80,
      scale: 0.96,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    whileHover={{
        y: -8,
        scale: 1.01,
      }}
    className="relative h-[300px] sm:h-[360px] md:h-[520px] overflow-hidden rounded-[38px] border border-white/10 bg-[#050816] group"
  >

    <motion.img
      src="/computer.png"
      alt=""
      initial={{ scale: 1.12 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute left-0 top-0 h-full w-[78%] object-cover object-center brightness-[1] group-hover:scale-105 transition duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-l from-[#050816] via-[#050816]/96 via-[24%] to-transparent"></div>

    <motion.div
      animate={{
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute right-0 top-0 h-full w-[320px] bg-blue-500/10 blur-3xl"
    />

    <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-20">

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-xl text-right"
      >

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-cyan-400 tracking-[6px] text-sm mb-4 font-medium"
        >
          COMPUTER SERVICES
        </motion.p>
        

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-2xl sm:text-3xl md:text-5xl font-black leading-[0.95] tracking-tight mb-6"
        >
          Premium
          <br />
          Computer
          <br />
          Solutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="text-gray-300 text-lg leading-8 ml-auto"
        >
          Professional laptop and desktop repair,
          upgrades, maintenance, software installation,
          and complete technical support solutions.
        </motion.p>

      </motion.div>

    </div>

  </motion.div>

  {/* SECTION 2 — SMART SECURITY SYSTEMS */}

  <motion.div
  onClick={() =>
  setSelectedProject({
    image: "/cctv.png",
    title: "Smart Security Systems",
    description:
      "Advanced CCTV surveillance solutions for homes, offices, malls, institutions, and commercial environments.",
    whatsapp:
      "https://wa.me/919345340119?text=Hi%20JDA%20Computers%20%26%20Security%20Solutions,%0A%0AI%20am%20interested%20in%20your%20CCTV%20Installation%20services.%0A%0APlease%20contact%20me%20as%20soon%20as%20possible."
  })
}
  id="cctv-installation"
    initial={{
      opacity: 0,
      y: 80,
      scale: 0.96,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    whileHover={{
      y: -8,
      scale: 1.01,
    }}
    className="relative h-[300px] sm:h-[360px] md:h-[520px] overflow-hidden rounded-[38px] border border-white/10 bg-[#050816] group"
  >

    <motion.img
      src="/cctv.png"
      alt=""
      initial={{ scale: 1.12 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute right-0 top-0 h-full w-[78%] object-cover object-center brightness-[1] group-hover:scale-105 transition duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/96 via-[24%] to-transparent"></div>

    <motion.div
      animate={{
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute left-0 top-0 h-full w-[320px] bg-cyan-500/10 blur-3xl"
    />

    <div className="relative z-10 h-full flex items-center px-6 md:px-20">

      <motion.div
        initial={{
          opacity: 0,
          x: -80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-xl"
      >

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-cyan-400 tracking-[6px] text-sm mb-4 font-medium"
        >
          CCTV INSTALLATION
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-2xl sm:text-3xl md:text-5xl font-black leading-[0.95] tracking-tight mb-6"
        >
          Smart
          <br />
          Security
          <br />
          Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="text-gray-300 text-lg leading-8"
        >
          Advanced CCTV surveillance solutions for homes,
          offices, malls, institutions, and commercial
          environments with modern monitoring systems.
        </motion.p>

      </motion.div>

    </div>

  </motion.div>

  {/* SECTION 3 — ENTERPRISE NETWORK SYSTEMS */}

  <motion.div
  onClick={() =>
  setSelectedProject({
    image: "/network.png",
    title: "Enterprise Network Systems",
    description:
      "Structured networking infrastructure including routers, switches, WiFi systems, server setup, and cabling solutions.",
    whatsapp:
      "https://wa.me/919345340119?text=Hi%20JDA%20Computers%20%26%20Security%20Solutions,%0A%0AI%20am%20interested%20in%20your%20Networking%20Solutions.%0A%0APlease%20contact%20me%20as%20soon%20as%20possible."
  })
}
  id="networking-solutions"
    initial={{
      opacity: 0,
      y: 80,
      scale: 0.96,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    whileHover={{
      y: -8,
      scale: 1.01,
    }}
    className="relative h-[300px] sm:h-[360px] md:h-[520px] overflow-hidden rounded-[38px] border border-white/10 bg-[#050816] group"
  >

    <motion.img
      src="/network.png"
      alt=""
      initial={{ scale: 1.12 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute left-0 top-0 h-full w-[78%] object-cover object-center brightness-[1] group-hover:scale-105 transition duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-l from-[#050816] via-[#050816]/96 via-[24%] to-transparent"></div>

    <motion.div
      animate={{
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute right-0 top-0 h-full w-[320px] bg-cyan-500/10 blur-3xl"
    />

    <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-20">

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-xl text-right"
      >

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-cyan-400 tracking-[6px] text-sm mb-4 font-medium"
        >
          NETWORKING SOLUTIONS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-2xl sm:text-3xl md:text-5xl font-black leading-[0.95] tracking-tight mb-6"
        >
          Enterprise
          <br />
          Network
          <br />
          Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="text-gray-300 text-lg leading-8 ml-auto"
        >
          Structured networking infrastructure including
          routers, switches, WiFi systems,
          server setup, and cabling solutions.
        </motion.p>

      </motion.div>

    </div>

  </motion.div>

  {/* SECTION 4 — PREMIUM TECH PRODUCTS */}

  <motion.div
  onClick={() =>
  setSelectedProject({
    image: "/salesImage.png",
    title: "Premium Tech Products",
    description:
      "CCTV cameras, computers, printers, accessories, networking devices, and smart tech products.",
    whatsapp:
      "https://wa.me/919345340119?text=Hi%20JDA%20Computers%20%26%20Security%20Solutions,%0A%0AI%20am%20interested%20in%20your%20Product%20Sales.%0A%0APlease%20contact%20me%20as%20soon%20as%20possible."
  })
}
  id="product-sales"
    initial={{
      opacity: 0,
      y: 80,
      scale: 0.96,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    whileHover={{
      y: -8,
      scale: 1.01,
    }}
    className="relative h-[300px] sm:h-[360px] md:h-[520px] overflow-hidden rounded-[38px] border border-white/10 bg-[#050816] group"
  >

    <motion.img
      src="/salesImage.png"
      alt=""
      initial={{ scale: 1.12 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute right-0 top-0 h-full w-[78%] object-cover object-center brightness-[1] group-hover:scale-105 transition duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/96 via-[24%] to-transparent"></div>

    <motion.div
      animate={{
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute left-0 top-0 h-full w-[320px] bg-cyan-500/10 blur-3xl"
    />

    <div className="relative z-10 h-full flex items-center px-6 md:px-20">

      <motion.div
        initial={{
          opacity: 0,
          x: -80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-xl"
      >

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-cyan-400 tracking-[6px] text-sm mb-4 font-medium"
        >
          PRODUCT SALES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-2xl sm:text-3xl md:text-5xl font-black leading-[0.95] tracking-tight mb-6"
        >
          Premium
          <br />
          Tech
          <br />
          Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="text-gray-300 text-lg leading-8"
        >
          CCTV cameras, computers,
          printers, accessories,
          networking devices, and smart tech products.
        </motion.p>

      </motion.div>

    </div>

  </motion.div>

  {/* SECTION 5 — PROFESSIONAL PRINTER SUPPORT */}

  <motion.div
  onClick={() =>
  setSelectedProject({
    image: "/printerImage.png",
    title: "Professional Printer Support",
    description:
      "Printer repair, maintenance, cartridge replacement, servicing, and setup solutions.",
    whatsapp:
      "https://wa.me/919345340119?text=Hi%20JDA%20Computers%20%26%20Security%20Solutions,%0A%0AI%20am%20interested%20in%20your%20Professional%20Printer%20Support.%0A%0APlease%20contact%20me%20as%20soon%20as%20possible."
  })
}
  id="printer-support"
    initial={{
      opacity: 0,
      y: 80,
      scale: 0.96,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    whileHover={{
      y: -8,
      scale: 1.01,
    }}
    className="relative h-[300px] sm:h-[360px] md:h-[520px] overflow-hidden rounded-[38px] border border-white/10 bg-[#050816] group"
  >

    <motion.img
      src="/printerImage.png"
      alt=""
      initial={{ scale: 1.12 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute left-0 top-0 h-full w-[78%] object-cover object-center brightness-[1] group-hover:scale-105 transition duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-l from-[#050816] via-[#050816]/96 via-[24%] to-transparent"></div>

    <motion.div
      animate={{
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute right-0 top-0 h-full w-[320px] bg-blue-500/10 blur-3xl"
    />

    <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-20">

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-xl text-right"
      >

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-cyan-400 tracking-[6px] text-sm mb-4 font-medium"
        >
          PRINTER SERVICES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-2xl sm:text-3xl md:text-5xl font-black leading-[0.95] tracking-tight mb-6"
        >
          Professional
          <br />
          Printer
          <br />
          Support
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="text-gray-300 text-lg leading-8 ml-auto"
        >
          Printer repair, maintenance,
          cartridge replacement,
          servicing, and setup solutions.
        </motion.p>

      </motion.div>

    </div>

  </motion.div>
<div className="max-w-7xl mx-auto px-6">
  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
      </section>
      <div className="max-w-7xl mx-auto px-6">
  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
{/* PROJECT IMAGE MODAL */}

{selectedProject && (

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}

    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
  >

    <button
      onClick={() => setSelectedProject(null)}
      className="absolute top-6 right-6 text-white text-5xl hover:text-cyan-400 transition"
    >
      ×
    </button>

    <div className="bg-[#0B0F19] border border-white/10 rounded-[32px] overflow-hidden max-w-5xl w-full">

  <div className="relative h-[650px]">

  {/* IMAGE */}

  <img
    src={selectedProject.image}
    alt={selectedProject.title}
    className="absolute inset-0 w-full h-full object-cover brightness-110"
  />

  {/* DARK OVERLAY */}

  <div className="absolute inset-0 bg-black/35"></div>

  {/* GRADIENT */}

  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent"></div>

  {/* CONTENT */}

  <div className="relative z-10 h-full flex items-end p-10 md:p-16">

    <div className="max-w-3xl">

      <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
        {selectedProject.title}
      </h2>

      <p className="text-gray-300 text-lg md:text-xl leading-8">
        {selectedProject.description}
      </p>

      <div className="flex gap-5 mt-10 flex-wrap">

  <a
    href={selectedProject.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 text-white font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] transition duration-300 hover:scale-105 hover:-translate-y-1"
  >

    <span className="relative z-10 flex items-center gap-3">

      <FaWhatsapp className="text-2xl" />

      Contact Us To Know More

    </span>

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition duration-500"></div>

  </a>

  <a
    href="tel:+919345340119"
    className="group relative overflow-hidden px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-semibold transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:scale-105 hover:-translate-y-1"
  >

    <span className="relative z-10 flex items-center gap-3">

      <FaPhoneAlt className="text-xl text-cyan-300" />

      Talk With Our Team

    </span>

  </a>

</div>

    </div>

  </div>

</div>
  

</div>

  </motion.div>

)}
      <TestimonialsSection />
<div className="max-w-7xl mx-auto px-6">
  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
    

      {/* PREMIUM CTA SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-[#111827] to-[#0B0F19] p-8 md:p-20 text-center"
        >

          <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full -top-20 -left-20"></div>

          <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-3xl rounded-full bottom-0 right-0"></div>

          <div className="relative z-10">

            <p className="text-cyan-400 font-semibold mb-4">
              READY TO GET STARTED?
            </p>

            <h2 className="text-3xl md:text-6xl font-bold leading-tight">
              Secure Your Home & Business
              <br />
              With Professional IT Solutions
            </h2>

            <p className="text-gray-400 text-lg mt-8 max-w-3xl mx-auto leading-8">
              Professional CCTV installation, networking setup,
              computer services, and advanced security solutions
              tailored for homes, offices, and commercial spaces.
            </p>

            <motion.a
              whileHover={{
  scale: 1.04,
  y: -5,
}}

whileTap={{
  scale: 0.98,
}}
              href="https://wa.me/919345340119?text=Hello%20JDA%20Computers%20%26%20Security%20Solutions,%20I%20would%20like%20to%20get%20a%20free%20consultation.%20Please%20contact%20me%20as%20soon%20as%20possible."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] px-10 py-5 rounded-2xl text-lg font-semibold shadow-2xl transition duration-300"
            >
              Get Free Consultation
            </motion.a>

          </div>

        </motion.div>

      </section>
<div className="max-w-7xl mx-auto px-6">
  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
      {/* FAQ SECTION */}

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 font-semibold mb-4">
            FAQ
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Everything you need to know about our services and support.
          </p>

        </motion.div>

        <div className="space-y-5">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden"
          >

            <button
              onClick={() =>
                setOpenFAQ(openFAQ === 1 ? null : 1)
              }
              className="w-full flex items-center justify-between p-6 text-left"
            >

              <span className="text-xl font-semibold">
                Do you provide installation warranty?
              </span>

              <span className="text-cyan-400 text-2xl">
                {openFAQ === 1 ? "−" : "+"}
              </span>

            </button>

            {openFAQ === 1 && (

              <div className="px-6 pb-6 text-gray-400 leading-7">
                Yes. We provide service support and installation warranty
                for selected products and solutions.
              </div>

            )}

          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden"
          >

            <button
              onClick={() =>
                setOpenFAQ(openFAQ === 2 ? null : 2)
              }
              className="w-full flex items-center justify-between p-6 text-left"
            >

              <span className="text-xl font-semibold">
                Do you provide services for offices and businesses?
              </span>

              <span className="text-cyan-400 text-2xl">
                {openFAQ === 2 ? "−" : "+"}
              </span>

            </button>

            {openFAQ === 2 && (

              <div className="px-6 pb-6 text-gray-400 leading-7">
                Yes. We provide complete IT and security infrastructure
                solutions for offices, institutions, and commercial spaces.
              </div>

            )}

          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden"
          >

            <button
              onClick={() =>
                setOpenFAQ(openFAQ === 3 ? null : 3)
              }
              className="w-full flex items-center justify-between p-6 text-left"
            >

              <span className="text-xl font-semibold">
                How quickly can installation be completed?
              </span>

              <span className="text-cyan-400 text-2xl">
                {openFAQ === 3 ? "−" : "+"}
              </span>

            </button>

            {openFAQ === 3 && (

              <div className="px-6 pb-6 text-gray-400 leading-7">
                Installation time depends on project size, but most
                residential and office setups are completed quickly
                and professionally.
              </div>

            )}

          </motion.div>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-16 md:py-24"
      >

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 font-semibold mb-4">
            CONTACT US
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Get In Touch
          </h2>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            href="tel:+919345340119"
            className="bg-[#111827] p-6 md:p-8 rounded-3xl border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)] transition duration-300 text-center"
          >

            <div className="text-4xl text-cyan-400 flex justify-center mb-6">
              <FaPhoneAlt />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Phone
            </h3>

            <p className="text-gray-400 hover:text-cyan-400 transition">
              +91 93453 40119
            </p>

          </motion.a>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            href="mailto:jdatechsolution@gmail.com"
            className="bg-[#111827] p-6 md:p-8 rounded-3xl border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)] transition duration-300 text-center"
          >

            <div className="text-4xl text-cyan-400 flex justify-center mb-6">
              <FaEnvelope />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Email
            </h3>

            <p className="text-gray-400 hover:text-cyan-400 transition break-all">
              jdatechsolution@gmail.com
            </p>

          </motion.a>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            href="https://maps.app.goo.gl/anELF7YvXQb5ZHRD7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111827] p-6 md:p-8 rounded-3xl border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)] transition duration-300 text-center"
          >

            <div className="text-4xl text-cyan-400 flex justify-center mb-6">
              <FaMapMarkerAlt />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Location
            </h3>

            <p className="text-gray-400 leading-7">
              Kamaraj Nagar,
              <br />
              Padanthalumoodu,
              <br />
              KK Dist,
              Tamil Nadu 629163
            </p>

            <p className="text-cyan-400 mt-4 text-sm">
              Click to Open in Google Maps
            </p>

          </motion.a>

        </div>

      </section>

      {/* PREMIUM FOOTER */}

<footer className="relative mt-24 border-t border-white/10 overflow-hidden">

  {/* BACKGROUND GLOW */}

  <div className="absolute inset-0 overflow-hidden">

    <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl"></div>

    <div className="absolute right-0 top-0 w-[350px] h-[350px] bg-blue-500/10 blur-3xl"></div>

  </div>

  {/* MAIN FOOTER */}

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 md:py-20">

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-14">

      {/* BRAND */}

      <motion.div

        variants={fadeUp}
        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.15,
        }}

      >

        <h2 className="text-4xl font-black tracking-[4px] bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">

          JDA

        </h2>

        <p className="text-gray-400 leading-8 mt-6 text-lg">

          Premium CCTV installation,
          networking infrastructure,
          computer solutions, and
          enterprise IT services for
          modern businesses.

        </p>

      </motion.div>

      {/* QUICK LINKS */}

      <motion.div

        variants={fadeUp}
        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.15,
        }}

      >

        <h3 className="text-2xl font-bold mb-8 text-white">

          Quick Links

        </h3>

        <ul className="space-y-5">

          {[
            "Home",
            "Services",
            "About",
            "Projects",
            "Contact",
          ].map((item) => (

            <li key={item}>

              <a

                href={`#${item.toLowerCase()}`}

                className="text-gray-400 hover:text-cyan-300 hover:translate-x-3 inline-block transition duration-300"

              >

                {item}

              </a>

            </li>

          ))}

        </ul>

      </motion.div>

      {/* SERVICES */}

      <motion.div

        variants={fadeUp}
        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.15,
        }}

      >

        <a
  href="#projects"
  className="text-2xl font-bold mb-8 text-white hover:text-cyan-300 transition duration-300 inline-block"
>
  Services
</a>

        <ul className="space-y-5 text-gray-400">

          <li>
  <a
    href="#cctv-installation"
    className="hover:text-cyan-300 transition duration-300"
  >
    CCTV Installation
  </a>
</li>

<li>
  <a
    href="#networking-solutions"
    className="hover:text-cyan-300 transition duration-300"
  >
    Networking Solutions
  </a>
</li>

<li>
  <a
    href="#computer-services"
    className="hover:text-cyan-300 transition duration-300"
  >
    Computer Services
  </a>
</li>

<li>
  <a
    href="#printer-support"
    className="hover:text-cyan-300 transition duration-300"
  >
    Printer Support
  </a>
</li>

<li>
  <a
    href="#product-sales"
    className="hover:text-cyan-300 transition duration-300"
  >
    Product Sales
  </a>
</li>
        </ul>

      </motion.div>

      {/* CONTACT */}

      <motion.div

        variants={fadeUp}
        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.15,
        }}

      >

       <a
  href="#contact"
  className="text-2xl font-bold mb-8 text-white hover:text-cyan-300 transition duration-300 inline-block"
>
  Contact
</a>

        <div className="space-y-5 text-gray-400 leading-8">

          <a
  href="tel:+919345340119"
  className="hover:text-cyan-300 transition duration-300 block"
>
  +91 93453 40119
</a>

          <a
  href="mailto:jdatechsolution@gmail.com"
  className="hover:text-cyan-300 transition duration-300 block"
>
  jdatechsolution@gmail.com
</a>
          <a
  href="https://maps.app.goo.gl/anELF7YvXQb5ZHRD7"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-cyan-300 transition duration-300 block"
>
  Kamaraj Nagar,
  <br />
  Padanthalumoodu,
  <br />
  Tamil Nadu
</a>

        </div>

      </motion.div>

    </div>

    {/* DIVIDER */}

    <div className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

    {/* COPYRIGHT */}

    <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-gray-500 text-sm">

        © 2026 JDA Computers & Security Solutions.
        All Rights Reserved.

      </p>

      <motion.p

        whileHover={{
          scale: 1.04,
        }}

        className="text-gray-500 text-sm"

      >

        Designed with Premium Experience

      </motion.p>

    </div>

  </div>

</footer>

    </div>

  )

}

