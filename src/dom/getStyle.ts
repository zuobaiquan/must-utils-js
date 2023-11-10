 import { isNumber } from '../types'
import { camelCase,IEVersion } from '../utils/index'
 const ieVersion :any = IEVersion()
 const getStyle = (isNumber(ieVersion) && ieVersion < 9 && ieVersion!==-1) ? function (element, styleName) {
  if (!element || !styleName) {
    return null
  }
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'styleFloat'
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100
        } catch (e) {
          return 1.0
        }
      default:
        return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null)
    }
  } catch (e) {
    return element.style[styleName]
  }
} : function (element, styleName) {
  if (!element || !styleName) {
    return null
  }
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    var computed:any = (document.defaultView && document.defaultView.getComputedStyle(element, ''))
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}
export default getStyle