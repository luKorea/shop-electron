import LoginAuth from '@/components/login-auth'
import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import FrontSkeletonComponent from '@/base-ui/skeleton'
import NavBar from '@/components/business-component/nav-bar'
import { OrderWrapper } from './styled'

interface IProps {
  children?: ReactNode
}

const FrontOrder: FC<IProps> = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return (
    <OrderWrapper>
      <NavBar renderLeft={() => '我的订单'} />
      <FrontSkeletonComponent loading={loading}>
        <div>FrontShoppingCart</div>
      </FrontSkeletonComponent>
    </OrderWrapper>
  )
}
export default memo(LoginAuth(FrontOrder))
