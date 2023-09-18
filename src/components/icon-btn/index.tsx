import React, { ReactNode, forwardRef, memo } from 'react'
import { Button } from '@arco-design/web-react'
import { IconButtonWrapper } from './styled'

interface IProps {
  children?: ReactNode
  icon: ReactNode
  className: string
  rest?: any
}
const IconButton = (props: IProps, ref: any) => {
  const { icon, className, rest } = props
  return (
    <IconButtonWrapper>
      <Button
        ref={ref}
        icon={icon}
        shape="circle"
        type="secondary"
        className={className}
        {...rest}
      />
    </IconButtonWrapper>
  )
}

export default memo(forwardRef(IconButton))
