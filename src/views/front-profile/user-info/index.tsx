import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { IFormItem } from '@/types/form-item'
import { UserInfoWrapper } from './styled'
import { Input, Form, Select, DatePicker } from '@arco-design/web-react'

import {
  IconEmail,
  IconPhone,
  IconUser,
  IconUserGroup
} from '@arco-design/web-react/icon'
import ConfirmBtn from '@/components/confirm-btn'
import NavBar from '@/components/nav-bar'

interface IProps {
  children?: ReactNode
}

interface IUserInfo {
  username: string
  email: string
  gender: number
  birthday: string
  phone: number
}

const UserInfoComponent: FC<IProps> = () => {
  const [form] = Form.useForm()
  const formItemLayout = {
    wrapperCol: {
      span: 24
    }
  }
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    username: 'korea',
    email: 'korealu@foxmail.com',
    gender: 1,
    birthday: '2023-09-22',
    phone: 18819794599
  })
  const [fieldList] = useState<Partial<IFormItem>[]>([
    {
      field: 'username',
      type: 'input',
      suffix: <IconUser />,
      placeholder: '请输入姓名'
    },
    {
      field: 'email',
      type: 'input',
      suffix: <IconEmail />,
      placeholder: '请输入邮箱'
    },
    {
      field: 'phone',
      type: 'input',
      suffix: <IconPhone />,
      placeholder: '请输入手机号码'
    },
    {
      field: 'birthday',
      type: 'date-picker',
      placeholder: '请选择日期'
    },
    {
      field: 'gender',
      type: 'select',
      placeholder: '请选择性别',
      suffix: <IconUserGroup />,
      selectOptions: [
        {
          label: '男',
          value: 1
        },
        {
          label: '女',
          value: 2
        }
      ]
    },
    {
      type: 'button'
    }
  ])

  function changeUserInfo() {
    const res: any = form.getFields()
    setUserInfo(res)
  }
  function renderFormItem() {
    function getItem(item: Partial<IFormItem>) {
      if (item.type === 'input') {
        return <Input {...item} allowClear />
      } else if (item.type === 'date-picker') {
        return <DatePicker style={{ width: '100%' }} {...item} allowClear />
      } else if (item.type === 'select') {
        return (
          <Select
            allowClear
            placeholder={item.placeholder}
            suffixIcon={item.suffix}
            options={item.selectOptions}
          ></Select>
        )
      } else if (item.type === 'button') {
        return (
          <ConfirmBtn
            confirmText={'确认'}
            onClick={() => changeUserInfo()}
          ></ConfirmBtn>
        )
      }
    }
    return fieldList.map((item) => (
      <Form.Item key={item.field} field={item.field}>
        {getItem(item)}
      </Form.Item>
    ))
  }
  return (
    <UserInfoWrapper>
      <NavBar renderCenter={() => '编辑个人信息'} />
      <Form
        className="form-wrapper"
        autoComplete="off"
        form={form}
        scrollToFirstError
        {...formItemLayout}
        initialValues={{ ...userInfo }}
      >
        {renderFormItem()}
      </Form>
    </UserInfoWrapper>
  )
}

export default memo(UserInfoComponent)
