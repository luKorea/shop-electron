import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import styleStrToObj from './utils'

interface IProps {
  children?: ReactNode
  width: number
  height: number
}

const IconMore: FC<Partial<IProps>> = (props) => {
  const { width = 12, height = 12 } = props
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={styleStrToObj(
        `height: ${height}px; width: ${width}px; display: block; fill: currentcolor;`
      )}
    >
      <path
        d="M511.817 28.607c-266.75 0-482.997 216.246-482.997 482.996s216.246 482.996 482.997 482.996 482.996-216.246 482.996-482.996S778.566 28.607 511.817 28.607z m0 898.202c-229.313 0-415.208-185.893-415.208-415.207S282.504 96.395 511.817 96.395 927.024 282.29 927.024 511.603 741.13 926.809 511.817 926.809z"
        fill="#212121"
      ></path>
      <path
        d="M452.502 503.129a66.245 66.245 0 1 0 135.578 0 66.245 66.245 0 1 0-135.578 0zM249.135 503.129a66.245 66.245 0 1 0 135.578 0 66.245 66.245 0 1 0-135.578 0zM655.868 503.129a66.245 66.245 0 1 0 135.579 0 66.245 66.245 0 1 0-135.578 0z"
        fill="#212121"
      ></path>
    </svg>
  )
}

export default memo(IconMore)
