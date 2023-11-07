import { BigNumber } from 'bignumber.js'
// 加法函数
export function plus(arg1, arg2) {
  const x = new BigNumber(arg1 || 0)
  const y = new BigNumber(arg2 || 0)
  return x.plus(y).toNumber()
}
// 减法函数
export function minus(arg1, arg2) {
  const x = new BigNumber(arg1 || 0)
  const y = new BigNumber(arg2 || 0)
  return x.minus(y).toNumber()
}
// 乘法函数
export function multiply(arg1, arg2) {
  const x = new BigNumber(arg1 || 0)
  const y = new BigNumber(arg2 || 0)
  return x.times(y).toNumber()
}
// 除法函数
export function divide(arg1, arg2, keep = 2) {
  const x = new BigNumber(arg1 || 0)
  const y = new BigNumber(arg2 || 0)
  if (arg2 === 0) {
    return 0
  }
  // 默认保留2位小数
  return x.div(y).dp(keep).toNumber()
}
// 会四舍五入
export function fixed(arg, num = 2) {
  const x = new BigNumber(arg || 0)
  return x.toFixed(num)
}
// 不会四舍五入
export function dp(arg, num = 2) {
  const x = new BigNumber(arg || 0)
  return new BigNumber(x.toFixed(num, 1)).toNumber()
}
