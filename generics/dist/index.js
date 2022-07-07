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
function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}
getRandomElement([1, 2, 3]);
console.log('🚀 ~ file: index.ts ~ line 37 ~ getRandomElement([1, 2, 3]);', getRandomElement([1, 2, 3]));
getRandomElement(['a', 'b', 'c']);
console.log("🚀 ~ file: index.ts ~ line 38 ~ getRandomElement(['a', 'b', 'c']);", getRandomElement(['a', 'b', 'c']));
getRandomElement([1, 2, 3]);
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const mergeResult = merge({ name: 'Max' }, { age: 30 });
console.log('🚀 ~ file: index.ts ~ line 47 ~ mergeResult', mergeResult);
