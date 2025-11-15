'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const experiences = [
	{
		company: 'AcceleratorX',
		logo: '/screenshots/acceleratorxorg_logo.jpeg',
		position: 'AI Engineer Intern',
		duration: 'Internship',
		description: (
			<>
				Developed a chatbot for the company app that performs Retrieval-Augmented Generation (RAG) using company information, providing accurate and context-aware responses to users.
				<br />
				Built and deployed over 10+ AI agent workflow automations on n8n, significantly accelerating process flows for operations, creative, and other teams, resulting in measurable efficiency gains for the company.
				<br />
				Created APIs and helped integrate them with the company app and website, enabling seamless data flow and enhanced functionality across platforms.
				<br />
				<b>Some of the Workflow automations delivered are:</b>
				<ul className="list-disc pl-5 mt-1 space-y-1">
					<li>RAG implementation for knowledge retrieval</li>
					<li>Complaint form bot</li>
					<li>Registration forms bot</li>
					<li>Meta ads bot (creative image generation)</li>
					<li>Mentor bot (used eleven labs API)</li>
					<li>Support bot</li>
					<li>Lead enrichment bot</li>
					<li>HR agent on n8n</li>
				</ul>
			</>
		),
		technologies: [],
	},
];

const Experience = () => {
	return (
		<section
			id="experience"
			className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
						Professional Journey
					</span>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Work Experience
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						My professional experience in building AI-powered solutions and working
						with cutting-edge technologies
					</p>
				</motion.div>

				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.company}
							initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/25"
						>
							<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
								<div>
									<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
										{exp.position}
									</h3>
									<div className="flex items-center gap-3 mb-2">
										{exp.logo && (
											<Image src={exp.logo} alt={`${exp.company} logo`} width={48} height={48} className="rounded-md object-cover" />
										)}
										<p className="text-blue-600 dark:text-blue-400 font-medium">
											{exp.company}
										</p>
									</div>
									<p className="text-gray-600 dark:text-gray-400 text-sm">
										{exp.duration}
									</p>
								</div>
								<div className="mt-4 md:mt-0">
									<div className="flex flex-wrap gap-2">
										{exp.technologies.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 hover:bg-blue-100 dark:hover:bg-blue-800/50"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
							{exp.description}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
