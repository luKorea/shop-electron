import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MoreIconWrapper } from './styled'
import { Button, Dropdown, Menu } from '@arco-design/web-react'
import IconMore from '@/assets/svg/icon-more'

interface IProps {
  children?: ReactNode
}

const MoreIconComponent: FC<IProps> = () => {
  return (
    <MoreIconWrapper>
      <Dropdown
        droplist={
          <Menu>
            <Menu.Item key="1">Beijing</Menu.Item>
            <Menu.Item key="2">Shanghai</Menu.Item>
          </Menu>
        }
        position={'bottom'}
      >
        <Button
          style={{ width: '20px' }}
          type={'text'}
          icon={<IconMore width={16} height={16} />}
        ></Button>
      </Dropdown>
    </MoreIconWrapper>
  )
}

export default memo(MoreIconComponent)
