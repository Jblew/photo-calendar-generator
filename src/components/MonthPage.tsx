import { config } from "@/config"

export function MonthPage(
    { startDate }:
        { startDate: Date }
) {
    return <section className="month-page">
        <h1>{config.months[startDate.getMonth()]}</h1>
        <CalendarDays date={startDate} />
    </section>
}

function CalendarDays({ date }: { date: Date }) {
    const emptyDaysCount = getNumberOfDaysAfterSunday(date)
    const numberOfDays = getNumberOfDaysInMonth(date)
    return <div className="calendar-days">
        {config.daysOfWeek.map(name => (<div key={name} className="day-of-week">{name}</div>))}
        {[...Array(emptyDaysCount)].map((_, i) => (<div key={i} className="day empty"></div>))}
        {[...Array(numberOfDays)].map((_, i) => i + 1).map(day => (<div key={day} className="day digit">{day}</div>))}
    </div>
}

function getNumberOfDaysAfterSunday(date: Date) {
    return date.getUTCDay() // UTC first day of week is monday
}

function getNumberOfDaysInMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
}