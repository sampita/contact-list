import form from "./ContactForm.js"
import list from "./ContactList.js"
import data from "./ContactCollection.js"

//This file is where everything is executed

//build add new contact form
form.buildContactForm()


//event listener to add and save new contact to API on button click

//fetch call to get info from API
data.retrieveAllContacts()
    .then(contacts => list.renderContactListToDom(contacts))
    .then(form.saveContactButtonHandler)


