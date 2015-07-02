
const greetings = ['Welcome', 'Willkommen', 'Hey', 'Gruezi'];

export function next() {
    let idx = Math.floor(Math.random() * greetings.length)
    return greetings[idx];
}

export function nth(n = 0) {
    return greetings[n];
}
