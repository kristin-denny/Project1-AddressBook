const mainPiece = document.querySelector('main');

function printAddress(infoToAppend, indexOfItem){

    const cardBase = document.createElement('article');
    cardBase.classList.add('card');
    

    const nameHeader = document.createElement('h2');
    nameHeader.textContent = "Name";
    const nameToAdd = document.createElement('p');
    nameToAdd.textContent = infoToAppend.name;

    const phoneHeader = document.createElement('h2');
    phoneHeader.textContent = "Phone Number";
    const phoneToAdd = document.createElement('p');
    const phoneText = infoToAppend.phoneNumber;
    phoneToAdd.textContent = phoneText;
    phoneToAdd.setAttribute('id', "phone");

    const streetHeader = document.createElement('h2');
    streetHeader.textContent = "Street Address";
    const streetToAdd = document.createElement('p');
    streetToAdd.textContent = infoToAppend.streetAddress;

    const cityHeader = document.createElement('h2');
    cityHeader.textContent = "City";
    const cityToAdd = document.createElement('p');
    cityToAdd.textContent = infoToAppend.city;

    const stateHeader = document.createElement('h2');
    stateHeader.textContent = "State";
    const stateToAdd = document.createElement('p');
    stateToAdd.textContent = infoToAppend.state;

    mainPiece.appendChild(cardBase);
    cardBase.appendChild(nameHeader);
    cardBase.appendChild(nameToAdd);
    cardBase.appendChild(phoneHeader);
    cardBase.appendChild(phoneToAdd);
    cardBase.appendChild(streetHeader);
    cardBase.appendChild(streetToAdd);
    cardBase.appendChild(cityHeader);
    cardBase.appendChild(cityToAdd);
    cardBase.appendChild(stateHeader);
    cardBase.appendChild(stateToAdd);
    
    localStorage.setItem(phoneText, indexOfItem);

};

document.getElementById("Edit").addEventListener("click", function (event) {
    event.preventDefault();
    let keyId = document.getElementById("phone");
    let key = keyId.value;
    const indexOfEdit = localStorage.getItem(key);
    editEntry(indexOfEdit);
    window.location.assign("./Edit/edit.html");
     

});

document.getElementById("Delete").addEventListener("click", function (event) {
    event.preventDefault();
    let keyId = document.getElementById("phone");
    let key = keyId.value;
    const indexOfDelete = localStorage.getItem(key);
    const addressBook = JSON.parse(localStorage.getItem("addressBook"));
    addressBook.splice(indexOfDelete, 1);
    localStorage.setItem("addressBook", JSON.stringify(addressBook));
    window.location.assign("./index.html");
     


});

    