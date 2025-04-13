export type ParsedPrompt = {
  techStack: string[];
  features: string[];
  components: string[];
};

export function parsePrompt(prompt: string): ParsedPrompt {
  const lower = prompt.toLowerCase();

  const techStack: string[] = [];
  if (lower.includes('react')) techStack.push('React');
  if (lower.includes('vite')) techStack.push('Vite');
  if (lower.includes('tailwind')) techStack.push('Tailwind');
  if (lower.includes('express')) techStack.push('Express');
  if (lower.includes('mongodb')) techStack.push('MongoDB');

  const features: string[] = [];
  if (lower.includes('auth')) features.push('Authentication');
  if (lower.includes('crud')) features.push('CRUD');

  const components: string[] = [];
  if (lower.includes('todo')) components.push('Todo');
  if (lower.includes('login')) components.push('Login');
  if (lower.includes('dashboard')) components.push('Dashboard');

  return { techStack, features, components };
}
