import { Button, ButtonProps } from '@arco-design/web-react'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ConfirmButtonWrap } from './styled'
import classNames from 'classnames'

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
        className={classNames('confirm-btn', props.className)}
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
