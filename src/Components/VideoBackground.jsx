
import useMovieTrailer from './hooks/useMovieTrailer'
import { useSelector } from 'react-redux';
const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);

    const VideoTrailer = useSelector((store) => store.movies?.TrailerVideo)
    if (!VideoTrailer) { return <h1 className='font-bold'>Network issue!!</h1>; }

    return (
        <div className='w-screen aspect-video'>
            <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + VideoTrailer.key + "?&autoplay=1&mute=1"}  ></iframe>
        </div>
    )
}

export default VideoBackground
