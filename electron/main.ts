import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import fs from 'fs';
import { generateReactAppZip } from '../utils/zipBuilder';
import { buildPrompt } from '../web/generatePrompt';
import { OpenAI } from 'openai';

const isDev = !app.isPackaged;

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

async function generateCodeFromPrompt(prompt: string) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: buildPrompt(prompt) }]
  });
  return completion.choices[0].message.content!;
}

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (isDev) {
    await win.loadURL('http://localhost:4321');
  } else {
    await win.loadFile(path.join(__dirname, '../../web/templazy/dist/index.html'));
  }

  ipcMain.handle('generate-code', async (_event, userPrompt: string) => {
    const code = await generateCodeFromPrompt(userPrompt);

    const tempDir = path.join(app.getPath('temp'), 'crazylazyy-project');
    fs.mkdirSync(tempDir, { recursive: true });
    fs.writeFileSync(path.join(tempDir, 'App.tsx'), code);

    const zipPath = path.join(app.getPath('downloads'), 'crazylazyy.zip');
    await generateReactAppZip(tempDir, zipPath);

    return zipPath;
  });
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
