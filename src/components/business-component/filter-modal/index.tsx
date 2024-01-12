import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { FilterModalWrapper } from './styled'
import {
  Button,
  Rate,
  Slider,
  Space,
  Tag,
  Typography
} from '@arco-design/web-react'
import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/hooks'
import { fetchCommodityLisAction } from '@/store/module/commodity'
import TabList from '@/components/business-component/data-list/tab-list'
import DrawerModalComponent from '@/components/drawer-modal'
interface IProps {
  children?: ReactNode
  visible: boolean
  onToggleModalState: (visible: boolean) => void
}

type IFormType = 'tab' | 'rate' | 'slider'

interface IFormItem {
  field: string
  label: string
  type: IFormType
}

interface ISearchInfo {
  score: number
  type: string
  amount: number[]
  category: string
}

const FilterModalComponent: FC<IProps> = (props) => {
  const [searchInfo, setSearchInfo] = useState<ISearchInfo>({
    amount: [10, 20],
    type: 'all',
    score: 0,
    category: 'all'
  })

  const [formFiled] = useState<IFormItem[]>([
    {
      field: 'type',
      label: '类别',
      type: 'tab'
    },
    {
      field: 'amount',
      label: '价格区间',
      type: 'slider'
    },
    {
      field: 'category',
      label: '分类',
      type: 'tab'
    },
    {
      field: 'score',
      label: '评分',
      type: 'rate'
    }
  ])
  const { tabList } = useAppSelector(
    (state) => ({
      tabList: state.homeReducer.gridList
    }),
    useAppShallowEqual
  )
  const dispatch = useAppDispatch()

  function handleChangeValue(key: string, value: string | number | number[]) {
    setSearchInfo({
      ...searchInfo,
      [key]: value
    })
  }
  function handleSearch() {
    console.log(searchInfo)

    // dispatch(fetchCommodityLisAction({}))
    props.onToggleModalState && props.onToggleModalState(false)
  }
  function renderFooter() {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          paddingBottom: 'var(--layout-margin)'
        }}
      >
        <Button
          shape="round"
          size="large"
          long
          style={{ marginRight: 'var(--layout-margin)' }}
          onClick={() =>
            props.onToggleModalState && props.onToggleModalState(false)
          }
        >
          取消
        </Button>
        <Button
          type="primary"
          shape="round"
          size="large"
          long
          onClick={() => handleSearch()}
        >
          确认
        </Button>
      </div>
    )
  }

  function renderFormField() {
    return formFiled.map((item, index) => (
      <div className="form-item" key={index}>
        <div className="theme-title">
          {item.label}:
          {item.type === 'slider' && (
            <Tag color="magenta">{JSON.stringify(searchInfo.amount)}</Tag>
          )}
        </div>
        {item.type === 'tab' && item.field === 'type' && (
          <TabList
            tabList={tabList}
            getSelectValue={(value: string) =>
              handleChangeValue(item.field, value)
            }
          />
        )}
        {item.field === 'amount' && (
          <Slider
            range={{
              draggableBar: true
            }}
            onChange={(value) => handleChangeValue('amount', value)}
            defaultValue={[10, 20]}
          />
        )}
        {item.type === 'tab' && item.field === 'category' && (
          <TabList
            tabList={tabList}
            getSelectValue={(value: string) =>
              handleChangeValue(item.field, value)
            }
          />
        )}
        {item.field === 'score' && (
          <Space>
            <Rate
              className="rare"
              allowHalf
              value={searchInfo.score}
              onChange={(value: number) => handleChangeValue(item.field, value)}
            />
            {!!searchInfo.score && (
              <Typography.Text>{searchInfo.score} 分</Typography.Text>
            )}
          </Space>
        )}
      </div>
    ))
  }
  return (
    <FilterModalWrapper>
      <DrawerModalComponent visible={props.visible} footer={renderFooter()}>
        {renderFormField()}
      </DrawerModalComponent>
    </FilterModalWrapper>
  )
}
export default memo(FilterModalComponent)
