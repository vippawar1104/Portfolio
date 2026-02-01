"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "AcceleratorX",
    logo: "/screenshots/acceleratorxorg_logo.jpeg",
    position: "AI Engineer Intern",
    duration: "July 2025 – Present | Bengaluru, Karnataka",
    description: (
      <>
        <div className="text-zinc-300 space-y-3">
          <p>
            <strong>• Automated and Commissioned multiple n8n automation bots</strong> including Complaint Form, Webinar Registration, RAG Support Bot, and HR Hiring Agent, reducing manual data handling time by <span className="text-zinc-200 font-semibold">35%</span> and improving workflow efficiency.
          </p>
          <p>
            <strong>• Coded and launched a chatbot</strong> for the AcceleratorX app capable of performing RAG-based document retrieval on company resources to answer user queries, resulting in a <span className="text-zinc-200 font-semibold">45% reduction in support response time</span>. Applied strong Python OOP principles to design clean, modular, and scalable AI components.
          </p>
          <p>
            <strong>• Formulated AI-driven solutions in Python</strong> such as an Interview Preparation Model and a Mentor Agent using ElevenLabs, instituted in production directly in the app and CRM to enhance user engagement by <span className="text-zinc-200 font-semibold">50%</span>.
          </p>
          <p>
            <strong>• Streamlined automation pipelines</strong> by integrating APIs and vector databases for real-time document retrieval and conversational intelligence, achieving a <span className="text-zinc-200 font-semibold">30% improvement in query accuracy</span>.
          </p>
          <p>
            <strong>• Collaborated with cross-functional teams</strong> to enhance product efficiency, cutting manual workload by over <span className="text-zinc-200 font-semibold">40%</span> and accelerating project delivery timelines by <span className="text-zinc-200 font-semibold">25%</span> through AI automation.
          </p>
          <p>
            <strong>• Orchestrated an end-to-end STT–LLM–TTS voice AI pipeline</strong> from scratch, owning the entire backend architecture for real-time conversational agents with outbound calling and live interactions. Integrated Whisper-based STT, leveraged <span className="text-zinc-200 font-semibold">prompt injection techniques with GPT OSS 20B model</span> using advanced agent parameters and configurations for low-latency dialogue reasoning and task execution, and deployed Sonic 3 TTS for natural voice synthesis. Implemented Twilio webhooks to initiate and manage outbound calls from a registered phone number, enabling real-time bidirectional audio streaming. Achieved <span className="text-zinc-200 font-semibold">sub-2s end-to-end response latency</span> and an ElevenLabs-like conversational experience, reducing manual call handling by <span className="text-zinc-200 font-semibold">60%</span>.
          </p>
        </div>
      </>
    ),
    technologies: ["Python", "n8n", "RAG", "LangChain", "Whisper STT", "GPT OSS 20B", "Sonic 3 TTS", "Twilio", "ElevenLabs", "Vector DBs"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
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
          {" "}
          <span className="inline-block px-4 py-2 rounded-full bg-zinc-800/50 text-zinc-400 text-sm font-medium mb-4 border border-zinc-700/50">
            {" "}
            Professional Journey{" "}
          </span>{" "}
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-300 mb-4">
            {" "}
            Work Experience{" "}
          </h2>{" "}
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {" "}
            My professional experience in building AI-powered solutions and
            working with cutting-edge technologies{" "}
          </p>{" "}
        </motion.div>{" "}
        <div className="space-y-8">
          {" "}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -20 : 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="liquid-glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50"
            >
              {" "}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                {" "}
                <div>
                  {" "}
                  <h3 className="text-2xl font-bold text-zinc-300 mb-1">
                    {" "}
                    {exp.position}{" "}
                  </h3>{" "}
                  <div className="flex items-center gap-3 mb-2">
                    {" "}
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        className="rounded-md object-cover brightness-90"
                      />
                    )}{" "}
                    <p className="text-zinc-400 font-medium">
                      {" "}
                      {exp.company}{" "}
                    </p>{" "}
                  </div>{" "}
                  <p className="text-zinc-3000 text-sm">{exp.duration} </p>{" "}
                </div>{" "}
                <div className="mt-4 md:mt-0">
                  {" "}
                  <div className="flex flex-wrap gap-2">
                    {" "}
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 backdrop-blur-md text-zinc-400 border border-white/10 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-500/20 hover:bg-white/10"
                      >
                        {" "}
                        {tech}{" "}
                      </span>
                    ))}{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {exp.description}{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Experience;
