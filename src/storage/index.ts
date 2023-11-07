import { isString } from '../types'

class Store {
  storage: any
  constructor($storage = 'localStorage') {
    if (!global.window) {
      return
    }
    this.storage = window[$storage]
  }
  set = (name, content, maxAge = null) => {
    if (!name) {
      return
    }
    if (!isString(content)) {
      content = JSON.stringify(content)
    }
    this.storage.setItem(name, content)
    if (maxAge && !isNaN(parseInt(maxAge))) {
      const timeout = new Date().getTime() / 1000
      this.storage.setItem(`${name}_expire`, timeout + maxAge)
    }
  }
  get=(name) => {
    if (!name) {
      return
    }
    const content = this.storage.getItem(name)
    const _expire = this.storage.getItem(`${name}_expire`)
    if (_expire) {
      const now = new Date().getTime() / 1000
      if (now > _expire) {
        return
      }
    }
    try {
      return JSON.parse(content)
    } catch (e) {
      return content
    }
  }
  remove = (name) => {
    if (!name) {
      return
    }
    this.storage.removeItem(name)
    if (this.storage === 'localStorage') {
      window.localStorage.removeItem(`${name}_expire`)
    }
  }
  clear = () => {
    this.storage.clear()
  }
}

const HtdLocalStorage = new Store('localStorage')
const HtdSessionStorage = new Store('sessionStorage')

export const getStore = HtdLocalStorage.get
export const setStore = HtdLocalStorage.set
export const removeStore = HtdLocalStorage.remove
export const clearStore = HtdLocalStorage.clear

export const getSession = HtdSessionStorage.get
export const setSession = HtdSessionStorage.set
export const removeSession = HtdSessionStorage.remove
export const clearSession = HtdSessionStorage.clear

export const clearAll = () => {
  HtdLocalStorage.clear()
  HtdSessionStorage.clear()
}
