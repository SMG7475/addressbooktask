const myServices = new Services();
var activeContact;
var fromEditAdd = false;
function onAddValidateInputs() {
    let onBtnId = event.target.id;
    let validName = inputValidations("name", $("#name").val());
    let validEmail = inputValidations("email", $("#email").val());
    let validMobile = inputValidations("mobile", $("#mobile").val());
    let validLandline = inputValidations("landline", $("#landline").val());
    let validWebsite = inputValidations("website", $("#website").val());
    let validAddress = inputValidations("address", $("#address").val());
    if (validName && validMobile && validEmail && validLandline && validWebsite && validAddress) {
        addAndEditButton()
    }
}

function inputValidations(id, value) {
    let inputId = id;
    let inputValue = value;
    if (id == undefined && value == undefined) {
        inputId = event.target.id;
        inputValue = event.target.value;
    }
    //console.log(event,inputId,inputValue)
    let isvalidInput = true
    switch (inputId) {
        case "name":
            const nameRegex = /^[a-zA-Z]+$/
            if (inputValue.length == 0) {
                $("#name-errmsg").html("*Name is required")
                isvalidInput = false;
            }
            else if (!nameRegex.test(inputValue)) {
                $(`#name-errmsg`).html("*Enter a Valid Name");
                isvalidInput = false
            }
            break;
        case "email":
            const emailRegex = /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/
            if (inputValue.length == 0) {
                isvalidInput = false;
            }
            else if (!emailRegex.test(inputValue)) {
                $("#email-errmsg").html("*Enter a Valid Email")
                isvalidInput = false;
            }
            break;
        case "mobile":
            const mobileRegex = /^[0-9]{10}?$/
            if (inputValue.length == 0) {
                $("#mobile-errmsg").html("*Mobile Number is required")
                isvalidInput = false;
            }
            else if (!mobileRegex.test(inputValue)) {
                $("#mobile-errmsg").html("*Enter a valid Mobile Number");
                isvalidInput = false;
            }
            break;
        case "landline":
            if (inputValue.length == 0) {
                isvalidInput = false;
            }
            break;
        case "website":
            const websiteRegex = /\bhttps?:/
            if (inputValue.length == 0) {
                isvalidInput = false;
            }
            else if (!websiteRegex.test(inputValue)) {
                $("#website-errmsg").html("Enter a Valid URL")
                isvalidInput = false;
            }
            break;
        case "address":
            if (inputValue.length == 0) {
                isvalidInput = false;
            }
            break;

    }
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
    $(`#${activeContact.id}`).remove();
    //$("#contacts-list").html("")
    //deleteUpdatedAddressBook.map(createAndAppendAddrress)
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
    onEditAdd = false
}
function onHomeNavbar() {
    $("#show-contact-details-container").hide()
    $('#contacts-list li').removeClass("contacts-list-selected-items")
    $("#add-address-form-container").hide();
}
function addAndEditButton() {
    //console.log(onEditAdd)
    if (fromEditAdd) {
        let updatedContact = {
            id: activeContact.id,
            name: $("#name").val(),
            email: $("#email").val(),
            mobile: $("#mobile").val(),
            landline: $("#landline").val(),
            website: $("#website").val(),
            address: $("#address").val(),
        }
        myServices.updateContact(updatedContact)
        $(`#${activeContact.id}`).html(`<h2>${updatedContact.name}</h2><p>${updatedContact.email}</p><p>+91 ${updatedContact.mobile}</p>`)
        //$("#add-address-form-container").hide();
        //$("#contacts-list").html("");
        //editedAddressBook.map(createAndAppendAddrress)
    } else {
        $("#show-contact-details-container").show();
        let newAddressToAdd = {
            id: new Date().getTime(),
            name: $("#name").val(),
            email: $("#email").val(),
            mobile: $("#mobile").val(),
            landline: $("#landline").val(),
            website: $("#website").val(),
            address: $("#address").val()
        }
        myServices.addContact(newAddressToAdd);
        createAndAppendAddrress(newAddressToAdd)
        toBlankInputs()
        //$("#add-address-form-container").hide();
        $("#show-contact-details-container").hide();
    }
    $("#add-address-form-container").hide();
    $('#contacts-list li').removeClass("contacts-list-selected-items")
}
// function onUpdateContact() {
//     //console.log(onEditAdd)
//     let updatedContact = {
//         id: activeContact.id,
//         name: $("#name").val(),
//         email: $("#email").val(),
//         mobile: $("#mobile").val(),
//         landline: $("#landline").val(),
//         website: $("#website").val(),
//         address: $("#address").val(),
//     }
//     let editedAddressBook = myServices.updateContact(updatedContact)
//     //$("#add-address-form-container").hide();
//     $("#contacts-list").html("");
//     editedAddressBook.map(createAndAppendAddrress)
// }
// function formAddButton() {
//     //console.log(onEditAdd)
//     $("#show-contact-details-container").show();
//     let newAddressToAdd = {
//         id: new Date().getTime(),
//         name: $("#name").val(),
//         email: $("#email").val(),
//         mobile: $("#mobile").val(),
//         landline: $("#landline").val(),
//         website: $("#website").val(),
//         address: $("#address").val()
//     }
//     myServices.addContact(newAddressToAdd);
//     createAndAppendAddrress(newAddressToAdd)
//     toBlankInputs()
//     //$("#add-address-form-container").hide();
//     $("#show-contact-details-container").hide();
// }

function onEdit() {
    $("#form-update-button").show();
    $("#show-contact-details-container").hide();
    $("#add-address-form-container").show();
    $("#name").val(activeContact.name);
    $("#email").val(activeContact.email);
    $("#mobile").val(activeContact.mobile);
    $("#landline").val(activeContact.landline);
    $("#website").val(activeContact.website);
    $("#address").val(activeContact.address);
    fromEditAdd = true
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
