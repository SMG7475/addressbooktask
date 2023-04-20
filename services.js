class Services {
    getAddressBookFromLocalStorage() {
        let stringifiedAddressBook = localStorage.getItem("addressBook");
        let parsedAddressBook = JSON.parse(stringifiedAddressBook);
        if (parsedAddressBook === null) {
            return [];
        } else {
            return parsedAddressBook;
        }
    } 
    getSpecificObject(id) {
        let addressBook = this.getAddressBookFromLocalStorage();
        let getSpecificContact = addressBook.filter(function (address) {
            return address.id == id
        })
        return getSpecificContact[0]
    }
    deleteContact(id) {
        let addressBook = this.getAddressBookFromLocalStorage();
        let deleteUpdatedAddressBook = addressBook.filter(function (address) {
            return address.id != id
        })
        localStorage.setItem("addressBook", JSON.stringify(deleteUpdatedAddressBook));
        return deleteUpdatedAddressBook
    }
    addContact(contact) {
        let addressBook = this.getAddressBookFromLocalStorage();
        addressBook.push(contact)
        localStorage.setItem("addressBook", JSON.stringify(addressBook));
    }
    updateContact(contact) {
        let addressBook = this.getAddressBookFromLocalStorage();
        let editedAddressBook = addressBook.map(function (address) {
            if (address.id == contact.id) {
                return contact
            }
            return address
        })
        localStorage.setItem("addressBook", JSON.stringify(editedAddressBook));
        return editedAddressBook
    }
}





