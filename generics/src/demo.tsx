function getRandomElement3<T>(list: T[]): T {
    return list[Math.floor(Math.random() * list.length)];
}

const getRandomElement2 = <T,>(list: T[]): T => {
    return list[Math.floor(Math.random() * list.length)];
}