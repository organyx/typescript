interface Point {
    x: number;
    y: number;
}

const point: Point = {
    x: 10,
    y: 20
};

interface Person {
    readonly id: string;
    name: string;
    age: number;
    location?: Point;
    // greeting: () => string;
    greeting(): string;
}

const person: Person = {
    id: '123',
    name: 'John',
    age: 30,
    greeting: () => 'Hello'
};

const person2: Person = {
    id: '123',
    name: 'John',
    age: 30,
    location: {
        x: 10,
        y: 20
    }
};

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: 'Nike',
    price: 100,
    applyDiscount(amount: number): number {
        return this.price - amount;
    }
};

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const dog: Dog = {
    name: 'Fido',
    age: 2,
    breed: 'Poodle',
    bark: () => 'Woof!'
};

interface ServiceDog extends Dog {
    service: 'guide' | 'walk' | 'pet';
}

const doggo: ServiceDog = {
    name: 'Fido',
    age: 2,
    breed: 'Poodle',
    service: 'walk',
    bark: () => 'Woof!'
};

interface Human {
    name: string;
}

interface Employee {
    readonly id: string;
    email: string;
}

interface Engineer extends Human, Employee {
    level: string;
    languages: string[];
}

const engineer: Engineer = {
    name: 'John',
    id: '123',
    email: '',
    level: 'Senior',
    languages: ['JavaScript', 'TypeScript']
};
