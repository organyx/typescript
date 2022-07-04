const highScore: number | boolean = 42;

let stuff2: number[] | string[] = [1, 2];

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: 'ski' | 'snowboard';
    level: SkillLevel;
};

const student: SkiSchoolStudent = {
    name: 'John',
    age: 42,
    sport: 'ski',
    level: 'Beginner'
};

type RgbColor = {
    r: number;
    g: number;
    b: number;
};

type HslColor = {
    h: number;
    s: number;
    l: number;
};

const colors: (RgbColor | HslColor)[] = [
    { r: 42, g: 42, b: 42 },
    { h: 42, s: 42, l: 42 }
];

const greet = (name: string | string[]): void => {
    // console.log(`Hello ${name}`);
    if (typeof name === 'string') {
        console.log(`Hello ${name}`);
    } else {
        for (let i = 0; i < name.length; i++) {
            console.log(`Hello ${name[i]}`);
        }
    }
};

greet('John');
greet(['John', 'Doe']);
