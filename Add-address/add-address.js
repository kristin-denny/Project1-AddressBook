// function intializeStorage(){
//     if(localStorage.length == 0){
//         const addressBook = [];
//         localStorage.setItem("addressBook"), JSON.stringify(addressBook);

//     }

// }

document
  .getElementById("addressEntry")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const addressBook = JSON.parse(localStorage.getItem("addressBook")) || [];

    let nameToSave = document.getElementById("name").value;
    let phoneNumberToSave = document.getElementById("phoneNumber").value;
    let streetAddressToSave = document.getElementById("streetAddress").value;
    let cityToSave = document.getElementById("city").value;
    let stateToSave = document.getElementById("state").value;

    const addressEntry = {
      name: nameToSave,
      phoneNumber: phoneNumberToSave,
      streetAddress: streetAddressToSave,
      city: cityToSave,
      state: stateToSave,
    };

    addressBook.push(addressEntry);

    localStorage.setItem("addressBook", JSON.stringify(addressBook));
    window.location.assign("./Additional/additional.html");
  });

//intializeStorage();
