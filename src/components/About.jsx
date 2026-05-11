import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "Projects Built",
  },
  {
    number: "2+",
    label: "Years Learning",
  },
  {
    number: "100%",
    label: "Passion Driven",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6"
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            Creating Modern
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I’m Elvis Muasya — a passionate fullstack developer
            focused on building immersive interfaces,
            scalable backend systems, and visually engaging
            web applications using React, Tailwind CSS,
            Django, Flask, Firebase, and modern UI engineering.
          </p>

          <div className="flex flex-wrap gap-4">

            {[
              "React",
              "Tailwind",
              "Django",
              "Flask",
              "Firebase",
              "PostgreSQL",
            ].map((tech, index) => (
              <span
                key={index}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-xl
                  text-sm
                  text-gray-200
                "
              >
                {tech}
              </span>
            ))}

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-2xl
            rounded-[2rem]
            p-10
            relative
            overflow-hidden
          "
        >

          {/* Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="space-y-8">

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  pb-6
                "
              >
                <h3 className="text-5xl font-black text-white">
                  {stat.number}
                </h3>

                <p className="text-gray-400 text-lg">
                  {stat.label}
                </p>
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;