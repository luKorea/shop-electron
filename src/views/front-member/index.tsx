import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { Divider, Checkbox } from '@arco-design/web-react'

import { MemberWrapper } from './styled'
import { useTitle } from '@/hooks'
import setting from '@/settings.json'
import NavBar from '@/components/business-component/nav-bar'
import FormPanner from './components/form-panner'

import { useMessageTip } from '@/utils/tip'
import useGetSearchParams from '@/hooks/use-get-search-params'
import { REDIRECT_URL } from '@/config/constant'
import { useNavigate } from 'react-router-dom'
import { ILoginType, typeList } from '@/config/front-member'
import { useAppDispatch } from '@/hooks/use-store'
import { fetchLoginAction, fetchRegisterAction } from '@/store/module/user'
import { PAGE_HOME } from '@/router/constant'
import { checkLogin } from '@/utils/util'
import { ILoginParams } from '@/types/module/user'

interface IProps {
  children?: ReactNode
}

interface ITitle {
  title: string
  value: number
}

const FrontMember: FC<IProps> = () => {
  const [titleList] = useState<ITitle[]>([
    { title: '登录', value: 1 },
    { title: '注册', value: 2 }
  ])
  const nav = useNavigate()
  const { redirect_url } = useGetSearchParams(REDIRECT_URL)
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState<string>('登录')
  const [selectIndex, setSelectIndex] = useState<number>(0)
  const [checked, setChecked] = useState<boolean>(false)
  const [isRegister, setIsRegister] = useState(false)

  useTitle(`${setting.title} - ${title}`)

  useEffect(() => {
    setTitle(`${titleList[selectIndex].title}`)
  }, [selectIndex])

  useEffect(() => {
    checkLogin() && nav(PAGE_HOME)
  }, [])

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

  async function handleLoginOrRegister(data: ILoginParams) {
    if (!checked) {
      useMessageTip('error', '请先勾选协议')
    } else {
      setLoading(true)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const res = await dispatch(
        isRegister ? fetchRegisterAction(data) : fetchLoginAction(data)
      )
      if (res.meta.requestStatus === 'fulfilled') {
        useMessageTip('success', `${isRegister ? '注册成功' : '登录成功'}`)
        if (isRegister) {
          setSelectIndex(0)
          setIsRegister(false)
        } else {
          nav(redirect_url)
        }
      }
      setLoading(false)
    }
  }
  return (
    <MemberWrapper>
      <NavBar />
      <div className="title-wrap">{renderTitleWrapper()}</div>
      <FormPanner
        isRegister={isRegister}
        pageText={title}
        getFromData={(data) => handleLoginOrRegister(data)}
        loading={loading}
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
