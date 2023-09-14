import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from './styled'
import { Button } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'

// import FrontBackTop from '@/components/back-top'
import Skeleton from '@/base-ui/skeleton'

import HomeHeader from './components/header'
import HomeBanner from './components/banner'
import { PAGE_MEMBER } from '@/router/constant'

interface IProps {
  children?: ReactNode
}

const FrontHomePage: FC<IProps> = () => {
  const [loading, setLoading] = useState(true)
  const [pageId] = useState('home-wrapper')
  const nav = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [loading])
  return (
    <>
      {loading ? (
        <Skeleton loading={loading} />
      ) : (
        <HomeWrapper id={pageId}>
          <HomeHeader />
          <HomeBanner />
          <Button onClick={() => nav(PAGE_MEMBER)}>登录</Button>
        </HomeWrapper>
      )}
    </>
  )
}

export default memo(FrontHomePage)
