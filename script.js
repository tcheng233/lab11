const main = document.querySelector(".main")

function cleanUpIndex() {
    while (main.lastChild) {
        main.lastChild.remove()
    }
    
}