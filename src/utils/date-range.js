export { getYearMonthDay, getDate, getFullYear }

const getYearMonthDay = (date) => {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return { year, month, day }
}
const getDate = (year, month, day) => {
  return new Date(year, month, day)
}

function getFullYear(date) {
  return date.getFullYear()
}
