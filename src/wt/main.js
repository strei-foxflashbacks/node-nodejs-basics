import { Worker } from 'node:worker_threads';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToWorker = path.join(__dirname, 'worker.js')

const worker = new Worker(pathToWorker, {
    workerData: 'kekus!'
});

const performCalculations = async () => {
    // Write your code here
};

await performCalculations();