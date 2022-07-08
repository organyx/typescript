"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// axios
const baseUrl = 'https://jsonplaceholder.typicode.com';
const userOne = '/users/1';
const manyUsers = '/users';
axios_1.default
    .get(baseUrl + userOne)
    .then(response => {
    console.log(response.data);
    const { data } = response;
    // data.company.catchPhrase = 'New catch phrase';
    printUser(data);
})
    .catch(error => {
    console.error(error);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.phone);
}
axios_1.default
    .get(baseUrl + manyUsers)
    .then(response => {
    console.log(response.data);
    const { data } = response;
    // data.company.catchPhrase = 'New catch phrase';
    response.data.forEach(printUser);
})
    .catch(error => {
    console.error(error);
});
