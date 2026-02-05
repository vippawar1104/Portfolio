"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "CodeOn",
    description:
      "A powerful AI coding assistant built with CodeLlama, Ollama, and Streamlit that provides intelligent code analysis, real-time execution, and comprehensive programming guidance.",
    image: "/screenshots/CodeOn.png",
    link: "https://codeon.streamlit.app ",
    tags: ["AI", "CodeLlama", "Streamlit", "Python"],
  },
  {
    title: "Finsight",
    description:
      "Finsight is an AI-powered personal finance tracker built with Streamlit and Python. Features user authentication, expense/income logging, interactive charts, and FinBot - an AI assistant using Cohere for budgeting advice. Uses SQLite databases and Plotly visualizations for secure, multi-user financial management.",
    image: "/screenshots/finsight.png",
    link: "https://finsight1104.streamlit.app",
    tags: ["Python", "Streamlit", "SQLite", "Cohere AI", "Plotly", "LangChain"],
  },
  {
    title: "PolyNote",
    description:
      "An intelligent meeting summarization tool that uses AI to transcribe, analyze, and generate concise summaries of meetings, making it easier to capture and share key points.",
    image: "/screenshots/PolyNote.png",
    link: "https://polynote.streamlit.app/ ",
    tags: ["Python", "FastAPI", "Streamlit", "AssemblyAI", "Groq LLM", "LangChain"],
  },
  {
    title: "X Post Agent",
    description:
      "An intelligent social media automation agent that manages X (Twitter) posts, schedules content, analyzes engagement, and optimizes posting strategies for maximum reach and impact.",
    image: "/screenshots/Xpostagent.png",
    link: "https://github.com/vippawar1104/X-Post-agent-",
    tags: ["n8n", "Social Media", "Automation", "X/Twitter"],
  },
  {
    title: "RAG Chatbot",
    description:
      "A sophisticated conversational AI that uses Retrieval-Augmented Generation to provide accurate, context-aware responses by retrieving relevant information from knowledge bases.",
    image: "/screenshots/RAGagent.png",
    link: "https://github.com/vippawar1104/RAG-agent-",
    tags: ["n8n", "RAG", "AI", "Chatbot"],
  },
  {
    title: "Research Agent",
    description:
      "An automated research assistant that uses Eleven Labs API to gather, analyze, and synthesize information from multiple sources, providing comprehensive insights and data-driven recommendations with vocal responses to questions.",
    image: "/screenshots/Researchagent.png",
    link: "https://github.com/vippawar1104/Research-agent-",
    tags: ["n8n", "Eleven Labs", "Automation", "AI"],
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [modalScreenshots, setModalScreenshots] = useState<string[]>([]);

  const [modalTitle, setModalTitle] = useState("");

  const openModal = (screenshots: string[], title: string) => {
    setModalScreenshots(screenshots);
    setModalTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-zinc-800 text-zinc-400 text-sm font-medium mb-4">
            My Work{" "}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-300 mb-4">
            Featured Projects{" "}
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Explore my latest AI-powered projects and innovations that showcase
            my passion for creating intelligent solutions{" "}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="group relative liquid-glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/50 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  priority={index === 0}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/screenshots/CodeOn.png";
                    // Fallback to first image
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-300 mb-2 group-hover:text-zinc-400 transition-colors">
                  {project.title}{" "}
                </h3>
                <p className="text-zinc-400 mb-4 line-clamp-3">
                  {project.description}{" "}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags &&
                    project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 backdrop-blur-md text-zinc-400 border border-white/10 rounded-full text-sm font-medium"
                      >
                        {tag}{" "}
                      </span>
                    ))}{" "}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-zinc-400 hover:text-zinc-400 font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 group/link"
                >
                  View Project{" "}
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
};

export default Projects;
