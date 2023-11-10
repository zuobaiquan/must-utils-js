import { addClass, getStyle, hasClass,  removeClass, setStyle } from '..'

describe('dom:class', () => {
  let dom
  beforeEach(() => {
    dom = document.createElement('div')
    dom.classList.add('test-class')
  })
  it('test hasClass', () => {
    expect(hasClass(dom, 'test-class')).toBe(true)
    expect(hasClass(dom, 'test-no-class')).toBe(false)
  })

  it('test addClass', () => {
    const className = 'add-class'
    addClass(dom, className)
    expect(hasClass(dom, className)).toBe(true)
  })
  it('test removeClass', () => {
    removeClass(dom, 'test-class')
    expect(hasClass(dom, 'test-class')).toBe(false)

    addClass(dom, "a b")

    removeClass(dom, 'a b')
    expect(hasClass(dom, 'a')).toBe(false)
  })
  it('test getStyle', () => {
    setStyle(document.body, 'color', 'red')
    expect(getStyle(document.body, 'color')).toBe('red')

    expect(getStyle(document.body,'')).toBe(null)

  })
  it('test setStyle', () => {
    setStyle(document.body, 'opacity', '0.8')
    expect(getStyle(document.body, 'opacity')).toBe('0.8')

    expect(setStyle('','','')).toBe(undefined)
  })

})
