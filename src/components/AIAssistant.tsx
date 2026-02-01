"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "Hi! I'm Vipul's Personal AI Assistant. I have full access to his portfolio data. Ask me anything about his experience, projects, or skills!",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            setMessages([
                {
                    role: "assistant",
                    content:
                        "Hi! I'm Vipul's Personal AI Assistant. I have full access to his portfolio data. Ask me anything about his experience, projects, or skills!",
                },
            ]);
            setInput("");
            setIsLoading(false);
        };
        window.addEventListener("openAssistant", handleOpen);
        return () => window.removeEventListener("openAssistant", handleOpen);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const getWebsiteContext = () => {
        const sections = [
            "home",
            "about",
            "experience",
            "projects",
            "skills",
            "contact",
        ];
        let context = "";
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                const text = el.innerText.replace(/\s+/g, " ").trim();
                context += `\n[SECTION: ${id.toUpperCase()}]\n${text}\n`;
            }
        });
        return context;
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setInput("");
        setIsLoading(true);

        const context = getWebsiteContext();

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                    context: context,
                }),
            });

            const data = await response.json();

            if (data.content) {
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: data.content },
                ]);
            } else if (data.error) {
                // Show the actual error from the API
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content: `Error: ${data.error}. Please make sure the API key is configured in Vercel environment variables.`,
                    },
                ]);
            } else {
                throw new Error("No content received");
            }
        } catch (error) {
            console.error("AI Assistant Error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again later.`,
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, x: "-50%" }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, x: "-50%" }}
                        className="fixed bottom-10 left-1/2 w-[90%] max-w-lg h-[600px] liquid-glass z-[70] rounded-3xl flex flex-col overflow-hidden border border-white/20 shadow-2xl"
                    >
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-zinc-400 animate-pulse" />
                                <h3 className="text-zinc-200 font-bold">Vipul's AI Assistant</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-zinc-500 hover:text-zinc-300 transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide"
                        >
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] p-4 rounded-2xl ${msg.role === "user"
                                            ? "bg-zinc-700 text-zinc-100 rounded-tr-none"
                                            : "bg-white/5 border border-white/10 text-zinc-300 rounded-tl-none"
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed">{msg.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                                            <div
                                                className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"
                                                style={{ animationDelay: "0.2s" }}
                                            />
                                            <div
                                                className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"
                                                style={{ animationDelay: "0.4s" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="p-6 border-t border-white/10 bg-white/5">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Ask about Vipul..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-white/20 transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 p-3 text-zinc-400 hover:text-zinc-200 transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-[10px] text-zinc-600 mt-3 text-center uppercase tracking-widest font-bold">
                                Llama-Powered Assistant (Groq Cloud)
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AIAssistant;
