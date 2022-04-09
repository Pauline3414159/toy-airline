import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    rangeStart: 1,
    increment: 25,
  },
  reducers: {
    nextPage: (state) => {
      state.rangeStart += state.increment
      return state
    },
    prevPage: (state) => {
      state.rangeStart -= state.increment
      return state
    },
    setIncrement: (state, action) => {
      state.increment = action.payload
      return state
    }
  }
})

export const {nextPage, prevPage, setIncrement} = pageSlice.actions

export default pageSlice.reducer