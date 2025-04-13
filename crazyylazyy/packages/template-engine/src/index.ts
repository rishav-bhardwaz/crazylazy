import fs from 'fs-extra';
import path from 'path';

export async function generateProject(outputPath: string, templatePath: string, replacements: Record<string, string>) {
  await fs.copy(templatePath, outputPath);

  const files = await fs.readdir(outputPath);
  for (const file of files) {
    const fullPath = path.join(outputPath, file);
    const stat = await fs.stat(fullPath);

    if (stat.isFile()) {
      let content = await fs.readFile(fullPath, 'utf-8');
      for (const [key, value] of Object.entries(replacements)) {
        content = content.replace(new RegExp(`__${key}__`, 'g'), value);
      }
      await fs.writeFile(fullPath, content);
    }
  }
}
