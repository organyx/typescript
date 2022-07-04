var highScore = 42;
var stuff2 = [1, 2];
var student = {
    name: 'John',
    age: 42,
    sport: 'ski',
    level: 'Beginner'
};
var colors = [
    { r: 42, g: 42, b: 42 },
    { h: 42, s: 42, l: 42 }
];
var greet = function (name) {
    // console.log(`Hello ${name}`);
    if (typeof name === 'string') {
        console.log("Hello ".concat(name));
    }
    else {
        for (var i = 0; i < name.length; i++) {
            console.log("Hello ".concat(name[i]));
        }
    }
};
greet('John');
greet(['John', 'Doe']);
