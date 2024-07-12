import LoginAuth from '@/components/login-auth'
import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import FrontSkeletonComponent from '@/base-ui/skeleton'
import { ShoppingCartWrapper } from './styled'
import NavBar from '@/components/business-component/nav-bar'

interface IProps {
  children?: ReactNode
}

const FrontShoppingCart: FC<IProps> = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return (
    <ShoppingCartWrapper>
      <NavBar renderLeft={() => '我的购物车'} />
      <FrontSkeletonComponent loading={loading}>
        我的购物车
      </FrontSkeletonComponent>
    </ShoppingCartWrapper>
  )
}

export default memo(LoginAuth(FrontShoppingCart))
