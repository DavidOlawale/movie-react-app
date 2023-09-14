import MovieCard from "./movie-card";

import './movie-poster.css'

const TopMovies = ({ movies }) => {
  
  return (
    <div className="movie-container">
      {movies.map((el) => {
        return <MovieCard key={el.id} {...el}/>;
      })}
    </div>
  );
};
export default TopMovies;