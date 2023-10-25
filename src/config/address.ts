import { IAddressItem } from '@/types/module/address'
import { createUniqueString } from '@/utils/util'

export function _renderAddressList() {
  return new Array(5).fill(null).map((_, index) => {
    const result: IAddressItem = {
      id: createUniqueString(),
      is_default: index === 0,
      name: 'Alpha' + index,
      city: '杭州市',
      phone: '13888888888',
      province: '浙江省',
      region: '西湖区',
      address: '阿里巴巴西溪园区 不放自提柜 送到家 送到家 送到家 送到家'
    }
    return result
  })
}
