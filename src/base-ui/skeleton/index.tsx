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
  const {
    loading,
    rows = 18,
    classNames = '',
    animate = true,
    style = {}
  } = props
  const [column, setColumn] = useState<number[]>([])
  const getClassName = classnames({
    'ant-skeleton-paragraph-row': true,
    'ant-skeleton-paragraph-animate animate': animate,
    'no-animate': !animate
  })

  function reduceRows(rows: number) {
    // 暂时减去 6行, 暂时完整
    // const item = new Array(Math.floor(window.innerHeight / rows - 20)).fill(0)
    const item = new Array(rows).fill(0)
    setColumn(item)
  }
  useEffect(() => {
    reduceRows(rows)
    return () => {
      setColumn([])
    }
  }, [rows])

  function renderSkeletonRow() {
    return (
      <div className="row-wrap">
        {column.map((_, index) => (
          <div key={index} className={getClassName}></div>
        ))}
      </div>
    )
  }
  return (
    <SkeletonWArapper className={classNames} style={{ ...style }}>
      {loading ? renderSkeletonRow() : props.children}
    </SkeletonWArapper>
  )
}

export default memo(Skeleton)
