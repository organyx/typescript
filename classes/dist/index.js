"use strict";
// class Player {
//     public readonly first: string;
//     public readonly last: string;
//     private score: number = 0;
//     constructor(first: string, last: string) {
//         this.first = first;
//         this.last = last;
//     }
//     private secretFunction(): void {
//         console.log('secret');
//     }
// }
class Player {
    // private score: number = 0;
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretFunction() {
        console.log('secret');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Score cannot be negative');
        }
        this._score = newScore;
    }
}
class SudoPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 9999;
    }
}
const player1 = new Player('John', 'Doe', 100);
// player1.first = 'Jane';
// player1.score = '313';
// player1.secretFunction();
player1.fullName;
player1.score = 33;
class Car {
    // color: string = 'red';
    constructor(color) {
        this.color = color;
    }
}
const car1 = new Car('red');
class Animal {
    constructor(color, breed) {
        this.color = color;
        this.breed = breed;
    }
    print() {
        console.log('print');
    }
}
const animal1 = new Animal('red', 'labrador');
