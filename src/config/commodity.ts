import { ICommodityItem } from '@/types/module/commodity-list'
import { createUniqueString } from '@/utils/util'

export function _renderCommodityList() {
  return new Array(10).fill(null).map((_, index) => {
    const result: ICommodityItem = {
      id: createUniqueString(),
      title: '人体工程椅' + index,
      img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3126038908,3132338346&fm=199&app=68&f=JPEG?w=750&h=750&s=3BAC7422460146FE4F1954C70100E0A1',
      isCollect: index % 2 === 0,
      amount: 888 + index,
      score: 0.1 + index,
      sales: 666 + index,
      category: 'all'
    }
    return result
  })
}

export const commodityList: ICommodityItem[] = _renderCommodityList()
