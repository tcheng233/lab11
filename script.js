// Example contact objects
// Q1
let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
  ]

const main = document.querySelector(".main")

function cleanUpIndex() {
    // Delete every child
    while (main.lastChild) {
        main.lastChild.remove()
    }
    
}

// Please use as createSingleIndex("Tony Cheng")
// or createSingleIndex(contactList[0].name)
function createSingleIndex(name) {
    // Create single card
    const cardLink = document.createElement("a")
    cardLink.href = "page3.html"
    const cardDiv = document.createElement("div")
    cardDiv.className = "contact"
    const para = document.createElement("p")
    para.innerHTML = name
    cardDiv.appendChild(para)
    cardLink.appendChild(cardDiv)
    // Q4
    cardLink.addEventListener("click",(event)=>{
        contactList.forEach((person)=>{
            if (person.name == name){
                cleanUpIndex()
                renderView(person)
                event.preventDefault()
            }

        })
    })
    return cardLink

}

// Please use as renderIndex(contactList)
function renderIndex (contactList) {
    // Create single card for everyone in the list
    contactList.forEach(person => {
        const card = createSingleIndex(person.name)
        main.appendChild(card)
    })
}

function cleanUpView () {
    // Delete every child
    while (main.lastChild) {
        main.lastChild.remove()
    }
}

// Please use as renderView(contactList[0])
function renderView (contact) {
    // Create contact info container
    const contactInfo = document.createElement("div")
    contactInfo.className = "contactinfo"

    // Create name 
    const contactName = document.createElement("div")
    contactName.className = "contactname"
    contactName.innerHTML = contact.name
    // Create profile pic
    const profilePic = document.createElement("img")
    profilePic.src = "./img/profile.jpg"
    profilePic.className = "profilepic"
    profilePic.alt = "Profile picture"
    contactName.appendChild(profilePic)
    contactInfo.appendChild(contactName)

    // Create email
    const contactEmail = document.createElement("div")
    contactEmail.className = "contactemail"
    contactEmail.innerHTML = "email: " + contact.email
    contactInfo.appendChild(contactEmail)
    
    // Create phone
    const contactPhone = document.createElement("div")
    contactPhone.className = "contactphone"
    contactPhone.innerHTML = "cell: " + contact.phone
    contactInfo.appendChild(contactPhone)

    // Create address
    const contactAddress = document.createElement("div")
    contactAddress.className = "contactaddress"
    contactAddress.innerHTML = "address: " + contact.address
    contactInfo.appendChild(contactAddress)

    // Create 2 button, edit and close
    const btn = document.createElement("div")
    btn.className = "buttons"
    // Edit button
    const editBtn = document.createElement("button")
    editBtn.className = "button edit"
    editBtn.value = "Edit"
    editBtn.innerHTML = "Edit"
    btn.appendChild(editBtn)
    // Close button
    const closeBtn = document.createElement("button")
    closeBtn.className = "button close"
    closeBtn.value = "Close"
    closeBtn.innerHTML = "Close"
    btn.appendChild(closeBtn)
    // Q5
    closeBtn.addEventListener("click", (event)=>{
        cleanUpIndex()
        renderIndex(contactList)
        event.preventDefault()
    })

    contactInfo.appendChild(btn)
    main.appendChild(contactInfo)

}

function cleanUpCreate () {
    // Delete every child
    while (main.lastChild) {
        main.lastChild.remove()
    }
}

function renderCreate () {
    const contactEdit = document.createElement("div")
    contactEdit.className= "contactedit"
    main.appendChild(contactEdit)

    // Create profile picture
    const contactImgDiv = document.createElement("div")
    contactImgDiv.className= "contactimg"
    contactEdit.appendChild(contactImgDiv)
    const profilePicImg = document.createElement("img")
    profilePicImg.src = "./img/profile.jpg"
    profilePicImg.className = "profilepic"
    profilePicImg.alt = "Profile picture"
    contactImgDiv.appendChild(profilePicImg)

    // Create form
    const formDiv = document.createElement("div")
    formDiv.className = "form"
    contactEdit.appendChild(formDiv)
    const form = document.createElement("form")
    formDiv.appendChild(form)

    // Create form element
    // Create input name and add button
    const nameContainer = document.createElement("div")
    nameContainer.className = "inputcontainer"
    form.appendChild(nameContainer)
    const nameInput = document.createElement("input")
    nameInput.type="text" 
    nameInput.id="contactname" 
    nameInput.name="contactname" 
    nameInput.placeholder="Contact Name"
    nameContainer.appendChild(nameInput)
    const nameBtn = document.createElement("button")
    nameBtn.className="extrafield" 
    nameBtn.id="extranamefield" 
    nameBtn.name="extranamefield"
    nameBtn.innerHTML = "+"
    nameContainer.appendChild(nameBtn)

    // Create input phone and add button
    const phoneContainer = document.createElement("div")
    phoneContainer.className = "inputcontainer"
    form.appendChild(phoneContainer)
    const phoneInput = document.createElement("input")
    phoneInput.type="tel" 
    phoneInput.id="contactphone" 
    phoneInput.name="contactphone" 
    phoneInput.placeholder="Contact Phone"
    phoneContainer.appendChild(phoneInput)
    const phoneBtn = document.createElement("button")
    phoneBtn.className="extrafield" 
    phoneBtn.id="extraphonefield" 
    phoneBtn.name="extraphonefield"
    phoneBtn.innerHTML = "+"
    phoneContainer.appendChild(phoneBtn)

    // Create input address and add button
    const addressContainer = document.createElement("div")
    addressContainer.className = "inputcontainer"
    form.appendChild(addressContainer)
    const addressInput = document.createElement("input")
    addressInput.type="tel" 
    addressInput.id="contactaddress" 
    addressInput.name="contactaddress" 
    addressInput.placeholder="Contact Address"
    addressContainer.appendChild(addressInput)
    const addressBtn = document.createElement("button")
    addressBtn.className="extrafield" 
    addressBtn.id="extraaddressfield" 
    addressBtn.name="extraaddressfield"
    addressBtn.innerHTML = "+"
    addressContainer.appendChild(addressBtn)

    // Create input email and add button
    const emailContainer = document.createElement("div")
    emailContainer.className = "inputcontainer"
    form.appendChild(emailContainer)
    const emailInput = document.createElement("input")
    emailInput.type="tel" 
    emailInput.id="contactemail" 
    emailInput.name="contactemail" 
    emailInput.placeholder="Contact Email"
    emailContainer.appendChild(emailInput)
    const emailBtn = document.createElement("button")
    emailBtn.className="extrafield" 
    emailBtn.id="extraemailfield" 
    emailBtn.name="extraemailfield"
    emailBtn.innerHTML = "+"
    emailContainer.appendChild(emailBtn)

    // Create 2 button, save and cancel
    const btnDiv = document.createElement("div")
    btnDiv.className = "buttons"
    form.appendChild(btnDiv)
    // save button
    const saveBtn = document.createElement("button")
    saveBtn.type = "submit" 
    saveBtn.className = "button save"
    saveBtn.id = "savecontact" 
    saveBtn.name = "savecontact"
    saveBtn.innerHTML = "Save Contact"
    btnDiv.appendChild(saveBtn)
    // Cancel button
    const cancelBtn = document.createElement("button")
    cancelBtn.type = "reset" 
    cancelBtn.className = "button cancel" 
    cancelBtn.id = "cancel" 
    cancelBtn.name = "cancel"
    cancelBtn.innerHTML = "Cancel"
    btnDiv.appendChild(cancelBtn)
}

// Q2
const navContact = document.querySelector("#contactshome")
navContact.addEventListener("click", (event)=>{
    cleanUpIndex()
    renderIndex(contactList)
    event.preventDefault()
})

// Q3
const navCreate = document.querySelector("#newcontact")
navCreate.addEventListener("click", (event)=>{
    cleanUpIndex()
    renderCreate()
    event.preventDefault()
})