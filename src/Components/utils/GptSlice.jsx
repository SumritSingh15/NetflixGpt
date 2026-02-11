import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name: "Gpt",
    initialState: {
        showGptSearch: false
    },
    reducers:{
        toggleGptSearch: (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
    }
})
export const {toggleGptSearch} = GptSearchSlice.actions;
export default GptSearchSlice.reducer;