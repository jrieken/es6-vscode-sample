'use strict';

var _http = require('http');

var headers = Object.freeze({ 'Content-Type': 'text/plain' });

(0, _http.createServer)(function (req, res) {

    res.writeHead(200, headers);

    var message = 'Welcome ES6!';
    res.end(message + '\n');
});