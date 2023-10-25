import React from 'react'
import { createUniqueString } from '@/utils/util'
import {
  IconDelete,
  IconImageClose,
  IconMobile,
  IconNav,
  IconOrderedList,
  IconSkin,
  IconStorage,
  IconTrophy
} from '@arco-design/web-react/icon'
import { IHomeData } from '@/types/module/home'

export const homeList: IHomeData = {
  bannerList: [
    'https://z1.muscache.cn/im/pictures/205f9323-ff95-4881-9cdf-8640da95035b.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/d34ab35b-14f7-4fa3-9b05-e4c68e982ced.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/28102836-5f34-4385-907b-d0874aac1a89.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/52823d6c-5067-4e5c-9c51-c14dfcdf72c0.jpg?aki_policy=large'
  ],
  gridList: [
    {
      title: '沙发',
      icon: <IconNav />,
      id: createUniqueString(),
      type: 'sofa'
    },
    {
      title: '椅子',
      icon: <IconMobile />,
      id: createUniqueString(),
      type: 'chair'
    },
    {
      title: '桌子',
      icon: <IconSkin />,
      id: createUniqueString(),
      type: 'desk'
    },
    {
      title: '凳子',
      icon: <IconStorage />,
      id: createUniqueString(),
      type: 'stool'
    },
    {
      title: '柜子',
      icon: <IconTrophy />,
      id: createUniqueString(),
      type: 'cabinet'
    },
    {
      title: '橱窗',
      icon: <IconImageClose />,
      id: createUniqueString(),
      type: 'showcase'
    },
    {
      title: '花瓶',
      icon: <IconDelete />,
      id: createUniqueString(),
      type: 'vase'
    },
    {
      title: '更多',
      icon: <IconOrderedList />,
      id: createUniqueString(),
      type: 'all'
    }
  ]
}
