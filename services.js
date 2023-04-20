// class Services{
//     myMethod() {
//         console.log('Hello, world!');
//       }
// }
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
        return address.id != id
    })
    localStorage.setItem("addressBook", JSON.stringify(deleteUpdatedAddressBook));
    return deleteUpdatedAddressBook
}
function addContact(contact){
    let addressBook = getAddressBookFromLocalStorage();
    addressBook.push(contact)
    localStorage.setItem("addressBook", JSON.stringify(addressBook));
}
function updateContact(contact){
    let addressBook = getAddressBookFromLocalStorage();
    let editedAddressBook = addressBook.map(function (address) {
        if (address.id == contact.id) {
            return contact
        }
        return address
    })
    localStorage.setItem("addressBook", JSON.stringify(editedAddressBook));
    return editedAddressBook
}
