"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-white/15 bg-white/[0.03] text-zinc-300 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <span className="text-zinc-600">[</span>
            AI Engineer
            <span className="text-zinc-600">]</span>
          </span>
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-zinc-100 mb-6 leading-tight tracking-tight">
            Vipul Pawar
          </h1>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xl text-zinc-400 mb-2">
            Expanding the boundaries of intelligence and automation. I
            architect advanced LLM workflows and autonomous agents to help
            brands scale with speed and precision.
          </p>
          <span className="block mt-6 text-base text-zinc-500 font-medium">
            Get to know me by scrolling down!
          </span>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <button
            onClick={() => {
              const event = new CustomEvent("openAssistant");
              window.dispatchEvent(event);
            }}
            className="group relative px-10 py-5 liquid-glass-accent text-zinc-200 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-white/10 hover:scale-105 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse" />
              <span className="relative z-10">Talk to Vipul&apos;s Assistant</span>
            </div>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{
                x: "-100%",
              }}
              whileHover={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            />
          </button>
          <a
            href="https://drive.google.com/file/d/18fx-LA23JEDeRCDj0T4DKXDUd_APAdwI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-10 py-5 liquid-glass-accent text-zinc-200 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-white/10 hover:scale-105 hover:-translate-y-1 border border-zinc-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0l-6-6m6 6l6-6"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
