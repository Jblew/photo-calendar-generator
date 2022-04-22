import { config } from "@/config"
import { Day, EmptyDay } from "./Day"
import { MonthPhoto } from "./MonthPhoto"

export function MonthPage(
    { startDate }:
        { startDate: Date }
) {
    return <section className="month-page">
        <div className="graphics">
            &nbsp;
        </div>
        <div className="calendar">
            <h1>{config.months[startDate.getMonth()]} {startDate.getFullYear()}</h1>
            <CalendarDays date={startDate} />
            &nbsp;
        </div>
    </section >
}

function CalendarDays({ date }: { date: Date }) {
    const parallelWeeksCount = 2;
    const emptyDaysCount = getNumberOfDaysAfterSunday(date)
    const numberOfDays = getNumberOfDaysInMonth(date)
    return <div className="calendar-days">
        {[...Array(parallelWeeksCount)].map((_, weekI) =>
            config.daysOfWeek.map((name, dayI) => (<div key={`d-${weekI}-${name}`} className={`day-of-week day-of-week-${dayI}`}>{name}</div>)))
        }
        {[...Array(emptyDaysCount)].map((_, i) => (<EmptyDay key={`empty-${i}`} />))}
        {[...Array(numberOfDays)].map((_, i) => (<Day key={`full-${i}`} date={addDaysToDate(date, i)} />))}
    </div>
}

function addDaysToDate(date: Date, days: number): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getUTCDate() + days)
}

function getNumberOfDaysAfterSunday(date: Date) {
    return date.getUTCDay() // UTC first day of week is monday
}

function getNumberOfDaysInMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
}