import React, { useEffect } from 'react'
import { Api_Options } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRated } from '../utils/movieSlice'


const useTopRatedMovies = () => {
  const dispatch = useDispatch();
       const TopRated = useSelector((store)=>{store.movies.Top_Rated})

    const Top_Rated = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',Api_Options);
        const json = await data.json();
        console.log(json.results);
       dispatch(addTopRated(json.results));
    }
    useEffect(()=>{
if(!TopRated){
    Top_Rated();
}
    },[])
}

export default useTopRatedMovies
