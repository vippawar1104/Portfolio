"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { smoothScroll } from "@/utils/scroll";

const Hero = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lightweight parallax scroll handler using rAF for performance
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(y);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background layers removed to show global gradient */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="flex items-center justify-center lg:justify-start order-1 lg:order-1"
          >
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto lg:mx-0"
              style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            >
              <div className="w-full h-full rounded-[3rem] overflow-hidden border-4 border-zinc-700/50 shadow-xl transition-all duration-300 hover:border-zinc-500/40 hover:shadow-2xl hover:shadow-zinc-500/20">
                <Image
                  src="/screenshots/Vipul2.png"
                  alt="Vipul Pawar - AI Engineer"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  className="object-cover rounded-[2.8rem]"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ObyBJbWFnZTwvdGV4dD4KPC9zdmc+";
                  }}
                />
              </div>
            </div>
          </motion.div>
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="text-center lg:text-left col-span-1 lg:col-span-2 order-2 lg:order-2"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-zinc-800 text-zinc-400 text-sm font-medium mb-4">
                AI Engineer{" "}
              </span>
              <h1 className="text-4xl sm:text-6xl font-bold text-zinc-300 mb-6 tracking-tight">
                Hi, I&apos;m{" "}
                <span className="relative">
                  <span className="relative z-10 text-zinc-400 ">
                    Vipul Pawar
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-3 bg-zinc-700 "
                    initial={{
                      scaleX: 0,
                    }}
                    animate={{
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                    }}
                  />
                </span>
              </h1>
            </div>
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
                brands scale with speed and precision.{" "}
              </p>
              <span className="block mt-6 text-base text-zinc-400 font-medium">
                Get to know me by scrolling down!{" "}
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
            >
              <button
                onClick={() => {
                  const event = new CustomEvent("openAssistant");
                  window.dispatchEvent(event);
                }}
                className="group relative px-10 py-5 liquid-glass-accent text-zinc-300 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-zinc-500/30 hover:scale-105 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
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
            </motion.div>
          </motion.div>
        </div>
        {/* Scroll indicator */}{" "}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="w-1 h-2 bg-zinc-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
