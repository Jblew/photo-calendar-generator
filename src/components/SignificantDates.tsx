import { getSignificantDates, SignificantDate } from "@/services"

export function SignificantDates({ date }: { date: Date }) {
    const significantDates = getSignificantDates().filter(significantDatesFilter(date))
    if (significantDates.length == 0) return <></>
    return <ul className="significant-dates">
        {significantDates.map(sf => (<li key={`${sf.month}-${sf.day}-${sf.text}`}>{sf.text}</li>))}
    </ul>
}

function significantDatesFilter(date: Date) {
    return (sf: SignificantDate) => sf.month == date.getMonth() + 1 && sf.day == date.getDate()
}
