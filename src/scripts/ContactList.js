import contactElement from "./Contact"

//This file displays all contacts

const list = {
renderContactListToDom(contacts) {
    const listContainer = document.querySelector("#listContainer")
    //Create Contact List header
    listContainer.innerHTML = "<h3>Contact List</h3>"

    contacts.forEach(contact => {
        let contactElementHTML = contactElement.createContactElement(contact)
        listContainer.innerHTML += contactElementHTML
    });

}
}

export default list