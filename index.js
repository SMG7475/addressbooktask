
$(document).ready(function(){
    
    function getAddressBookFromLocalStorage() {
        let stringifiedAddressBook = localStorage.getItem("addressBook");
        let parsedAddressBook = JSON.parse(stringifiedAddressBook);
        if (parsedAddressBook === null) {
            return [];
        } else {
            return parsedAddressBook;
        }
    }
    let addressBook = getAddressBookFromLocalStorage();
    var contactsList = $("#contactsList")
    $("#add-button").click(function(){
        $("#show-address-container").html("")
        $("#add-address-form-container").css("display","block")
        $('#contactsList li').css('background',"white")
        $("#form-add-button").css("display","block")
    })
    $("#home-button").click(function(){
        $("#show-address-container").html("")
        $('#contactsList li').css('background',"white");
        $("#add-address-form-container").css("display","none")
    })
    $("#form-add-button").click(function(){
        $("#show-address-container").css("display","block");
        let newName = $("#name").val();
        let newEmail = $("#email").val();
        let newMobile = $("#mobile").val();
        let newLandline = $("#landline").val();
        let newWebsite = $("#website").val();
        let newAddress = $("#address").val();
        let newAddressToAdd = {
        id : new Date().getTime(),
        name:newName,
        email:newEmail,
        mobile: newMobile,
        landline: newLandline,
        website: newWebsite,
        address: newAddress
    }
    addressBook.push(newAddressToAdd)   
    localStorage.setItem("addressBook", JSON.stringify(addressBook));
    createAndAppendAddrress(newAddressToAdd)
    $("#name").val("");
    $("#email").val("")
    $("#mobile").val("")
    $("#landline").val("")
    $("#website").val("")
    $("#address").val("")    
    $("#add-address-form-container").css("display","none");
    })
    function createAndAppendAddrress(address){
        let {id, name, email,mobile} = address 
        $("#contactsList").append(`<li id="${id}"><h2>${name}</h2><p>${email}</p><p>+91 ${mobile}</p></li>`)
    }
    $("#contactsList").on('click' , 'li' , function(){
        $("#show-address-container").html("")
        $("#show-address-container").css("display","block");
        $('#contactsList li').css('background',"white")
        $(this).css("background",'#cee7f2');
        $("#add-address-form-container").css("display","none")
        var activeContactId = $(this).attr("id")
        var activeContact = addressBook.filter(function(address){
            return address.id == activeContactId
        })
        $("#show-address-container").append(`
            <div class="address-name-buttons-container">
               <h2>${activeContact[0].name}</h2>
               <div>
                   <button type="button" id="edit-address-button"><img src="./edit1.jpg" /><span>EDIT</span></button>
                   <button type="button" id="detele-address-button"><img src="./delete2.png" /><span>DELETE</span></button>
               </div>
            </div>
            <p>Email: ${activeContact[0].email}</p>
            <div>
               <p>Mobile: +91 ${activeContact[0].mobile}</p>
               <p>Landline: ${activeContact[0].landline}</p>
            </div>
            <p>Website: ${activeContact[0].website}</p>
            <p>Address: ${activeContact[0].address}</p>
        `)
        $("#detele-address-button").on("click",function(){
            $("#show-address-container").html("")
            $('#contactsList li').css('background',"white")
            let deleteUpdatedAddressBook = addressBook.filter(function(address){
                return address.id != activeContactId
            })
            localStorage.setItem("addressBook", JSON.stringify(deleteUpdatedAddressBook));
            $("#contactsList").html("")
            for (address of deleteUpdatedAddressBook){
                createAndAppendAddrress(address)
            }
        })
        // $("#edit-address-button").on("click",function(){
        //     $("#show-address-container").css("display","none");
        //     $("#add-address-form-container").css("display","block");
        //     $("#form-add-button").css("display","none")
        //     $("#edit-add-btn-container").html("");
        //     $("#edit-add-btn-container").append(`<button id="edit-add-button" type="button">ADD</button>`);
        //     let geteAddressToEdit = addressBook.filter(function(address){
        //         return address.id == activeContactId
        //     })
        //     $("#name").val(geteAddressToEdit[0].name);
        //     $("#email").val(geteAddressToEdit[0].email)
        //     $("#mobile").val(geteAddressToEdit[0].mobile)
        //     $("#landline").val(geteAddressToEdit[0].landline)
        //     $("#website").val(geteAddressToEdit[0].website)
        //     $("#address").val(geteAddressToEdit[0].address)
        //     $("#edit-add-button").on("click",function(){
        //         let editedName = $("#name").val();
        //         let editedEmail = $("#email").val();
        //         let editedMobile = $("#mobile").val();
        //         let editedLandline = $("#landline").val();
        //         let editedWebsite = $("#website").val();
        //         let editedAddress = $("#address").val();
        //         let editedAddressItem = {
        //             id: geteAddressToEdit[0].id,
        //             name: editedName,
        //             email : editedEmail,
        //             mobile : editedMobile,
        //             landline : editedLandline,
        //             website : editedWebsite,
        //             address : editedAddress
        //         }  
        //         let filteredToEditAddressBookList = addressBook.filter(function(address){
        //             return address.id != geteAddressToEdit[0].id
        //         })
        //         filteredToEditAddressBookList.push(editedAddressItem)
        //         localStorage.setItem("addressBook",JSON.stringify(filteredToEditAddressBookList))
        //         $("#contactsList").html("")
        //         let updatedEditedAddresBook = JSON.parse(localStorage.getItem("addressBook"))
        //         console.log(updatedEditedAddresBook)
        //         for (address of updatedEditedAddresBook){
        //             createAndAppendAddrress(address)
        //         }
        //         $('#contactsList li').css('background',"white")
        //         $("#add-address-form-container").css("display","none")
        //     })
        // })

        
    })
    function loadContacts(addressList){
        for (address of addressBook){
            createAndAppendAddrress(address)
        }
    }
    loadContacts(addressBook)
})
