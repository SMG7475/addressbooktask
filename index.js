const myServices = new Services();
var activeContact = null;
function onAddValidateInputs() {
    let onBtnId = event.target.id;
    let validName = inputValidations("name", $("#name").val());
    let validEmail = inputValidations("email", $("#email").val());
    let validMobile = inputValidations("mobile", $("#mobile").val());
    let validLandline = inputValidations("landline", $("#landline").val());
    let validWebsite = inputValidations("website", $("#website").val());
    let validAddress = inputValidations("address", $("#address").val());
    if (validName && validMobile && validEmail && validLandline && validWebsite && validAddress) {
        if (onBtnId == "form-add-button") {
            formAddButton()
        }
        else if (onBtnId == "form-update-button") {
            onUpdateContact()
        }
    }
}

function inputValidations(id, value) {
    //console.log(event)
    let inputId = id;
    let inputValue = value;
    if (id == undefined && value == undefined) {
        inputId = event.target.id;
        inputValue = event.target.value;
    }
    isvalidInput = false
    switch (inputId) {
        case "name":
            const nameRegex = /^[a-zA-Z]+$/
            if (inputValue.length == 0) {
                $("#name-errmsg").html("*Name is required")
                isvalidInput =  false;
            }
            else if (!nameRegex.test(inputValue)) {
                $(`#name-errmsg`).html("*Enter a Valid Name");
                isvalidInput =  false
            }
            else {
                isvalidInput =  true
            }
            break;
        case "email":
            const emailRegex = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/
            if (inputValue.length == 0) {
                isvalidInput =  false;
            }
            if (!emailRegex.test(inputValue)) {
                $("#email-errmsg").html("*Enter a Valid Email")
                isvalidInput =  false;
            }
            else {
                isvalidInput =  true
            }
            break;
        case "mobile":
            if (inputValue.length == 0) {
                $("#mobile-errmsg").html("*Mobile Number is required")
                isvalidInput =  false;
            }
            else if (inputValue.length != 10) {
                $("#mobile-errmsg").html("*Enter a valid Mobile Number");
                isvalidInput =  false;
            }
            else {
                isvalidInput =  true
            }
            break;
        case "landline":
            if (inputValue.length == 0) {
                isvalidInput =  false;
            }
            else {
                isvalidInput =  true
            }
            break;
        case "website":
            const websiteRegex = /\bhttps?:/
            if (inputValue.length == 0) {
                isvalidInput =  false;
            }
            else if (!websiteRegex.test(inputValue)) {
                $("#website-errmsg").html("Enter a Valid URL")
                isvalidInput =  false;
            }
            else {
                isvalidInput =  true
            }
            break;
        case "address":
            if (inputValue.length == 0) {
                isvalidInput =  false;
            }
            else {
                isvalidInput =  true
            }
            break;


    }
    //console.log(isvalidInput)
    isvalidInput ? $(`#${inputId}-errmsg`).hide() : $(`#${inputId}-errmsg`).show()
    return isvalidInput

}
function createAndAppendAddrress(address) {
    $("#contacts-list").append(`<li id="${address.id}"><h2>${address.name}</h2><p>${address.email}</p><p>+91 ${address.mobile}</p></li>`)
}
function toDeleteContact() {
    $("#show-contact-details-container").hide();
    $('#contacts-list li').removeClass("contacts-list-selected-items")
    let deleteUpdatedAddressBook = myServices.deleteContact(activeContact.id);
    $("#contacts-list").html("")
    deleteUpdatedAddressBook.map(createAndAppendAddrress)
}
function closeForm() {
    $("#add-address-form-container").hide();
    toBlankInputs()
    $('#contacts-list li').removeClass("contacts-list-selected-items")
}
function toBlankInputs() {
    $("#name").val("");
    $("#email").val("")
    $("#mobile").val("")
    $("#landline").val("")
    $("#website").val("")
    $("#address").val("")
    $("#name-errmsg").hide();
    $("#email-errmsg").hide();
    $("#mobile-errmsg").hide();
    $("#landline-errmsg").hide();
    $("#website-errmsg").hide();
    $("#address-errmsg").hide();
}
function onAddNavbar() {
    $("#show-contact-details-container").hide()
    toBlankInputs()
    $("#form-add-button").show();
    $("#form-update-button").hide()
    $("#add-address-form-container").show();
    $('#contacts-list li').removeClass("contacts-list-selected-items")
    //console.log(getSpecificObject())
}
function onHomeNavbar() {
    $("#show-contact-details-container").hide()
    $('#contacts-list li').removeClass("contacts-list-selected-items")
    $("#add-address-form-container").hide();
}
function onUpdateContact() {
    //let editedAddressBook = updateContact(updatedContact)
    let updatedContact = {
        id: activeContact.id,
        name: $("#name").val(),
        email: $("#email").val(),
        mobile: $("#mobile").val(),
        landline: $("#landline").val(),
        website: $("#website").val(),
        address: $("#address").val(),
    }
    let editedAddressBook = myServices.updateContact(updatedContact)
    $("#add-address-form-container").hide();
    $("#contacts-list").html("");
    editedAddressBook.map(createAndAppendAddrress)
}
function formAddButton() {
    $("#show-contact-details-container").show();
    let newName = $("#name").val();
    let newEmail = $("#email").val();
    let newMobile = $("#mobile").val();
    let newLandline = $("#landline").val();
    let newWebsite = $("#website").val();
    let newAddress = $("#address").val();
    let newAddressToAdd = {
        id: new Date().getTime(),
        name: newName,
        email: newEmail,
        mobile: newMobile,
        landline: newLandline,
        website: newWebsite,
        address: newAddress
    }
    myServices.addContact(newAddressToAdd);
    createAndAppendAddrress(newAddressToAdd)
    toBlankInputs()
    $("#add-address-form-container").hide();
    $("#show-contact-details-container").hide();
}

function onEdit() {
    $("#form-add-button").hide();
    $("#form-update-button").show();
    $("#show-contact-details-container").hide();
    $("#add-address-form-container").show();
    $("#name").val(activeContact.name);
    $("#email").val(activeContact.email);
    $("#mobile").val(activeContact.mobile);
    $("#landline").val(activeContact.landline);
    $("#website").val(activeContact.website);
    $("#address").val(activeContact.address);
}
$(document).ready(function () {
    $("#show-contact-details-container").hide()
    var addressBook = myServices.getAddressBookFromLocalStorage();
    addressBook.map(createAndAppendAddrress)
    $("#contacts-list").on('click', 'li', function () {
        $("#show-contact-details-container").show();
        $('#contacts-list li').addClass("contacts-list-normal-items")
        $('#contacts-list li').removeClass("contacts-list-selected-items")
        $(this).addClass("contacts-list-selected-items")
        $("#add-address-form-container").hide()
        var activeContactId = $(this).attr("id")
        activeContact = myServices.getSpecificObject(activeContactId)
        $("#show-name").html(`${activeContact.name}`)
        $("#show-email").html(`Email: ${activeContact.email}`)
        $("#show-mobile").html(`Mobile: ${activeContact.mobile}`)
        $("#show-landline").html(`Landline: ${activeContact.landline}`)
        $("#show-website").html(`Website: ${activeContact.website}`)
        $("#show-address").html(`Address: ${activeContact.address}`)
    })
})
