export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}
export function isNumber(obj) {
  return Object.prototype.toString.call(obj) === '[object Number]'
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isNull(obj) {
  return Object.prototype.toString.call(obj) === '[object Null]'
}

export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE
}

export const isFunction = (functionToCheck) => {
  var getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

export const isUndefined = (val) => {
  return val === void 0
}

export const isDefined = (val) => {
  return val !== undefined && val !== null
}

export const isPromise = p => p && typeof p.then === 'function'
