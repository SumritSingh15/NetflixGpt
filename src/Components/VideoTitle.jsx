import React from 'react'
import { FaPlay } from "react-icons/fa";
import { SlInfo } from "react-icons/sl";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[22%] w-full px-20 absolute text-white bg-linear-to-b from-black to-transparent '>
      <h1 className='text-7xl font-bold p-2'>{title}</h1>
      <p className='w-50 sm:w-1/4 m-2 italic'>{overview}</p>
      <div className='p-5 m-5 lg:flex flex-row hidden'>
        <button className="mx-5 flex items-center justify-center gap-2 bg-gray-400 hover:bg-gray-700 px-6 py-2  font-bold text-white"> <FaPlay size={18} color="white" /> Play</button>
        <button className=' bg-gray-400 w-33 h-13 text-white font-bold  hover:bg-gray-700 px-6 py-2'><SlInfo className='mx-7' /> More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
