const ages: number[] = [32, 33, 16, 40];

const gameBoard: string[][] = [];

type Product = {
    name: string;
    price: number;
};

const getTotalPrice = (products: Product[]): number => {
    let totalPrice = 0;
    for (const product of products) {
        totalPrice += product.price;
    }
    return totalPrice;
};

const products: Product[] = [
    { name: 'Product 1', price: 12 },
    { name: 'Product 2', price: 10 },
    { name: 'Product 3', price: 15 },
    { name: 'Product 4', price: 11 }
];

const totalPrice = getTotalPrice(products);
console.log("🚀 ~ file: arraysExercise.ts ~ line 25 ~ totalPrice", totalPrice)