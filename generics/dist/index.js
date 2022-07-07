"use strict";
// function doTheThing(thing: number | string ): number | string {
// }
const nums = [1, 2, 3];
const colors = ['red', 'green'];
const inputEl = document.querySelector('#username');
console.dir(inputEl);
inputEl.value = 'Max';
const btnEl = document.querySelector('.btn');
btnEl.value = 'Click me 2';
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
identity('Max');
identity(1);
