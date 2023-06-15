import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesFolder = path.join(__dirname, 'files');

const rename = async () => {
    const oldFile = `${filesFolder}/wrongFilename.txt`;
    const newFile = `${filesFolder}/properFilename.md`;

    fs.access(oldFile, (err) => {
        const oldFileErr = err;

        fs.access(newFile, (err) => {
            if (oldFileErr || !err) {
                throw new Error('FS operation failed');
            }
            fs.rename(oldFile, newFile, (err) => {
                if (err) throw err;
                console.log('FS operation succeed!');
            });
        });
    });
};

await rename();