import { getVerificationCode, loginApi, registerApi } from '@/api/front-member'
import {
  getUserInfoApi,
  updateUserInfoApi
} from '@/api/front-profile/user-info'
import { TOKEN, USER_INFO } from '@/config/constant'
import { ILoginParams, IUserInfoParams } from '@/types/module/user'
import { localCache } from '@/utils'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface IDataType {
  token: string | null
  userInfo: Partial<IUserInfoParams>
}

export const fetchLoginAction = createAsyncThunk(
  'login',
  async (payload: ILoginParams, { dispatch }) => {
    const res = await loginApi(payload)
    dispatch(setUserInfoAction(res.data))
    return res.data
  }
)
export const fetchRegisterAction = createAsyncThunk(
  'register',
  async (payload: ILoginParams, { dispatch }) => {
    const res = await registerApi(payload)
    dispatch(setUserInfoAction(res.data))
    return res.data
  }
)
export const fetchVerificationCodeAction = createAsyncThunk(
  'register/get-verification-code',
  async (phone: string) => {
    const res = await getVerificationCode(phone)
    return res.data
  }
)

export const fetchUserInfoAction = createAsyncThunk(
  'profile/userInfo',
  async (_, { dispatch }) => {
    const res = await getUserInfoApi()
    dispatch(setUserInfoAction(res.data))
    return res.data
  }
)

export const fetchUpdateUserInfoAction = createAsyncThunk(
  'profile/update/userInfo',
  async (payload: IUserInfoParams, { dispatch }) => {
    await updateUserInfoApi(payload)
    dispatch(fetchUserInfoAction())
  }
)

const userReducer = createSlice({
  name: 'user',
  initialState(): IDataType {
    return {
      token: null,
      userInfo: {}
    }
  },
  reducers: {
    setUserInfoAction(state: IDataType, { payload }) {
      const userInfo = {
        ...state.userInfo,
        ...payload
      }
      state.userInfo = userInfo
      localCache.setCache(USER_INFO, userInfo)
    },

    setLocalDataAction(state: IDataType) {
      const token = localCache.getCache(TOKEN)
      const userInfo = localCache.getCache(USER_INFO)
      if (token && userInfo) {
        state.token = token
        state.userInfo = userInfo
      }
    },
    logoutAction(state: IDataType) {
      state.token = null
      state.userInfo = {}
      localCache.removeCache(TOKEN)
      localCache.removeCache(USER_INFO)
    }
  }
})

export const { setLocalDataAction, setUserInfoAction, logoutAction } =
  userReducer.actions

export default userReducer.reducer
