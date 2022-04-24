import { getRandomPhotoURL } from "@/services"

export function Graphics() {
    const types = [
        { className: "single", count: 1 },
        { className: "double", count: 2 },
        { className: "triple", count: 3 },
        { className: "four", count: 4 },
        { className: "four-asym", count: 4 },
        { className: "six", count: 6 },
        { className: "ltb", count: 3 },
        { className: "tbr", count: 3 },
        { className: "l-five", count: 5 },
        { className: "r-five", count: 5 },
    ]
    // unseeded random can be used because we generate the html statically
    const type = types[Math.floor(Math.random() * types.length)]
    return <div className={"graphics " + type.className}>
        {[...Array(type.count)].map((_, i) => (<Photo key={i} />))}
    </div>
}

function Photo() {
    const url = getRandomPhotoURL()
    return <div style={{ backgroundImage: `url("${url}")` }}></div>
}