import React, { useRef, useState } from "react";
import { Api_Options } from "./constant";

const GptsearchBar = () => {
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleGptSearch = async () => {
    const query = searchText.current.value;
    if (!query || loading) return;

    setLoading(true);
    setMovies([]);

    try {
      const res = await fetch("http://localhost:5000/api/gpt-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();

      // 🔥 STRING → ARRAY
      const movieArray = data.movies
        .split(",")
        .map((movie) => movie.trim());

      // 🔥 EACH MOVIE → TMDB FETCH
      const tmdbMovies = await Promise.all(
        movieArray.map((movie) => searchMovie(movie))
      );

      setMovies(tmdbMovies.filter(Boolean)); // null hatao
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const searchMovie = async (movie) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie
      )}`,
      Api_Options
    );

    const json = await res.json();
    return json.results?.[0]; // (poster)
  };




  return (
    <div className="pt-24  flex flex-col items-center">
      <div className=" mt-10 w-full sm:w-170 bg-gray-200 p-6 rounded-lg flex flex-col items-center">
        <input
          ref={searchText}
          type="text"
          className="w-full p-3 mb-4 rounded bg-white text-gray-500"
          placeholder="What do you want to watch?"

        />
        <button
          onClick={handleGptSearch}
          disabled={loading}
          className="bg-blue-500 w-full text-white px-6 py-2 rounded"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {movies.length > 0 && (
        <section className="w-full mt-10 h-full py-10">
          <div className=" w-full sm:w-[90%] h-full  mx-auto">
            <h2 className="text-xl font-bold mb-6 text-white">
              GPT Recommended Movies
            </h2>

            <div className="flex flex-wrap gap-6 justify-start">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="w-40 bg-gray-900 rounded-lg overflow-hidden"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="w-full h-56 object-cover"
                  />
                  <p className="text-sm text-center text-white p-2">
                    {movie.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


    </div>
  );
};

export default GptsearchBar;
