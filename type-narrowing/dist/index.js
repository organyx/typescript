"use strict";
function triple(value) {
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
}
else {
    // el.
}
const printLetters = (word) => {
    if (word) {
        for (const letter of word) {
            console.log(letter);
        }
    }
    else {
        console.log('no word');
    }
};
function someDemo(x, y) {
    if (x === y) {
        x.toLocaleLowerCase();
    }
}
function getRunTime(piece) {
    if ('duration' in piece) {
        return piece.duration;
    }
    return piece.numberOfEpisodes * piece.episodeDuration;
}
getRunTime({ title: 'The Office', numberOfEpisodes: 12, episodeDuration: 30 });
getRunTime({ title: 'The Office Movie', duration: 30 });
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        new Date(date).toUTCString();
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
function isCat(animal) {
    return animal.numberOfLives !== undefined;
}
function makeSound(animal) {
    if (isCat(animal)) {
        animal;
        return 'meow';
    }
    animal;
    return 'woof';
}
function getAnimalSound(animal) {
    switch (animal.kind) {
        case 'rooster':
            return 'Rooster sound';
        case 'cow':
            return 'Moo';
        case 'pig':
            return 'Oink';
    }
}
const bob = {
    name: 'Bob',
    weight: 100,
    age: 2,
    kind: 'rooster'
};
getAnimalSound(bob);
