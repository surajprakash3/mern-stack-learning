import React, { useEffect, useState } from "react";
import "./App.css";

const API_KEY = "17502cf6";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <div class="h2"><h2>Popular Movies</h2></div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450"
              }
              alt={movie.Title}
            />

            <h3>{movie.Title}</h3>
            <p> Year: {movie.Year}</p>
            <p> Type: {movie.Type.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
