import React, { memo, useEffect, useState } from 'react'
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
import ConfirmBtn from '@/components/form-component/confirm-btn'
import NavBar from '@/components/business-component/nav-bar'
import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/hooks'
import { fetchUserInfoAction } from '@/store/module/user'
import FrontSkeleton from '@/base-ui/skeleton'

interface IProps {
  children?: ReactNode
}

const UserInfoComponent: FC<IProps> = () => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true)
  const { userInfo } = useAppSelector(
    (state) => ({
      userInfo: state.userReducer.userInfo
    }),
    useAppShallowEqual
  )
  const formItemLayout = {
    wrapperCol: {
      span: 24
    }
  }
  const [fieldList] = useState<Partial<IFormItem>[]>([
    {
      field: 'username',
      type: 'input',
      suffix: <IconUser />,
      allowClear: true,
      placeholder: '请输入姓名'
    },
    {
      field: 'email',
      type: 'input',
      suffix: <IconEmail />,
      allowClear: true,
      placeholder: '请输入邮箱'
    },
    {
      field: 'phone',
      type: 'input',
      suffix: <IconPhone />,
      allowClear: true,
      placeholder: '请输入手机号码'
    },
    {
      field: 'birthday',
      type: 'date-picker',
      placeholder: '请选择日期',
      allowClear: true
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
        },
        {
          label: '未知',
          value: 0
        }
      ]
    },
    {
      type: 'button'
    }
  ])

  useEffect(() => {
    async function getData() {
      await dispatch(fetchUserInfoAction())
      setLoading(false)
    }
    getData()
  }, [])
  function changeUserInfo() {
    const res: any = form.getFields()
    console.log(res)
  }
  function renderFormItem() {
    function getItem(item: Partial<IFormItem>) {
      if (item.type === 'input') {
        return <Input {...item} />
      } else if (item.type === 'date-picker') {
        return <DatePicker {...item} />
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
    return fieldList.map((item, index) => (
      <Form.Item key={index} field={item.field}>
        {getItem(item)}
      </Form.Item>
    ))
  }
  return (
    <FrontSkeleton loading={loading}>
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
    </FrontSkeleton>
  )
}

export default memo(UserInfoComponent)
