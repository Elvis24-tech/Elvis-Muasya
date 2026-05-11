import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        form.current.reset();

        setTimeout(() => setSent(false), 4000);
      })
      .catch(() => setLoading(false));
  };

  return (
    <section id="contact" className="relative py-40 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-cyan-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10rem] right-0 w-[35rem] h-[35rem] bg-purple-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >

          <div>
            <p className="text-cyan-400 tracking-[0.4em] uppercase text-sm">
              Communication Hub
            </p>

            <h2 className="text-6xl font-black leading-tight mt-4">
              Let’s Build
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 space-y-5">

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <p className="text-sm text-gray-300">
                Available for freelance work
              </p>
            </div>

            <div className="text-gray-400 text-sm space-y-2">
              <p>📍 Nairobi, Kenya</p>
              <p>📧 elvis@example.com</p>
              <p>⚡ Response time: &lt; 24h</p>
            </div>

          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-2xl rounded-3xl p-6"
          >
            <p className="text-gray-300">
              “I don’t just build websites — I build experiences.”
            </p>
          </motion.div>

        </motion.div>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            bg-white/5
            border border-white/10
            backdrop-blur-2xl
            rounded-[2.5rem]
            p-10
            space-y-6
            relative
            overflow-hidden
          "
        >

          {/* glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />

          <p className="text-sm text-gray-400 tracking-[0.3em] uppercase">
            Message Console
          </p>

          <input
            name="user_name"
            placeholder="Your name"
            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            required
          />

          <input
            name="user_email"
            placeholder="Your email"
            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 resize-none"
            required
          />

          <button
            disabled={loading}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-3
              py-5
              rounded-2xl
              bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
              font-semibold
              text-lg
              hover:scale-[1.02]
              transition-all
            "
          >
            {loading ? "Sending..." : "Transmit Message"}
            <FiSend />
          </button>

          {/* SUCCESS STATE */}
          {sent && (
            <div className="flex items-center gap-2 text-green-400 justify-center">
              <FiCheckCircle />
              Message delivered successfully
            </div>
          )}

        </motion.form>

      </div>
    </section>
  );
};

export default Contact;