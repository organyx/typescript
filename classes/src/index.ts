class Player {
    readonly first: string;
    readonly last: string;
    score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

const player1 = new Player('John', 'Doe');
// player1.first = 'Jane';
// player1.score = '313';
