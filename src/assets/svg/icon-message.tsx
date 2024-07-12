import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styleStrToObject from './utils'

interface IProps {
  children?: ReactNode
  width?: number
  height?: number
}
const IconMessage: FC<IProps> = (props) => {
  const { width = 12, height = 12 } = props
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={styleStrToObject(
        `height: ${height}px; width: ${width}px; display: block;`
      )}
    >
      <path
        d="M 289.419 373.961 c -144.786 0 -262.022 117.358 -262.022 262.022 c 0 85.4395 40.8993 161.413 104.251 209.23 c -17.1122 40.7779 -51.5792 84.7114 -58.6183 87.0173 c -11.4081 3.76225 68.4487 -13.3499 134.47 -47.3315 c 25.729 8.49541 53.2784 13.1072 81.92 13.1072 c 144.786 0 262.022 -117.358 262.022 -262.022 s -117.236 -262.022 -262.022 -262.022 Z"
        fill="#b0c2f4"
      ></path>
      <path
        d="M 394.154 619.963 c 0 -32.8894 -26.5785 -59.4678 -59.4678 -59.4678 c -18.0831 0 -34.3457 8.13132 -45.2684 20.8745 c -10.9227 -12.7431 -27.1853 -20.8745 -45.2684 -20.8745 c -32.8894 0 -59.4678 26.5785 -59.4678 59.4678 c 0 17.2336 7.88859 31.6757 19.054 43.6907 l 85.925 82.5268 l 84.4686 -81.6773 c 10.6799 -11.1654 20.0249 -26.8212 20.0249 -44.5403 Z"
        fill="#fc90a2"
      ></path>
      <path
        d="M 737.545 73.087 c 144.786 0 262.022 117.358 262.022 262.022 c 0 85.4395 -40.8993 161.413 -104.251 209.23 c 17.1122 40.7779 51.5792 84.7114 58.6183 87.0173 c 11.4081 3.76225 -68.4487 -13.3499 -134.47 -47.3315 c -25.729 8.49541 -53.2784 13.1072 -81.92 13.1072 c -144.786 0 -262.022 -117.358 -262.022 -262.022 s 117.236 -262.022 262.022 -262.022 Z"
        fill="#ffc0dd"
      ></path>
      <path
        d="M 632.808 319.09 c 0 -32.8894 26.5785 -59.4678 59.4678 -59.4678 c 18.0831 0 34.3457 8.13132 45.2684 20.8745 c 10.9227 -12.7431 27.1853 -20.8745 45.2684 -20.8745 c 32.8894 0 59.4678 26.5785 59.4678 59.4678 c 0 17.2336 -7.88859 31.6757 -19.054 43.6907 l -85.925 82.5268 l -84.4686 -81.6773 c -10.6799 -11.1654 -20.0249 -26.8212 -20.0249 -44.5403 Z"
        fill="#d85968"
      ></path>
    </svg>
  )
}

export default memo(IconMessage)
