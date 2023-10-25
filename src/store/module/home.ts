import { getHomeDataApi } from '@/api/front-home'
import { homeList } from '@/config/home'
import { IHomeData } from '@/types/module/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk(
  'home/getData',
  async (_, { dispatch }) => {
    // const res = await getHomeDataApi()
    dispatch(setHomeAction(homeList))
  }
)

const HomeReducer = createSlice({
  name: 'home',
  initialState(): IHomeData {
    return {
      bannerList: [],
      gridList: []
    }
  },
  reducers: {
    setHomeAction(state: IHomeData, { payload }) {
      state.bannerList = payload.bannerList
      state.gridList = payload.gridList
    }
  }
})

export const { setHomeAction } = HomeReducer.actions

export default HomeReducer.reducer
