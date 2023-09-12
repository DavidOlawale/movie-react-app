import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster_path, title, release_date, id }) => {
  const navigate = useNavigate();
  const clicked = () => {
    navigate(`/movies/${id}`, { replace: false });
  };

  return (
    <div className="w-1/6 h-card cursor-pointer" onClick={clicked}>
      <div className="relative h-4/6 ">
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          className="absolute z-0 top-0 left-0 h-full"
          alt={title}
        />
        <span className="flex z-10 w-full px-2 justify-between flex-row items-center relative">
          <span className="block text-sm">TV SERIES</span>
          {/* <span className="block text-sm">##</span> */}
        </span>
      </div>
      <div className="h-2/6 flex flex-col">
        <span className="text-gray-500 text-min text-left py-1 block">
          USA, 2016 - current
        </span>
        <span className="text-lg font-semibold text-black block">{title}</span>
        <span className="flex flex-row justify-between w-full my-1">
          <span className="block text-xs text-gray-500">IMDB 80D/100</span>
          <span className="block text-xs text-gray-500">##97%</span>
        </span>
        <span className="text-gray-500 text-min">
          Action, Adventure, Horror
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
