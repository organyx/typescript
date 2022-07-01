var movieTitle = 'The Matrix';
movieTitle = 'The Matrix Reloaded';
// movieTitle = 3;
// movieTitle.upper()
var movieYear = 1999;
movieYear = 2003;
// movieYear = '2003';
var seen = true;
seen = false;
// seen = 'false';
// Type Inference
var movieRating = 4.5; // number
var isMovieWatched = true; // boolean
var thing = 'hello';
thing = 3;
thing = true;
thing();
var movies = ['The Matrix', 'The Matrix Reloaded', 'The Matrix Revolutions'];
var foundMovie;
// foundMovie = movies.find(movie => movie === 'The Matrix');
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === 'The Matrix') {
        foundMovie = movie;
        break;
    }
}
