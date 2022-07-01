function square(x) {
    return x * x;
}
square(2);
// square(true);
// square('hello');
function greet(name) {
    return "Hello, ".concat(name);
}
greet('John');
// greet(true);
var tryMe = function (name, age, old) { };
tryMe('John', 30, true);
// tryMe(true, 'John', 30);
// tryMe('John', '30', true);
// tryMe('John', 30);
function foo(bar) {
    if (bar === void 0) { bar = 'world'; }
    return "Hello, ".concat(bar);
}
foo();
foo('John');
var random = function (num) {
    if (Math.random() < 0.5)
        return num.toString();
    return Math.random() * num;
};
var colors = ['red', 'green', 'blue'];
colors.map(function (color) { return color.toUpperCase(); });
var printTimes = function (message, times) {
    for (var i = 0; i < times; i++) {
        console.log(message);
    }
};
// This function should never return anything
function makeError(message) {
    throw new Error(message);
}
function gameLoop() {
    while (true) {
        // ...
    }
    // return "Hello World";
}
