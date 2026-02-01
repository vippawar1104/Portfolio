import { NextResponse } from "next/server";

// Use environment variable for Groq API Key
const GROQ_API_KEY = process.env.GROQ_API_KEY || "";

export async function POST(req: Request) {
    try {
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
                        content: `You are the Personal AI Assistant for Vipul Pawar, an AI Engineer. 
            Your goal is to answer questions about Vipul based ONLY on the provided context from his portfolio website.
            If the information is not in the context, politely say you don't know or suggest contacting Vipul at vipulpawar81077@gmail.com.
            Keep answers professional, concise, and enthusiastic. do not use any emojis.
            
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

        const data = await response.json();
        return NextResponse.json({ content: data.choices[0].message.content });
    } catch (error) {
        console.error("Chat Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch response from AI" },
            { status: 500 }
        );
    }
}
