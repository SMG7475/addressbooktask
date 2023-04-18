
$(document).ready(function () {
    var activeContact = null ;
    $("#name-errmsg").hide();
    $("#mobile-errmsg").hide();
    $("#show-contact-details-container").hide()
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
        if (mobileValue.length == "") {
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
    $("#form-add-button").on("click", function () {
        let validName = validateName()
        let validMobile = validateMobile()
        if (validName && validMobile) {
            formAddButton()
            //console.log("add-button")
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
    function loadContacts(addressList) {
        for (address of addressBook) {
            createAndAppendAddrress(address)
        }
    }
    loadContacts(addressBook)
    $("#navbar-add-button").click(function () {
        $("#show-contact-details-container").hide()
        toBlankInputs()
        $("#form-add-button").show();
        $("#form-update-button").hide()
       // $("#show-contact-details-container").html("")
        $("#add-address-form-container").show();
        $('#contacts-list li').removeClass("contacts-list-selected-items")
    })
    $("#navbar-home-button").click(function () {
        $("#show-contact-details-container").hide()
       // console.log("navbar home")
        //$("#show-contact-details-container").html("")
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
       // $("#show-contact-details-container").html("")
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
        //console.log(activeContact)
        // $("#show-contact-details-container").append(`
        //     <div class="address-name-buttons-container">
        //        <h2>${activeContact[0].name}</h2>
        //        <div>
        //            <button type="button" id="edit-address-button"><img src="./edit1.jpg" /><span>EDIT</span></button>
        //            <button type="button" id="detele-address-button"><img src="./delete2.png" /><span>DELETE</span></button>
        //        </div>
        //     </div>
        //     <p>Email:  ${activeContact[0].email}</p>
        //     <div>
        //        <p>Mobile:  +91 ${activeContact[0].mobile}</p>
        //        <p>Landline:  ${activeContact[0].landline}</p>
        //     </div>
        //     <p>Website:  ${activeContact[0].website}</p>
        //     <p>Address:  ${activeContact[0].address}</p>
        // `)
        // $("#detele-address-button").on("click", function () {
        //     $("#show-contact-details-container").html("")
        //     $('#contacts-list li').removeClass("contacts-list-selected-items")
        //     let deleteUpdatedAddressBook = addressBook.filter(function (address) {
        //         return address.id != activeContactId
        //     })
        //     localStorage.setItem("addressBook", JSON.stringify(deleteUpdatedAddressBook));
        //     $("#contacts-list").html("")
        //     for (address of deleteUpdatedAddressBook) {
        //         createAndAppendAddrress(address)
        //     }
        // })
        // $("#edit-address-button").on("click", function () {
        //     console.log("edit")
        //     $("#form-add-button").hide();
        //     $("#form-update-button").show();
        //     $("#show-contact-details-container").hide();
        //     $("#add-address-form-container").show();
        //     var geteAddressToEdit = addressBook.filter(function (address) {
        //         return address.id == activeContactId
        //     })
        //     $("#name").val(geteAddressToEdit[0].name);
        //     $("#email").val(geteAddressToEdit[0].email);
        //     $("#mobile").val(geteAddressToEdit[0].mobile);
        //     $("#landline").val(geteAddressToEdit[0].landline);
        //     $("#website").val(geteAddressToEdit[0].website);
        //     $("#address").val(geteAddressToEdit[0].address);
        //     $("#form-update-button").on("click",function(){
        //         let addressBook = getAddressBookFromLocalStorage();
        //         let editedAddressBook = addressBook.map(function(contact){
        //             if (contact.id == geteAddressToEdit[0].id){
        //                 return {
        //                     id:contact.id,
        //                     name:$("#name").val(),
        //                     email:$("#email").val(),
        //                     mobile:$("#mobile").val(),
        //                     landline:$("#landline").val(),
        //                     website:$("#website").val(),
        //                     address:$("#address").val(),
        //                 }
        //             }
        //             return contact
        //         })
        //         localStorage.setItem("addressBook", JSON.stringify(editedAddressBook));
        //         //console.log(editedAddressBook)
        //         $("#add-address-form-container").hide();
        //         $("#contacts-list").html("");
        //         for (address of editedAddressBook) {
        //             createAndAppendAddrress(address)
        //         }
        //     })
        // })
        // $("#form-update-button").on("click",function(){
        //     let contactToEdit = activeContact;
        //    // console.log(contactToEdit)
        //     let addressBook = getAddressBookFromLocalStorage();
        //     let editedAddressBook = addressBook.map(function(contact){
        //         if (contact.id == contactToEdit[0].id){
        //             return {
        //                 id:contact.id,
        //                 name:$("#name").val(),
        //                 email:$("#email").val(),
        //                 mobile:$("#mobile").val(),
        //                 landline:$("#landline").val(),
        //                 website:$("#website").val(),
        //                 address:$("#address").val(),
        //             }
        //         }
        //         return contact
        //     })
        //     localStorage.setItem("addressBook", JSON.stringify(editedAddressBook));
        //     //console.log(editedAddressBook)
        //     $("#add-address-form-container").hide();
        //     $("#contacts-list").html("");
        //     for (address of editedAddressBook) {
        //         createAndAppendAddrress(address)
        //     }
        // })

    })
    $("#edit-address-button").on("click", function () {
        console.log("edit")
        $("#form-add-button").hide();
        $("#form-update-button").show();
        $("#show-contact-details-container").hide();
        $("#add-address-form-container").show();
        var geteAddressToEdit = addressBook.filter(function (address) {
            return address.id == activeContact[0].id
        })
        $("#name").val(geteAddressToEdit[0].name);
        $("#email").val(geteAddressToEdit[0].email);
        $("#mobile").val(geteAddressToEdit[0].mobile);
        $("#landline").val(geteAddressToEdit[0].landline);
        $("#website").val(geteAddressToEdit[0].website);
        $("#address").val(geteAddressToEdit[0].address);
        // $("#form-update-button").on("click", function () {
        //     let addressBook = getAddressBookFromLocalStorage();
        //     let editedAddressBook = addressBook.map(function (contact) {
        //         if (contact.id == geteAddressToEdit[0].id) {
        //             return {
        //                 id: contact.id,
        //                 name: $("#name").val(),
        //                 email: $("#email").val(),
        //                 mobile: $("#mobile").val(),
        //                 landline: $("#landline").val(),
        //                 website: $("#website").val(),
        //                 address: $("#address").val(),
        //             }
        //         }
        //         return contact
        //     })
        //     localStorage.setItem("addressBook", JSON.stringify(editedAddressBook));
        //     //console.log(editedAddressBook)
        //     $("#add-address-form-container").hide();
        //     $("#contacts-list").html("");
        //     for (address of editedAddressBook) {
        //         createAndAppendAddrress(address)
        //     }
        // })
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
        //console.log(editedAddressBook)
        $("#add-address-form-container").hide();
        $("#contacts-list").html("");
        for (address of editedAddressBook) {
            createAndAppendAddrress(address)
        }
    })
    $("#detele-address-button").on("click", function () {
        console.log(activeContact[0].id)
        $('#contacts-list li').removeClass("contacts-list-selected-items")
        let deleteUpdatedAddressBook = addressBook.filter(function (address) {
            return address.id != activeContact[0].id
        })
        localStorage.setItem("addressBook", JSON.stringify(deleteUpdatedAddressBook));
        $("#contacts-list").html("")
        for (address of deleteUpdatedAddressBook) {
            createAndAppendAddrress(address)
        }
    })
    function toBlankInputs(){
        $("#name").val("");
        $("#email").val("")
        $("#mobile").val("")
        $("#landline").val("")
        $("#website").val("")
        $("#address").val("")
    }

})
