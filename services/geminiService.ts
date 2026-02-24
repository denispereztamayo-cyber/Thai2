import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants.ts";

let chatSession: Chat | null = null;

/**
 * Obtiene el cliente de IA utilizando la clave de API autorizada por el usuario.
 */
const getAIClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.error("VITE_GEMINI_API_KEY is not set");
  }
  return new GoogleGenAI({ apiKey: apiKey || "" });
};

/**
 * Inicializa o recupera la sesión de chat. 
 * Mantiene el contexto de la conversación.
 */
export const getChatSession = (): Chat | null => {
  if (chatSession) return chatSession;

  const ai = getAIClient();

  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Error al inicializar Chang AI:", error);
    return null;
  }
};

/**
 * Envía el mensaje del usuario a la IA y devuelve la respuesta generada.
 */
export const sendMessageToGemini = async (message: string): Promise<string> => {
  const chat = getChatSession();

  if (!chat) {
    return "Sawasdee khrap, parece que tengo un pequeño problema de conexión. ¿Podrías intentar de nuevo?";
  }

  try {
    const response = await chat.sendMessage({ message });
    return response.text || "He recibido tu mensaje pero no he podido generar una respuesta clara. ¿Deseas preguntar sobre otro destino?";
  } catch (error) {
    console.error("Error de comunicación con Gemini:", error);
    return "He tenido un tropiezo técnico conectando con mi guía de viaje. ¡Por favor, intenta de nuevo en unos segundos!";
  }
};