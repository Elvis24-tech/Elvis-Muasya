import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Farmart",
    description:
      "Modern farm animal marketplace with authentication, dashboards, M-Pesa integration, and advanced cart system.",
    tech: ["React", "Django", "PostgreSQL", "Firebase"],
    link: "https://farmart-iota.vercel.app/",
  },
  {
    title: "Beauty Shop",
    description:
      "Premium beauty e-commerce platform with Google auth, admin dashboard, and payment integration.",
    tech: ["React", "Tailwind", "Firebase", "Django"],
    link: "https://github.com/elvis24-tech/beauty-shop",
  },
  {
    title: "Hope Connect",
    description:
      "Community support platform connecting volunteers and donors with real-time interaction features.",
    tech: ["React", "Django", "Tailwind"],
    link: "https://hopeconnect-ngo.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Featured Projects
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                bg-white/5
                border
                border-white/10
                backdrop-blur-2xl
                rounded-[2rem]
                overflow-hidden
                transition-all
                duration-500
              "
            >

              <div className="h-56 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center text-3xl font-black">

                {project.title}

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-cyan-400
                    hover:gap-4
                    transition-all
                    duration-300
                  "
                >
                  View Project →
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;