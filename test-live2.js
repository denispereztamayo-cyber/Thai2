import { GoogleGenAI, Modality } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

function encode(bytes) {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

async function testLive() {
    const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });
    console.log("Connecting...");
    try {
        const sessionPromise = ai.live.connect({
            model: 'gemini-2.0-flash-exp',
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
                },
                systemInstruction: "test",
            },
            callbacks: {
                onopen: () => console.log('OPENED'),
                onmessage: (m) => console.log('MESSAGE:', m),
                onclose: (e) => console.log('CLOSED:', e),
                onerror: (e) => console.log('ERROR:', e.message || e),
            }
        });

        const session = await sessionPromise;
        console.log("Session connected:", !!session);

        setTimeout(() => {
            session.close();
        }, 5000);
    } catch (err) {
        console.error("Live Connect Error:", err);
    }
}

testLive();
