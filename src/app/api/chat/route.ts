import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        // Get API key from environment
        const GROQ_API_KEY = process.env.GROQ_API_KEY;

        // Check if API key exists
        if (!GROQ_API_KEY) {
            console.error("GROQ_API_KEY is not configured");
            return NextResponse.json(
                { error: "API key not configured. Please contact the administrator." },
                { status: 500 }
            );
        }

        const { message, context } = await req.json();

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${GROQ_API_KEY}`,
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "system",
                        content: `You are the Personal AI Assistant for Vipul Pawar, a high-impact AI Engineer specialized in Voice AI, GraphRAG, and Scalable AI Architecture.

About Vipul:
- Headline: AI Engineer @AcceleratorX | AI & Machine Learning Enthusiast.
- Education: Final Year B.Tech in Electronics and Communication Engineering from IIIT Nagpur (2022-2026).
- Current Role: AI Engineer Intern at AcceleratorX (July 2025 - Present).
- Location: Based in Bhopal, Madhya Pradesh | Working in Bengaluru, KA.
- Focus: Voice AI pipelines, GraphRAG, Hybrid Vector DBs, and Scalable AI Architecture.
- Contact: vipulpawar81077@gmail.com | LinkedIn: https://www.linkedin.com/in/vipul-pawar-1104vip/

Instructions:
1. Use **Markdown** formatting for all responses. Utilize bold text, lists, and tables where appropriate to make information scannable and professional.
2. Answer questions about Vipul based on the provided context and the personal info above.
3. If information is missing, politely suggest contacting Vipul via email or LinkedIn.
4. Maintain a professional, concise, and enthusiastic tone.
            
            CONTEXT FROM WEBSITE:
            ${context}`,
                    },
                    {
                        role: "user",
                        content: message,
                    },
                ],
                temperature: 0.7,
                max_tokens: 500,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Groq API Error:", errorData);
            return NextResponse.json(
                { error: `Groq API error: ${errorData.error?.message || 'Unknown error'}` },
                { status: response.status }
            );
        }

        const data = await response.json();

        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            console.error("Invalid response from Groq API:", data);
            return NextResponse.json(
                { error: "Invalid response from AI service" },
                { status: 500 }
            );
        }

        return NextResponse.json({ content: data.choices[0].message.content });
    } catch (error) {
        console.error("Chat Error:", error);
        return NextResponse.json(
            { error: `Failed to fetch response from AI: ${error instanceof Error ? error.message : 'Unknown error'}` },
            { status: 500 }
        );
    }
}
