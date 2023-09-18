import LoginAuth from '@/components/login-auth'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const FrontOrder: FC<IProps> = () => {
  return <div>FrontOrder</div>
}

export default memo(LoginAuth(FrontOrder))
