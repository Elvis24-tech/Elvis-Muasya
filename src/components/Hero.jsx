import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[35rem] md:w-[40rem] h-[35rem] md:h-[40rem] bg-cyan-500/10 blur-[180px] rounded-full top-[-12rem] left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
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
            Engineering 
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              PROBLEMS INTO
            </span>
            SOLUTIONS
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            I design and build digital products that feel fast, intentional, and effortless to use.
            From interfaces to backend systems, I focus on turning real problems into clean,
            scalable solutions that people actually enjoy interacting with.
          </p>

          {/* SKILLS */}
          <div className="space-y-5 text-sm text-gray-300 max-w-xl mx-auto lg:mx-0">

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
                Self-Management, Leadership, Performance Management, Emotional Intelligence,
                Problem Solving, Project Planning
              </p>
            </div>

          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30 font-semibold"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[22rem] md:w-[30rem] h-[22rem] md:h-[30rem] bg-cyan-500/20 rounded-full blur-[140px]" />
          <div className="relative flex flex-col items-center -translate-y-16 md:-translate-y-24 z-20 hover:-translate-y-28 transition-transform duration-500">
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-4 sm:p-6 shadow-2xl">

              <img
                src="/images/elvis.jpg"
                alt="Elvis"
                className="w-[270px] sm:w-[330px] md:w-[380px] h-[360px] sm:h-[430px] md:h-[480px] object-cover rounded-[1.5rem]"
              />

            </div>

            {/* ROLES */}
            <div className="mt-6 md:mt-8 flex flex-col items-center gap-3 text-center">

              <div className="flex flex-wrap justify-center gap-3">

                <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 backdrop-blur-xl">
                  Fullstack Developer
                </span>

                <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200 backdrop-blur-xl">
                  UI/UX Designer
                </span>

              </div>

              <p className="text-xs text-gray-400 tracking-widest uppercase">
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