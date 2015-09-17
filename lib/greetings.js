'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.next = next;
exports.nth = nth;

var greetings = ['Welcome', 'Willkommen', 'Hey', 'Gruezi'];

function next() {
    var idx = Math.floor(Math.random() * greetings.length);
    return greetings[idx];
}

function nth() {
    var n = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    return greetings[n];
}
//# sourceMappingURL=greetings.js.map