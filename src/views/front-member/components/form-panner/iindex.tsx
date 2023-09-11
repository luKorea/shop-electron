import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FormWrapper } from './styled'

interface IProps {
  children?: ReactNode
  isRegister: boolean
}

const FormPanner: FC<IProps> = () => {
  return <FormWrapper>FormPanner</FormWrapper>
}

export default memo(FormPanner)
