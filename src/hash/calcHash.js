import path from 'path';
const { createHmac } = await import('node:crypto');

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesFolder = path.join(__dirname, 'files');

const calculateHash = async () => {
    const fileToCalc = `${filesFolder}/fileToCalculateHashFor.txt`;
    const secret = 'RSS';
    const hash = createHmac('sha256', secret)
            .update(fileToCalc)
            .digest('hex');
    console.log(hash);
};

await calculateHash();