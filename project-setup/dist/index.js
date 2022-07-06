"use strict";
const btn = document.querySelector('#my-btn');
const input = document.querySelector('#my-input');
// (<HTMLInputElement>input).value = 'Hello World';
// console.log('🚀 ~ file: index.ts ~ line 2 ~ btn', btn);
// console.log('🚀 ~ file: index.ts ~ line 3 ~ input', input);
// btn.addEventListener('click', () => {
//     input.value = 'Hello World!';
//     console.log('🚀 ~ file: index.ts ~ line 5 ~ btn');
// });
const form = document.querySelector('#my-form');
const list = document.querySelector('#my-list');
const todos = [];
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Hi there!');
    const newTodo = {
        text: input.value,
        completed: false
    };
    todos.push(newTodo);
    createTodo(newTodo);
    input.value = '';
};
const createTodo = (todo) => {
    const newLi = document.createElement('li');
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newLi.append(todo.text);
    newLi.append(newCheckbox);
    list.append(newLi);
};
form.addEventListener('submit', handleSubmit);
