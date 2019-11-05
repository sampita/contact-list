//This file listens for when the submit button is pressed. When it is triggered, a new contact should be POST-ed to the API.
import data from "./ContactCollection.js"
import list from "./ContactList.js"

const form = {
    buildContactForm() {
        const formContainer = document.querySelector("#formContainer")

        formContainer.innerHTML = /*html*/ `
    <form action="" id="contactForm">
    <h3>Add New Contact</h3>
        <div> 
            <input type="hidden" value="" id="idInput">
            <label for="">Name</label>
            <input type="text" value="" id="nameInput">
            <label for="">Phone Number</label>
            <input type="text" value="" id="phoneInput">
            <label for="">Address</label>
            <input type="text" value="" id="addressInput">  
        </div>  
      <button id="saveContactButton">Save</button>
    </form>`
    },


    getEntryInput() {
        event.preventDefault()
        const id = document.querySelector("#idInput").value
        const name = document.querySelector("#nameInput").value
        const phoneNumber = document.querySelector("#phoneInput").value
        const address = document.querySelector("#addressInput").value

        return data.storeEntry({ id, name, phoneNumber, address })
        .then(data.retrieveAllContacts)
        .then(list.renderContactListToDom)
        .then(document.querySelector("#contactForm").reset());
    },

    saveContactButtonHandler() {
        const button = document.querySelector("#saveContactButton")

        button.addEventListener("click", form.getEntryInput)
    }
}

export default form