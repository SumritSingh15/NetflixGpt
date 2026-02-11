import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "../Components/MovieList"

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);
  const isSearching = useSelector((store) => store.search.isSearching);
  if (isSearching) return null;

  return (
    <div className='w-screen bg-black '>
      <div className=' lg:-mt-40  relative z-30   '>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.Top_Rated} />

      </div>

    </div>
  )
}

export default SecondaryContainer
