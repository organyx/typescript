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

getRandomElement([1, 2, 3]);

function merge<T extends object, U extends object>(object1: T, object2: U): T & U {
    return { ...object1, ...object2 };
}

const mergeResult = merge({ name: 'Max' }, { age: 30 });
console.log('🚀 ~ file: index.ts ~ line 47 ~ mergeResult', mergeResult);

// merge({ name: 'Max' }, 30);
merge({ name: 'Max' }, { age: 30 });

interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(input: T): number {
    return input.length * 2;
}

printDoubleLength('Max');
// printDoubleLength(2);

function makeEmptyList<T = number>(): T[] {
    return [];
}

const numbers = makeEmptyList<number>();
numbers.push(1);
// numbers.push('2');

interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];
    add(item: T) {
        this.queue.push(item);
    }
}

const songs = new Playlist<Song>()

const videos = new Playlist<Video>()