import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesFolder = path.join(__dirname, 'files');

const compress = async () => {
    const fileToCompress = `${filesFolder}/fileToCompress.txt`;
    const outputPath = path.join(filesFolder, 'archive.gz');
    const input = fs.createReadStream(fileToCompress);
    const gzip = createGzip();
    const output = fs.createWriteStream(outputPath);
    pipeline(input, gzip, output, (err) => {
        if (err) throw err;
    })
};

await compress();