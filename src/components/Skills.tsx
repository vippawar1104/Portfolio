"use client";
import { motion } from "framer-motion";

const skills = [
	{
		category: "Languages",
		items: ["C", "C++", "Python"],
		icon: (
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
					d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
				/>{" "}
			</svg>
		),
	},
	{
		category: "Core CS",
		items: ["DSA (100+ LeetCode)", "OS", "DBMS", "OOP", "CN"],
		icon: (
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
			</svg>
		),
	},
	{
		category: "LLM Stack",
		items: [
			"LangChain",
			"Llama",
			"RAG",
			"Prompt Engg",
			"Vector DBs (Pinecone, Supabase, Chroma)",
			"n8n",
		],
		icon: (
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
			</svg>
		),
	},
	{
		category: "AI/ML",
		items: [
			"NLP",
			"Deep Learning",
			"LLMs",
			"Speech to Text Processing",
			"Text to Speech Processing",
			"Streamlit",
			"Scikit-learn",
			"Pandas",
			"NumPy",
			"Matplotlib",
		],
		icon: (
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
			</svg>
		),
	},
	{
		category: "APIs",
		items: [
			"FastAPI",
			"Cohere API (for creating embeddings)",
			"AssemblyAI",
			"Groq",
			"OpenAI",
			"Hugging Face",
			"Gemini 2.5 flash API",
			"Seedream 4.0 (for text to image generation)",
			"Eleven Labs API",
		],
		icon: (
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
					d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
				/>{" "}
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				/>{" "}
			</svg>
		),
	},
	{
		category: "Data/Tools",
		items: ["MySQL", "Git", "GitHub"],
		icon: (
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
					d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
				/>{" "}
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				/>{" "}
			</svg>
		),
	},
];

const Skills = () => {
	return (
		<section id="skills" className="py-20">
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
						Expertise{" "}
					</span>{" "}
					<h2 className="text-3xl sm:text-4xl font-bold text-zinc-300 mb-4">
						{" "}
						Technical Skills{" "}
					</h2>{" "}
					<p className="text-lg text-zinc-400 max-w-2xl mx-auto">
						{" "}
						My technical expertise and tools I work with to bring ideas to
						life{" "}
					</p>{" "}
				</motion.div>{" "}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{" "}
					{skills.map((skillGroup, index) => (
						<motion.div
							key={skillGroup.category}
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
							className="group relative liquid-glass rounded-2xl p-6 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 overflow-hidden"
						>
							{/* Premium Hover Glow Effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-zinc-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							{/* Corner Accent */}
							<div className="absolute -top-12 -right-12 w-24 h-24 bg-zinc-500/10 rounded-full blur-2xl group-hover:bg-zinc-500/20 transition-all duration-500" />
							<div className="relative z-10">
								<div className="flex items-center gap-3 mb-6">
									<div className="p-3 bg-zinc-800/80 text-zinc-300 rounded-xl shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
										{" "}
										{skillGroup.icon}{" "}
									</div>{" "}
									<h3 className="text-xl font-bold text-zinc-300">
										{" "}
										{skillGroup.category}{" "}
									</h3>{" "}
								</div>{" "}
								<div className="flex flex-wrap gap-2">
									{" "}
									{skillGroup.items.map((skill) => (
										<motion.span
											key={skill}
											whileHover={{
												scale: 1.05,
												y: -2,
											}}
											className="px-4 py-2 bg-white/5 backdrop-blur-md text-zinc-400 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:text-zinc-300 hover:border-white/20 transition-all duration-300 shadow-sm"
										>
											{" "}
											{skill}{" "}
										</motion.span>
									))}{" "}
								</div>{" "}
							</div>{" "}
						</motion.div>
					))}{" "}
				</div>{" "}
			</div>{" "}
		</section>
	);
};

export default Skills;
