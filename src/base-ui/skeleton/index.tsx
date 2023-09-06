import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SkeletonWArapper } from './styled'
import classnames from 'classnames'

interface IProps {
  children?: ReactNode
  loading: boolean
  rows?: number
  animate?: boolean
  style?: any
  classNames?: string
}

const Skeleton: FC<IProps> = (props) => {
  const { loading, rows = 24, classNames = '', animate, style = {} } = props
  const [column, setColumn] = useState<number[]>([])
  const getClassName = classnames({
    'ant-skeleton-paragraph-row': true,
    'ant-skeleton-paragraph-animate animate': animate,
    'no-animate': !animate
  })

  function reduceRows(rows: number) {
    const item = new Array(Math.floor(window.innerHeight / rows)).fill(0)
    setColumn(item)
  }
  useEffect(() => {
    reduceRows(rows)
    return () => {
      setColumn([])
    }
  }, [rows])
  return (
    <>
      {loading && (
        <SkeletonWArapper className={classNames} style={{ ...style }}>
          {column.map((_, index) => (
            <div key={index} className={getClassName}></div>
          ))}
        </SkeletonWArapper>
      )}
    </>
  )
}

export default memo(Skeleton)
