import { isBrowser } from "../helper"

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/
export function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}
export function IEVersion() {
  if(!isBrowser){
    return -1
  }
  var userAgentV = window.navigator.userAgent
  var isIE = userAgentV.indexOf('compatible') > -1 && userAgentV.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
  var isEdge = userAgentV.indexOf('Edge') > -1 && !isIE // 判断是否IE的Edge浏览器
  var isIE11 = userAgentV.indexOf('Trident') > -1 && userAgentV.indexOf('rv:11.0') > -1
  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgentV)
    var fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion === 7) {
      return 7
    } else if (fIEVersion === 8) {
      return 8
    } else if (fIEVersion === 9) {
      return 9
    } else if (fIEVersion === 10) {
      return 10
    } else {
      return 6 // IE版本<=7
    }
  } else if (isEdge) {
    return 'edge' // edge
  } else if (isIE11) {
    return 11 // IE11
  } else {
    return -1 // 不是ie浏览器
  }
}
