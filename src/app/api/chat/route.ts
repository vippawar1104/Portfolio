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
