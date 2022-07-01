var dune = {
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
var cats = {
    title: 'Cats',
    director: 'John Carpenter',
    year: 1986,
    boxOffice: {
        budget: 100000000,
        grossUS: 1000000000,
        grossWorld: 1000000000
    }
};
function getProfit(movie) {
    var profit = movie.boxOffice.grossWorld - movie.boxOffice.budget;
    console.log('🚀 ~ file: objectsExercise.ts ~ line 38 ~ getProfit ~ profit', profit);
    return profit;
}
function getProfit2(_a) {
    var _b = _a.boxOffice, grossWorld = _b.grossWorld, budget = _b.budget;
    var profit = grossWorld - budget;
    console.log('🚀 ~ file: objectsExercise.ts ~ line 38 ~ getProfit ~ profit', profit);
    return profit;
}
getProfit(dune);
getProfit2(cats);
