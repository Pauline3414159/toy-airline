import {configureStore} from '@reduxjs/toolkit'
import pageReducer from '../features/pageSlice'
import filterReducer from '../features/filterBySlice'

export default configureStore({
  reducer: {
    page: pageReducer,
    filter: filterReducer,
  }
})