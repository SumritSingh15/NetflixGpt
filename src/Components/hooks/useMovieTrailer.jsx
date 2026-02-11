import { useDispatch, useSelector } from "react-redux";
import { Api_Options } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import React from 'react'

const useMovieTrailer = (movieId) => {
    const trailermovie = useSelector((store)=>{store.movies.TrailerVideo}) 
    const dispatch = useDispatch();
    const getmovies = async () => {
        const data = await fetch( `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, Api_Options);
        const json = await data.json();
      
        const FilterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = FilterData.length ? FilterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
     if(!trailermovie){
           getmovies();
     }
    }, [])


}

export default useMovieTrailer
