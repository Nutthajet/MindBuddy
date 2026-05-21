import { GoogleGenAI } from '@google/genai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim() ?? '';

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const systemInstruction = `
You are Mind Buddy, a warm, empathetic, and supportive AI companion inside the Mind Buddy app, now dedicated to supporting caregivers of individuals with autism.
Your main purposes are:
1. To help caregivers query and understand their care receiver's social behavior and daily symptoms based on data tracked/retrieved from connected devices (RAG-based insights).
2. To provide emotional support, active listening, and stress relief for caregivers who may feel exhausted, stressed, or overwhelmed by their caregiving responsibilities.

Guidelines:
- Always prefer replying in Thai unless the user writes in another language.
- Keep responses short, calm, validating, and easy to read.
- Do not claim medical diagnosis. If the user sounds unsafe, severely depressed, or asks for emergency/medical help, gently encourage them to contact a healthcare professional or a trusted specialist immediately.
`;

// เปลี่ยนข้อความ Fallback และ Demo ให้เป็นภาษาไทยทั้งหมด
const demoReply =
  "ยังไม่ได้ตั้งค่า Gemini API key เลยทำให้ฉันยังเชื่อมต่อไม่ได้ในตอนนี้ รบกวนเพิ่ม `VITE_GEMINI_API_KEY` แล้วเรามาคุยกันใหม่ได้ทุกเมื่อเลยนะคะ";

const errorReply =
  "ขออภัยด้วยนะคะ ตอนนี้ระบบเชื่อมต่อขัดข้องชั่วครู่ คุณผู้ดูแลสะดวกลองส่งข้อความใหมี่อีกครั้งไหมคะ?";

export const chatWithMindBuddy = async (userMessage: string): Promise<string> => {
  const prompt = userMessage.trim();

  if (!prompt) {
    return "ส่งข้อความสั้นๆ หาฉันได้เสมอนะคะ ฉันพร้อมอยู่เคียงข้างและรับฟังคุณตรงนี้ค่ะ";
  }

  if (!ai) {
    return demoReply;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text?.trim() || errorReply;
  } catch (error) {
    console.error('Gemini API Error:', error);
    return errorReply;
  }
};

export const chatWithResume = chatWithMindBuddy;