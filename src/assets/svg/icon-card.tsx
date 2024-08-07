import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styleStrToObj from './utils'

interface IProps {
  children?: ReactNode
  width?: number
  height?: number
}

const IconCard: FC<IProps> = (props) => {
  const { width = 12, height = 12 } = props
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      xmlSpace="preserve"
      style={styleStrToObj(
        `height: ${height}px; width: ${width}px; display: block;`
      )}
    >
      <g>
        <path
          className="secondary-color"
          d="M350.6,481.6l57.8-57.8l57.8,57.8H350.6z M481.8,68h-77.3v22.5h77.3V68z"
        ></path>
        <path
          className="secondary-color"
          d="M481.8,44.3h-77.3V22.8h77.3V44.3z"
        ></path>
      </g>
      <path
        fill="#000000"
        d="M79.4,461.3c0,4.4-3.6,8-8,8H55.6v15.8c0,4.4-3.6,8-8,8s-8-3.6-8-8v-15.8H23.9c-4.4,0-8-3.6-8-8s3.6-8,8-8
	h15.8v-15.8c0-4.4,3.6-8,8-8s8,3.6,8,8v15.8h15.8C75.8,453.3,79.4,456.9,79.4,461.3z M354.2,59.4h-3.9v-3.9c0-4.4-3.6-8-8-8
	s-8,3.6-8,8v3.9h-3.9c-4.4,0-8,3.6-8,8s3.6,8,8,8h3.9v3.9c0,4.4,3.6,8,8,8s8-3.6,8-8v-3.9h3.9c4.4,0,8-3.6,8-8
	S358.6,59.4,354.2,59.4z M185.8,75c-5.9,0-10.8,4.8-10.8,10.8c0,5.9,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8
	C196.5,79.8,191.7,75,185.8,75z M59.5,43.7c-14.6,0-26.4,11.8-26.4,26.4c0,4.4,3.6,8,8,8s8-3.6,8-8c0-5.7,4.7-10.4,10.4-10.4
	s10.4,4.7,10.4,10.4c0,4.4,3.6,8,8,8s8-3.6,8-8C85.9,55.6,74.1,43.7,59.5,43.7z M299.2,460.1c-5.9,0-10.8,4.8-10.8,10.8
	c0,5.9,4.8,10.8,10.8,10.8s10.8-4.8,10.8-10.8C310,464.9,305.1,460.1,299.2,460.1z"
      ></path>
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="257.4509"
        y1="404.73"
        x2="253.9221"
        y2="158.8951"
        className="gradient-element"
      >
        <stop offset="0" className="primary-color-gradient"></stop>
        <stop offset="1" className="secondary-color-gradient"></stop>
      </linearGradient>
      <path
        fill="url(#SVGID_1_)"
        d="M461,209H331.5v194.2H310v-64.7H51.3v-21.6H310V209H47.6v-32.4c0-5.9,4.9-10.8,10.8-10.8H461V209z"
      ></path>
      <path
        d="M382.7,187.5V201h13.6c4.4,0,8,3.6,8,8s-3.6,8-8,8h-21.6c-4.4,0-8-3.6-8-8v-21.6c0-4.4,3.6-8,8-8S382.7,183,382.7,187.5z
	 M417.9,179.5c-4.4,0-8,3.6-8,8V209c0,4.4,3.6,8,8,8H461c4.4,0,8-3.6,8-8v-54c0-22.3-18.1-40.4-40.4-40.4H83.3
	c-22.3,0-40.4,18.1-40.4,40.4v215.8c0,22.3,18.1,40.4,40.4,40.4h345.3c22.3,0,40.4-18.1,40.4-40.4V230.6c0-4.4-3.6-8-8-8s-8,3.6-8,8
	v140.3c0,13.4-10.9,24.4-24.4,24.4H83.3c-13.4,0-24.4-10.9-24.4-24.4V155.1c0-13.4,10.9-24.4,24.4-24.4h345.3
	c13.4,0,24.4,10.9,24.4,24.4v46h-27.2v-13.6C425.9,183,422.3,179.5,417.9,179.5z M331.5,179.5c-4.4,0-8,3.6-8,8V209c0,4.4,3.6,8,8,8
	h21.6c4.4,0,8-3.6,8-8s-3.6-8-8-8h-13.6v-13.6C339.5,183,336,179.5,331.5,179.5z M72.5,201c-4.4,0-8,3.6-8,8s3.6,8,8,8H310
	c4.4,0,8-3.6,8-8s-3.6-8-8-8H72.5z"
      ></path>
    </svg>
  )
}

export default memo(IconCard)
