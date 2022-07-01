const twoFer = (name: string = 'you'): string => {
    return `One for ${name}, one for me.`;
};

twoFer();
twoFer('Alice');

const isLeapyear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

isLeapyear(2020);
isLeapyear(2021);
