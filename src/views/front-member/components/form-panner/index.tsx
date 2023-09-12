import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { FormWrapper } from './styled'
import { Button, Form, Input } from '@arco-design/web-react'
import { IFormItem } from '@/types/form-item'
import { IconLock, IconUser } from '@arco-design/web-react/icon'

const FormItem = Form.Item

interface IProps {
  children?: ReactNode
  isRegister: boolean
}

const FormPanner: FC<IProps> = () => {
  const formRef = useRef()
  const formItemLayout = {
    wrapperCol: {
      span: 24
    }
  }
  const [formList] = useState<IFormItem[]>([
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
    }
  ])

  function renderFormItem() {
    return formList.map((item) => (
      <FormItem key={item.field} field={item.field} rules={item.rules}>
        {item.type === 'input' && <Input {...item} />}
        {item.type === 'password' && <Input.Password {...item} />}
      </FormItem>
    ))
  }

  function handleChangeValue(e: any) {
    console.log(e)
  }
  return (
    <FormWrapper>
      <Form
        ref={formRef.current}
        autoComplete="off"
        onValuesChange={handleChangeValue}
        scrollToFirstError
        {...formItemLayout}
      >
        {renderFormItem()}
      </Form>
    </FormWrapper>
  )
}

export default memo(FormPanner)
