// components/Home.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY';
const API_BASE_URL = 'https://api.themoviedb.org/3';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch top 10 movies
    axios
      .get(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching top movies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Top 10 Movies</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-release-date">Release Date: {movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
