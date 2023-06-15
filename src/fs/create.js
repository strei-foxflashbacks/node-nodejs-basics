import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesFolder = path.join(__dirname, 'files');

const create = async () => {
    const fresh = `${filesFolder}/fresh.txt`;
    fs.access(fresh, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
        else {
            fs.appendFile(fresh, 'I am fresh and young', (err) => {
                if (err) throw err;
                console.log('FS operation succeed!');
            });
        }
    });
};

await create();