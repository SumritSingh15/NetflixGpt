
import useMovieTrailer from './hooks/useMovieTrailer'
import { useSelector } from 'react-redux';
const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);

    const VideoTrailer = useSelector((store) => { return store.movies?.TrailerVideo });

    const isSearching = useSelector((store) => { return store.search.isSearching });

    if (isSearching) return null;
    if (!VideoTrailer) { return <h1 className='font-bold'>Network issue!!</h1>; }

    return (
        <div className='relative w-screen h-screen overflow-hidden'>
            <iframe className='  absolute
      top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      w-[120vw]
      h-[120vh] pointer-events-none ' src={"https://www.youtube.com/embed/" + VideoTrailer.key + "?&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1&fs=0"}  ></iframe>
        </div>
    )
}

export default VideoBackground
