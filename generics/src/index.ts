// function doTheThing(thing: number | string ): number | string {

// }

const nums: number[] = [1, 2, 3];

const colors: Array<string> = ['red', 'green'];

const inputEl = document.querySelector<HTMLInputElement>('#username')!;
console.dir(inputEl);
inputEl.value = 'Max';

const btnEl = document.querySelector<HTMLButtonElement>('.btn')!;
btnEl.value = 'Click me 2';

function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function identity<T>(item: T): T {
    return item;
}

identity<string>('Max');
identity<number>(1);