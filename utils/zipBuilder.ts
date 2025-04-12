import fs from 'fs';
import archiver from 'archiver';
import path from 'path';

export function zipFolder(sourceDir: string, outputZipPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputZipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => resolve());
    archive.on('error', err => reject(err));

    archive.pipe(output);
    archive.directory(sourceDir, false);
    archive.finalize();
  });
}

export async function generateReactAppZip(sourceDir: string, zipOutputPath: string) {
  await zipFolder(sourceDir, zipOutputPath);
}
