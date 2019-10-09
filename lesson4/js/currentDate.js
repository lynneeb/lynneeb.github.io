const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const dayIndex = d.getDay()
const dayName = days[dayIndex] // Wednesday

const d = new Date(2019, 9, 8)
const year = d.getFullYear() //2019
const date = d.getDate() //9

const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }

  const monthIndex = d.getMonth()
  const monthName = months[monthIndex]
//   console.log(monthName) //October

const formatted = `${dayName}, ${date} ${monthName} ${year}`
// console.log(formatted) // Wednesday, 9 October 2019


var currentDate = formatted

document.getElementById('currentyear').textContent = currentDate;