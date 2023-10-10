import React, { memo, useEffect, useRef, useState } from 'react'
import type { CSSProperties, FC, ReactNode } from 'react'
import JsBarcode from 'jsbarcode'

type TRenderType = 'svg' | 'img' | 'canvas'
interface IJsBarcode extends JsBarcode.BaseOptions {
  renderer?: TRenderType
  style?: CSSProperties
  className?: string
}

interface IProps {
  children?: ReactNode
  value: string
  options?: IJsBarcode
}

const BarCodeComponent: FC<IProps> = (props) => {
  const [defaultProps] = useState<IJsBarcode>({
    format: 'CODE128',
    displayValue: true,
    textAlign: 'center',
    textPosition: 'bottom',
    textMargin: 6,
    fontSize: 12,
    background: '#fff',
    lineColor: '#212121',
    margin: 0,
    marginBottom: 0,
    renderer: 'img'
  })
  const { value, options = defaultProps } = props
  const barCodeRef = useRef<any>(null)

  useEffect(() => {
    JsBarcode(barCodeRef.current, value, {
      ...defaultProps,
      ...options
    })
  }, [value])

  function renderComponent() {
    switch (options.renderer) {
      case 'svg':
        return (
          <svg
            ref={barCodeRef}
            style={options.style}
            className={options.className}
          />
        )
      case 'canvas':
        return (
          <canvas
            ref={barCodeRef}
            style={options.style}
            className={options.className}
          />
        )
      case 'img':
        return (
          <img
            ref={barCodeRef}
            style={options.style}
            className={options.className}
          />
        )
    }
  }

  return <>{renderComponent()}</>
}

export default memo(BarCodeComponent)
