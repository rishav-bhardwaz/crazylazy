import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import fs from 'fs';
// import { generateReactAppZip } from '../utils/zipBuilder';

const isDev = !app.isPackaged;

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (isDev) {
    await win.loadURL('http://localhost:4321');
  } else {
    const indexPath = path.join(__dirname, '../../web/dist/index.html');
    await win.loadFile(indexPath);
  }

  ipcMain.handle('generate-code', async (_event, prompt: string) => {
    const zipBuffer = await generateReactAppZip(prompt);
    const tempPath = path.join(app.getPath('downloads'), 'crazyy-lazyy.zip');
    fs.writeFileSync(tempPath, zipBuffer);
    return tempPath;
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
