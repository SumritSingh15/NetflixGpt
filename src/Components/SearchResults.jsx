import { useSelector } from "react-redux";

const SearchResults = () => {
  const movies = useSelector(
    (store) => store.search.filteredMovies
  );
  const isSearching = useSelector(
    (store) => store.search.isSearching
  );

  if (!isSearching) return null;

  if (!movies || movies.length === 0) {
    return (
      <div className="bg-black min-h-screen pt-32">
        <h1 className="text-white text-center text-xl">
          No results found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-28 px-6">
      {/* Heading */}
      <h1 className="text-white text-2xl font-bold mb-6 text-center">
        Search Results
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="w-70 cursor-pointer mb-2 mt-2 transform transition duration-300 hover:scale-110"
          >
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "no image"}
              alt="NetWork Issue!!"
              className="rounded-lg h-52 w-full object-cover text-white"
              loading="lazy" />
            <p className="text-white text-sm mt-2 text-center line-clamp-2">
              {movie.title ||
                movie.original_title ||
                movie.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
