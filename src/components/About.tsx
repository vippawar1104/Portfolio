"use client";
import { motion } from "framer-motion";

const About = () => {
  const tools = [
    {
      name: "n8n",
      description: "Workflow automation and integration platform",
    },
    {
      name: "Python",
      description: "Core language for AI and ML projects",
    },
    {
      name: "RAG & Finetuning",
      description: "Retrieval-Augmented Generation and model finetuning",
    },
    {
      name: "LangChain",
      description: "Chaining LLMs with vector databases",
    },
    {
      name: "Chroma DB",
      description: "Vector search in RAG pipelines",
    },
    {
      name: "Integrated various APIs in apps",
      description:
        "Connecting and leveraging multiple APIs for intelligent features",
    },
  ];

  return (
    <section id="about" className="py-20">
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
          <span className="inline-block px-4 py-2 rounded-full bg-zinc-800 text-zinc-400 text-sm font-medium mb-4">
            {" "}
            About Me{" "}
          </span>{" "}
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-300 mb-4">
            {" "}
            Who I Am{" "}
          </h2>{" "}
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            {" "}
            I architect intelligent ecosystems using LLMs, advanced workflow
            automation, and autonomous agents, empowering brands to scale with
            precision and efficiency.{" "}
          </p>{" "}
        </motion.div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {" "}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="space-y-6"
          >
            {" "}
            <div className="liquid-glass rounded-2xl p-6">
              {" "}
              <h3 className="text-2xl font-bold text-zinc-300 mb-4">
                {" "}
                My Journey{" "}
              </h3>{" "}
              <p className="text-zinc-400 mb-4">
                {" "}
                My journey into AI and ML began during SIH 2024, where our
                problem statement was rooted in machine learning. This
                experience sparked my fascination with the field, and after
                clearing the initial college rounds of SIH 2024, I dove deeper
                into building projects in AI and ML. I soon expanded my skills
                to workflow automation using n8n, automating complex processes
                and integrating AI models into real-world solutions. Driven by
                this passion, I started applying for internships as an AI
                engineer, eventually securing an internship in the field. I am
                now eager to continue advancing in the AI/ML domain and
                contribute to innovative projects in the future.{" "}
              </p>{" "}
              <p className="text-zinc-400">
                {" "}
                I specialize in building scalable, AI-powered solutions using
                cutting-edge tools and APIs, focusing on creating practical
                applications that leverage the latest advancements in artificial
                intelligence and machine learning.{" "}
              </p>{" "}
            </div>{" "}
            <div className="liquid-glass rounded-2xl p-6">
              {" "}
              <h3 className="text-2xl font-bold text-zinc-300 mb-4">
                {" "}
                Tools and Technologies that I have worked on{" "}
              </h3>{" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {" "}
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50 hover:bg-white/5 "
                  >
                    {" "}
                    <div>
                      {" "}
                      <h4 className="text-sm font-semibold text-zinc-300">
                        {" "}
                        {tool.name}{" "}
                      </h4>{" "}
                      <p className="text-xs text-zinc-400">
                        {" "}
                        {tool.description}{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="space-y-6"
          >
            {" "}
            <div className="liquid-glass rounded-2xl p-6">
              {" "}
              <h3 className="text-2xl font-bold text-zinc-300 mb-4">
                {" "}
                Focus Areas{" "}
              </h3>{" "}
              <div className="space-y-4">
                {" "}
                <div className="flex items-start space-x-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50 p-4 rounded-lg hover:bg-white/5 ">
                  {" "}
                  <div className="p-3 bg-zinc-800 text-zinc-400 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6">
                    {" "}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-lg font-semibold text-zinc-300 mb-2">
                      {" "}
                      AI-Powered Solutions{" "}
                    </h4>{" "}
                    <p className="text-zinc-400">
                      {" "}
                      Building intelligent systems that combine multiple AI
                      technologies for practical business applications.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start space-x-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50 p-4 rounded-lg hover:bg-white/5 ">
                  {" "}
                  <div className="p-3 bg-zinc-800 text-zinc-400 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6">
                    {" "}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-lg font-semibold text-zinc-300 mb-2">
                      {" "}
                      Industry Applications{" "}
                    </h4>{" "}
                    <p className="text-zinc-400">
                      {" "}
                      Specializing in building AI-driven solutions that boost
                      productivity and deliver actionable insights across
                      diverse industries.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start space-x-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50 p-4 rounded-lg hover:bg-white/5 ">
                  {" "}
                  <div className="p-3 bg-zinc-800 text-zinc-400 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6">
                    {" "}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-lg font-semibold text-zinc-300 mb-2">
                      {" "}
                      Scalable Architecture{" "}
                    </h4>{" "}
                    <p className="text-zinc-400">
                      {" "}
                      Designing and implementing robust systems that can handle
                      complex AI workloads and scale efficiently.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start space-x-4 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50 p-4 rounded-lg hover:bg-white/5 ">
                  {" "}
                  <div className="p-3 bg-zinc-800 text-zinc-400 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6">
                    {" "}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 01-8 0M12 3v4m0 0a4 4 0 01-4 4m4-4a4 4 0 004 4m-4 4v6m0 0h4m-4 0H8"
                      />{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h4 className="text-lg font-semibold text-zinc-300 mb-2">
                      {" "}
                      Automation & Integration{" "}
                    </h4>{" "}
                    <p className="text-zinc-400">
                      {" "}
                      Streamlining workflows and connecting systems using
                      automation tools and APIs for greater efficiency.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default About;
