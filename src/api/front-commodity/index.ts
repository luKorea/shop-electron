import http from '@/service'

export const getCommodityListApi = (params: any) => {
  return http.get({
    url: 'commodity/list',
    params
  })
}

export const getCommodityDetailApi = (params: any) => {
  return http.get({
    url: 'commodity/list',
    params
  })
}
