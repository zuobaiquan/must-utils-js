
import dayjs from 'dayjs'
const compareDate = (startDate, endDate) =>{
  const gap = dayjs(endDate).diff(startDate, 'day')
  return gap>0 ? 1: (gap==0?0:-1)
}
export default compareDate