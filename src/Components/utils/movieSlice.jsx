import { createSlice } from "@reduxjs/toolkit";

 const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        TrailerVideo: null,
        popularMovies:null,
         Top_Rated:null,
    },
    reducers:{
        addnowplaying: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
         addpopularplaying: (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRated:(state,action)=>{
            state.Top_Rated = action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.TrailerVideo = action.payload;
        }
    }   
 })
 export const {addnowplaying,addTrailerVideo,addpopularplaying,addTopRated} = movieSlice.actions;
 export default movieSlice.reducer;