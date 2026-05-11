import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >

          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">
            Fullstack Engineer
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">

            BUILDING

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              DIGITAL
            </span>

            EXPERIENCES

          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            I’m Elvis Muasya — a passionate fullstack developer
            building immersive, high-performance, and visually
            engaging digital products using modern technologies.
          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="#projects"
              className="
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                hover:scale-105
                transition-all
                duration-300
                shadow-2xl
                shadow-cyan-500/30
                font-semibold
              "
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="
                px-8
                py-4
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                hover:bg-white/10
                transition-all
                duration-300
              "
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          <div className="absolute w-[25rem] h-[25rem] bg-cyan-500/20 rounded-full blur-[120px]" />

          <div
            className="
              relative
              bg-white/5
              border
              border-white/10
              backdrop-blur-2xl
              rounded-[2rem]
              p-5
              shadow-2xl
            "
          >

            <img
              src="/images/elvis.jpg"
              alt="Elvis"
              className="w-[340px] h-[430px] object-cover rounded-[1.5rem]"
            />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
                absolute
                -bottom-5
                -left-5
                bg-[#0f172a]
                border
                border-cyan-400/20
                px-5
                py-3
                rounded-2xl
                backdrop-blur-xl
              "
            >
              🚀 Fullstack Developer
            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;