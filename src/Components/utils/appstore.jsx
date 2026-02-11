import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"
import moviesReducer from "./movieSlice"
import GptSearchReducer from "./GptSlice"
import SearchReducer from "../SearchSlice"
const Appstore = configureStore({
    reducer:{
        user: UserReducer,
        movies: moviesReducer,
        Gpt: GptSearchReducer,
        search: SearchReducer,
    },
})
export default Appstore