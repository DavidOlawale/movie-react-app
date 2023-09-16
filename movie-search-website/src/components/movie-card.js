import "./movie-card.css";
import HeartIcon from "./Utils/heart-icon";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster_path, title, release_date, id }) => {
  const navigate = useNavigate();
  const clicked = () => {
    navigate(`/movies/${id}`, { replace: false });
  };


  return (
    <div className="movie-item">
      <div className="movie-item-header">
        <span className="rounded-full bg-white opacity-80 px-3 py-2">TV SERIES</span>
        <HeartIcon isChecked={false} />
      </div>
        <img
          onClick={clicked}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
    
      <div onClick={clicked} className="flex flex-col">
        <p className="text-gray-500 text-min text-left py-1 block" data-testid="movie-release-date">
          {release_date}
        </p>
        <span className="text-lg font-semibold text-black block">{title}</span>

        <span className="flex flex-row justify-between w-full my-1">
          <p className="block text-xs text-gray-500">IMDB 80D/100</p>
          <p className="block text-xs text-gray-500">#97%</p>
        </span>
  

        <span className="text-gray-500 text-min">
          Action, Adventure, Horror
        </span>
      </div>
    </div>
  );
};

export default MovieCard;