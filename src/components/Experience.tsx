"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// --- CUSTOM SVG ICONS ---

const MicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
    <line x1="12" x2="12" y1="19" y2="22" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z" />
  </svg>
);

const N8NLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="M9 12h6M16.5 7.5l-3 3M16.5 16.5l-3-3" />
  </svg>
);

const BotIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect width="18" height="10" x="3" y="11" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" x2="8" y1="16" y2="16" />
    <line x1="16" x2="16" y1="16" y2="16" />
  </svg>
);

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const TrendingUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const achievements = [
  {
    id: "voice-ai",
    title: "Voice AI Pipeline",
    app: "STT-LLM-TTS",
    impact: "-60% Manual Work",
    tagline: "Ultra-low latency conversational agents.",
    fullDescription: "Orchestrated an end-to-end STT–LLM–TTS voice AI pipeline from scratch, owning the entire backend architecture for real-time conversational agents with outbound calling and live interactions. Integrated Whisper-based STT, leveraged prompt injection techniques with GPT OSS 20B model for low-latency dialogue reasoning, and deployed Sonic 3 TTS for natural voice synthesis. Achieved sub-2s end-to-end response latency and a human-like conversational experience.",
    icon: <MicIcon />,
    color: "blue",
    tools: ["Python", "Whisper", "Sonic 3", "GPT", "Twilio"],
    stats: "Sub-2s Latency"
  },
  {
    id: "rag",
    title: "RAG DeepSearch",
    app: "AI Knowledge",
    impact: "+45% Efficiency",
    tagline: "Instant document retrieval engine.",
    fullDescription: "Coded and launched a sophisticated chatbot for the AcceleratorX app capable of performing RAG-based document retrieval on company resources. Upgraded the system with a GraphRAG hybrid vector DB technique to significantly increase retrieval efficiency. Applied strong Python OOP principles to design clean, modular, and scalable AI components, resulting in a 45% reduction in support response time and significantly improved accuracy in answering complex user queries.",
    icon: <BrainIcon />,
    color: "emerald",
    tools: ["Python", "Vector DB", "LangChain", "RAG"],
    stats: "Scalable OOP"
  },
  {
    id: "n8n",
    title: "Process Automations",
    app: "n8n Workflows",
    impact: "-35% Data Entry",
    tagline: "Self-healing bots for CRM & HR.",
    fullDescription: "Automated and commissioned multiple n8n automation bots including Complaint Form handling, Webinar Registration, and an HR Hiring Agent. These bots streamlined high-volume data processing across various platforms, reducing manual data handling time by 35% and accelerating cross-departmental workflow efficiency through real-time API integrations.",
    icon: <N8NLogo />,
    color: "orange",
    tools: ["n8n", "API", "Webhooks", "JSON"],
    stats: "5+ Custom Bots"
  },
  {
    id: "mentor",
    title: "Mentor Agents",
    app: "Voice Clones",
    impact: "+50% Engagement",
    tagline: "AI-driven interview prep & coaching.",
    fullDescription: "Formulated AI-driven solutions in Python, including a Mentor Agent deployed on the app and an AI Consultant integrated into the CRM—both utilizing ElevenLabs voice cloning for highly personalized interactions. These agents, along with an Interview Preparation Model, were instituted directly into production to enhance user engagement. The implementation led to a 50% increase in active user interactions and provided a more human-like learning experience.",
    icon: <BotIcon />,
    color: "purple",
    tools: ["Python", "ElevenLabs", "CRM", "DL", "FastAPI"],
    stats: "Production Ready"
  }
];

const Experience = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);

  return (
    <section id="experience" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header / Company Info */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-zinc-900"
          >
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-zinc-400/10 blur-2xl rounded-full" />
                <div className="relative w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-3 overflow-hidden group hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-500">
                  <Image
                    src="/screenshots/acceleratorxorg_logo.jpeg"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain grayscale brightness-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 scale-110"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-zinc-300 tracking-tight">AI Engineer</h2>
                <p className="text-zinc-500 font-medium">AcceleratorX • <span className="text-zinc-600">Internship</span> • <span className="italic text-zinc-600">Bengaluru, KA</span></p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em]">Timeline</span>
              <div className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-semibold">
                July 2025 — Present
              </div>
            </div>
          </motion.div>
        </div>

        {/* The "Box Box" Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setSelectedAchievement(item)}
              className="group relative flex flex-col h-full liquid-glass rounded-[2.5rem] p-7 transition-all duration-500 hover:bg-zinc-900/40 hover:border-zinc-800 active:scale-[0.98] cursor-pointer overflow-hidden"
            >
              {/* Box Overlay Indicator */}
              <div className="mb-10 flex items-center justify-between">
                <div
                  className={`w-14 h-14 rounded-3xl bg-zinc-950 border border-zinc-900 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 text-zinc-400 shadow-inner
                    ${item.color === 'blue' ? 'group-hover:bg-blue-500/10 group-hover:border-blue-500/20 group-hover:text-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]' :
                      item.color === 'emerald' ? 'group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 group-hover:text-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]' :
                        item.color === 'purple' ? 'group-hover:bg-purple-500/10 group-hover:border-purple-500/20 group-hover:text-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]' :
                          item.color === 'orange' ? 'group-hover:bg-orange-500/10 group-hover:border-orange-500/20 group-hover:text-orange-400 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]' :
                            'group-hover:bg-zinc-800 group-hover:border-zinc-700 group-hover:text-zinc-200'}
                  `}
                >
                  {item.icon}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`p-2 rounded-full transition-colors 
                    ${item.color === 'blue' ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-400 hover:text-white' :
                      item.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-400 hover:text-white' :
                        item.color === 'purple' ? 'bg-purple-500/10 text-purple-400 hover:bg-purple-400 hover:text-white' :
                          item.color === 'orange' ? 'bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white' :
                            'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}
                  `}>
                    <ArrowUpRight />
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2">{item.app}</p>
                <h3 className="text-xl font-bold text-zinc-300 mb-3 group-hover:text-zinc-200 transition-colors">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-snug font-medium line-clamp-2">
                  {item.tagline}
                </p>
              </div>

              <div className="mt-auto" />

              <div className="pt-6 border-t border-zinc-900 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase">Impact</span>
                  </div>
                  <span className="text-xs font-black text-zinc-300 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800/50">
                    {item.impact}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                  {item.tools.slice(0, 2).map(t => (
                    <span key={t} className="text-[9px] font-bold text-zinc-500">#{t}</span>
                  ))}
                  {item.tools.length > 2 && <span className="text-[9px] font-bold text-zinc-500">+{item.tools.length - 2}</span>}
                </div>
              </div>

              {/* Secret Interaction Hint */}
              <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay for Detailed Experience */}
        <AnimatePresence>
          {selectedAchievement && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xl"
              onClick={() => setSelectedAchievement(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full liquid-glass rounded-[3rem] overflow-hidden shadow-2xl p-8 sm:p-12"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-white/5 text-zinc-400 hover:text-white transition-colors z-10 border border-white/10"
                >
                  <XIcon />
                </button>

                <div>
                  <div className="flex items-center gap-6 mb-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center
                      ${selectedAchievement.color === 'blue' ? 'text-blue-400 bg-blue-500/5 border border-blue-500/20' :
                        selectedAchievement.color === 'emerald' ? 'text-emerald-400 bg-emerald-500/5 border border-emerald-500/20' :
                          selectedAchievement.color === 'purple' ? 'text-purple-400 bg-purple-500/5 border border-purple-500/20' :
                            selectedAchievement.color === 'orange' ? 'text-orange-400 bg-orange-500/5 border border-orange-500/20' :
                              'text-zinc-300 bg-white/5 border border-white/10'}
                    `}>
                      {selectedAchievement.icon}
                    </div>
                    <div>
                      <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">{selectedAchievement.app}</p>
                      <h3 className="text-3xl font-bold text-zinc-300 leading-tight">{selectedAchievement.title}</h3>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-lg leading-relaxed mb-10 selection:bg-zinc-700">
                    {selectedAchievement.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl liquid-glass border border-white/10 bg-white/[0.02]">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Primary Toolset</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedAchievement.tools.map(tool => (
                          <span key={tool} className="text-xs font-bold text-zinc-400 bg-white/[0.05] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 rounded-2xl liquid-glass border border-white/10 bg-white/[0.02] flex flex-col justify-center">
                      <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3">Impact Delivered</p>
                      <p className="text-3xl font-black text-zinc-300 tracking-tighter drop-shadow-lg">{selectedAchievement.impact}</p>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-6">
                        <div className="flex -space-x-3">
                          <div className="w-10 h-10 rounded-full bg-white/5 border-2 border-zinc-900 flex items-center justify-center text-[10px] font-bold text-zinc-400 backdrop-blur-sm">STT</div>
                          <div className="w-10 h-10 rounded-full bg-white/5 border-2 border-zinc-900 flex items-center justify-center text-[10px] font-bold text-zinc-400 backdrop-blur-sm">LLM</div>
                          <div className="w-10 h-10 rounded-full bg-white/5 border-2 border-zinc-900 flex items-center justify-center text-[10px] font-bold text-zinc-400 backdrop-blur-sm">TTS</div>
                        </div>
                        <p className="text-zinc-500 text-xs font-medium">Production Verified</p>
                      </div>
                      <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
                        ESC or click outside to close
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Footer Insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 text-center"
        >
          <div className="flex -space-x-4">
            <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-zinc-900 flex items-center justify-center text-[10px] font-black text-zinc-500 uppercase shadow-xl">n8n</div>
            <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-zinc-900 flex items-center justify-center text-[10px] font-black text-zinc-500 uppercase shadow-xl">AI</div>
            <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-zinc-900 flex items-center justify-center text-[10px] font-black text-zinc-500 uppercase shadow-xl">API</div>
          </div>
          <p className="text-zinc-600 text-sm font-medium max-w-sm">
            Leveraging modern tech stacks to automate complex business workflows and deliver AI solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
