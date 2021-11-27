const main = document.querySelector(".main")

function cleanUpIndex() {
    while (main.lastChild) {
        main.lastChild.remove()
    }
    
}

function createSingleIndex(name) {
    const CardLink = document.createElement("a")
    CardLink.href = "page3.html"
    const Card = document.Element("div")
    Card.className = "contact"
    Card.innerHTML = name
    CardLink.appendChild(Card)
    return CardLink

}