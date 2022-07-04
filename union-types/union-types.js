var age = 42;
age = '42';
var coordinates = { x: 42, y: 42 };
coordinates = { lat: 42, lng: 42 };
var printAge = function (age) {
    console.log("You age ".concat(age));
};
printAge(42);
printAge('42');
function calcTax(price, tax) {
    // return price * tax;
    // price.replace('$', '');
    if (typeof price === 'number') {
        return price * tax;
    }
    else if (typeof price === 'string') {
        return parseFloat(price) * tax;
    }
}
calcTax(42, 0.1);
console.log("🚀 ~ file: union-types.ts ~ line 35 ~ calcTax(42, 0.1)", calcTax(42, 0.1));
calcTax('42', 0.1);
console.log("🚀 ~ file: union-types.ts ~ line 36 ~ calcTax('42', 0.1)", calcTax('42', 0.1));
