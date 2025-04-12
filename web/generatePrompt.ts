export function buildPrompt(userPrompt: string) {
    return `Generate a production-ready React + Vite app based on this prompt:
    
  "${userPrompt}"
  
  The app must include proper folder structure and use TailwindCSS.`;
  }
  