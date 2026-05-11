import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="relative py-40 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-15rem] left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-cyan-500/10 blur-[200px] rounded-full" />
        <div className="absolute bottom-[-15rem] right-0 w-[40rem] h-[40rem] bg-purple-500/10 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Let’s Work
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have an idea, project, or collaboration in mind?
            Reach out directly — I respond fast.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="grid md:grid-cols-2 gap-8"
        >

          {/* EMAIL */}
          <div className="
            bg-white/5
            border border-white/10
            backdrop-blur-2xl
            rounded-[2rem]
            p-10
            space-y-4
            hover:scale-[1.02]
            transition
          ">
            <div className="flex items-center justify-center gap-3 text-cyan-400">
              <FiMail size={20} />
              <h3 className="text-xl font-bold">Email</h3>
            </div>

            <p className="text-gray-300 text-lg">
              elvismuasya010@gmail.com
            </p>

            <p className="text-gray-500 text-sm">
              Best for projects & collaborations
            </p>
          </div>

          {/* PHONE */}
          <div className="
            bg-white/5
            border border-white/10
            backdrop-blur-2xl
            rounded-[2rem]
            p-10
            space-y-4
            hover:scale-[1.02]
            transition
          ">
            <div className="flex items-center justify-center gap-3 text-cyan-400">
              <FiPhone size={20} />
              <h3 className="text-xl font-bold">Phone</h3>
            </div>

            <p className="text-gray-300 text-lg">
              +254 745 805 917
            </p>

            <p className="text-gray-500 text-sm">
              Available during working hours
            </p>
          </div>

        </motion.div>

        {/* STATUS */}
        <div className="flex justify-center">
          <div className="
            flex items-center gap-3
            bg-white/5
            border border-white/10
            px-6 py-3
            rounded-full
            text-gray-300
            backdrop-blur-xl
          ">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Currently available for freelance & full-time roles
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;