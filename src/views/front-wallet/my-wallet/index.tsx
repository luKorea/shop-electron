import LoginAuth from '@/components/login-auth'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const FrontWallet: FC<IProps> = () => {
  return <div>FrontWallet</div>
}

export default memo(LoginAuth(FrontWallet))
