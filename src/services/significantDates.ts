import * as fs from "fs";
import { config } from "@/config";

export interface SignificantDate {
    day: number,
    month: number,
    year: number,
    text: string
}

(global as any).significantDates_ = null
export function getSignificantDates(): SignificantDate[] {
    if (!(global as any).significantDates_) {
        (global as any).significantDates_ = loadSignificantDates()
    }

    return (global as any).significantDates_
}

function loadSignificantDates() {
    const content = fs.readFileSync(config.significantDatesFile, "utf-8")
    const lines = content.split("\n").map(l => l.trim()).filter(l => l.length > 0)
    return lines.map((line, lineI) => config.significantDateParser(line, lineI + 1))
}