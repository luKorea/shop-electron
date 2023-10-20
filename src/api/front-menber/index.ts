import http from '@/service'
import { ILoginParams } from '@/types/module/user'

export const loginApi = (data: ILoginParams) => {
  return http.post({
    url: '/auth/login',
    data
  })
}

export const registerApi = (data: any) => {
  return http.post({
    url: '/auth/register',
    data
  })
}
