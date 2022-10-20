import {  createSlice } from '@reduxjs/toolkit'

 export const filterSlice = createSlice({
    name: "filter",
     initialState: {
         filter: '',
     },
     reducers:
     {
         setFilter(state, action) {
             console.log(action)
             state.filter = action.payload
             console.log(state);
             console.log(action)
         },    
     }
 })

export const { setFilter} = filterSlice.actions;