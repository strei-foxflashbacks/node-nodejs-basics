import fs from 'fs';

import filesFolder from '../variables.js';

const create = async () => {
    const fresh = `${filesFolder}/fresh.txt`;
    fs.access(fresh, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
        else {
            fs.appendFile(fresh, 'I am fresh and young', (err) => {
                if (err) throw err;
                console.log('FS operation succeed!');
            });
        }
    });
};

await create();