import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from './styled'
import { Button } from '@arco-design/web-react'

// import FrontBackTop from '@/components/back-top'
import Skeleton from '@/base-ui/skeleton'

import HomeHeader from './components/header'
import HomeBanner from './components/banner'
import LoginModal from '@/components/tip-modal'
import { useGetLocationName } from '@/utils/util'

interface IProps {
  children?: ReactNode
}

const FrontHomePage: FC<IProps> = () => {
  const [loading, setLoading] = useState(true)
  const [pageId] = useState('home-wrapper')
  const { pathname } = useGetLocationName()
  const loginModalRef = useRef<any>(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [loading])

  function handleShowLoginModal() {
    if (loginModalRef.current) {
      loginModalRef.current.setVisible(true)
    }
  }
  return (
    <>
      {loading ? (
        <Skeleton loading={loading} />
      ) : (
        <HomeWrapper id={pageId}>
          <HomeHeader />
          <HomeBanner />
          <Button onClick={() => handleShowLoginModal()}>登录</Button>
          <LoginModal pathname={pathname} ref={loginModalRef} />
        </HomeWrapper>
      )}
    </>
  )
}

export default memo(FrontHomePage)
