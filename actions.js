function getAddressBookFromLocalStorage() {
    let stringifiedAddressBook = localStorage.getItem("addressBook");
    let parsedAddressBook = JSON.parse(stringifiedAddressBook);
    if (parsedAddressBook === null) {
        return [];
    } else {
        return parsedAddressBook;
    }
}