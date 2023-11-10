
import dayjs from 'dayjs'
import istoday from 'dayjs/plugin/isToday'
dayjs.extend(istoday)
const isToday = (date) =>{
  return dayjs(date).isToday()
}
export default isToday