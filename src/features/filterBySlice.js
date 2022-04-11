import { createSlice } from "@reduxjs/toolkit";

export const filterBySlice = createSlice({
  name:'filter',
  initialState: {
    airline: "",
    airport: "",
  },
  reducers : {
    setAirline: (state, action) => {state.airline = action.payload.toUpperCase()},
    setAirport: (state, action) => {state.airport = action.payload.toUpperCase()},
    clearFilters: (state) => {
      state.airline = "";
      state.airport = "";
    },
  }
})

export const {setAirline, setAirport, clearFilters} = filterBySlice.actions

export default filterBySlice.reducer