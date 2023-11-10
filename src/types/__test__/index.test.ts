import { isString, isNumber,isObject,isNull,isArray,isHtmlElement,isFunction,isUndefined,isDefined,isPromise } from '..'

describe('types', () => {
  expect(isString("12345")).toBe(true)
  expect(isString(1211)).toBe(false)
  expect(isNumber(1211)).toBe(true)
  expect(isObject({name:'1'})).toBe(true)
  expect(isNull(null)).toBe(true)
  expect(isArray([44])).toBe(true)


  let dom
  beforeEach(() => {
    dom = document.createElement('div')
    dom.classList.add('test-class')
  })

  it('isHtmlElement ', () => {
    expect(isHtmlElement("<span></span>")).toBe(false)
    expect(isHtmlElement(dom)).toBe(true)
  })


  const fn = ()=>{
    return true
  }
  expect(isFunction(fn)).toBe(true)
  
  expect(isUndefined(undefined)).toBe(true)

  expect(isDefined(fn)).toBe(true)


  const proise = new Promise((resolve)=>{
    resolve(1)
  })

  expect(isPromise(proise)).toBe(true)
  
})
