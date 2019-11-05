import form from "./ContactForm"
import list from "./ContactList"
import data from "./ContactCollection"

//This file is where everything is executed

//build add new contact form
form.buildContactForm()


//event listener to add and save new contact to API on button click

//fetch call to get info from API
data.retrieveAllContacts()
    .then(contacts => list.renderContactListToDom(contacts))

//build contact list
// list.renderContactListToDom()
