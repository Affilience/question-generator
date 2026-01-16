import Groq from 'groq-sdk';

let groqClient: Groq | null = null;

export function getGroqClient(): Groq | null {
  if (!process.env.GROQ_API_KEY) {
    return null;
  }

  if (!groqClient) {
    groqClient = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });
  }

  return groqClient;
}

// Check if Groq is available
export function isGroqAvailable(): boolean {
  return !!process.env.GROQ_API_KEY;
}

// Groq models - fastest to slowest
export const GROQ_MODELS = {
  // Fastest, good for simple questions
  LLAMA_8B: 'llama-3.1-8b-instant',
  // Best quality, still very fast
  LLAMA_70B: 'llama-3.3-70b-versatile',
  // Good balance
  MIXTRAL: 'mixtral-8x7b-32768',
} as const;

export type GroqModel = typeof GROQ_MODELS[keyof typeof GROQ_MODELS];
