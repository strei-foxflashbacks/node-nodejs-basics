import path from 'path'
import fs from 'fs'

const files = path.basename('./files')

const create = async () => {
    const fresh = `${files}/fresh.txt`
    fs.access(fresh, (err) => {
        if (err) {
            fs.appendFile(fresh, 'I am fresh and young', (err) => {
                if (err) throw err;
                console.log('FS operation succeed!')
            })
        }
        else {
            throw new Error('FS operation failed')
        }
    })
};

await create();