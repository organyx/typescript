let age: number | string = 42;
age = '42';
// age = false

type Point = { x: number; y: number };

type Loc = {
    lat: number;
    lng: number;
};

let coordinates: Point | Loc = { x: 42, y: 42 };
coordinates = { lat: 42, lng: 42 };

const printAge = (age: number | string): void => {
    console.log(`You age ${age}`);
};

printAge(42);
printAge('42');

function calcTax(price: number | string, tax: number) {
    // return price * tax;
    // price.replace('$', '');

    if (typeof price === 'number') {
        return price * tax;
    } else if (typeof price === 'string') {
        return parseFloat(price) * tax;
    }
}

calcTax(42, 0.1);
console.log('🚀 ~ file: union-types.ts ~ line 35 ~ calcTax(42, 0.1)', calcTax(42, 0.1));
calcTax('42', 0.1);
console.log("🚀 ~ file: union-types.ts ~ line 36 ~ calcTax('42', 0.1)", calcTax('42', 0.1));

// const stuff: any[] = [1, '42', true];

const stuff: (number | string | boolean)[] = [1, '42', true];

const coords: (Point | Loc)[] = [
    { x: 42, y: 42 },
    { lat: 42, lng: 42 }
];
coords.push({ x: 42, y: 42 });
coords.push({ lat: 42, lng: 42 });

let zero: 0 = 0;
// zero = 23;

let hi: 'hi' = 'hi';

let me: 'Happy' | 'Sad' = 'Happy';

me = 'Sad';

type DayOfTheWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

let day: DayOfTheWeek = 'Monday';
