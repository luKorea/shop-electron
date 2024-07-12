import useGetSearchParams from '@/hooks/use-get-search-params'
import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Index: FC<IProps> = () => {
  const { type } = useGetSearchParams('type')
  const { state } = useLocation()

  useEffect(() => {
    console.log(type, state)
  }, [])
  return <div>Index</div>
}

export default memo(Index)
