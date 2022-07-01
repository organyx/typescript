var dog = {
    name: 'Bingo',
    breed: 'Pug',
    age: 3
};
function printName(dog) {
    console.log("".concat(dog.name, " is a ").concat(dog.breed));
}
printName({ name: 'Bingo', breed: 'Pug' });
printName(dog);
var coordinate = { x: 1, y: 2 };
function randomCoordinate() {
    return { x: Math.random() * 10, y: Math.random() * 10 };
}
// printName({ name: 'Tom', breed: 'Labrador', age: 2 }); // Error
var doggo = { name: 'Tom', breed: 'Lab', age: 3 };
printName(doggo);
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var song = {
    title: 'The Show Must Go On',
    artist: 'The Rolling Stones',
    numberOfPlays: 5,
    credits: {
        producer: 'Bob',
        songwriter: 'Sid'
    }
};
function calculateEarnings(song) {
    return 0.0033 * song.numberOfPlays;
}
function printSongDetails(song) {
    console.log("".concat(song.title, " by ").concat(song.artist));
    console.log("Produced by ".concat(song.credits.producer));
    console.log("Written by ".concat(song.credits.songwriter));
}
var earnings = calculateEarnings(song);
console.log('🚀 ~ file: objects.ts ~ line 60 ~ earnings', earnings);
printSongDetails(song);
var my3dPoint = { x: 1, y: 2 };
var my3dPoint2 = { x: 1, y: 2, z: 3 };
