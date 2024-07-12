import { REDIRECT_URL } from '@/config/constant'
import { PAGE_MEMBER } from '@/router/constant'
import { Modal } from '@arco-design/web-react'
import { forwardRef, memo, useImperativeHandle, useState } from 'react'
import type { ReactNode, Ref } from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  pathname?: string
  title?: string
  content?: string | ReactNode
  onHandleOk?: () => void
}

const TipModal = (props: IProps, ref: Ref<any>) => {
  const {
    title = '是否登录',
    content = ' 您还未登录, 是否前往登录?',
    onHandleOk
  } = props
  const [visible, setVisible] = useState(false)
  const nav = useNavigate()

  function handleGoLoginPage() {
    if (onHandleOk) onHandleOk()
    else {
      if (props.pathname) {
        nav(`${PAGE_MEMBER}?${REDIRECT_URL}=${props.pathname}`)
      }
      setVisible(false)
    }
  }
  // 暴露子组件方法属性给外部w
  useImperativeHandle(
    ref,
    () => ({
      setVisible
    }),
    [visible]
  )
  return (
    <Modal
      title={title}
      simple
      visible={visible}
      maskClosable={false}
      onOk={() => handleGoLoginPage()}
      onCancel={() => setVisible(false)}
    >
      {content}
    </Modal>
  )
}

export default memo(forwardRef(TipModal))
