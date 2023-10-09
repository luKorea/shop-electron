import { Skeleton } from '@arco-design/web-react'
import React from 'react'
const loadingNode = (rows = 1) => {
  return (
    <Skeleton
      text={{
        rows,
        width: new Array(rows).fill('100%')
      }}
      animation
    />
  )
}

export default loadingNode
