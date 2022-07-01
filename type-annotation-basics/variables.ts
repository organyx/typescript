let movieTitle: string = 'The Matrix';
movieTitle = 'The Matrix Reloaded';
// movieTitle = 3;
// movieTitle.upper()

let movieYear: number = 1999;
movieYear = 2003;
// movieYear = '2003';
let seen: boolean = true;
seen = false;
// seen = 'false';

// Type Inference

let movieRating = 4.5; // number
let isMovieWatched = true; // boolean

let thing: any = 'hello';
thing = 3;
thing = true;
thing();

const movies: string[] = ['The Matrix', 'The Matrix Reloaded', 'The Matrix Revolutions'];
let foundMovie: string;

// foundMovie = movies.find(movie => movie === 'The Matrix'); // Needs compiler changes
for (let movie of movies) {
    if (movie === 'The Matrix') {
        foundMovie = movie;
        break;
    }
}
