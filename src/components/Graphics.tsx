import { getPhotoURL, getRandomPhotoFilename } from "@/services"
import { PageConfig, PageGrahicsConfig } from "@/types"

export function Graphics({ page }: { page: PageConfig }) {
    const graphicsConfig = getPageGraphicsConfig(page)
    return <div className={"graphics " + graphicsConfig.graphicsLayout}>
        {graphicsConfig.photoFilenames.map((filename) => (<Photo key={filename} filename={filename} />))}
    </div>
}

function Photo({ filename }: { filename: string }) {
    const url = getPhotoURL(filename)
    return <div style={{ backgroundImage: `url("${url}")` }}></div>
}

function getPageGraphicsConfig(page: PageConfig): PageGrahicsConfig {
    if (page.random) {
        return getRandomLayout()
    } else {
        return page
    }
}

function getRandomLayout(): PageGrahicsConfig {
    const layouts = [
        { name: "single", count: 1 },
        { name: "double", count: 2 },
        { name: "triple", count: 3 },
        { name: "four", count: 4 },
        { name: "four-asym", count: 4 },
        { name: "six", count: 6 },
        { name: "ltb", count: 3 },
        { name: "tbr", count: 3 },
        { name: "l-five", count: 5 },
        { name: "r-five", count: 5 },
    ] as const
    // unseeded random can be used because we generate the html statically
    const layout = layouts[Math.floor(Math.random() * layouts.length)]
    const photoFilenames = [...Array(layout.count)].map(_ => getRandomPhotoFilename())
    return { graphicsLayout: layout.name, photoFilenames }
}