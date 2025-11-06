import React, { useEffect } from 'react'
import Header from './Header'
import usePlayingMovies from './hooks/usePlayingMovies';
import MainContainer from './MainContainer';
import MovieList from "../Components/MovieList"

const Browse = () => {
     usePlayingMovies()

     return(
      <div>
        <Header/>
        <MainContainer/>
        <MovieList/>
      </div>
     )  
}

export default Browse
