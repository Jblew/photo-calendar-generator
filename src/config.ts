export const config = {
    startDate: new Date("2022-05-01T00:00:00Z"), // Use UTC ISO date because otherwise summer time changes messes with dates
    calendarLengthMonths: 24,
    months: [
        "Styczeń",
        "Luty",
        "Marzec",
        "Kwiecień",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpień",
        "Wrzesień",
        "Październik",
        "Listopad",
        "Grudzień"
    ],
    daysOfWeek: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
    significantDatesFile: "significant-dates.txt", // relative to cwd
    significantDateParser: (line: string, linenum: number) => {
        const match = /^(?<day>\d\d?)\.(?<month>\d\d?)\.?(?<year>\d\d\d\d)?\s(?<text>.*)$/gmi.exec(line)
        if (!match) {
            throw new Error(`Significant dates file contains error in line #${linenum}: ${line}`)
        }
        return {
            day: match.groups?.day || null,
            month: match.groups?.month || null,
            year: match.groups?.year || null,
            text: match.groups?.text || null
        }
    },
    photosDir: "./public/photos",
    photosURL: "/photos"
}