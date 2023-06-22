import { env } from 'node:process';

const parseEnv = () => {
    const rssArr = Object.entries(env).filter(([key, value]) => key.match(/RSS_/gi))
    const output = rssArr.map((elem) => elem.join('=')).join('; ')
    console.log(output)
};

parseEnv();