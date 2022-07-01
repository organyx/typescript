function square(x: number) {
    return x * x;
}

square(2);
// square(true);
// square('hello');

function greet(name: string) {
    return `Hello, ${name}`;
}

greet('John');
// greet(true);

const tryMe = (name: string, age: number, old: boolean) => {};

tryMe('John', 30, true);
// tryMe(true, 'John', 30);
// tryMe('John', '30', true);
// tryMe('John', 30);

function foo(bar: string = 'world'): string {
    return `Hello, ${bar}`;
}

foo();
foo('John');

const random = (num: number) => {
    if (Math.random() < 0.5) return num.toString();
    return Math.random() * num;
};

const colors = ['red', 'green', 'blue'];
colors.map(color => color.toUpperCase());

const printTimes = (message: string, times: number): void => {
    for (let i = 0; i < times; i++) {
        console.log(message);
    }
};

// This function should never return anything
function makeError(message: string): never {
    throw new Error(message);
}

function gameLoop(): never {
    while (true) {
        // ...
    }
    // return "Hello World";
}
