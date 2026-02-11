import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import SearchResults from "./SearchResults";
import { useSelector } from "react-redux";

import usePlayingMovies from "./hooks/usePlayingMovies";
import useTrendingMovies from "./hooks/useTrendingMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";

const Browse = () => {
  const showGptSearch = useSelector(
    (store) => store.Gpt.showGptSearch
  );

  const isSearching = useSelector(
    (store) => store.search.isSearching
  );

  usePlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />

      {showGptSearch ? (
        <GptSearch />
      ) : isSearching ? (
        <SearchResults />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
