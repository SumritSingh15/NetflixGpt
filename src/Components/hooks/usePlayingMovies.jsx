import React from 'react'
import { useDispatch } from 'react-redux'
import { addnowplaying } from '../utils/movieSlice'
import { useEffect } from 'react'
import { Api_Options } from '../utils/constant'


const usePlayingMovies = () => {
     const dispatch = useDispatch()
        const  getnowPlaying = async ()=>{
         const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_Options)
 
         const json = await data.json();
        
        dispatch(addnowplaying(json.results))
        }
        

useEffect(()=>{
  getnowPlaying();
},[])
  
}

export default usePlayingMovies
