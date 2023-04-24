class Services {
    getAddressBookFromLocalStorage() {
        let stringifiedAddressBook = localStorage.getItem("addressBook");
        let parsedAddressBook = JSON.parse(stringifiedAddressBook);
        return parsedAddressBook ? parsedAddressBook : []
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
    addOrUpdateContact(contact) {
        let addressBook = this.getAddressBookFromLocalStorage();
        let contactInList = addressBook.filter(function (address) {
            return address.id == contact.id
        })
        if (contactInList.length === 0) {
            addressBook.push(contact)
            localStorage.setItem("addressBook", JSON.stringify(addressBook));
        } else {
            let editedAddressBook = addressBook.map(function (address) {
                return address.id == contact.id ? contact : address
            })
            localStorage.setItem("addressBook", JSON.stringify(editedAddressBook));
        }
    }
}
