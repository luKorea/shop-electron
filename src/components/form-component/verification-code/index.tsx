import { useCountDown } from '@/hooks/use-count'
import { Input } from '@arco-design/web-react'
import classNames from 'classnames'
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { VerificationCodeWrapper } from './styled'

interface IProps {
  children?: ReactNode
  item: any
  initText?: string
  loadText?: string
  getValue: (value: string) => void
}

const VerificationCodeComponent: FC<IProps> = (props) => {
  const { item, initText = '获取验证码', loadText = '秒后获取' } = props
  const [sendDisable, setSendDisable] = useState(true)
  const [value, setValue] = useState('')
  // 倒计时 hooks
  const { start, count, clear } = useCountDown(60, () => setSendDisable(true))

  // 获取验证码
  function handleSendCode() {
    setSendDisable(false)
    start()
  }
  function handleChangeValue(value: string) {
    setValue(value)
    props.getValue && props.getValue(value)
  }
  useEffect(() => {
    clear()
  }, [])
  return (
    <VerificationCodeWrapper>
      <Input
        {...item}
        value={value}
        onChange={(value) => handleChangeValue(value)}
        addAfter={
          <span
            onClick={() => sendDisable && handleSendCode()}
            className={classNames({
              text: !sendDisable
            })}
          >
            {sendDisable ? initText : `${count} ${loadText}`}
          </span>
        }
      />
    </VerificationCodeWrapper>
  )
}

export default memo(VerificationCodeComponent)
