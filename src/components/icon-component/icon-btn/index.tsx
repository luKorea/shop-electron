import { forwardRef, memo } from 'react'
import { Button } from '@arco-design/web-react'
import { IconButtonWrapper } from './styled'
import { BaseButtonProps } from '@arco-design/web-react/es/Button/interface'

const IconButton = (props: BaseButtonProps, ref: any) => {
  const { icon } = props
  return (
    <IconButtonWrapper>
      <Button ref={ref} icon={icon} shape="circle" type="secondary" />
    </IconButtonWrapper>
  )
}

export default memo(forwardRef(IconButton))
