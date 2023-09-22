import { Button } from '@arco-design/web-react'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ConfirmButtonWrap } from './styled'

interface IProps {
  children?: ReactNode
  confirmText: string | number
  onClick: () => void
}

const ConfirmButton: FC<IProps> = (props) => {
  return (
    <ConfirmButtonWrap>
      <Button
        type="primary"
        shape="round"
        size="large"
        long
        className="confirm-btn"
        onClick={() => props.onClick()}
      >
        {props.confirmText}
      </Button>
    </ConfirmButtonWrap>
  )
}

export default memo(ConfirmButton)
