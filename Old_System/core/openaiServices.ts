import OpenAI from 'openai';
import { buildPrompt } from './generatePrompt';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function generateCode(promptText: string): Promise<string> {
  const fullPrompt = buildPrompt(promptText);

  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a professional full-stack developer specialized in React + Vite frontend. You generate production-ready code only.',
      },
      {
        role: 'user',
        content: fullPrompt,
      },
    ],
    temperature: 0.5,
    max_tokens: 2000,
  });

  return chatCompletion.choices[0].message.content?.trim() || '';
}
