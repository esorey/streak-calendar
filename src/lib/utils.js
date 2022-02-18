const Months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
const Days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

const mod = (n, m) => {
    return ((n % m) + m) % m
}

const getDaysInMonth = ({ month, year }) => {
    return new Date(year, Months.indexOf(month) + 1, 0).getDate()
}

const getMonth = () => {
    return Months[(new Date()).getMonth()]
}

const getYear = () => {
    return (new Date()).getFullYear()
}

const getNextMonth = (month) => {
    const idx = mod((Months.indexOf(month) + 1), 12)
    return Months[idx]
}

const getNextYear = (year) => {
    return (parseInt(year) + 1).toString()
}

const getNextYearMonth = ({ month, year }) => {
    const nextMonth = getNextMonth(month)
    return {
        month: nextMonth,
        year: (nextMonth === 'January') ? getNextYear(year) : year,
    }
}

const getPrevMonth = (month) => {
    const idx = mod((Months.indexOf(month) - 1), 12)
    return Months[idx]
}

const getPrevYear = (year) => {
    return (parseInt(year) - 1).toString()
}

const getPrevYearMonth = ({ month, year }) => {
    const prevMonth = getPrevMonth(month)
    return {
        month: prevMonth,
        year: (prevMonth === 'December') ? getPrevYear(year) : year,
    }
}

const getDateArray = ({ month, year }) => {
    const daysInMonth = getDaysInMonth({ month, year })
    // Sunday = 0, Monday = 1, etc.
    const dayOfWeekIdx = new Date(year, Months.indexOf(month), 1).getDay()
    // Create a full grid of boxes big enough to fit this month
    const totalBoxes = 7 * Math.ceil((daysInMonth + dayOfWeekIdx) / 7)
    const endPad = totalBoxes - daysInMonth - dayOfWeekIdx
    return Array(dayOfWeekIdx).fill(-1).concat(
        [ ...Array(daysInMonth).keys() ].concat(
            Array(endPad).fill(-1),
        ),
    )
}

const getState = ({ month, year }) => {
    return {
        month,
        year,
        dateArray: getDateArray({ month, year }),
    }
}

const getInitialState = () => {
    return getState({
        month: getMonth(),
        year: getYear(),
    })
}

const getNextYearMonthState = ({ month, year }) => {
    return getState(getNextYearMonth({ month, year }))
}

const getPrevYearMonthState = ({ month, year }) => {
    return getState(getPrevYearMonth({ month, year }))
}

export { Days, getMonth, getYear, getInitialState, getNextYearMonthState, getPrevYearMonthState }