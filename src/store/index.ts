import { configureStore } from '@reduxjs/toolkit'
import userReducer from './module/user'
const store = configureStore({
  reducer: {
    userReducer
  }
})

export type IRootState = ReturnType<typeof store.getState>
export type IDispatch = typeof store.dispatch

export default store
