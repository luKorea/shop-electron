import http from '@/service'
import { IUserInfoParams } from '@/types/module/user'

export const getUserInfoApi = () => {
  return http.get({
    url: '/member'
  })
}

export const updateUserInfoApi = (data: IUserInfoParams) => {
  return http.put({
    url: '/member',
    data
  })
}
