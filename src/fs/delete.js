import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesFolder = path.join(__dirname, 'files');

const remove = async () => {
    const fileToRemove = `${filesFolder}/fileToRemove.txt`;

    fs.access(fileToRemove, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        fs.unlink(fileToRemove, (err) => {
            if (err) throw err;
            console.log('FS operation succeed!');
        });
    });
};

await remove();