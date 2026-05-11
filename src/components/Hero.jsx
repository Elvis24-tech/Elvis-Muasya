import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[35rem] md:w-[40rem] h-[35rem] md:h-[40rem] bg-cyan-500/10 blur-[160px] md:blur-[180px] rounded-full top-[-10rem] left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <p className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-cyan-400 text-xs md:text-sm">
            Fullstack Software Developer
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            REVAMPING
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              PROBLEMS INTO
            </span>
            SOLUTIONS
          </h1>

          {/* UPDATED MESSAGE */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I design and build digital products that feel fast, intentional, and effortless to use.
            From interfaces to backend systems, I focus on turning real problems into clean,
            scalable solutions that people actually enjoy interacting with.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="
                px-6 sm:px-8 py-3 sm:py-4 rounded-full
                bg-gradient-to-r from-cyan-500 to-blue-600
                hover:scale-105 transition-all duration-300
                shadow-2xl shadow-cyan-500/30 font-semibold
                text-sm sm:text-base
              "
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="
                px-6 sm:px-8 py-3 sm:py-4 rounded-full
                border border-white/10
                bg-white/5 backdrop-blur-xl
                hover:bg-white/10 transition-all duration-300
                text-sm sm:text-base
              "
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* glow */}
          <div className="absolute w-[18rem] sm:w-[22rem] md:w-[25rem] h-[18rem] sm:h-[22rem] md:h-[25rem] bg-cyan-500/20 rounded-full blur-[100px] md:blur-[120px]" />

          <div className="relative flex flex-col items-center">

            {/* IMAGE CARD */}
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2rem] p-3 sm:p-5 shadow-2xl">

              <img
                src="/images/elvis.jpg"
                alt="Elvis"
                className="w-[240px] sm:w-[300px] md:w-[340px] h-[320px] sm:h-[380px] md:h-[430px] object-cover rounded-[1rem] md:rounded-[1.5rem]"
              />

            </div>

            {/* ROLES UNDER IMAGE */}
            <div className="mt-6 md:mt-8 flex flex-col items-center gap-3 text-center">

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">

                <span className="
                  px-4 sm:px-5 py-2
                  rounded-full
                  bg-white/5
                  border border-white/10
                  text-xs sm:text-sm text-gray-200
                  backdrop-blur-xl
                ">
                  Fullstack Developer
                </span>

                <span className="
                  px-4 sm:px-5 py-2
                  rounded-full
                  bg-white/5
                  border border-white/10
                  text-xs sm:text-sm text-gray-200
                  backdrop-blur-xl
                ">
                  UI/UX Designer
                </span>

              </div>

              <p className="text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase">
                Available for freelance & collaboration
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;