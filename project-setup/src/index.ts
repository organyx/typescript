const btn = document.querySelector('#my-btn')! as HTMLButtonElement;
const input = document.querySelector('#my-input')! as HTMLInputElement;
// (<HTMLInputElement>input).value = 'Hello World';

// console.log('🚀 ~ file: index.ts ~ line 2 ~ btn', btn);
// console.log('🚀 ~ file: index.ts ~ line 3 ~ input', input);

// btn.addEventListener('click', () => {
//     input.value = 'Hello World!';
//     console.log('🚀 ~ file: index.ts ~ line 5 ~ btn');
// });

const form = document.querySelector('#my-form')! as HTMLFormElement;
const list = document.querySelector('#my-list')! as HTMLDListElement;

interface Todo {
    text: string;
    completed: boolean;
}

const todos: Todo[] = [];

const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    console.log('Hi there!');

    const newTodo: Todo = {
        text: input.value,
        completed: false
    };

    todos.push(newTodo);

    createTodo(newTodo);

    input.value = '';
};

const createTodo = (todo: Todo) => {
    const newLi = document.createElement('li');
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newLi.append(todo.text);
    newLi.append(newCheckbox);
    list.append(newLi);
};

form.addEventListener('submit', handleSubmit);
