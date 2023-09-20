import { Button } from '@arco-design/web-react'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  confirmText: string | number
  onClick: () => void
}

const ConfirmButton: FC<IProps> = (props) => {
  return (
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
  )
}

export default memo(ConfirmButton)
