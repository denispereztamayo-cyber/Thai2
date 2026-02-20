
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
    console.error("No API key found in .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

async function run() {
    try {
        const result = await model.generateContent("Hello!");
        console.log("API Test Success:", result.response.text());
    } catch (error) {
        console.error("API Test Failed:", error.message);
    }
}

run();
