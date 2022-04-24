import { Config } from "./types"

export const config: Config = {
    startDate: new Date("2022-05-01T00:00:00Z"), // Use UTC ISO date because otherwise summer time changes messes with dates
    pages: [
        { graphicsLayout: "single", photoFilenames: ["default.jpg"] },
        ...[...Array(23)].map(i => ({ random: true } as const)),
    ],
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
            day: parseInt(match.groups?.day!),
            month: parseInt(match.groups?.month!),
            year: match.groups?.year ? parseInt(match.groups?.year) : undefined,
            text: match.groups?.text!
        }
    },
    photosDir: "./photos",
    photosURL: "/photos"
}