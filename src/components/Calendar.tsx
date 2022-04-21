import { MonthPage } from "./MonthPage"

export function Calendar(
    { noMonths, startDate }:
        { noMonths: number, startDate: Date }
) {
    const months = generateMonths(startDate, noMonths)

    return <main className="calendar">
        {months.map(month => (<MonthPage key={month.toISOString()} startDate={month} />))}
    </main>
}

function generateMonths(startDate: Date, noMonths: number): Date[] {
    const months = []
    for (let i = 0; i < noMonths; i++) {
        const d = new Date(startDate.toISOString())
        d.setMonth(d.getMonth() + i)
        months.push(d)
    }
    return months
}