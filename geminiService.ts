
import { GoogleGenAI } from "@google/genai";
import { Language } from "./types";

export async function getDiagnosticAdvice(problem: string, lang: Language): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = lang === 'tr' 
    ? "Sen profesyonel bir tesisatçı asistanısın. Kullanıcının belirttiği tesisat sorununu analiz et. Olası nedenleri, aciliyet durumunu (Düşük/Orta/Yüksek) ve kaba bir tamir fiyat aralığı (TL bazında) tahmini yap. Cevabını kısa ve net maddeler halinde ver."
    : "You are a professional plumber assistant. Analyze the plumbing issue described by the user. Provide potential causes, urgency level (Low/Medium/High), and a rough estimate for repair costs (in USD). Provide the answer in clear, concise bullet points.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: problem,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || (lang === 'tr' ? "Üzgünüz, bir hata oluştu." : "Sorry, an error occurred.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'tr' ? "Şu anda teknik bir sorun yaşıyoruz. Lütfen bizi arayın." : "We are experiencing technical issues. Please call us directly.";
  }
}
