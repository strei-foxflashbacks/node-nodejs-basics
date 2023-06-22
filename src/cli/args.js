import { argv } from 'node:process';

const parseArgs = () => {
    const printed = argv.slice(2);
    let output = '';

    printed.forEach((element) => {
        if (printed.indexOf(element) % 2 === 0) {
            output += `${element} is `;
        } else {
            output += `${element}, `;
        }
    });
    console.log(output.slice(0, -2).replace('--', ''));
};

parseArgs();