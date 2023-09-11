import { useEffect, useState } from 'react'
import { isSSR } from '@/utils/is'
import { localCache } from '@/utils'

const getDefaultStorage = (key: string) => {
  if (!isSSR) {
    return localCache.getCache(key)
  } else {
    return undefined
  }
}

type TReturnType = [string | undefined, (key: string) => void, () => void]

export function useStorage(key: string, defaultValue?: string): TReturnType {
  const [storedValue, setStoredValue] = useState(
    getDefaultStorage(key) || defaultValue
  )

  const setStorageValue = (value: string) => {
    if (!isSSR) {
      localCache.setCache(key, value)
      if (value !== storedValue) {
        setStoredValue(value)
      }
    }
  }

  const removeStorage = () => {
    if (!isSSR) {
      localCache.removeCache(key)
    }
  }

  useEffect(() => {
    const storageValue = localCache.getCache(key)
    if (storageValue) {
      setStoredValue(storageValue)
    }
  }, [])

  return [storedValue, setStorageValue, removeStorage]
}
