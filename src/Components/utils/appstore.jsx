import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"
import moviesReducer from "./movieSlice"

const Appstore = configureStore({
    reducer:{
        user: UserReducer,
        movies: moviesReducer,
    },
})
export default Appstore