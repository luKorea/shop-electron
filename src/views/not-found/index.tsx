import { NotFoundWrapper } from './styled'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import IconNotFound from '@/assets/svg/icon-not-found'

interface IErrorType {
  code: string | number
  errorMessage: string
}
interface IProps {
  children?: ReactNode
  errorInfo?: IErrorType
}

const NotFoundPage: FC<IProps> = (props) => {
  const { errorInfo } = props
  const code = errorInfo?.code ?? 404
  const errorMessage =
    errorInfo?.errorMessage ?? 'Sorry, the page you visited does not exist.'
  const navigate = useNavigate()
  function goPage() {
    navigate('/')
  }
  return (
    <NotFoundWrapper>
      <div className="img">
        <IconNotFound />
      </div>
      <div className="error-code">{code}</div>
      <div className="error-message">{errorMessage}</div>
      <div className="error-btn" onClick={() => goPage()}>
        Back Home
      </div>
    </NotFoundWrapper>
  )
}

export default memo(NotFoundPage)
