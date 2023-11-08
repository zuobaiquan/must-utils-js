const deepClone = (data) => {
  let result
  if (typeof data === 'object') {
    if (data == null) {
      result = null
    } else {
      if (data.constructor === Array) {
        result = []
        for (const i in data) {
          result.push(deepClone(data[i]))
        }
      } else {
        result = {}
        for (const i in data) {
          result[i] = deepClone(data[i])
        }
      }
    }
  } else {
    result = data
  }
  return result
}

export default deepClone;