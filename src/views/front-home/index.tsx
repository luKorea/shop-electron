import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from './styled'
import Skeleton from '@/base-ui/skeleton'

import HomeHeader from './components/header'
import HomeBanner from './components/banner'

interface IProps {
  children?: ReactNode
}

const FrontHomePage: FC<IProps> = () => {
  const [loading, setLoading] = useState(true)

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
        <HomeWrapper>
          <HomeHeader />
          <HomeBanner />
        </HomeWrapper>
      )}
    </>
  )
}

export default memo(FrontHomePage)
