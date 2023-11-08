/**
 * @description:数组对象去重
 * @param { Array } arr 目标去重的数组
 * @param { String } key 根据对象的key去重
 * @return { Array } 数组去重后的结果
 */
const duplicateArr = (arr, key = 'name')=> {
  const obj = {}
  arr = arr.reduce((newArr, next) => {
    obj[next[key]] ? '' : (obj[next[key]] = true && newArr.push(next))
    return newArr
  }, [])
  return arr
}
export default duplicateArr