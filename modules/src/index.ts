import { add, sample as randomSample } from './utils.js';
import User, { userHelper } from './user.js';

console.log('Hello World');

const s = randomSample([1, 2, 3, 4, 5]);
console.log('🚀 ~ file: index.ts ~ line 6 ~ s', s);

const a = add(1, 2);
console.log('🚀 ~ file: index.ts ~ line 9 ~ a', a);

const user = new User('John', 'john@doe.com');
const usHelper = userHelper();

const sample = 123;
