//This file listens for when the submit button is pressed. When it is triggered, a new contact should be POST-ed to the API.

const form = {
buildContactForm() {
    const formContainer = document.querySelector("#formContainer")

    formContainer.innerHTML = /*html*/ `
    <form action="">
    <h3>Add New Contact</h3>
    <input type="hidden" value="">
        <div> 
            <label for="">Name</label>
            <input type="text" value="">
            <label for="">Phone Number</label>
            <input type="text" value="">
            <label for="">Address</label>
            <input type="text" value="">  
        </div>  
      <button id="saveContactButton">Save</button>
    </form>`
    }
}

export default form