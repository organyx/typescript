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

function getRandomElement<T>(list: T[]): T {
    return list[Math.floor(Math.random() * list.length)];
}

getRandomElement<number>([1, 2, 3]);
console.log('🚀 ~ file: index.ts ~ line 37 ~ getRandomElement([1, 2, 3]);', getRandomElement([1, 2, 3]));
getRandomElement<string>(['a', 'b', 'c']);
console.log("🚀 ~ file: index.ts ~ line 38 ~ getRandomElement(['a', 'b', 'c']);", getRandomElement(['a', 'b', 'c']));
