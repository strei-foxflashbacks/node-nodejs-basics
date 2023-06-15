import fs from 'fs';

import filesFolder from '../variables.js';

const remove = async () => {
    const fileToRemove = `${filesFolder}/fileToRemove.txt`;

    fs.access(fileToRemove, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        fs.unlink(fileToRemove, (err) => {
            if (err) throw err;
            console.log('FS operation succeed!');
        });
    });
};

await remove();