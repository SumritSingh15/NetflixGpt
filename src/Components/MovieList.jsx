import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const Movies = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <h1>Loading...</h1>;
  }



  return (
    <div className="  w-screen">
      <h1 className="text-2xl font-bold mb-2 text-white pl-2">{title}</h1>
      <div

        className="flex 
          space-x-4 
          overflow-x-auto 
          scrollbar-none
        "
        style={{ scrollBehavior: "smooth" }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterpath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
