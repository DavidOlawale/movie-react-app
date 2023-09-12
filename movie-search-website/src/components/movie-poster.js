import "./movie-poster.css";
import Watch from "../asset/watch";

const MoviePoster = ({ movies }) => {
  return (
    <div className="w-full pl_20  h-full">
      <div className="w-4/12 flex  h-full  justify-center items-start flex-col break-words z-10 relative">
        <div className="py-1 w-full">
          <span className="block text-3xl text-white font-bold">
            {movies[0].title}
          </span>
          <span className="block text-3xl text-white font-bold">
            Parabellum
          </span>
        </div>
        <div className="flex flex-row justify-start w-full align-middle">
          <span className="text-white">IMDB</span>
          <span className="text-white mx-4">80D/100</span>
          <span className="text-white">## 97%</span>
        </div>
        <div className="flex flex-col w-4/5">
          <span className="text-white block">{movies[0].overview}</span>
          <span className="bg-red-600 w-3/5 my-2 flex items-center justify-center rounded-md p-2 ">
            <Watch />
            <span className="text-white px-2 text-center"> WATCH TRAILER</span>
          </span>
        </div>
      </div>
      <div className="absolute w-full h-min  left-0 top-0 z-0">
        <div className="w-full relative h-min overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movies[0].backdrop_path}`}
            alt=" val"
            className="h-full absolute object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePoster;
