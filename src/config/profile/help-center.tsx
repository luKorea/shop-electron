import { createUniqueString } from '@/utils/util'

export interface ITypeItemList {
  title: string
  desc: string
  show?: boolean
  id: string
}
export interface ITypeItem {
  title: string
  list: ITypeItemList[]
  key: string
  id: string
}

function randText(length = 4) {
  return new Array(length).fill(null).map((_, index) => ({
    title: '这个软件为什么要收费' + index,
    id: createUniqueString(),
    desc: '熟的亭抢瑞碗睬三院理饲柏惩辞陶泳厌三教爪稼增轿膝嚼谱晒螺总向赵认五询她福助鸦破欣泪菜旨蠢臭愉灰昆预用合姻购绕取起董秋尿期侮害凝团矮幼库蔑织谋蝶彻扛踪跑操凭页翼恨与傲掘铜着恩珠锅办剑块涛软写乖惜膊休卸级传达摩页供牧始队照泡渴搅势爽贿宝级影堪粮唤柳恰念缎液舞烦蹲端龙柴冲影唱马校宅道芒乒洲趁年狂允熊携宴朋柏签牌普里指怖官忽举群拒庄拘握悦糟冤些箭特答爷盟识张贺赤古抬掀聋古施觉枯殿侵南的雀旧柳馅赞贱抹墨闸面悦愁无侍饱赖卸护怎玩新摔翁参毛励继削闲持耕酒脊狠炮勇平裕墓腐华讨躺模语寸悼贡削弯芬留虑疤法嘱练旋屡荒蛛屡龟胜侧房'
  }))
}

export const helpList: ITypeItem[] = [
  {
    title: '全部',
    key: 'all',
    id: createUniqueString(),
    list: randText(12)
  },
  {
    title: '支付',
    key: 'pay',
    id: createUniqueString(),
    list: randText(4)
  },
  {
    title: '账号',
    key: 'account',
    id: createUniqueString(),
    list: randText(5)
  },
  {
    title: '服务',
    key: 'service',
    id: createUniqueString(),
    list: randText(6)
  }
]
