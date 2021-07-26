import { getChildren, getCelebrities } from "./database.js"
const kids = getChildren()
const celebrities = getCelebrities()
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("kid")) {
            const [ ,kidId] = itemClicked.id.split("--")

            for (const kid of kids) {
                if (kid.id === parseInt(kidId)) {
                    let celebMatch = {}

                    for (const celebrity of celebrities) {
                        if (celebrity.id === kid.celebrityId) {
                            celebMatch = celebrity
                            window.alert(`${kid.name} will be making memories with ${celebMatch.name}, a ${celebMatch.sport} star, by ${kid.wish}
                            `)
                        }
                    }
                }
            }
        }
    }
)


const findCelebrityMatch = (kidObject, celebrityArray) => {
    
    let celebrityMatch = "null"
    for (const celebrity of celebrityArray) {
        if (celebrity.id === kidObject.celebrityId) {
           celebrityMatch = celebrity
        }
    }
    return celebrityMatch

}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li id="kid--${kid.id}">
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

