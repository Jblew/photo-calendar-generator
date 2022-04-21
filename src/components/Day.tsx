import { config } from "@/config"

export function Day({ date }: { date: Date }) {
    return <div className="day full">
        <span className="digit">{date.getDate()}</span>
        <SignificantDates date={date} />
    </div>
}

export function EmptyDay() {
    return <div className="day empty"></div>
}

function SignificantDates({ date }: { date: Date }) {
    const significantDates = getSignificantDatesFor(date)
    if (significantDates.length == 0) return <></>
    return <ul className="significant-dates">
        {significantDates.map(sf => (<li key={sf.date.toISOString()}>{sf.text}</li>))}
    </ul>
}

function getSignificantDatesFor(date: Date) {
    return config.significantDays.filter(
        sf => sf.date.getMonth() == date.getMonth() && sf.date.getDate() == date.getDate()
    )
}