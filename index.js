function validateName() {
    let nameValue = $("#name").val();
    if (nameValue.length == 0) {
        $("#name-errmsg").show();
        $("#name-errmsg").html("*Name is required")
        return false;
    }
    else if (nameValue.length < 3 || nameValue.length > 50) {
        $("#name-errmsg").show();
        $("#name-errmsg").html("*length of username must be greater than 3 characters");
        return false;
    }
    else {
        $("#name-errmsg").hide();
        return true
    }
}
function validateMobile() {
    let mobileValue = $("#mobile").val();
    if (mobileValue.length == 0) {
        $("#mobile-errmsg").show()
        $("#mobile-errmsg").html("*Mobile Number is required")
    }
    else if (mobileValue.length != 10) {
        $("#mobile-errmsg").show();
        $("#mobile-errmsg").html("*Enter a valid Mobile Number");
    }
    else {
        $("#mobile-errmsg").hide();
        return true
    }

}
function validateEmail(){
    let emailValue = $("#email").val();
    if (emailValue.length == 0){
        $("#email-errmsg").show();
        return false
    }
    else if (emailValue.includes("@") == false){
        $("#email-errmsg").show();
        $("#email-errmsg").html("Enter a Valid Email")
        return false
    }
    else{
        $("#email-errmsg").hide();
        return true
    }
}
function validateLandline(){
    let landlineValue = $("#landline").val();
    if (landlineValue.length == 0){
        $("#landline-errmsg").show();
        return false
    }
    $("#landline-errmsg").hide();
    return true
}
function validateWebsite(){
    let websiteValue = $("#website").val();
    if (websiteValue.length == 0){
        $("#website-errmsg").show();
        return false
    }
    $("#website-errmsg").hide();
    return true
}
function validateAddress(){
    let addressValue = $("#address").val();
    if (addressValue.length == 0){
        $("#address-errmsg").show();
        return false
    }
    $("#address-errmsg").hide();
    return true
}
// function inputValidations(nameInput,emailInput,mobileInput,landlineInput,websiteInput,addressInput){
//     let allInputsValid = true;
//     if (nameInput.length == 0){
//         $("#name-errmsg").show();
//         allInputsValid = false;
//     }
//     if (emailInput.length == 0){
//         $("#email-errmsg").show()
//         allInputsValid = false;
//     }
// }
$(document).ready(function () {
    var activeContact = null;
    // $("#name-errmsg").hide();
    // $("#mobile-errmsg").hide();
    // $("#email-errmsg").hide();
    // $("#landline-errmsg").hide();
    $("#show-contact-details-container").hide()
    $("#form-add-button").on("click", function () {
        let validName = validateName()
        let validMobile = validateMobile()
        let validEmail = validateEmail()
        let validLandline = validateLandline()
        let validWebsite = validateWebsite()
        let validAddress = validateAddress()
        if (validName && validMobile && validEmail && validLandline && validWebsite && validAddress) {
            formAddButton()
        }
    })
    $("#form-close-button").on("click", function () {
        $("#add-address-form-container").hide();
        toBlankInputs()
        $('#contacts-list li').removeClass("contacts-list-selected-items")
    })
    function getAddressBookFromLocalStorage() {
        let stringifiedAddressBook = localStorage.getItem("addressBook");
        let parsedAddressBook = JSON.parse(stringifiedAddressBook);
        if (parsedAddressBook === null) {
            return [];
        } else {
            return parsedAddressBook;
        }
    }
    var addressBook = getAddressBookFromLocalStorage();
    addressBook.map(createAndAppendAddrress)
    $("#navbar-add-button").click(function () {
        $("#show-contact-details-container").hide()
        toBlankInputs()
        $("#form-add-button").show();
        $("#form-update-button").hide()
        $("#add-address-form-container").show();
        $('#contacts-list li').removeClass("contacts-list-selected-items")
    })
    $("#navbar-home-button").click(function () {
        $("#show-contact-details-container").hide()
        $('#contacts-list li').removeClass("contacts-list-selected-items")
        $("#add-address-form-container").hide();
    })
    function formAddButton() {
        $("#show-contact-details-container").show();
        let newName = $("#name").val();
        let newEmail = $("#email").val();
        let newMobile = $("#mobile").val();
        let newLandline = $("#landline").val();
        let newWebsite = $("#website").val();
        let newAddress = $("#address").val();
        let addressBook = getAddressBookFromLocalStorage();
        let newAddressToAdd = {
            id: new Date().getTime(),
            name: newName,
            email: newEmail,
            mobile: newMobile,
            landline: newLandline,
            website: newWebsite,
            address: newAddress
        }
        addressBook.push(newAddressToAdd)
        localStorage.setItem("addressBook", JSON.stringify(addressBook));
        createAndAppendAddrress(newAddressToAdd)
        toBlankInputs()
        $("#add-address-form-container").hide();
        $("#show-contact-details-container").hide();
    }
    function createAndAppendAddrress(address) {
        let { id, name, email, mobile } = address
        $("#contacts-list").append(`<li id="${id}"><h2>${name}</h2><p>${email}</p><p>+91 ${mobile}</p></li>`)
    }
    $("#contacts-list").on('click', 'li', function () {
        $("#show-contact-details-container").show();
        $('#contacts-list li').addClass("contacts-list-normal-items")
        $('#contacts-list li').removeClass("contacts-list-selected-items")
        $(this).addClass("contacts-list-selected-items")
        $("#add-address-form-container").hide()
        var addressBook = getAddressBookFromLocalStorage();
        var activeContactId = $(this).attr("id")
        activeContact = addressBook.filter(function (address) {
            return address.id == activeContactId
        })
        $("#show-name").html(`${activeContact[0].name}`)
        $("#show-email").html(`Email: ${activeContact[0].email}`)
        $("#show-mobile").html(`Mobile: ${activeContact[0].mobile}`)
        $("#show-landline").html(`Landline: ${activeContact[0].landline}`)
        $("#show-website").html(`Website: ${activeContact[0].website}`)
        $("#show-address").html(`Address: ${activeContact[0].address}`)
    })
    $("#edit-address-button").on("click", function () {
        $("#form-add-button").hide();
        $("#form-update-button").show();
        $("#show-contact-details-container").hide();
        $("#add-address-form-container").show();
        let geteAddressToEdit = addressBook.filter(function (address) {
            return address.id == activeContact[0].id
        })
        $("#name").val(activeContact[0].name);
        $("#email").val(activeContact[0].email);
        $("#mobile").val(activeContact[0].mobile);
        $("#landline").val(activeContact[0].landline);
        $("#website").val(activeContact[0].website);
        $("#address").val(activeContact[0].address);
    })
    $("#form-update-button").on("click", function () {
        let addressBook = getAddressBookFromLocalStorage();
        let editedAddressBook = addressBook.map(function (contact) {
            if (contact.id == activeContact[0].id) {
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
        $("#add-address-form-container").hide();
        $("#contacts-list").html("");
        editedAddressBook.map(createAndAppendAddrress)
    })
    $("#detele-address-button").on("click", function () {
        $("#show-contact-details-container").hide();
        $('#contacts-list li').removeClass("contacts-list-selected-items")
        let addressBook = getAddressBookFromLocalStorage();
        let deleteUpdatedAddressBook = addressBook.filter(function (address) {
            return address.id != activeContact[0].id
        })
        console.log(deleteUpdatedAddressBook)
        localStorage.setItem("addressBook", JSON.stringify(deleteUpdatedAddressBook));
        $("#contacts-list").html("")
        deleteUpdatedAddressBook.map(createAndAppendAddrress)
    })
    function toBlankInputs() {
        $("#name").val("");
        $("#email").val("")
        $("#mobile").val("")
        $("#landline").val("")
        $("#website").val("")
        $("#address").val("")
    }

})
 