import {
  PAGE_HOME,
  PAGE_ORDER,
  PAGE_PROFILE_INDEX,
  PAGE_SHOPPING_CART,
  PAGE_WALLET_MY_WALLET
} from '@/router/constant'
export interface IListItem {
  url: string
  icon: string
  select_icon: string
  title: string
}

export const navbarList: IListItem[] = [
  {
    url: PAGE_HOME,
    icon: 'https://img1.rrzuji.cn/uploads/scheme/2309/15/m/zm9761f4omgZzAm1FNSH.png',
    select_icon:
      'https://img1.rrzuji.cn/uploads/scheme/2309/15/m/ezLgALaBqi82uYwokQkx.png',
    title: '首页'
  },
  {
    url: PAGE_SHOPPING_CART,
    icon: 'https://img1.rrzuji.cn/uploads/scheme/2309/15/m/DHdQ5gnxl3Db4xzktz3n.png',
    select_icon:
      'https://img1.rrzuji.cn/uploads/scheme/2309/15/m/Wmb4nE2md4pkjPAlfUNG.png',
    title: '购物车'
  },
  {
    url: PAGE_ORDER,
    icon: 'https://img1.rrzuji.cn/uploads/scheme/2309/15/m/792DWgLz7yhWhOMRey6O.png',
    select_icon:
      'https://img1.rrzuji.cn/uploads/scheme/2309/15/m/BJ5TOkiRkxdqtQwOK37s.png',
    title: '订单'
  },
  {
    url: PAGE_WALLET_MY_WALLET,
    icon: 'https://img1.rrzuji.cn/uploads/scheme/2309/15/m/hm3rbWuVBmcswGeSZfjP.png',
    select_icon:
      'https://img1.rrzuji.cn/uploads/scheme/2309/15/m/Q35ixeS0G9GdGBIbLfT7.png',
    title: '钱包'
  },
  {
    url: PAGE_PROFILE_INDEX,
    icon: 'https://img1.rrzuji.cn/uploads/scheme/2309/15/m/M8oSW79B4QdrPT8uCOcL.png',
    select_icon:
      'https://img1.rrzuji.cn/uploads/scheme/2309/15/m/ezLgALaBqi82uYwokQkx.png',
    title: '我的'
  }
]
