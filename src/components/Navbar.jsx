import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-xl
        bg-white/5
        border-b
        border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="
            text-2xl
            font-black
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
            cursor-pointer
          "
        >
          Elvis.dev
        </motion.h1>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          {["About", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="
                hover:text-white
                transition-all
                duration-300
                relative
                group
              "
            >
              {item}

              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  w-0
                  h-[2px]
                  bg-cyan-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}

        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;