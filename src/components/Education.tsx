"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const education = [
    {
        college: "Indian Institute of Information Technology (IIIT), Nagpur",
        logo: "https://www.iiitn.ac.in/assets/logo-VnXGAucH.png",
        degree: "B.Tech in Electronics and Communication Engineering",
        duration: "2022 — 2026",
        status: "Final Year",
        description: "Currently in final year, specializing in Electronics & Communication with a core focus on AI/ML integration, embedded intelligence, and scalable neural architectures.",
        location: "Nagpur, Maharashtra"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-white/15 bg-white/[0.03] text-zinc-300 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        <span className="text-zinc-600">[</span>
                        Academic Background
                        <span className="text-zinc-600">]</span>
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-300 mb-4">
                        Education
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {education.map((item, idx) => (
                        <motion.div
                            key={item.college}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative liquid-glass rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:bg-zinc-900/40 border border-white/5 overflow-hidden shadow-2xl"
                        >
                            <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                                {/* Logo Section */}
                                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white/5 rounded-[2rem] p-4 border border-white/10 shadow-inner flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                    <Image
                                        src={item.logo}
                                        alt={item.college}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>

                                {/* Content Details */}
                                <div className="flex-1 space-y-6">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                        <div className="space-y-3">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 leading-tight">
                                                    {item.college}
                                                </h3>
                                                {item.status && (
                                                    <span className="px-3 py-1 bg-white/10 text-zinc-200 text-[10px] font-black uppercase tracking-widest border border-white/20 rounded-full animate-pulse font-mono">
                                                        {item.status}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xl text-zinc-400 font-semibold">
                                                {item.degree}
                                            </p>
                                        </div>

                                        <div className="flex flex-col md:items-end text-left md:text-right flex-shrink-0">
                                            <div className="px-5 py-2 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl">
                                                <span className="text-zinc-200 font-bold tracking-widest text-sm font-mono">
                                                    {item.duration}
                                                </span>
                                            </div>
                                            <span className="text-sm text-zinc-500 mt-3 font-bold uppercase tracking-tighter">
                                                {item.location}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/10">
                                        <p className="text-zinc-400 leading-relaxed text-lg opacity-90 italic">
                                            &quot;{item.description}&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
