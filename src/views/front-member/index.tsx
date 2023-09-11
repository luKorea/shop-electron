import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { MemberWrapper } from './styled'
import TabBar from '@/components/tab-bar'
import classNames from 'classnames'
import { Divider, Checkbox } from '@arco-design/web-react'
import { useTitle } from '@/hooks'
import setting from '@/settings.json'
import {
  IconLarkColor,
  IconTiktokColor,
  IconXiguaColor
} from '@arco-design/web-react/icon'
import { TLoginType } from './types'

interface IProps {
  children?: ReactNode
}

interface ITitle {
  title: string
  value: number
}

interface ILoginType {
  icon: ReactNode
  url?: string
  type: TLoginType
}

const FrontMember: FC<IProps> = () => {
  const [titleList] = useState<ITitle[]>([
    { title: '登录', value: 1 },
    { title: '注册', value: 2 }
  ])
  const [typeList] = useState<ILoginType[]>([
    { icon: <IconLarkColor />, type: 'lark' },
    { icon: <IconTiktokColor />, type: 'tiktok' },
    { icon: <IconXiguaColor />, type: 'xigua' }
  ])
  const [title, setTitle] = useState<string>('登录')
  const [selectIndex, setSelectIndex] = useState(0)
  useTitle(title)

  useEffect(() => {
    const title = `${setting.title} - ${titleList[selectIndex].title}`
    setTitle(title)
  }, [selectIndex])

  function renderTitleWrapper() {
    return titleList.map((item, index) => (
      <div
        className={classNames('title', {
          'title-active': selectIndex === index
        })}
        key={item.value}
        onClick={() => setSelectIndex(index)}
      >
        {item.title}
        {index !== titleList.length - 1 && <Divider type="vertical" />}
      </div>
    ))
  }
  function renderLoginType() {
    return typeList.map((item) => (
      <div
        key={item.type}
        className="type-item"
        onClick={() => goLoginPage(item)}
      >
        {item.icon}
      </div>
    ))
  }

  function goLoginPage(item: ILoginType) {
    console.log(item, '---')
  }
  return (
    <MemberWrapper>
      <TabBar />
      <div className="title-wrap">{renderTitleWrapper()}</div>

      <div className="login-tip">
        <Divider>其他登录方式</Divider>
      </div>
      <div className="type-wrapper">{renderLoginType()}</div>

      <div className="auth-tip">
        <Checkbox className={'checkbox-tip'}>
          登录即表示同意 <span className="tip-text">《用户协议》</span> &
          <span className="tip-text">《服务条款》</span>
        </Checkbox>
      </div>
    </MemberWrapper>
  )
}

export default memo(FrontMember)
