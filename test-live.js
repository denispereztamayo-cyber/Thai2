import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

async function testLive() {
    const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });
    console.log("Connecting...");
    try {
        const session = await ai.live.connect({
            model: 'gemini-2.0-flash-exp',
            config: {
                systemInstruction: "test",
            }
        });
        console.log("Connection successful!");
        session.close();
    } catch (err) {
        console.error("Live Connect Error:", err);
    }
}

testLive();
