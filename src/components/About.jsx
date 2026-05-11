import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-40 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] bg-cyan-500/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10rem] right-0 w-[35rem] h-[35rem] bg-purple-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto space-y-20">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center space-y-6"
        >
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">
            About Me
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            I Turn Ideas Into
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Real Products
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I’m Elvis Muasya, a fullstack developer and UI/UX designer
            focused on building real-world, scalable, and user-centered
            digital products. I specialize in turning complex problems into
            clean, usable, and fast web applications.
          </p>
        </motion.div>

        {/* STORY + SKILLS */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* STORY */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">My Journey</h3>

            <p className="text-gray-300 leading-relaxed">
              I started with curiosity around how digital products are built,
              which led me into frontend and backend development. Over time,
              I progressed into building fullstack systems with authentication,
              payments, dashboards, and real users.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Today, I focus on building production-ready applications using
              React, Django, Flask, Firebase, and modern UI systems — with a
              strong emphasis on performance, usability, and design clarity.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">

              {[
                "Problem Solver",
                "Fullstack Engineer",
                "UI/UX Designer",
                "Product Builder",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-white/5
                    border border-white/10
                    text-sm text-gray-200
                  "
                >
                  {tag}
                </span>
              ))}

            </div>
          </motion.div>

          {/* SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="
              bg-white/5
              border border-white/10
              backdrop-blur-2xl
              rounded-[2rem]
              p-10
              space-y-6
            "
          >
            <h3 className="text-2xl font-bold">Tech Stack</h3>

            {[
              { label: "Frontend", value: "React, Tailwind, Framer Motion" },
              { label: "Backend", value: "Django, Flask, REST APIs" },
              { label: "Database", value: "PostgreSQL, Firebase" },
              { label: "Payments", value: "M-Pesa Integration" },
              { label: "Design", value: "UI/UX Systems, Prototyping" },
            ].map((item, i) => (
              <div key={i} className="space-y-1 border-b border-white/10 pb-4 last:border-none">

                <p className="text-cyan-400 text-sm">{item.label}</p>
                <p className="text-gray-300 text-sm">{item.value}</p>

              </div>
            ))}

          </motion.div>

        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            grid grid-cols-1 sm:grid-cols-3
            bg-white/5
            border border-white/10
            rounded-[2rem]
            overflow-hidden
          "
        >

          {[
            { num: "10+", label: "Projects Built" },
            { num: "2+", label: "Years Experience" },
            { num: "Fullstack + UI/UX", label: "Specialization" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-8 text-center border-r border-white/10 last:border-none"
            >
              <h3 className="text-4xl font-black">{stat.num}</h3>
              <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default About;