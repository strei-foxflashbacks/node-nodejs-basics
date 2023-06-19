import { Worker } from 'node:worker_threads';
import path from 'path';
import os from 'os';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToWorker = path.join(__dirname, 'worker.js');
const count = os.cpus().length;

const performCalculations = async () => {
    const output = [];
    for (let i = 0; i < count; i++) {
        const worker = new Worker(pathToWorker, {
            workerData: 10 + i,
        });
        const message = await new Promise((resolve) => {
            worker.on('message', (message) => {
                output.push({
                    status: 'resolved',
                    data: message,
                });
                resolve();
            });
            worker.on('error', () => {
                output.push({
                    status: 'error',
                    data: null,
                });
                resolve();
            });
        });
    }
    console.log(output);
};

await performCalculations();