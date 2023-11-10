import { diffDays,isToday,compareDate } from '..'

describe('date', () => {
  it('diffDays ', () => {
    expect(diffDays("2023-01-01","2023-02-01")).toBe(31)
    expect(diffDays("2023-02-01","2023-01-01")).toBe(-31)
    expect(compareDate("2023-02-01","2023-01-01")).toBe(-1)
    
    expect(isToday("2023-02-01")).toBe(false)
    expect(isToday(new Date())).toBe(true)
  })
})
