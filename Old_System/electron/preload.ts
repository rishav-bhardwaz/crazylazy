import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  generateCode: (prompt: string) => ipcRenderer.invoke('generate-code', prompt)
});
