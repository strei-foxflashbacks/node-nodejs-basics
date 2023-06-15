import fs from 'fs';

import filesFolder from '../variables.js';

const read = async () => {
    const fileToRead = `${filesFolder}/fileToRead.txt`;
    fs.readFile(fileToRead, 'utf-8', (err, data) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log(data);
    })
};

await read();