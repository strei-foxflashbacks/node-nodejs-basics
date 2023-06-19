import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesFolder = path.join(__dirname, 'files');

const read = async () => {
    const fileToRead = `${filesFolder}/fileToRead.txt`;
    const data = fs.createReadStream(fileToRead, 'utf-8');
    data.on('data', (chunk) => {
        console.log(chunk)
    })
};

await read();