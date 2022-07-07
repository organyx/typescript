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
