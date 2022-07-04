var ages = [32, 33, 16, 40];
var gameBoard = [];
var getTotalPrice = function (products) {
    var totalPrice = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        totalPrice += product.price;
    }
    return totalPrice;
};
var products = [
    { name: 'Product 1', price: 12 },
    { name: 'Product 2', price: 10 },
    { name: 'Product 3', price: 15 },
    { name: 'Product 4', price: 11 }
];
var totalPrice = getTotalPrice(products);
console.log("🚀 ~ file: arraysExercise.ts ~ line 25 ~ totalPrice", totalPrice);
