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
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
    }
    secretFunction() {
        console.log('secret');
    }
}
const player1 = new Player('John', 'Doe');
// player1.first = 'Jane';
// player1.score = '313';
// player1.secretFunction();
