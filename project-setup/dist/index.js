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
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
const createTodo = (todo) => {
    const newLi = document.createElement('li');
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.checked = todo.completed;
    newCheckbox.addEventListener('change', () => {
        todo.completed = newCheckbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(newCheckbox);
    list.append(newLi);
};
const getTodos = () => {
    const todosJson = localStorage.getItem('todos');
    if (todosJson === null) {
        return [];
    }
    return JSON.parse(todosJson);
};
const todos = getTodos();
todos.forEach(createTodo);
const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Hi there!');
    const newTodo = {
        text: input.value,
        completed: false
    };
    todos.push(newTodo);
    createTodo(newTodo);
    // localStorage.setItem('todos', JSON.stringify(todos));
    saveTodos();
    input.value = '';
};
form.addEventListener('submit', handleSubmit);
