
import dayjs from 'dayjs'
const diffDays = (startDate, endDate) =>{
  return dayjs(endDate).diff(startDate, 'day')
}
export default diffDays