function triple(value: number | string) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    // if (typeof value === 'number') {
    //     return value * 3;
    // }
    return value * 3;
}

const el = document.getElementById('none');
if (el) {
    el.nodeValue = 'hello';
} else {
    // el.
}

const printLetters = (word?: string) => {
    if (word) {
        for (const letter of word) {
            console.log(letter);
        }
    } else {
        console.log('no word');
    }
};

function someDemo(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toLocaleLowerCase();
    }
}

// someDemo('a', 'b');
// someDemo(1, true);
// someDemo(3, '3');

interface Movie {
    title: string;
    duration: number;
}

interface TvShow {
    title: string;
    numberOfEpisodes: number;
    episodeDuration: number;
}

function getRunTime(piece: Movie | TvShow) {
    if ('duration' in piece) {
        return piece.duration;
    }
    return piece.numberOfEpisodes * piece.episodeDuration;
}

getRunTime({ title: 'The Office', numberOfEpisodes: 12, episodeDuration: 30 });
getRunTime({ title: 'The Office Movie', duration: 30 });

function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        new Date(date).toUTCString();
    }
}

class User {
    constructor(public username: string) {}
}

class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company) {
    if (entity instanceof User) {
        entity;
    } else {
        entity;
    }
}

// Type predicates

interface Cat {
    name: string;
    numberOfLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numberOfLives !== undefined;
}

function makeSound(animal: Cat | Dog): string {
    if (isCat(animal)) {
        animal;
        return 'meow';
    }
    animal;
    return 'woof';
}

// Discriminated unions

interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: 'rooster';
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: 'cow';
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: 'pig';
}

interface Sheep {
    name: string;
    weight: number;
    age: number;
    kind: 'sheep';
}

type FarmAnimal = Rooster | Cow | Pig | Sheep;

function getAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
        case 'rooster':
            return 'Rooster sound';

        case 'cow':
            return 'Moo';

        case 'pig':
            return 'Oink';

        case 'sheep':
            return 'Baa';

        default:
            // Should never happen
            // const shouldNeverHappen: never = animal;
            // return shouldNeverHappen;
            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck;
    }
}

const bob: Rooster = {
    name: 'Bob',
    weight: 100,
    age: 2,
    kind: 'rooster'
};

getAnimalSound(bob);
