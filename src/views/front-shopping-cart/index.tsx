import LoginAuth from '@/components/login-auth'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const FrontShoppingCart: FC<IProps> = () => {
  return <div>FrontShoppingCart</div>
}

export default memo(LoginAuth(FrontShoppingCart))
