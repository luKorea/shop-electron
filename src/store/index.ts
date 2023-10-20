import { configureStore } from '@reduxjs/toolkit'
import userReducer from './module/user'
import homeReducer from './module/home'
import commodityReducer from './module/commodity'
const store = configureStore({
  reducer: {
    userReducer,
    homeReducer,
    commodityReducer
  }
})

export type IRootState = ReturnType<typeof store.getState>
export type IDispatch = typeof store.dispatch

export default store
