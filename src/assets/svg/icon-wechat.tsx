import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import styleStrToObj from './utils'

interface IProps {
  children?: ReactNode
  width?: number
  height?: number
}

const IconWechatPay: FC<Partial<IProps>> = (props) => {
  const { width = 12, height = 12 } = props
  return (
    <svg
      className="icon"
      viewBox="0 0 1144 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={styleStrToObj(
        `height: ${height}px; width: ${width}px; display: block; fill: currentcolor;`
      )}
    >
      <path
        d="M436.314353 632.771765c-68.517647 36.321882-78.667294-20.389647-78.667294-20.389647l-85.835294-190.524236c-33.039059-90.533647 28.581647-40.839529 28.581647-40.839529s52.856471 38.038588 93.003294 61.229176c40.086588 23.190588 85.835294 6.806588 85.835294 6.806589l561.212235-246.362353C936.899765 80.112941 765.891765 0 572.235294 0 256.180706 0 0 213.232941 0 476.310588c0 151.311059 84.811294 285.967059 216.937412 373.248l-23.792941 130.288941s-11.625412 38.038588 28.611764 20.389647c27.437176-12.047059 97.370353-55.115294 138.992941-81.347764 65.445647 21.684706 136.734118 33.731765 211.486118 33.731764 316.024471 0 572.235294-213.232941 572.235294-476.310588 0-76.197647-21.594353-148.178824-59.843764-212.028235-178.808471 102.309647-594.733176 340.118588-648.312471 368.489412z"
        fill="#43C93E"
      ></path>
    </svg>
  )
}

export default memo(IconWechatPay)
