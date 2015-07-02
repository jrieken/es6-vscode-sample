'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _http = require('http');

var _greetings = require('greetings');

var greets = _interopRequireWildcard(_greetings);

var headers = Object.freeze({ 'Content-Type': 'text/plain' });

(0, _http.createServer)(function (req, res) {
    res.writeHead(200, headers);

    var message = greets.n + ' ES6!\n';
    res.end(message);
});