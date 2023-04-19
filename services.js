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
}
function addContact(contact){
    let addressBook = getAddressBookFromLocalStorage();
    addressBook.push(contact)
    localStorage.setItem("addressBook", JSON.stringify(addressBook));
}
