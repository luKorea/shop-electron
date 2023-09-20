import Skeleton from '@/base-ui/skeleton'
import React from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  loading: boolean
}

export default function PageLoading(WrapperComponent: any) {
  const PageLoginComponent = (props: IProps) => {
    if (!props.loading) {
      return <WrapperComponent {...props} />
    } else {
      return <Skeleton loading={props.loading} />
    }
  }
  PageLoginComponent.displayName = 'PageLoginComponent'
  return PageLoginComponent
}
