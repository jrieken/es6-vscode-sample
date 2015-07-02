
import {createServer} from 'http';

const headers = Object.freeze({ 'Content-Type': 'text/plain'});

createServer((req, res) => { 
    
    res.writeHead(200, headers);
    
    let message = 'Welcome ES6!';
    res.end(`${message}\n`);
});
