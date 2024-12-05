/* Usa un bucle para crear 3 arrays de películas filtrados por categorías.
Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.
Imprime cada array por consola. */
const shortmovies = []
const normalmovies = []
const largemovies = []

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
for (let movie of movies) {
    if (movie.durationInMinutes < 100){
        shortmovies.push(movie)
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
        normalmovies.push(movie)
    } else {
        largemovies.push(movie)
    }  
} //sacamos las impresiones fuera del bucle para que no las repita todas las veces.
console.log("Short movies, less than 100 minutes");
console.log(shortmovies);
console.log("--".repeat(10));

console.log("Normal movies, from 100 to less than 200 minutes");
console.log(normalmovies);
console.log("--".repeat(10));

console.log("Large movies, more than 200 minutes");
console.log(largemovies);
console.log("--".repeat(10));
