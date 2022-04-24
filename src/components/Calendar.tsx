import { PageConfig } from "@/types"
import { MonthPage } from "./MonthPage"

export function Calendar(
    { pages, startDate }:
        { pages: PageConfig[], startDate: Date }
) {
    const months = generateMonths(startDate, pages.length)

    return <main className="calendar">
        {months.map((month, i) => (
            <MonthPage key={month.toISOString()} startDate={month} page={pages[i]} />
        ))}
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