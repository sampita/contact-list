//This file builds elements for each person's name, phone number, and address

const contactElement = {
createContactElement(contact) {
return `
    <section>
        <h4>${contact.name}</h4>
        <p>${contact.phoneNumber}</p>
        <p>${contact.address}</p>
    </section>`
    }
}

export default contactElement