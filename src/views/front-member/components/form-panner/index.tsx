import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { FormWrapper } from './styled'
import { Form, Input } from '@arco-design/web-react'
import { IFormItem } from '@/types/form-item'
import { IconLock, IconSafe, IconUser } from '@arco-design/web-react/icon'

import ConfirmButton from '@/components/form-component/confirm-btn'
import { regExpPhone } from '@/utils/reg'
import VerificationCode from '@/components/form-component/verification-code'
import { ILoginParams } from '@/types/module/user'

const FormItem = Form.Item

interface IProps {
  children?: ReactNode
  isRegister: boolean
  pageText: string
  getFromData: (data: ILoginParams) => void
  loading: boolean
}

const FormPanner: FC<IProps> = (props) => {
  const [form] = Form.useForm()
  const formItemLayout = {
    wrapperCol: {
      span: 24
    }
  }
  const [formData] = useState<ILoginParams>({
    phone: '13417072049',
    password: '123456'
  })
  const [formList] = useState<Partial<IFormItem>[]>([
    {
      field: 'phone',
      label: '手机号码',
      type: 'input',
      placeholder: '请输入手机号码',
      rules: [
        {
          required: true,
          message: '请输入手机号码'
        },
        {
          validator(value, callback) {
            if (!regExpPhone.test(value)) callback('请输入正确的手机号码')
          }
        }
      ],
      size: 'large',
      allowClear: true,
      prefix: <IconUser />
    },
    {
      field: 'password',
      label: '密码',
      type: 'password',
      placeholder: '请输入密码',
      rules: [{ required: true, message: '请输入密码' }],
      size: 'large',
      allowClear: true,
      prefix: <IconLock />
    },
    {
      field: 're_password',
      dependencies: ['password'],
      label: '确认密码',
      type: 'confirm-password',
      placeholder: '请输入确认密码',
      rules: [
        { required: true, message: '请输入确认密码' },
        {
          validator: (v, cb) => {
            if (!v) {
              return cb('请输入确认密码')
            } else if (form.getFieldValue('password') !== v) {
              return cb('请确保两次密码输入一致')
            }
            cb(null)
          }
        }
      ],
      size: 'large',
      allowClear: true,
      prefix: <IconLock />
    },
    {
      field: 'sms_code',
      label: '验证码',
      type: 'verification-code',
      placeholder: '请输入验证码',
      rules: [{ required: true, message: '请输入验证码' }],
      size: 'large',
      allowClear: true,
      prefix: <IconSafe />
    },
    {
      type: 'button'
    }
  ])

  function handleGetCode(value: string) {
    form.setFieldValue('sms_code', value)
  }

  // 渲染表单
  function renderFormItem() {
    function getItem(item: Partial<IFormItem>) {
      if (item.type === 'input') {
        return <Input {...item} />
      } else if (item.type === 'password') {
        return <Input.Password {...item} />
      } else if (item.type === 'confirm-password' && props.isRegister) {
        return <Input.Password {...item} />
      } else if (item.type === 'verification-code' && props.isRegister) {
        return (
          <VerificationCode
            item={item}
            getValue={(value) => handleGetCode(value)}
          />
        )
      } else if (item.type === 'button') {
        return (
          <ConfirmButton
            onClick={() => handleSendData()}
            confirmText={`立即${props.pageText}`}
            loading={props.loading}
          ></ConfirmButton>
        )
      }
    }
    return formList.map((item: Partial<IFormItem>, index) => (
      <FormItem
        key={index}
        field={item.field}
        rules={item.rules}
        dependencies={item.dependencies}
      >
        {getItem(item)}
      </FormItem>
    ))
  }

  // 将数据传给父组件
  async function handleSendData() {
    try {
      const res = await form.validate()
      props.getFromData && props.getFromData(res)
    } catch (_) {
      console.log('出错啦')
    }
  }
  return (
    <FormWrapper>
      <Form
        form={form}
        autoComplete="off"
        scrollToFirstError
        {...formItemLayout}
        disabled={props.loading}
        initialValues={formData}
      >
        {renderFormItem()}
      </Form>
    </FormWrapper>
  )
}

export default memo(FormPanner)
