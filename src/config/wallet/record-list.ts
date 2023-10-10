import { createUniqueString, randomNUmber } from '@/utils/util'
import dayjs from 'dayjs'
import { imageUrl } from '../image'

export interface IRecordListItem {
  image: string
  type: string
  time: string
  amount: string
  id: string
}

const { hotImage, postageImage } = imageUrl
function randomData() {
  return new Array(40).fill(null).map((_, index) => {
    return {
      image: index % 2 === 0 ? hotImage : postageImage,
      type: '测试数据' + index,
      id: createUniqueString(),
      time: dayjs().format('YYYY/MM/DD HH:mm:ss'),
      amount: 90908 + index + ''
    }
  })
}

export const recordList: IRecordListItem[] = randomData()
