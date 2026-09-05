import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the Personal AI Assistant for Vipul Pawar, a high-impact AI Engineer specialized in Voice AI, GraphRAG, and Scalable AI Architecture.

About Vipul:
- Headline: AI Engineer @AcceleratorX | AI & Machine Learning Enthusiast.
- Education: Final Year B.Tech in Electronics and Communication Engineering from IIIT Nagpur (2022-2026).
- Current Role: AI Engineer Intern at AcceleratorX (July 2025 - Present).
- Location: Based in Bhopal, Madhya Pradesh | Working in Bengaluru, KA.
- Focus: Voice AI pipelines, GraphRAG, Hybrid Vector DBs, and Scalable AI Architecture.
- Contact: vipulpawar81077@gmail.com | LinkedIn: https://www.linkedin.com/in/vipul-pawar-1104vip/
- LeetCode: https://leetcode.com/u/vipulpawar1104/ (100+ problems solved, strong DSA fundamentals)

Instructions:
1. Use **Markdown** formatting for all responses. Utilize bold text, lists, and tables where appropriate to make information scannable and professional.
2. Answer questions about Vipul based on the provided context and the personal info above.
3. If information is missing, politely suggest contacting Vipul via email or LinkedIn.
4. Maintain a professional, concise, and enthusiastic tone.`;

export async function POST(req: Request) {
    try {
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

        if (!GEMINI_API_KEY) {
            console.error("GEMINI_API_KEY is not configured");
            return NextResponse.json(
                { error: "API key not configured. Please contact the administrator." },
                { status: 500 }
            );
        }

        const { message, context } = await req.json();

        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": GEMINI_API_KEY,
                },
                body: JSON.stringify({
                    system_instruction: {
                        parts: [{ text: `${SYSTEM_PROMPT}\n\nCONTEXT FROM WEBSITE:\n${context}` }],
                    },
                    contents: [
                        {
                            role: "user",
                            parts: [{ text: message }],
                        },
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        // gemini-3.6-flash spends part of this budget on internal
                        // "thinking" tokens before writing the visible answer, so
                        // this needs real headroom or longer replies get cut off
                        // mid-sentence.
                        maxOutputTokens: 2048,
                    },
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Gemini API Error:", errorData);
            return NextResponse.json(
                { error: `Gemini API error: ${errorData.error?.message || "Unknown error"}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        const content = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!content) {
            console.error("Invalid response from Gemini API:", data);
            return NextResponse.json(
                { error: "Invalid response from AI service" },
                { status: 500 }
            );
        }

        return NextResponse.json({ content });
    } catch (error) {
        console.error("Chat Error:", error);
        return NextResponse.json(
            { error: `Failed to fetch response from AI: ${error instanceof Error ? error.message : "Unknown error"}` },
            { status: 500 }
        );
    }
}
