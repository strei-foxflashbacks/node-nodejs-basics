import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const reversed = new Transform({
transform(chunk, encoding, callback) {
    const reversedData = chunk.toString()
                            .split('')
                            .reverse()
                            .join('');
    this.push(reversedData)
    callback();
}
})

const transform = async () => {
stdin.pipe(reversed).pipe(stdout);
};

await transform();