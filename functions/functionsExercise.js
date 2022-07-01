var twoFer = function (name) {
    if (name === void 0) { name = 'you'; }
    return "One for ".concat(name, ", one for me.");
};
twoFer();
twoFer('Alice');
var isLeapyear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
isLeapyear(2020);
isLeapyear(2021);
