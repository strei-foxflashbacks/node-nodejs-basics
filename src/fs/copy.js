import fs from 'fs';

import filesFolder from '../variables.js';

const copy = async () => {
    fs.access(filesFolder, (err) => {
        const filesErr = err;
        const filesCopy = `${filesFolder}_copy`;

        fs.access(filesCopy, (err) => {
            if (filesErr || !err) {
                throw new Error('FS operation failed');
            }
            else {
                fs.cp(filesFolder, `./${filesCopy}`, { recursive: true }, (err) => {
                    if (err) throw err;
                    console.log('FS operation succeed!');
                });
            }
        });
    });
};

await copy();
