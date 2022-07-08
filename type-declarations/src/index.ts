import axios from 'axios';
import _ from 'lodash';
// axios

const baseUrl = 'https://jsonplaceholder.typicode.com';
const userOne = '/users/1';
const manyUsers = '/users';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

axios
    .get<User>(baseUrl + userOne)
    .then(response => {
        console.log(response.data);
        const { data } = response;

        // data.company.catchPhrase = 'New catch phrase';
        printUser(data);
    })
    .catch(error => {
        console.error(error);
    });

function printUser(user: User) {
    console.log(user.name);
    console.log(user.phone);
}

axios
    .get<User[]>(baseUrl + manyUsers)
    .then(response => {
        console.log(response.data);
        const { data } = response;

        // data.company.catchPhrase = 'New catch phrase';
        response.data.forEach(printUser);
    })
    .catch(error => {
        console.error(error);
    });


    _.sample()