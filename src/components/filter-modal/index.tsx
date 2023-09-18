import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FilterModalWrapper } from './styled'

interface IProps {
  children?: ReactNode
  visible: boolean
}

const FilterModalComponent: FC<IProps> = (props) => {
  return (
    <>
      {props.visible && (
        <FilterModalWrapper>FilterModalWrapper</FilterModalWrapper>
      )}
    </>
  )
}
export default memo(FilterModalComponent)
