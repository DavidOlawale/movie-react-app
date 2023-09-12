import MovieCard from "./movie-card";

const TopMovies = ({ movies }) => {
  
  return (
    <div className="w-11/12 items-center justify-center pl_10 space-x-16  space-y-10 flex flex-wrap ">
      {movies.map((el) => {
        return <MovieCard key={el.id} {...el}/>;
      })}
    </div>
  );
};
export default TopMovies;
