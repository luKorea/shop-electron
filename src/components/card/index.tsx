import { Card, CardProps } from '@arco-design/web-react'
import classNames from 'classnames'
import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CardWrapper } from './styled'

interface IProps extends CardProps {
  children?: ReactNode
  shadow?: boolean
  extraClassName?: string
}

const FrontCardComponent: FC<IProps> = (props) => {
  const { children, shadow = true, extraClassName } = props
  return (
    <CardWrapper>
      <Card
        className={classNames(extraClassName, 'card', {
          'card-shadow': shadow
        })}
        bordered={false}
        {...props}
      >
        {children}
      </Card>
    </CardWrapper>
  )
}

export default memo(FrontCardComponent)
