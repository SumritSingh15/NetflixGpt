import { useEffect, useState } from "react";
import { auth } from "./utils/Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/UserSlice";
import { Api_Options, Logo, tmdb_api_key, UserIcon } from "./utils/constant";
import { toggleGptSearch } from "./utils/GptSlice";
import { setSearchResults, clearSearch } from "./SearchSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const movies = useSelector((store) => store.movies);
  const showGptSearch = useSelector((store) => store.Gpt.showGptSearch);

  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* 🔍 SEARCH */
  const searchByName = async (searchText) => {
    if (!searchText) return;

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchText)}`,
      Api_Options
    );

    const json = await res.json();
    console.log(json.results);
    dispatch(setSearchResults(json.results));
  };

  useEffect(() => {
    if (searchText == "") dispatch(clearSearch())
    const timer = setTimeout(() => {
      searchByName(searchText);
    }, 300)
    return () => clearTimeout(timer);
  }, [searchText])





  /* 🔐 AUTH */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="  w-full z-50 bg-black">
      <div className="flex flex-wrap sm:w-full md-w-full lg:w-full xl:w-full  items-end justify-between px-4 w-full  py-3 ">

        {/* LOGO */}
        <img src={Logo} className="w-48 " />

        {user && (
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto mt-3 md:mt-0">

            {/* SEARCH */}
            {!showGptSearch && (
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search movies..."
                className="w-full  md:w-[260px] h-13 px-4 rounded-lg bg-gray-800 text-white outline-none"
              />
            )}



            {/* GPT TOGGLE */}
            <button
              onClick={() => {
                dispatch(toggleGptSearch());
                dispatch(clearSearch());
                setSearchText("");
              }}
              className="h-10 px-4 rounded-lg bg-blue-500 text-white whitespace-nowrap"
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>

            <img src={UserIcon} className="w-9 h-9 rounded-full" />

            <button
              onClick={() => signOut(auth)}
              className="text-white font-semibold whitespace-nowrap"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
