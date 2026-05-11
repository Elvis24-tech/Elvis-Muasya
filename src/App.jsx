import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="relative bg-[#050816] text-white overflow-hidden font-sans">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10rem] left-[-10rem] w-[35rem] h-[35rem] bg-cyan-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10rem] right-[-10rem] w-[35rem] h-[35rem] bg-purple-600/20 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[35%] w-[25rem] h-[25rem] bg-pink-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[20%] w-[18rem] h-[18rem] bg-blue-500/10 rounded-full blur-[100px]" />

      </div>
      <div
        className="
          fixed
          inset-0
          -z-10
          opacity-[0.05]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />

      </main>

    </div>
  );
}

export default App;