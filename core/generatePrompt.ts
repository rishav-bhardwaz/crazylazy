export function buildPrompt(userIdea: string): string {
    return `
  You are to generate a complete production-ready React + Vite frontend project based on the following idea:
  
  "${userIdea}"
  
  Guidelines:
  - Use TypeScript
  - Folder structure must follow: public/, src/components/, src/App.tsx, src/main.tsx
  - Use functional components and hooks
  - Use Tailwind CSS for styling
  - Do not include any explanation — only the code with file names and contents in Markdown code blocks like: 
  \`\`\`tsx [src/App.tsx]
  <code>
  \`\`\`
  
  Respond with only the code files required to set up the app.
  
  Now start generating the project code based on the above idea.
  `;
  }
  