import fs from 'fs';

import filesFolder from '../variables.js';

const list = async () => {
    fs.access(filesFolder, (err) => {
        fs.readdir(filesFolder, (err, files) => {
            if (err) {
                throw new Error('FS operation failed');
            }
            console.log(files);
        })
    });
};

await list();