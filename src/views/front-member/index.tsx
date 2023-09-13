import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { Divider, Checkbox, Message } from '@arco-design/web-react'
import {
  IconLarkColor,
  IconTiktokColor,
  IconXiguaColor
} from '@arco-design/web-react/icon'

import { MemberWrapper } from './styled'
import { useTitle } from '@/hooks'
import setting from '@/settings.json'
import TabBar from '@/components/tab-bar'
import FormPanner from './components/form-panner'

import { TLoginType } from './types'
import { TKeyOfValue } from '@/types/constant'
import { useMessageTip } from '@/utils/tip'

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
  const [selectIndex, setSelectIndex] = useState<number>(0)
  const [checked, setChecked] = useState<boolean>(false)
  const [isRegister, setIsRegister] = useState(false)

  useTitle(`${setting.title} - ${title}`)

  useEffect(() => {
    setTitle(`${titleList[selectIndex].title}`)
  }, [selectIndex])

  function changeSelectTitle(index: number) {
    setSelectIndex(index)
    setIsRegister(titleList[index].value === 2)
  }

  function renderTitleWrapper() {
    return titleList.map((item, index) => (
      <div
        className={classNames('title', {
          'title-active': selectIndex === index
        })}
        key={item.value}
        onClick={() => changeSelectTitle(index)}
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
    console.log(item, 'goLoginPage')
  }

  function handleLoginOrRegister(data: TKeyOfValue) {
    if (!checked) {
      useMessageTip('error', '请先勾选协议')
    } else {
      useMessageTip('success', `${isRegister ? '注册' : '登录'}成功`)
      console.log(data, '---用户传入的数据')
    }
  }
  return (
    <MemberWrapper>
      <TabBar />
      <div className="title-wrap">{renderTitleWrapper()}</div>
      <FormPanner
        isRegister={isRegister}
        pageText={title}
        getFromData={(data) => handleLoginOrRegister(data)}
      />
      <div className="login-tip">
        <Divider>其他登录方式</Divider>
      </div>
      <div className="type-wrapper">{renderLoginType()}</div>

      <div className="auth-tip">
        <Checkbox
          className={'checkbox-tip'}
          value={checked}
          onChange={setChecked}
        >
          登录即表示同意 <span className="tip-text">《用户协议》</span> &
          <span className="tip-text">《服务条款》</span>
        </Checkbox>
      </div>
    </MemberWrapper>
  )
}

export default memo(FrontMember)
