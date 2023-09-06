enum CacheType {
  Local,
  Session
}

class Cache {
  storage: Storage
  constructor(type: CacheType) {
    this.storage = type === CacheType.Local ? localStorage : sessionStorage
  }
  setCache(key: string, value: any) {
    value && this.storage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  clearCache() {
    this.storage.clear()
  }
  removeCache(key: string) {
    key && this.storage.removeItem(key)
  }
}

export const localCache = new Cache(CacheType.Local)
export const sessionCache = new Cache(CacheType.Session)
