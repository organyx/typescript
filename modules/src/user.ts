export default class User {
    constructor(public username: string, public email: string) {}
    logout() {
        console.log('logout');
    }
}

export function userHelper() {}
