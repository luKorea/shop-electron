import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { GridWrapper } from './styled'

interface IProps {
  children?: ReactNode
  gridList: any[]
}

const HomeGrid: FC<IProps> = (props) => {
  const { gridList = [] } = props
  return (
    <GridWrapper>
      {gridList.map((item) => (
        <div className="item" key={item.id}>
          {item.icon}
          <div className="title">{item.title}</div>
        </div>
      ))}
    </GridWrapper>
  )
}

export default memo(HomeGrid)
