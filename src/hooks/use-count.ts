import { useEffect, useRef, useState } from 'react'
export function useCountDown(initCount = 60, callBack: () => void) {
  const timeId = useRef<{ id: number }>({ id: 0 })
  const [count, setCount] = useState(initCount)
  const start = () => {
    setCount(initCount)
    timeId.current.id = window.setInterval(() => {
      setCount((count) => count - 1)
    }, 1000)
  }

  const clear = () => {
    window.clearInterval(timeId.current.id)
  }
  useEffect(() => clear(), [])
  useEffect(() => {
    if (count === 0) {
      clear()
      callBack()
    }
  }, [callBack, count])
  return { start, count, clear }
}
