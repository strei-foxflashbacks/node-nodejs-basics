import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesFolder = path.join(__dirname, 'files');

const list = async () => {
    fs.access(filesFolder, (err) => {
        fs.readdir(filesFolder, (err, files) => {
            if (err) {
                throw new Error('FS operation failed');
            }
            console.log(files);
        })
    });
};

await list();