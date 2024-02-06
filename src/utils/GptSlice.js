import { createSlice } from "@reduxjs/toolkit";


const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        ShowGptSearch:false,
        movieResult:null,
        movieName:null,
    },
    reducers:{
        ToggleGptsearch:(state)=>{
            state.ShowGptSearch= !state.ShowGptSearch
        },
        addGptResults:(state,action)=>{
            const {movieName,movieResult}=action.payload
            state.movieName = movieName
            state.movieResult= movieResult

        }
    }
})
export const {ToggleGptsearch,addGptResults}= GptSlice.actions;
export default GptSlice.reducer;