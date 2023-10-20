import http from '@/service'

export const getHomeDataApi = (data?: any) => {
  return http.post({
    url: '/auth/login',
    data
  })
}
