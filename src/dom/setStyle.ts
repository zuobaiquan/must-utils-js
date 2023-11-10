
import { isNumber } from '../types'
import { camelCase,IEVersion } from '../utils/index'
const ieVersion :any = IEVersion()
const setStyle = (element, styleName, value) =>{
  if (!element || !styleName) return

  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelCase(styleName)
    if (styleName === 'opacity' && (isNumber(ieVersion) && ieVersion < 9 && ieVersion!==-1)) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
    } else {
      element.style[styleName] = value
    }
  }
}
export default setStyle