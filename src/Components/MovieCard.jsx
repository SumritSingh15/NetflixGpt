import React from 'react'
import { CDN_IMG_URL } from './utils/constant'

const MovieCard = ({ posterpath }) => {

  return (
    <div className='flex shrink-0 p-2 h-70 transition-all 
        duration-300 
        ease-out
        hover:-translate-y-2'>
      <img src={CDN_IMG_URL + posterpath} />
    </div>
  )
}

export default MovieCard
