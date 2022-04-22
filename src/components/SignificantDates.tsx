import { getSignificantDates, SignificantDate } from "@/services"

export function SignificantDates({ date }: { date: Date }) {
    const significantDates = getSignificantDates().filter(significantDatesFilter(date))
    if (significantDates.length == 0) return <></>
    return <span className="significant-dates">
        {significantDates.map((sf, i) => (<span key={i}>
            {i > 0 ? " • " : ""}
            {sf.text}
        </span>))}
    </span>
}

function significantDatesFilter(date: Date) {
    return (sf: SignificantDate) => sf.month == date.getMonth() + 1 && sf.day == date.getDate()
}
