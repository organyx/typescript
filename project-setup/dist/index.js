"use strict";
const btn = document.querySelector('#my-btn');
const input = document.querySelector('#my-input');
// (<HTMLInputElement>input).value = 'Hello World';
console.log('🚀 ~ file: index.ts ~ line 2 ~ btn', btn);
console.log('🚀 ~ file: index.ts ~ line 3 ~ input', input);
btn.addEventListener('click', () => {
    input.value = 'Hello World!';
    console.log('🚀 ~ file: index.ts ~ line 5 ~ btn');
});
