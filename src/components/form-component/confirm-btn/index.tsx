import { Button, ButtonProps } from '@arco-design/web-react'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ConfirmButtonWrap } from './styled'

interface IProps extends ButtonProps {
  children?: ReactNode
  confirmText: string | number
  onClick: () => void
  icon?: ReactNode
  loading?: boolean
}

const ConfirmButton: FC<IProps> = (props) => {
  return (
    <ConfirmButtonWrap>
      <Button
        {...props}
        type="primary"
        shape="round"
        size="large"
        long
        className="confirm-btn"
        icon={props.icon}
        loading={props.loading}
        onClick={() => props.onClick()}
      >
        {props.confirmText}
      </Button>
    </ConfirmButtonWrap>
  )
}

export default memo(ConfirmButton)
