import { useCountDown } from '@/hooks/use-count'
import { Input } from '@arco-design/web-react'
import classNames from 'classnames'
import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { VerificationCodeWrapper } from './styled'
import { ILoginParams } from '@/types/module/user'
import { useMessageTip } from '@/utils/tip'
import { useAppDispatch } from '@/hooks'
import { fetchVerificationCodeAction } from '@/store/module/user'

interface IProps {
  children?: ReactNode
  formData: ILoginParams
  item: any
  initText?: string
  loadText?: string
  getValue: (value: string) => void
}

const VerificationCodeComponent: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const {
    item,
    initText = '获取验证码',
    loadText = '秒后获取',
    formData
  } = props
  const [sendDisable, setSendDisable] = useState(true)
  const [value, setValue] = useState('')
  // 倒计时 hooks
  const { start, count, clear } = useCountDown(60, () => setSendDisable(true))

  // 获取验证码
  async function handleSendCode() {
    try {
      if (formData.phone) {
        const res = await dispatch(fetchVerificationCodeAction(formData.phone))
        if (res.meta.requestStatus === 'fulfilled') {
          setSendDisable(false)
          start()
        }
      } else {
        useMessageTip('warning', '请输入手机号码')
      }
    } catch (error) {
      console.log(error, '----------')
    }
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
