import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DrawerModalWrapper } from './styled'
import { Drawer, DrawerProps } from '@arco-design/web-react'

interface IProps extends DrawerProps {
  children?: ReactNode
}

const DrawerModalComponent: FC<IProps> = (props) => {
  const {
    visible,
    children,
    placement = 'bottom',
    closable = false,
    footer,
    height = 'auto',
    unmountOnExit = true
  } = props
  return (
    <DrawerModalWrapper>
      <Drawer
        closable={closable}
        visible={visible}
        placement={placement}
        footer={footer}
        height={height}
        unmountOnExit={unmountOnExit}
        {...props}
      >
        {children}
      </Drawer>
    </DrawerModalWrapper>
  )
}

export default memo(DrawerModalComponent)
