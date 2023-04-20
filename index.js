// const myInstance = new Services();
// myInstance.myMethod();
var activeContact = null;

// const form = $('form');



// form.addEventListener('submit', (event) => {

//     event.preventDefault();
//     const nameInput = $('#name');
//     const emailInput = $('#email');
//     const mobileInput = $('#mobile');
//     const landlineInput = $('#landline');
//     const websiteInput = $('#website');
//     const addressInput = $('#address');

//     const nameValue = nameInput.value.trim();
//     if (nameValue === '') {
//         $("#name-errmsg").html('Please enter your name.');
//         nameInput.focus();
//         return;
//     }
//     const nameRegex = /^[a-zA-Z\s'-]+$/;
//     if (!nameRegex.test(nameValue)) {
//         $("#name-errmsg").html('*Enter a valid name.');
//         nameInput.focus();
//         return;
//     }
//     if (nameValue.length < 3) {
//         $("#name-errmsg").html('*Enter a name that is greater than 3 characters.');
//         nameInput.focus();
//         return;
//     }
// })    


//     const emailValue = emailInput.value.trim();
//     if (emailValue === '') {
//         alert('Please enter your email address.');
//         emailInput.focus();
//         return;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emailValue)) {
//         alert('Please enter a valid email address.');
//         emailInput.focus();
//         return;
//     }
//     if (emailValue.length > 100) {
//         alert('Please enter an email address that is 100 characters or less.');
//         emailInput.focus();
//         return;
//     }


//     const mobileValue = mobileInput.value.trim();
//     if (mobileValue === '') {
//         alert('Please enter your mobile number.');
//         mobileInput.focus();
//         return;
//     }
//     const mobileRegex = /^\+?\d{1,3}[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/;
//     if (!mobileRegex.test(mobileValue)) {
//         alert('Please enter a valid mobile number.');
//         mobileInput.focus();
//         return;
//     }
//     if (mobileValue.length > 15) {
//         alert('Please enter a mobile number that is 15 characters or less.');
//         mobileInput.focus();
//         return;
//     }


//     const landlineValue = landlineInput.value.trim();
//     if (landlineValue !== '') {
//         const landlineRegex = /^\+?\d{1,3}[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/;
//         if (!landlineRegex.test(landlineValue)) {
//             alert('Please enter a valid landline number.');
//             landlineInput.focus();
//             return;
//         }
//         if (landlineValue.length > 15) {
//             alert('Please enter a landline number that is 15 characters or less.');
//             landlineInput.focus();
//             return;
//         }
//     }


//   const websiteValue = websiteInput.value.trim();
//   if (websiteValue === '') {
//     alert('Please enter your website URL.');
//     websiteInput.focus();
//     return;
//   }
//   const websiteRegex = /^(https?:\/\/)?[^\s\/]+(\.[^\s\/]+)+[^\s]*$/;
//   if (!websiteRegex.test)
////
function validateName() {
    let nameValue = $("#name").val();
    if (nameValue.length == 0) {
        $("#name-errmsg").show();
        $("#name-errmsg").html("*Name is required")
        return false;
    }
    else if (nameValue.length < 3 ) {
        $("#name-errmsg").show();
        $("#name-errmsg").html("*length of name must be greater than 3 characters");
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
// function inputValidations(){
//     let inputId = event.target.id;
//     let inputValue = event.target.value;
//     //console.log(inputId,inputValue)
//     switch (inputId){
//         case "name":
//             if (inputValue.length == 0) {
//                 $("#name-errmsg").show();
//                 $("#name-errmsg").html("*Name is required")
//                 return false;
//             }
//             else if (inputValue.length < 3) {
//                 $("#name-errmsg").show();
//                 $("#name-errmsg").html("*length of username must be greater than 3 characters");
//                 return false;
//             }
//             else {
//                 $("#name-errmsg").hide();
//                 return true
//             }
//         case "email":
//             if (inputValue.length == 0){
//                 $("#email-errmsg").show();
//                 return false
//             }
//             else if (inputValue.includes("@") == false){
//                 $("#email-errmsg").show();
//                 $("#email-errmsg").html("*Enter a Valid Email")
//                 return false
//             }
//             else {
//                 $("#email-errmsg").hide();
//                 return true
//             }
//         case "mobile":
//             if (inputValue.length == 0) {
//                 $("#mobile-errmsg").show()
//                 $("#mobile-errmsg").html("*Mobile Number is required")
//                 return false
//             }
//             else if (inputValue.length != 10) {
//                 $("#mobile-errmsg").show();
//                 $("#mobile-errmsg").html("*Enter a valid Mobile Number");
//                 return false
//             }
//             else {
//                 $("#mobile-errmsg").hide();
//                 return true
//             }
//         case "landline":
//             if (inputValue.length == 0) {
//                 $("#landline-errmsg").show();
//                 return false
//             }
//             $("#landline-errmsg").hide();
//             return true
//         case "website":
//             if (inputValue.length == 0){
//                 $("#website-errmsg").show();
//                 return false
//             }
//             $("#website-errmsg").hide();
//             return true
//         case "address":
//             if (inputValue.length == 0){
//                 $("#address-errmsg").show();
//                 return false
//             }
//             $("#address-errmsg").hide();
//             return true

//     }    

// }
function createAndAppendAddrress(address) {
    $("#contacts-list").append(`<li id="${address.id}"><h2>${address.name}</h2><p>${address.email}</p><p>+91 ${address.mobile}</p></li>`)
}
function toDeleteContact() {
    $("#show-contact-details-container").hide();
    $('#contacts-list li').removeClass("contacts-list-selected-items")
    let deleteUpdatedAddressBook = deleteContact(activeContact.id);
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
    let editedAddressBook = updateContact(updatedContact)
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
    addContact(newAddressToAdd);
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
function onAddContact() {
    let validName = validateName()
    let validMobile = validateMobile()
    let validEmail = validateEmail()
    let validLandline = validateLandline()
    let validWebsite = validateWebsite()
    let validAddress = validateAddress()
    if (validName && validMobile && validEmail && validLandline && validWebsite && validAddress) {
        formAddButton()
    }
}
$(document).ready(function () {

    // $("#form-add-button").on('click', (event) => {

    //     event.preventDefault();
    //     let nameInput = $('#name').val();
    //     let emailInput = $('#email').val();
    //     let mobileInput = $('#mobile').val();
    //     let landlineInput = $('#landline').val();
    //     let websiteInput = $('#website').val();
    //     let addressInput = $('#address').val();
    //     let nameValue = nameInput.trim();
    //     const nameRegex = /^[a-zA-Z\s'-]+$/;
    //     const mobileRegex = /^\+?\d{1,3}[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/;
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (nameValue === '') {
    //         $("#name-errmsg").show();
    //         $("#name-errmsg").html('Please enter your name.');
    //     }
    //     else if (!nameRegex.test(nameValue)) {
    //         $("#name-errmsg").show();
    //         $("#name-errmsg").html('*Enter a valid name.');
    //     }
    //     else{
    //         $("#name-errmsg").hide();
    //     }

    //     const mobileValue = mobileInput.trim();
    //     if (mobileValue === '') {
    //         $("#mobile-errmsg").show();
    //         $('#mobile-errmsg').html('Please enter your mobile number.');
    //     } else if (mobileValue.length == 10) {
    //         $("#mobile-errmsg").show();
    //         $('#mobile-errmsg').html('Please enter a mobile number that is 15 characters or less.');
    //     }
    //     else if (!mobileRegex.test(mobileValue)) {
    //         $("#mobile-errmsg").show();
    //         $('#mobile-errmsg').html('Please enter a valid mobile number.');
    //     }
    //     else{
    //         $("#mobile-errmsg").hide();
    //     }
    //     const emailValue = emailInput.trim();
    //     if (emailValue === '') {
    //         $("#email-errmsg").html('Please enter your email address.');
    //         $("#email-errmsg").show();
    //     }
    //     else if (!emailRegex.test(emailValue)) {
    //         $("#email-errmsg").html('Please enter a valid email address.');
    //         $("#email-errmsg").show();
       
    //     }
    //     else{
    //         $("#email-errmsg").hide();
    //     }
        
    // })
    $("#show-contact-details-container").hide()
    var addressBook = getAddressBookFromLocalStorage();
    addressBook.map(createAndAppendAddrress)
    $("#contacts-list").on('click', 'li', function () {
        $("#show-contact-details-container").show();
        $('#contacts-list li').addClass("contacts-list-normal-items")
        $('#contacts-list li').removeClass("contacts-list-selected-items")
        $(this).addClass("contacts-list-selected-items")
        $("#add-address-form-container").hide()
        var activeContactId = $(this).attr("id")
        activeContact = getSpecificObject(activeContactId)
        $("#show-name").html(`${activeContact.name}`)
        $("#show-email").html(`Email: ${activeContact.email}`)
        $("#show-mobile").html(`Mobile: ${activeContact.mobile}`)
        $("#show-landline").html(`Landline: ${activeContact.landline}`)
        $("#show-website").html(`Website: ${activeContact.website}`)
        $("#show-address").html(`Address: ${activeContact.address}`)
    })
})
