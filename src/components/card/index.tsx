import { Card, CardProps } from '@arco-design/web-react'
import classNames from 'classnames'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps extends CardProps {
  children?: ReactNode
  shadow?: boolean
  className?: string
}

const FrontCardComponent: FC<IProps> = (props) => {
  const { children, shadow = true, className } = props
  return (
    <Card
      className={classNames({
        'card-shadow': shadow,
        card: true,
        className
      })}
      bordered={false}
      {...props}
    >
      {children}
    </Card>
  )
}

export default memo(FrontCardComponent)
