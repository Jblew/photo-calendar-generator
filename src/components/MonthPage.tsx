export function MonthPage(
    { startDate }:
    { startDate: Date }
) {
    return <section className="month-page">
        Month {startDate.toLocaleString()}
    </section>
}