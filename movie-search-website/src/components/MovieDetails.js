import React, { useEffect, useState } from "react";
import "./MovieDetail.css";

import { Link, useParams } from "react-router-dom";
import Logo from "../asset/logo";
import Home from "../asset/home";
import Movie from "../asset/movie";
import TV from "../asset/tv";
import Upcoming from "../asset/upcoming";
import Logout from "../asset/logout";
import LIst from "../asset/list";
import Ticket from "../asset/ticket";
import Open from "../asset/open";

function MovieDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);

  // 'https://api.themoviedb.org/3/movie/movie_id?language=en-US'
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ5MTlkMDYzMWU4OWU5MTgyMDc4NTBiZjJiNGIwZCIsInN1YiI6IjY0ZmVkYTJjZGI0ZWQ2MTA0MzA4NjVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPMygPqE4bA0h-_L2xez1SicsVFYMitC1CtoEzVWmJk`,
      },
    }).then(async (res) => {
      if (!res.ok) {
        const errorRes = await res.json();
        setError(errorRes.message);
        setLoading(false);
      } else {
        const result = await res.json();
        setMovie(result);
        setLoading(false);
      }
    });
  }, [id]);

  return (
    <div className="w-full h-max bg-white flex justify-center">
      <div className="w-3/12 h-full border_style flex flex-col items-center justify-evenly">
        <div className="text-2xl text-black font-bold">
          <Link to="/" className="flex justify-center items-center">
            <Logo />
            <span className="text-2xl text-black font-bold ml-2">MovieBox</span>
          </Link>
        </div>
        <div className="flex flex-col h-2/6 justify-evenly w-full space-y-1">
          <span className="block  w-full py-5 text-center hover:bg-red-200 hover:text-red-700 hover:border-r-4 hover:border-red-800">
            <Link to={"/"} className="flex justify-center items-center">
              {" "}
              <Home />
              <span className="text-gray-900 font-semibold ml-5">Home</span>
            </Link>
          </span>
          <span className="flex justify-center items-center w-full py-5 bg-red-200  text-red-700 border-r-4 border-red-800">
            <Movie />
            <span className="text-center font-semibold ml-4">Movies</span>
          </span>
          <span className="flex items-center justify-center font-semibold w-full py-5  hover:bg-red-200 hover:text-red-700 hover:border-r-4 hover:border-red-800">
            <TV />
            <span className="text-gray-900 text-center ml-2 font-semibold">
              TV Series
            </span>
          </span>
          <span className="flex items-center justify-center font-semibold w-full py-5  hover:bg-red-200 hover:text-red-700 hover:border-r-4 hover:border-red-800">
            <Upcoming />
            <span className="text-gray-900 text-center ml-2 font-semibold">
              Upcoming
            </span>
          </span>
        </div>
        <div className="w-10/12 pt-10 px-5 border-red-400 border-2 rounded-xl flex justify-center items-center flex-col break-words">
          <span className="block text-sm font-semibold text-gray-700 ">
            play movie quizes and <br />
            earn free ticket
          </span>
          <span className="block text-gray-500 text-xs text-start w-full">
            50k people are playing now
          </span>
          <span className="rounded-2xl mb-10 bg-red-300 text-red-700 w-auto mt-2 text-center p-2">
            start playing
          </span>
        </div>
        <div className="flex flex-row items-center justify-center ">
          <Logout />
          <span className="text-gray-700 text-xl font-semibold ml-2">
            Log out
          </span>
        </div>
      </div>
      <div className="w-full h-full flex pt-5 flex-col justify-center items-center ">
        {loading && (
          <div className="w-full h-min flex justify-center items-center ">
            Loading ....
          </div>
        )}
         {!loading && error && (
          <div className="w-full h-min flex justify-center items-center ">
            {error}
          </div>
        )}
        {!loading && !error && (
          <>
            <div className="w-4/5 relative h-3/6 overflow-hidden shadow-2xl rounded-3xl">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
                className="absolute z-0 top-0 left-0 h-full w-full object-cover"
              />
            </div>
            <div className="w-4/5 flex flex-row justify-between items-center mt-5 mb-1">
              <span className="flex flex-row">
                <span className="mr-2 text-gray-700">{movie.title}</span>
                <li className="mr-3 text-gray-700">
                  {movie.release_date.split("-")[0]}
                </li>
                <li className="mr-3 text-gray-700">PG-13</li>
                <li className="text-gray-700"> 2h 10m </li>
                {movie.genres.map((el) => {
                  return (
                    <span
                      className="block ml-5 text-red-500 text-xs border-red-400 font-bold rounded-md px-2 p_small"
                      key={el.id}
                    >
                      {el.name}
                    </span>
                  );
                })}
              </span>
              <span>
                <span className="text-gray-400 text-lg">## 8.5</span>
                <span className="text-gray-600 text-lg">|350k</span>
              </span>
            </div>
            <div className="w-4/5 flex flex-row items-center">
              <div className="w-full flex flex-col">
                <div className="text-base text-gray-500 my-5">
                  {movie.overview}
                </div>
                <div className="mb-2">
                  <p className="my-5">
                    Director:{" "}
                    <span className="text-red-400">Joseph Koniski</span>
                  </p>
                  <p className="mb-5">
                    Writers:{" "}
                    <span className="text-red-400">
                      Jim Cash, Jack Epps Jr, Peter Craig
                    </span>
                  </p>
                  <p className="mb-3">
                    Director:{" "}
                    <span className="text-red-400">
                      Tom Cruise, Jennifer Conneliy, Miles Teiller
                    </span>
                  </p>
                </div>
                <div className="w-full flex flex-row mb-2 items-center justify-center">
                  <span className="py-3 px-2 w-2/5 rounded-xl text-center text-white  bg-red-500">
                    {" "}
                    Top rated Movies #65
                  </span>
                  <span className="w-4/5 mr-1 py-3 px-2 flex flex-row border-2 border-l-0 rounded-xl  justify-between">
                    <span className="block pl-3">Awards: 9 nominations</span>
                    <span className="block">
                      <Open />
                    </span>
                  </span>
                </div>
              </div>
              <div className="w-5/12 flex flex-col">
                <span className="px-5 py-2 flex  justify-center items-center rounded-xl bg-red-700 text-white">
                  <Ticket />
                  <span className="text-center ml-2">See Showtimes</span>
                </span>
                <span className="px-5 py-2 mt-4 rounded-xl bg-red-300 text-gray-800 flex justify-center items-center">
                  <LIst />
                  <span className="text-center ml-2">More watch options</span>
                </span>
                <span className="flex h-44 w-full rounded-xl overflow-hidden justify-between items-center flex-wrap bg-white mt-2 relative">
                  <span className="z-0 block h-full relative w-full overflow-hidden">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                      className="object-cover absolute h-full w-full"
                    />
                  </span>
                  <span className="z-10 w-full absolute bottom-0 text-center left-0 opacity-70 bg-gray-800  h-8 flex justify-center items-center">
                    <LIst />
                    <span className="text-sm ml-2 text-gray-200">
                      {" "}
                      The best movie shows in september
                    </span>
                  </span>
                </span>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
