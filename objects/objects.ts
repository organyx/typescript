const dog = {
    name: 'Bingo',
    breed: 'Pug',
    age: 3
};

function printName(dog: { name: string; breed: string }): void {
    console.log(`${dog.name} is a ${dog.breed}`);
}

printName({ name: 'Bingo', breed: 'Pug' });
printName(dog);

let coordinate: { x: number; y: number } = { x: 1, y: 2 };

function randomCoordinate(): { x: number; y: number } {
    return { x: Math.random() * 10, y: Math.random() * 10 };
}

// printName({ name: 'Tom', breed: 'Labrador', age: 2 }); // Error
const doggo = { name: 'Tom', breed: 'Lab', age: 3 };
printName(doggo);

type Point = { x: number; y: number };

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
}

type Song = {
    title: string;
    artist: string;
    numberOfPlays: number;
    credits: {
        producer: string;
        songwriter: string;
    };
};

const song: Song = {
    title: 'The Show Must Go On',
    artist: 'The Rolling Stones',
    numberOfPlays: 5,
    credits: {
        producer: 'Bob',
        songwriter: 'Sid'
    }
};
function calculateEarnings(song: Song): number {
    return 0.0033 * song.numberOfPlays;
}

function printSongDetails(song: Song): void {
    console.log(`${song.title} by ${song.artist}`);
    console.log(`Produced by ${song.credits.producer}`);
    console.log(`Written by ${song.credits.songwriter}`);
}

const earnings = calculateEarnings(song);
console.log('🚀 ~ file: objects.ts ~ line 60 ~ earnings', earnings);
printSongDetails(song);

type Point3d = {
    x: number;
    y: number;
    z?: number;
};

const my3dPoint: Point3d = { x: 1, y: 2 };
const my3dPoint2: Point3d = { x: 1, y: 2, z: 3 };

type User = {
    readonly id: number;
    name: string;
};

const user1: User = { id: 1, name: 'Bob' };

// user1.id = 3;

type Circle = {
    radius: number;
};

type Color = {
    color: string;
};

type ColorCircle = Circle & Color;

const happyCircle: ColorCircle = { radius: 1, color: 'red' };
// const sadCircle: ColorCircle = { radius: 1 };

type Cat = {
    numLives: number;
};

type Dog = {
    breed: string;
};

type CatDog = Cat &
    Dog & {
        age: number;
    };

const catDog: CatDog = {
    numLives: 9,
    breed: 'Labrador',
    age: 3
};
