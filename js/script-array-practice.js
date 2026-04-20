// //STEP 1
// let firstMovieList = [ "Scary Movie", "Mommie Dearest", "Saw", "Army of Darkness", "Zoolander"]

// console.log(firstMovieList[1])
// console.log(firstMovieList)
// //STEP 2
// let movies = new Array(5)

// movies[0] = "Scary Movie",
// movies[1] = "Mommie Dearest",
// movies[2] =  "Saw",
// movies[3] = "Army of Darkness",
// movies[4] = "Zoolander"

// console.log(movies[0])

// //STEP 3

// let movies2 = new Array(5) // Declares new movie array
//     // List of movies
// movies2[0] = "Scary Movie",
// movies2[1] = "Mommie Dearest",
// movies2[2] =  "Saw",
// movies2[3] = "Army of Darkness",
// movies2[4] = "Zoolander"
//     // Adding movie without deleting a movie
// movies2.splice(2,0, 'Meet the Millers')
//     //Displays number of movies in array
// console.log(movies2.length)

// //STEP 4
// let movies3 = [ 
//     "Scary Movie", 
//     "Mommie Dearest", 
//     "Saw", 
//     "Army of Darkness", 
//     "Zoolander"
// ]

// delete movies3[0]

// console.log(movies3)

// //STEP 5
// let movies4 = [
//   "Scary Movie",
//   "Mommie Dearest",
//   "Saw",
//   "Army of Darkness",
//   "Zoolander",
//   "Meet the Millers",
//   "The Ring"
// ]

// for (let index in movies4) {
//     console.log(movies4[index])
// }


// //STEP 6

// let movies = [
//   "Scary Movie",
//   "Mommie Dearest",
//   "Saw",
//   "Army of Darkness",
//   "Zoolander",
//   "Meet the Millers",
//   "The Ring"
// ]

// for (let index in movies) {
//     console.log(movies[index])
// }

//STEP 7

// let movies = [
//   "Scary Movie",
//   "Mommie Dearest",
//   "Saw",
//   "Army of Darkness",
//   "Zoolander",
//   "Meet the Millers",
//   "The Ring"
// ]

// movies.sort()

// for (let index in movies) {
//     console.log(movies[index])
// }

//STEP 8
// let movies = [
//   "Scary Movie",
//   "Mommie Dearest",
//   "Saw",
//   "Army of Darkness",
//   "Zoolander",
//   "Meet the Millers",
//   "The Ring"
// ]

// let leastFavoriteMovies = [
//     "The Matrix 3",
//     "Dumb and Dummer",
//     "Midsommer"
// ]

// console.log('Movies I like\n\n')
// for (let index in movies) {
//     console.log(`${movies[index]} ${Number(index)+1}`)
// }

// console.log('\nMovies I regret watching\n\n')
// for (let index in leastFavoriteMovies) {
//     console.log(`${leastFavoriteMovies[index]} ${Number(index)+1}`)
// }



//STEP 9
// let favMovies = [
//   "Scary Movie",
//   "Mommie Dearest",
//   "Saw",
//   "Army of Darkness",
//   "Zoolander",
//   "Meet the Millers",
//   "The Ring"
// ]

// let leastFavoriteMovies = [
//     "The Matrix 3",
//     "Dumb and Dummer",
//     "Midsommer"
// ]

// //Concat Movies
// let movies = favMovies.concat(leastFavoriteMovies)
// // Sorts movies in reverse order
// movies.sort().reverse()
// // Displays movies in console
// console.log(movies)

//STEP 10
// let favMovies = [
//   "Scary Movie",
//   "Mommie Dearest",
//   "Saw",
//   "Army of Darkness",
//   "Zoolander",
//   "Meet the Millers",
//   "The Ring"
// ]

// let leastFavoriteMovies = [
//     "The Matrix 3",
//     "Dumb and Dummer",
//     "Midsommer"
// ]

// //Concat Movies
// let movies = favMovies.concat(leastFavoriteMovies)
// // Sorts movies in reverse order
// movies.sort().reverse()

// console.log(movies.at(-1))



//STEP 11
// let favMovies = [
//   "Scary Movie",
//   "Mommie Dearest",
//   "Saw",
//   "Army of Darkness",
//   "Zoolander",
//   "Meet the Millers",
//   "The Ring"
// ]

// let leastFavoriteMovies = [
//     "The Matrix 3",
//     "Dumb and Dummer",
//     "Midsommer"
// ]

// //Concat Movies
// let movies = favMovies.concat(leastFavoriteMovies)
// // Sorts movies in reverse order
// movies.sort().reverse()

// console.log(movies.at(0))

//STEP 12
// let favMovies = [
//   "Scary Movie",
//   "Mommie Dearest",
//   "Saw",
//   "Army of Darkness",
//   "Zoolander",
//   "Meet the Millers",
//   "The Ring"
// ]
// let leastFavoriteMovies = [
//     "The Matrix 3",
//     "Dumb and Dummer",
//     "Midsommer"
// ]
// //Concat Movies
// let movies = favMovies.concat(leastFavoriteMovies)

// let badMovieIndices = []
//  // Identify bad movie Indexes
// for (let i in movies) {
//     if (leastFavoriteMovies.includes(movies[i])) {
//         badMovieIndices.push(Number(i))
//     }
// }

// // Displays indexes of bad movies
// console.log(`Bad movie indicies: ${badMovieIndices}`)

// let replacementMovies = [
//     "The Godfather",
//     "Hocus Pocus", 
//     "Idiocracy"
// ]

// // Replace bad movies

// for ( let i = 0; i <= badMovieIndices.length; i++) {
//     movies[badMovieIndices[i]] = replacementMovies[i]
// }

// console.log(`Updated movie list: ${movies}`)


//STEP 13
let favMovies = [
  ["Scary Movie", 1],
  ["Mommie Dearest", 3],
  ["Saw", 5],
  ["Army of Darkness", 4],
  ["Zoolander", 2]
]

let movieNames = favMovies
    .flat()
    .filter(item => typeof item === "string")

console.log(movieNames)


//STEP 14

//STEP 15

//STEP 16

//STEP 17