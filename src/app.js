
import {createServer} from 'http';
import * as greets from 'greetings';

const headers = Object.freeze({ 'Content-Type': 'text/plain'});

createServer((req, res) => {
    res.writeHead(200, headers);

    let message = `${greets.n} ES6!\n`;
    res.end(message);
});
