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

    constructor(public first: string, public last: string, protected _score: number) {}

    private secretFunction(): void {
        console.log('secret');
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error('Score cannot be negative');
        }
        this._score = newScore;
    }
}

class SudoPlayer extends Player {
    public isAdmin: boolean = true;

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

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Car implements Colorful {
    // color: string = 'red';
    constructor(public color: string) {}
}

const car1 = new Car('red');

class Animal implements Colorful, Printable {
    constructor(public color: string, public breed: string) {}
    print(): void {
        console.log('print');
    }
}

const animal1 = new Animal('red', 'labrador');

interface Payable {
    getPay(): number;
}

abstract class Employee {
    constructor(public firstName: string, public lastName: string) {}
    abstract getPay(): number;
    greet(): void {
        console.log('Hello');
    }
}

class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTileEmployee extends Employee {
    constructor(firstName: string, lastName: string, private hourlyRate: number, private hoursWorked: number) {
        super(firstName, lastName);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const emp1 = new FullTimeEmployee('John', 'Doe', 100);
console.log(emp1.getPay());
const emp2 = new PartTileEmployee('Jane', 'Doe', 10, 40);
console.log(emp2.getPay());