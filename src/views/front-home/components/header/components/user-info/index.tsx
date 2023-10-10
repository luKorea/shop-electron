import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserInfoWrapper } from './styled'
import { imageUrl } from '@/config/image'

interface IProps {
  children?: ReactNode
}

const UserInfoComponent: FC<IProps> = () => {
  return (
    <UserInfoWrapper>
      <img className="logo-gif" src={imageUrl.buyImage} alt="" />
    </UserInfoWrapper>
  )
}

export default memo(UserInfoComponent)
