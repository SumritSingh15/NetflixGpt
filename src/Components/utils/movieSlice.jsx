import { createSlice } from "@reduxjs/toolkit";

 const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        TrailerVideo: null,
    },
    reducers:{
        addnowplaying: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.TrailerVideo = action.payload;
        }
    }   
 })
 export const {addnowplaying,addTrailerVideo} = movieSlice.actions;
 export default movieSlice.reducer;