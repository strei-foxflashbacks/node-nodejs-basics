import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesFolder = path.join(__dirname, 'files');

const decompress = async () => {
    const fileToUnzip = `${filesFolder}/archive.gz`;
    const outputPath = path.join(filesFolder, 'fileToCompress.txt');
    const input = fs.createReadStream(fileToUnzip);
    const gunzip = createGunzip();
    const output = fs.createWriteStream(outputPath);
    input.pipe(gunzip).pipe(output)
};

await decompress();