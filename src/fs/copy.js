import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesFolder = path.join(__dirname, 'files');

const copy = async () => {
    fs.access(filesFolder, (err) => {
        const filesErr = err;
        const filesCopy = path.join('src/fs/', 'files_copy');

        fs.access(filesCopy, (err) => {
            if (filesErr || !err) {
                throw new Error('FS operation failed');
            }
            else {
                fs.cp(filesFolder, filesCopy, { recursive: true }, (err) => {
                    if (err) throw err;
                    console.log('FS operation succeed!');
                });
            }
        });
    });
};

await copy();
