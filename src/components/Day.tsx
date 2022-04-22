import { SignificantDates } from "./SignificantDates"

export function Day({ date }: { date: Date }) {
    return <div className="day full">
        <span className="digit">{date.getDate()}</span>
        <SignificantDates date={date} />
    </div>
}

export function EmptyDay() {
    return <div className="day empty"></div>
}
