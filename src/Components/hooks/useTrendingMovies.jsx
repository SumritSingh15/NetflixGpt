import React from 'react'
import { Api_Options } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addpopularplaying } from '../utils/movieSlice'

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingmovies = useSelector((store) => { store.movies.popularMovies })
  const TrendingPlaying = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", Api_Options)
    const json = await data.json()
    console.log(json.results);
    dispatch(addpopularplaying(json.results));
  }
  useEffect(() => {
    if (!trendingmovies) {
      TrendingPlaying();
    }
  }, [])
}


export default useTrendingMovies
