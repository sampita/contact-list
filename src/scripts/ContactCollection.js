//This file manages loading and saving contacts from the API

const data = {
saveEntry(newContactObject) {
    return fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newContactObject)
    })
        .then(contacts => contacts.json())
    },

retrieveAllContacts() {
    return fetch("http://localhost:8088/contacts")
        .then(contacts => contacts.json())
    }
}

export default data