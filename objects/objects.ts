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
