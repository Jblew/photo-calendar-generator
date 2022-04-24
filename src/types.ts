export interface Config {
    startDate: Date
    pages: PageConfig[],
    months: string[],
    daysOfWeek: string[],
    significantDatesFile: string,
    significantDateParser: (line: string, linenum: number) => { day: number, month: number, year?: number, text: string },
    photosDir: string,
    photosURL: string,
}

export type GraphicsLayout = "single" | "double" | "triple"
    | "four" | "four-asym" | "six"
    | "ltb" | "tbr"
    | "l-five" | "r-five"

export interface PageGrahicsConfig {
    graphicsLayout: GraphicsLayout, photoFilenames: string[]
}

export type PageConfig = { random: true } | PageGrahicsConfig & { random?: false }
