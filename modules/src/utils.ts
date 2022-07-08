export function add(x: number, y: number): number {
    return x + y;
}

export function sample<T>(list: T[]): T {
    return list[Math.floor(Math.random() * list.length)];
}
