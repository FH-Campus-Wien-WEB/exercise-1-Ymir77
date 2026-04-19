const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Movie data
  const movies = [
    {
      Title: "The Thing",
      Released: "1982-06-25",
      Runtime: 109,
      Genres: ["Horror", "Mystery", "Sci-Fi"],
      Directors: ["John Carpenter"],
      Writers: ["Bill Lancaster", "John W. Campbell Jr."],
      Actors: ["Kurt Russell", "Wilford Brimley", "Keith David"],
      Plot: "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
      Poster: "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      Metascore: 57,
      imdbRating: 8.2
    },
    {
      Title: "Inception",
      Released: "2010-07-16",
      Runtime: 148,
      Genres: ["Action", "Sci-Fi", "Thriller"],
      Directors: ["Christopher Nolan"],
      Writers: ["Christopher Nolan"],
      Actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      Plot: "A skilled thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Metascore: 74,
      imdbRating: 8.8
    },
    {
      Title: "Avatar",
      Released: "2009-12-18",
      Runtime: 162,
      Genres: ["Action", "Adventure", "Sci-Fi"],
      Directors: ["James Cameron"],
      Writers: ["James Cameron"],
      Actors: ["Sam Worthington", "Zoe Saldana", "Stephen Lang"],
      Plot: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels he has discovered.",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: 83,
      imdbRating: 7.8
    }
  ]
  res.json(movies)
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

