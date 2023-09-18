import React from 'react'
import type { ReactNode } from 'react'
import { localCache } from '@/utils'
import { Button, Result, Typography } from '@arco-design/web-react'
import { IconFaceFrownFill } from '@arco-design/web-react/icon'
import { LoginModalWrapper } from './styled'
import { useNavigate } from 'react-router-dom'
import { PAGE_MEMBER } from '@/router/constant'
import { checkLogin, useGetLocationName } from '@/utils/util'
import { REDIRECT_URL } from '@/config/constant'

interface IProps {
  children?: ReactNode
}

function LoginWrapper() {
  const nav = useNavigate()
  const { pathname } = useGetLocationName()
  return (
    <LoginModalWrapper>
      <Result
        status="error"
        icon={<IconFaceFrownFill />}
        title="暂未登录"
        subTitle="(づ￣3￣)づ╭❤～亲,您还未登录,请先登录哦"
        extra={
          <Button
            type="primary"
            onClick={() => nav(`${PAGE_MEMBER}?${REDIRECT_URL}=${pathname}`)}
          >
            立即登录
          </Button>
        }
      >
        <Typography
          className="result-content"
          style={{
            background: 'var(--color-fill-2)',
            padding: 'var(--layout-padding)'
          }}
        >
          <Typography.Paragraph>获取完整功能</Typography.Paragraph>
          伴随互联网流量红利见顶，产品在拉新获客层花样迭出，希冀可以提高用户注册登录的概率。那么哪种登陆引导设计更为有效？如何设计才能让用户登录时减少反感情绪，提升使用体验？本文作者就登录引导设计的发展及相应策略做了总结，一起来看一下{' '}
        </Typography>
      </Result>
    </LoginModalWrapper>
  )
}

export default function LoginAuth(WrapperComponent: any) {
  const AuthWrapper = (props: IProps) => {
    if (checkLogin()) {
      return <WrapperComponent {...props} />
    } else {
      return <LoginWrapper />
    }
  }
  AuthWrapper.displayName = 'AuthWrapper'
  return AuthWrapper
}
