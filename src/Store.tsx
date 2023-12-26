import { configureStore } from '@reduxjs/toolkit'
import { sessionSlice } from './slices/Session'

export default configureStore({
  reducer: {
    session: sessionSlice.reducer
  }
})
