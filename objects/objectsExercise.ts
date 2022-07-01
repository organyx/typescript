type Movie = {
    readonly title: string;
    director: string;
    year: number;
    originalTitle?: string;
    boxOffice: {
        budget: number;
        grossUS: number;
        grossWorld: number;
    };
};

const dune: Movie = {
    title: 'Dune',
    director: 'Frank Herbert',
    year: 1965,
    originalTitle: 'Dune Part One',
    boxOffice: {
        budget: 100000000,
        grossUS: 1000000000,
        grossWorld: 1000000000
    }
};

const cats: Movie = {
    title: 'Cats',
    director: 'John Carpenter',
    year: 1986,
    boxOffice: {
        budget: 100000000,
        grossUS: 1000000000,
        grossWorld: 1000000000
    }
};

function getProfit(movie: Movie): number {
    const profit = movie.boxOffice.grossWorld - movie.boxOffice.budget;
    console.log('🚀 ~ file: objectsExercise.ts ~ line 38 ~ getProfit ~ profit', profit);
    return profit;
}

function getProfit2({ boxOffice: { grossWorld, budget } }: Movie): number {
    const profit = grossWorld - budget;
    console.log('🚀 ~ file: objectsExercise.ts ~ line 38 ~ getProfit ~ profit', profit);
    return profit;
}

getProfit(dune);
getProfit2(cats);
