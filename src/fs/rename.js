import fs from 'fs';

import filesFolder from '../variables.js';

const rename = async () => {
    const oldFile = `${filesFolder}/wrongFilename.txt`;
    const newFile = `${filesFolder}/properFilename.md`;

    fs.access(oldFile, (err) => {
        const oldFileErr = err;

        fs.access(newFile, (err) => {
            if (oldFileErr || !err) {
                throw new Error('FS operation failed');
            }
            fs.rename(oldFile, newFile, (err) => {
                if (err) throw err;
                console.log('FS operation succeed!');
            });
        });
    });
};

await rename();