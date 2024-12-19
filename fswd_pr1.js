let movieCollection = 
[
    { title: "STREE-2", genre: "Drama", rating: 8.3, releaseYear: 2024 },
    { title: "3IDIOTS", genre: "comedy", rating: 9.0, releaseYear: 2008 },
    { title: "BHOOLBHULAIYA", genre: "Drama", rating: 8.8, releaseYear: 2024 },
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Matrix", genre: "Sci-Fi", rating: 8.7, releaseYear: 1999 }
];

function addMovie(title, genre, rating, releaseYear) 
{
    movieCollection.push({ title, genre, rating, releaseYear });
    console.log(`Added movie: ${title}`);
}

addMovie("Interstellar", "Sci-Fi", 8.6, 2014);

function listMoviesByGenre(genre) {
    const moviesInGenre = movieCollection.filter(movie => movie.genre === genre);
    console.log(`Movies in genre "${genre}":`);
    moviesInGenre.forEach(movie => {
        console.log(`- ${movie.title} (${movie.releaseYear})`);
    });
}

listMoviesByGenre("Sci-Fi");

function highestRatedMovie() {
    const highestRated = movieCollection.reduce((max, movie) => {
        return movie.rating > max.rating ? movie : max;
    });
    console.log(`Highest rated movie: "${highestRated.title}" with a rating of ${highestRated.rating}`);
}

highestRatedMovie();

const movieTitles = movieCollection.map(movie => movie.title);
console.log("All movie titles:");
movieTitles.forEach(title => {
    console.log(`- ${title}`);
});

function moviesReleasedAfter(year) {
    const recentMovies = movieCollection.filter(movie => movie.releaseYear > year);
    console.log(`Movies released after ${year}:`);
    recentMovies.forEach(movie => {
        console.log(`- ${movie.title} (${movie.releaseYear})`);
    });
}

moviesReleasedAfter(2000);
