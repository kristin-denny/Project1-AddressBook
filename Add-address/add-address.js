

document.getElementById("addressEntry").addEventListener("submit", function (event) {
    event.preventDefault();

    nameToSave = document.getElementById("name").value;
    phoneNumberToSave =  document.getElementById("phoneNumber").value;
    streetAddressToSave = document.getElementById("streetAddress").value;
    cityToSave = document.getElementById("city").value
    stateToSave = document.getElementById("state").value;

     
    const addressEntry = {
             name: nameToSave,
             phoneNumber: phoneNumberToSave,
             streetAddress:  streetAddressToSave,
             city: cityToSave,
             state: stateToSave
     
     }

     localStorage.setItem(addressEntry.name, JSON.stringify(addressEntry));

});