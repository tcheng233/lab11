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

function renderIndex (contactList) {
    contactList.forEach(person => {
        const card = createSingleIndex(person.name)
        main.appendChild(card)
    })
}

function cleanUpView () {
    while (main.lastChild) {
        main.lastChild.remove()
    }
}

function renderView (contact) {
    const contactInfo = document.createElement("div")
    contactInfo.className = "contactinfo"

    const contactName = document.createElement("div")
    contactName.className = "contactname"
    contactName.innerHTML = contact.name
    const profilePic = document.createElement("img")
    profilePic.src = "./img/profile.jpg"
    profilePic.className = "profilepic"
    profilePic.alt = "Profile picture"
    contactName.appendChild(profilePic)
    contactInfo.appendChild(contactName)

    const contactEmail = document.createElement("div")
    contactEmail.className = "contactemail"
    contactEmail.innerHTML = "email: " + contact.email
    contactInfo.appendChild(contactEmail)
    
    const contactPhone = document.createElement("div")
    contactPhone.className = "contactphone"
    contactPhone.innerHTML = "cell: " + contact.phone
    contactInfo.appendChild(contactPhone)

    const contactAddress = document.createElement("div")
    contactAddress.className = "contactaddress"
    contactAddress.innerHTML = "address: " + contact.address
    contactInfo.appendChild(contactAddress)

    const btn = document.createElement("div")
    btn.className = "buttons"
    const editBtn = document.createElement("button")
    editBtn.className = "button edit"
    editBtn.value = "Edit"
    editBtn.innerHTML = "Edit"
    btn.appendChild(editBtn)
    const closeBtn = document.createElement("button")
    closeBtn.className = "button close"
    closeBtn.value = "Close"
    closeBtn.innerHTML = "Close"
    btn.appendChild(closeBtn)

    contactInfo.appendChild(btn)
    main.appendChild(contactInfo)

}