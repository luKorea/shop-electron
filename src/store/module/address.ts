import {
  addAddressApi,
  deleteAddressApi,
  editAddressApi,
  getAddressListApi,
  setDefaultAddressApi
} from '@/api/front-address'
import { _renderAddressList } from '@/config/address'
import { IAddressData } from '@/types/module/address'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchAddressListAction = createAsyncThunk(
  'address/list',
  async (_, { dispatch }) => {
    // const { data } = await getAddressListApi()
    // dispatch(setAddressListAction(data.list))
    dispatch(setAddressListAction(_renderAddressList()))
  }
)

export const fetchSetDefaultAddressAction = createAsyncThunk(
  'address/set_default',
  async (id: string | number, { dispatch }) => {
    await setDefaultAddressApi(id)
    dispatch(fetchAddressListAction())
  }
)

export const fetchAddAddressAction = createAsyncThunk(
  'address/add_address',
  async (params: IAddressData, { dispatch }) => {
    await addAddressApi(params)
    dispatch(fetchAddressListAction())
  }
)

export const fetchEditAddressAction = createAsyncThunk(
  'address/edit_address',
  async (params: IAddressData, { dispatch }) => {
    await editAddressApi(params)
    dispatch(fetchAddressListAction())
  }
)

export const fetchDeleteAddressAction = createAsyncThunk(
  'address/delete_address',
  async (id: string | number, { dispatch }) => {
    await deleteAddressApi(id)
    dispatch(fetchAddressListAction())
  }
)

const addressReducer = createSlice({
  name: 'address',
  initialState: (): IAddressData => {
    return {
      list: []
    }
  },
  reducers: {
    setAddressListAction(state: IAddressData, { payload }) {
      state.list = payload
    }
  }
})

export const { setAddressListAction } = addressReducer.actions

export default addressReducer.reducer
