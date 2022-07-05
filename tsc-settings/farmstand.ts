interface Product {
    name: string;
    price: number;
    quantity: number;
}

const printProductInfo = (product: Product): void => {
    console.log(`${product.name} costs ${product.price} per unit`);
};
