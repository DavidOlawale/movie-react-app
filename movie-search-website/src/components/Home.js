// components/Home.js
import "./home.css";
import React, { useEffect, useState } from "react";
import MoviePoster from "./movie-poster";
import TopMovies from "./top-movies";
import Logo from "../asset/logo";
import SIgnIN from "../asset/sigin";
import Search from "../asset/search";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [val, setVal] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
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
        const movieToSet = result.results.slice(0, 10);
        setMovies(movieToSet);
        setLoading(false);
      }
    });
  }, []);

  const search = (event) => {
    event.preventDefault();
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTQ5MTlkMDYzMWU4OWU5MTgyMDc4NTBiZjJiNGIwZCIsInN1YiI6IjY0ZmVkYTJjZGI0ZWQ2MTA0MzA4NjVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SPMygPqE4bA0h-_L2xez1SicsVFYMitC1CtoEzVWmJk",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${val}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const result = response.results.slice(0, 10);
        setMovies(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    setShow(true);
  };

  return (
    <div className="w-full relative">
      {loading && (
        <div className="h-min flex items-center text-center justify-center text-lg">
          Loading....
        </div>
      )}
      {loading && error && (
        <div className="h-min flex items-center text-center justify-center text-lg">
          {error}
        </div>
      )}
      {!loading && !error && (
        <>
          <div className="w-full h-min bg-gray-700 flex flex-col justify-evenly items-center">
            <nav className="flex z-10 justify-evenly w-4/5 py-5 items-center relative h-1/6">
              <div className="w-2/5 flex items-center">
                <Logo />
                <span className="pl-2 text-white font-bold text-2xl block">
                  MovieBox
                </span>
              </div>
              <form
                onSubmit={(event) => search(event)}
                className="input_container relative shadow-sm w-full shadow-white flex items-center justify-center"
              >
                <input
                  className="input"
                  onChange={(event) => {
                    setShow(false);
                    setVal(event.target.value);
                  }}
                  placeholder="what do you want to watch?"
                />
                <button className="absolute right-0 w-10 cursor-pointer h-full flex items-center">
                  <Search />
                </button>
              </form>
              <div className="w-2/5 flex flex-row items-center">
                <span className="w-full text-right mr-4 text-white font-semibold">
                  Sign in
                </span>
                <span className="bg-red-800 rounded-full p-2">
                  <SIgnIN />
                </span>
              </div>
            </nav>
            {movies && (
              <div className="w-full h-5/6">
                <MoviePoster movies={movies} />
              </div>
            )}
            {movies.length < 1 && <div>no movie yet</div>}
          </div>
          <div className="p-10 w-full justify-center items-center flex flex-col">
            <div className="py-10 flex w-11/12 flex-row justify-between items-center ">
              <span className="text-black pl_10 font-semibold text-2xl block">
                Top 10 movies {val && show && `for search result "${val}"`}
              </span>
              <span className="block text-red-500 cursor-pointer text-lg">
                see more {`>`}
              </span>
            </div>
            <div className="w-full justify-center items-center flex">
              <TopMovies movies={movies} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
