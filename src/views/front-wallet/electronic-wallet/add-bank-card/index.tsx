import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { AddBankCardWrapper } from './styled'
import NavBar from '@/components/business-component/nav-bar'
import MoreIcon from '@/components/icon-component/more-icon'
import { IFormItem } from '@/types/form-item'
import { TKeyOfValue } from '@/types/constant'
import { formatMoney } from '@/utils/format'
import { DatePicker, Form, Input, InputNumber } from '@arco-design/web-react'
import ConfirmBtn from '@/components/form-component/confirm-btn'
import { debounce } from 'underscore'
import { splitBankNumber } from '@/utils/util'

const FormItem = Form.Item
interface IProps {
  children?: ReactNode
}

const AddBankCardComponent: FC<IProps> = () => {
  const [form] = Form.useForm()
  const [formData, setFormData] = useState<TKeyOfValue>({
    name: '',
    cardNumber: '',
    date: '',
    amount: ''
  })
  const [fieldList] = useState<IFormItem[]>([
    {
      field: 'name',
      type: 'input',
      placeholder: '请输入卡名称',
      label: '银行名称',
      allowClear: true,
      rules: [
        {
          required: true,
          message: '请输入银行名称'
        }
      ]
    },
    {
      field: 'cardNumber',
      type: 'input',
      placeholder: '请输入卡号',
      label: '银行卡卡号',
      allowClear: true,
      rules: [
        {
          required: true,
          message: '请输入银行卡卡号',
          maxLength: 19
        }
      ]
    },
    {
      field: 'date',
      type: 'date-picker',
      placeholder: '请选择有效期',
      label: '银行卡有限期',
      allowClear: true,
      rules: [
        {
          required: true,
          message: '请选择银行卡有限期'
        }
      ]
    },
    {
      field: 'amount',
      type: 'input-number',
      placeholder: '请核实银行卡金额',
      label: '核实金额',
      allowClear: true,
      rules: [
        {
          required: true,
          message: '请核实银行卡金额'
        }
      ]
    },
    {
      type: 'button',
      field: ''
    }
  ])

  function renderFormData() {
    function getItem(item: Partial<IFormItem>) {
      if (item.type === 'input') {
        return <Input {...item} />
      } else if (item.type === 'input-number') {
        return <InputNumber {...item} hideControl={true} />
      } else if (item.type === 'date-picker') {
        return <DatePicker {...item} allowClear />
      } else if (item.type === 'button') {
        return (
          <ConfirmBtn
            confirmText={'确认'}
            onClick={() => handleSendData()}
          ></ConfirmBtn>
        )
      }
    }
    return fieldList.map((item) => (
      <FormItem
        key={item.field}
        field={item.field}
        label={item.label}
        rules={item.rules}
      >
        {getItem(item)}
      </FormItem>
    ))
  }

  async function handleSendData() {
    try {
      const res = await form.validate()
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  const onValuesChange = debounce((changeValue: Partial<any>) => {
    const _formData = { ...formData }
    for (const key in changeValue) {
      if (key === 'cardNumber') {
        changeValue[key] = splitBankNumber(changeValue[key])
      }
      _formData[key] = changeValue[key]
    }
    setFormData(_formData)
  }, 500)
  return (
    <AddBankCardWrapper>
      <NavBar
        renderCenter={() => '添加银行卡'}
        renderRight={() => <MoreIcon />}
      />
      <div className="card-wrap">
        <div className="card-name">{formData.name}</div>
        <div className="card-number">{formData.cardNumber}</div>
        <div className="card-name">银行卡金额</div>
        <div className="card-amount">
          {formatMoney({ money: formData.amount })}
        </div>
      </div>
      <Form
        layout="vertical"
        scrollToFirstError
        form={form}
        onValuesChange={onValuesChange}
      >
        {renderFormData()}
      </Form>
    </AddBankCardWrapper>
  )
}

export default memo(AddBankCardComponent)
