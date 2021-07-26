import { getChildren } from "./database.js"
const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("child")) {
            const [, childId] = itemClicked.id.split("--")

            for (const child of children) {
                if (child.id === parseInt(childId)) {
                    window.alert(`${child.name} has a wish of ${child.wish}`)
                }
            }
        }
    }
)



export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li id="child--${child.id}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

