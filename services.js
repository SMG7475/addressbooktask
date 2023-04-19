function getAddressBookFromLocalStorage() {
    let stringifiedAddressBook = localStorage.getItem("addressBook");
    let parsedAddressBook = JSON.parse(stringifiedAddressBook);
    if (parsedAddressBook === null) {
        return [];
    } else {
        return parsedAddressBook;
    }
}
function getSpecificObject(id) {
    let addressBook = getAddressBookFromLocalStorage();
    let getSpecificContact = addressBook.filter(function (address) {
        return address.id == id
    })
    return getSpecificContact[0]
}
function deleteContact(id) {
    let addressBook = getAddressBookFromLocalStorage();
    let deleteUpdatedAddressBook = addressBook.filter(function (address) {
        return address.id != activeContact.id
    })
    localStorage.setItem("addressBook", JSON.stringify(deleteUpdatedAddressBook));
    return deleteUpdatedAddressBook
}
function addContact(contact){
    let addressBook = getAddressBookFromLocalStorage();
    addressBook.push(contact)
    localStorage.setItem("addressBook", JSON.stringify(addressBook));
}
function updateContact(id){
    let addressBook = getAddressBookFromLocalStorage();
    console.log(id,"yes")
    let editedAddressBook = addressBook.map(function (contact) {
        if (contact.id == id) {
            return {
                id: contact.id,
                name: $("#name").val(),
                email: $("#email").val(),
                mobile: $("#mobile").val(),
                landline: $("#landline").val(),
                website: $("#website").val(),
                address: $("#address").val(),
            }
        }
        return contact
    })
    localStorage.setItem("addressBook", JSON.stringify(editedAddressBook));
    return editedAddressBook
}
