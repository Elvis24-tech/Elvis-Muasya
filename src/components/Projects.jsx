import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Farmart",
    subtitle: "Livestock Marketplace Platform",
    description:
      "A production-grade agricultural marketplace connecting farmers and buyers with authentication, dashboards, cart system, and M-Pesa integration for real transactions.",
    impact: "Digitized livestock trade and improved accessibility for rural farmers.",
    tech: ["React", "Django", "PostgreSQL", "Firebase"],
    link: "https://farmart-iota.vercel.app/",
    color: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    type: "live",
  },
  {
    title: "Grocerymart",
    subtitle: "Online Grocery E-commerce Platform",
    description:
      "A full grocery shopping system with product browsing, cart functionality, authentication, and checkout flow designed for real-world usability.",
    impact: "Simplified online grocery ordering with a smooth shopping experience.",
    tech: ["React", "Tailwind", "Django"],
    link: "https://grocerymart-delta.vercel.app/",
    color: "from-pink-500/20 via-orange-500/20 to-yellow-500/20",
    type: "live",
  },
  {
    title: "Pocket Pantry",
    subtitle: "Smart Food Inventory System",
    description:
      "A smart household inventory tracker that helps users manage groceries, track expiry dates, and reduce food waste efficiently.",
    impact: "Helped users reduce waste and improve food management.",
    tech: ["React", "Django", "SQLite", "Tailwind"],
    link: "https://nakara4.github.io/POCKET-PANTRY2/",
    color: "from-green-500/20 via-emerald-500/20 to-cyan-500/20",
    type: "live",
  },
  {
    title: "Hope Connect",
    subtitle: "Community Support Platform",
    description:
      "A digital platform connecting donors, volunteers, and NGOs with real-time coordination and structured outreach workflows.",
    impact: "Improved coordination in community-driven initiatives.",
    tech: ["React", "Django", "Tailwind"],
    link: "https://hopeconnect-ngo.vercel.app/",
    color: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    type: "live",
  },
  {
    title: "Beauty Shop",
    subtitle: "E-commerce Admin System",
    description:
      "A modern beauty e-commerce platform with authentication, admin dashboard, product management, and checkout flow.",
    impact: "Improved product management and purchase flow experience.",
    tech: ["React", "Tailwind", "Firebase", "Django"],
    link: "https://github.com/Elvis24-tech/Beautifier",
    color: "from-purple-500/20 via-pink-500/20 to-cyan-500/20",
    type: "live",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-40 px-6 relative">

      {/* background glow */}
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">
            Selected Work
          </p>

          <h2 className="text-5xl md:text-7xl font-black mt-4">
            Projects That Feel
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Like Real Products
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12, scale: 1.02 }}
              className="
                relative group
                rounded-[2.5rem]
                overflow-hidden
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                shadow-2xl
              "
            >

              {/* BACKGROUND GLOW (NOT BLOCKING CLICKS) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 pointer-events-none`}
              />

              {/* CONTENT */}
              <div className="relative p-8 space-y-5 z-10">

                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-cyan-300 text-sm mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="border-l border-cyan-400/40 pl-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Impact
                  </p>
                  <p className="text-sm text-gray-200 mt-1">
                    {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2 flex justify-between items-center">

                  <span className="text-xs text-gray-400">
                    {project.type === "live" ? "Live Project" : "Preview"}
                  </span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-cyan-300 font-medium
                      hover:gap-4 transition-all
                      relative z-20
                    "
                  >
                    View Project →
                  </a>

                </div>

              </div>

              {/* hover border (also non-blocking) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 border border-cyan-400/30 rounded-[2.5rem] pointer-events-none" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;