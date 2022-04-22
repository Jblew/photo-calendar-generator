import { getRandomPhotoURL } from "@/services"

export function Graphics() {
    const types = [
        { className: "mono", count: 1 },
        { className: "duo", count: 2 },
        { className: "triptic", count: 3 },
        { className: "quattro", count: 4 },
        { className: "quattro-asym", count: 4 },
        { className: "six", count: 6 },
        { className: "ltb", count: 3 },
        { className: "tbr", count: 3 },
    ]
    // unseeded random can be used because we generate the html statically
    const type = types[Math.floor(Math.random() * types.length)]
    return <div className={"graphics " + type.className}>
        {[...Array(type.count)].map((_, i) => (<Photo key={i} />))}
    </div>
}

function Photo() {
    const url = getRandomPhotoURL()
    return <div style={{ backgroundImage: `url(${url})` }}></div>
}