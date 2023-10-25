import http from '@/service'
import { IAddressData } from '@/types/module/address'

/** 获取收货地址 */
export const getAddressListApi = () => {
  return http.get({
    url: '/address/list'
  })
}

/** 设置默认收货地址 */
export const setDefaultAddressApi = (id: number | string) => {
  return http.get({
    url: '/address/list',
    params: {
      id
    }
  })
}

/** 新增收货地址 */
export const addAddressApi = (params: IAddressData) => {
  return http.get({
    url: '/address/list',
    params
  })
}

/** 编辑收货地址 */
export const editAddressApi = (params: IAddressData) => {
  return http.get({
    url: '/address/list',
    params
  })
}

/** 删除收货地址 */
export const deleteAddressApi = (id: string | number) => {
  return http.get({
    url: '/address/list',
    params: { id }
  })
}
