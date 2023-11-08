/**
 * 
window.scrollTo({
    top: heightToTop(document.querySelector(dom)),
    behavior: 'smooth'
})

解决部分浏览器兼容性 
import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()
*/
const heightToTop=(ele)=> {
  // ele为指定跳转到指定位置的DOM节点
  const root = document.body || document.documentElement
  let height = 0
  do {
    height += ele.offsetTop
    ele = ele.offsetParent
  } while (ele !== root)
  return height
}
export default heightToTop