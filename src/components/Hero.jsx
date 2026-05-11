import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-cyan-400 uppercase tracking-[0.3em] text-sm"
          >
            Fullstack Engineer
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-black leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            BUILDING
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              DIGITAL
            </span>

            <br />

            EXPERIENCES
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            I’m Elvis Muasya — a passionate fullstack developer
            creating immersive, modern, and high-performance web
            applications using React, Tailwind CSS, Django,
            Flask, and modern UI engineering.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-wrap gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
            >
              Let’s Work Together
            </button>

            <a
              href="#projects"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Glow */}
          <div className="absolute w-[22rem] h-[22rem] bg-cyan-500/20 rounded-full blur-[100px]" />

          {/* Glass Card */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-6 shadow-2xl">

            <img
              src="/images/elvis.jpg"
              alt="Elvis"
              className="w-[320px] h-[400px] object-cover rounded-[1.5rem]"
            />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-6 -left-6 bg-[#0f172a] border border-cyan-400/20 px-5 py-3 rounded-2xl backdrop-blur-xl shadow-xl"
            >
              <p className="text-sm text-gray-300">
                🚀 Fullstack Developer
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;