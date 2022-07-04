// const color: number[] = [255, 255, 255];
const color: [number, number, number] = [255, 255, 255];

type HttpResponse = [number, string];

const okRes: HttpResponse = [200, 'Ok'];
const badRes: HttpResponse = [404, 'Not Found'];
// const wrongRes: HttpResponse = [200, 'Ok', 'Wrong'];
// const wrongRes2: HttpResponse = ['Ok', 200];

const responses: HttpResponse[] = [okRes, badRes];
