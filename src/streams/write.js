import { stdin, stdout } from 'node:process';
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesFolder = path.join(__dirname, 'files');

const write = async () => {
    const fileToWrite = `${filesFolder}/fileToWrite.txt`;
    const output = fs.createWriteStream(fileToWrite);
    stdout.write(
        'Entered writable stream. In order to exit, use Ctrl+C combination.\n'
    );
    stdin.on('data', (chunk) => {
        output.write(chunk.toString())
    });
};

await write();