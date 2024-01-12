import {
  getCommodityDetailApi,
  getCommodityListApi
} from '@/api/front-commodity'
import { _renderCommodityList } from '@/config/commodity'
import { IPageInfo } from '@/types/constant'
import { ICommodityItem } from '@/types/module/commodity-list'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IState extends IPageInfo {
  list: ICommodityItem[]
  current_info: any
}

export const fetchCommodityLisAction = createAsyncThunk(
  'commodity/list',
  async (payload: any, { dispatch }) => {
    console.log(payload)
    // const { data } = await getCommodityListApi(payload)
    // dispatch(
    //   setPageInfoAction({
    //     current_page: data.current_page,
    //     page_size: data.page_size
    //   } as IPageInfo)
    // )
    // dispatch(setDataAction(data.list))
    dispatch(setDataAction(_renderCommodityList()))
  }
)

export const fetchCommodityDetailAction = createAsyncThunk(
  'commodity/detail',
  async (id: string | number, { dispatch }) => {
    const { data } = await getCommodityDetailApi({ id })
    dispatch(setCurrentCommodityInfo(data))
  }
)

const commodityReducer = createSlice({
  name: 'commodity',
  initialState(): IState {
    return {
      list: [],
      current_page: 1,
      page_size: 10,
      current_info: {}
    }
  },
  reducers: {
    setDataAction(state: IState, { payload }) {
      state.list = payload
    },
    setCurrentCommodityInfo(state: IState, { payload }) {
      state.current_info = payload
    },
    setPageInfoAction(state: IState, { payload }) {
      state.current_page = payload.current_page
      state.page_size = payload.page_size
    }
  }
})

export const { setDataAction, setPageInfoAction, setCurrentCommodityInfo } =
  commodityReducer.actions

export default commodityReducer.reducer
