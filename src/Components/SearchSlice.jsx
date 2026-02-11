import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "search",
    initialState: {
        isSearching: false,
        filteredMovies: []
    },
    reducers: {
        setSearchResults: (state, action) => {
            state.filteredMovies = action.payload,
                state.isSearching = true
        },
        clearSearch: (state) => {

            state.isSearching = false;
        },
    },

})
export const { setSearchResults, clearSearch } = SearchSlice.actions;
export default SearchSlice.reducer;