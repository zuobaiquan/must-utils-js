import {  plus } from '../math'
/**
 * @description: 计算对象数组指定属性值的总和
 * @param { Array } arr 需要计算指定属性值总和的对象数组
 * @param { String } key 需要计算总和的 key
 * @return { Number } 对象数组指定属性值的总和
 */
const getTotalBy = (arr, key) => arr.reduce((pre, cur) => plus(pre, cur[key]), 0);

export default getTotalBy;