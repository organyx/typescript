const activeUsers: string[] = [];
activeUsers.push('Max');

const times: number[] = [1, 2, 3, 4, 5];
times.push(6);
// times.push('six');

const booleans: Array<boolean> = [true, false, true];

type Point = {
    x: number;
    y: number;
};

const points: Point[] = [];
points.push({ x: 1, y: 2 });
points.push({ x: 3, y: 4 });
// points.push({ x: 5, y: '6' });

const ttt: string[][] = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
];

const ttt2: string[][][] = [
    [
        ['a', 'b', 'c'],
        ['d', 'e', 'f']
    ],
    [['g', 'h', 'i']]
];
