import { createSlice } from "@reduxjs/toolkit";


const userslice = createSlice({
    name: "user",
    initialState: null,
    reducers:{
         addUser: (state,action)=>{
            return action.payload;
         }
    },
     removeUser: (state,action)=>{
            return null;
         },
})
console.log(userslice.actions)
export const {addUser,removeUser} = userslice.actions;
export  default userslice.reducer;