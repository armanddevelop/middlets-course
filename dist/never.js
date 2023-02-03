"use strict";
const withoutEnd = () => {
    while (true) {
        console.log('nunca pares de aprender');
    }
};
const fail = (message) => {
    throw new Error(message);
};
const exempleNever = (input) => {
    if (typeof input === 'string') {
        return 'es un string';
    }
    else if (Array.isArray(input)) {
        return 'es un Array';
    }
    return fail('valio queso');
};
console.log(exempleNever('hola'));
console.log(exempleNever([]));
console.log(exempleNever(2)); //hasta aqui se detiene
console.log(exempleNever('sheyeye'));
