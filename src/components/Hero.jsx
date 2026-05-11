import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[20rem] sm:w-[35rem] md:w-[40rem] h-[20rem] sm:h-[35rem] md:h-[40rem] bg-cyan-500/10 blur-[140px] sm:blur-[180px] rounded-full top-[-8rem] sm:top-[-12rem] left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center lg:text-left"
        >
          <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-cyan-400 text-[11px] sm:text-sm">
            Fullstack Software Developer
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Engineering
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              PROBLEMS INTO
            </span>
            SOLUTIONS
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I design and build digital products that feel fast, intentional, and effortless to use.
            From interfaces to backend systems, I focus on turning real problems into clean,
            scalable solutions that people actually enjoy interacting with.
          </p>

          {/* SKILLS */}
          <div className="space-y-4 sm:space-y-5 text-xs sm:text-sm text-gray-300 max-w-xl mx-auto lg:mx-0">

            <div>
              <p className="text-cyan-400 font-semibold mb-1">Frontend Development</p>
              <p>HTML, CSS, JavaScript, React, Tailwind CSS</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">Backend Development</p>
              <p>Node.js, Django, Flask</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">Programming Languages</p>
              <p>JavaScript, Python, Rust, C</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">UI/UX Design</p>
              <p>Figma, Wireframing, Prototyping, User Research</p>
            </div>

            <div>
              <p className="text-cyan-400 font-semibold mb-1">Professional Skills</p>
              <p>
                Self-Management, Leadership, Emotional Intelligence, Problem Solving, Project Planning
              </p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <a
              href="#projects"
              className="px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition shadow-2xl shadow-cyan-500/30 font-semibold text-sm sm:text-base"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 sm:py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition text-sm sm:text-base"
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
          className="relative flex justify-center mt-10 lg:mt-0"
        >

          {/* GLOW */}
          <div className="absolute w-[18rem] sm:w-[25rem] md:w-[30rem] h-[18rem] sm:h-[25rem] md:h-[30rem] bg-cyan-500/20 rounded-full blur-[120px]" />

          {/* IMAGE WRAPPER */}
          <div className="relative flex flex-col items-center -translate-y-6 sm:-translate-y-12 md:-translate-y-20 z-20 hover:-translate-y-16 md:hover:-translate-y-24 transition-transform duration-500">

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[1.5rem] sm:rounded-[2rem] p-3 sm:p-5 shadow-2xl">

              <img
                src="/images/elvis.jpg"
                alt="Elvis"
                className="w-[220px] sm:w-[300px] md:w-[380px] h-[280px] sm:h-[400px] md:h-[480px] object-cover rounded-[1rem] sm:rounded-[1.5rem]"
              />

            </div>

            {/* ROLES */}
            <div className="mt-5 sm:mt-8 flex flex-col items-center gap-3 text-center">

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">

                <span className="px-4 sm:px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-200 backdrop-blur-xl">
                  Fullstack Developer
                </span>

                <span className="px-4 sm:px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-200 backdrop-blur-xl">
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