import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { FormWrapper } from './styled'
import { Button, Form, Input } from '@arco-design/web-react'
import { IFormItem } from '@/types/form-item'
import { IconLock, IconSafe, IconUser } from '@arco-design/web-react/icon'
import classNames from 'classnames'
import { useCountDown } from '@/hooks/use-count'

import { FormInstance } from '@arco-design/web-react/es/Form'
import { getUniqueKey } from '@/utils/util'
import { TKeyOfValue } from '@/types/constant'
import ConfirmButton from '@/components/confirm-btn'

const FormItem = Form.Item

interface IProps {
  children?: ReactNode
  isRegister: boolean
  pageText: string
  getFromData: (data: TKeyOfValue) => void
}

const FormPanner: FC<IProps> = (props) => {
  const formRef = useRef<FormInstance>(null)
  const [formField] = useState<TKeyOfValue>({
    username: '',
    password: '',
    code: ''
  })
  const formItemLayout = {
    wrapperCol: {
      span: 24
    }
  }
  const [formList] = useState<Partial<IFormItem>[]>([
    {
      field: 'username',
      label: '用户名',
      type: 'input',
      placeholder: '请输入用户名',
      rules: [{ required: true }],
      size: 'large',
      allowClear: true,
      prefix: <IconUser />
    },
    {
      field: 'password',
      label: '密码',
      type: 'password',
      placeholder: '请输入密码',
      rules: [{ required: true }],
      size: 'large',
      allowClear: true,
      prefix: <IconLock />
    },
    {
      field: 'code',
      label: '验证码',
      type: 'verification-code',
      placeholder: '请输入验证码',
      rules: [{ required: true }],
      size: 'large',
      allowClear: true,
      prefix: <IconSafe />
    },
    {
      type: 'button',
      btnType: {
        shape: 'round',
        type: 'primary',
        long: true,
        size: 'large'
      }
    }
  ])
  const [sendDisable, setSendDisable] = useState(true)
  // 倒计时 hooks
  const { start, count, clear } = useCountDown(60, () => setSendDisable(true))

  // 渲染表单
  function renderFormItem() {
    return formList.map((item) => (
      <FormItem
        key={item.field}
        field={item.field}
        rules={[{ required: true }]}
      >
        {item.type === 'input' && <Input {...item} />}
        {item.type === 'verification-code' &&
          props.isRegister &&
          renderVerificationCode(item)}
        {item.type === 'password' && <Input.Password {...item} />}
      </FormItem>
    ))
  }

  // 获取验证码
  function handleSendCode() {
    setSendDisable(false)
    start()
  }

  // 渲染获取验证码组件
  function renderVerificationCode(item: any) {
    return (
      <Input
        {...item}
        addAfter={
          <span
            onClick={() => sendDisable && handleSendCode()}
            className={classNames({
              text: !sendDisable
            })}
          >
            {sendDisable ? '获取验证码' : `${count}秒后获取`}
          </span>
        }
      />
    )
  }

  // 将数据传给父组件
  async function handleSendData() {
    if (formRef.current) {
      try {
        const res = await formRef.current.validate()
        props.getFromData && props.getFromData(res)
      } catch (_) {
        console.log('出错啦')
      }
    }
  }

  // 手动配置form-item
  function renderFormItemToHandle() {
    return (
      <>
        <FormItem
          field={getUniqueKey(formField, 'username')}
          rules={[{ required: true }]}
        >
          <Input
            allowClear
            size="large"
            placeholder="请输入用户名"
            prefix={<IconUser />}
          />
        </FormItem>
        <FormItem
          field={getUniqueKey(formField, 'password')}
          rules={[{ required: true }]}
        >
          <Input.Password
            allowClear
            size="large"
            placeholder="请输入密码"
            prefix={<IconLock />}
          />
        </FormItem>
        {props.isRegister && (
          <FormItem
            field={getUniqueKey(formField, 'code')}
            rules={[{ required: true }]}
          >
            <Input
              allowClear
              size="large"
              placeholder="请输入验证码"
              prefix={<IconSafe />}
              addAfter={
                <span
                  onClick={() => sendDisable && handleSendCode()}
                  className={classNames({
                    text: !sendDisable
                  })}
                >
                  {sendDisable ? '获取验证码' : `${count}秒后获取`}
                </span>
              }
            />
          </FormItem>
        )}
        <FormItem>
          <ConfirmButton
            onClick={() => handleSendData()}
            confirmText={`立即${props.pageText}`}
          ></ConfirmButton>
        </FormItem>
      </>
    )
  }
  useEffect(() => {
    setSendDisable(true)
    clear()
  }, [props.isRegister])
  return (
    <FormWrapper>
      <Form
        ref={formRef}
        autoComplete="off"
        scrollToFirstError
        {...formItemLayout}
      >
        {/* {renderFormItem()} */}
        {renderFormItemToHandle()}
      </Form>
    </FormWrapper>
  )
}

export default memo(FormPanner)
