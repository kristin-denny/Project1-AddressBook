const mainPiece = document.querySelector('main');
const indexOf = localStorage.getItem("foundAt");
const addressBook = JSON.parse(localStorage.getItem("addressBook"));

function editEntry(){
    
    const infoToAppend = addressBook[indexOf];

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
    
    cardBase.style.padding = "var(--bulma-card-header-padding)";
    cardBase.style.padding = "var(--bulma-card-content-padding)";

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

    nameHeader.classList.add("title", "is-5");
    phoneHeader.classList.add("title", "is-5");
    streetHeader.classList.add("title", "is-5");
    cityHeader.classList.add("title", "is-5");
    stateHeader.classList.add("title", "is-5");
  
    nameToAdd.classList.add("content");
    phoneToAdd.classList.add("content");
    streetToAdd.classList.add("content");
    cityToAdd.classList.add("content");
    stateToAdd.classList.add("content");
    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");


    document.getElementById("editInput").addEventListener("submit", function (event) {
        event.preventDefault();
        const searchChoice = document.getElementById("editDropDown");
        const editThis = document.getElementById("editBar");
        const objprop = searchChoice.value;
        const replaceWith = editThis.value;
        console.log(objprop);
        console.log(replaceWith);
        console.log(addressBook[indexOf][objprop]);

        addressBook[indexOf][objprop] = replaceWith;
        localStorage.setItem("addressBook", JSON.stringify(addressBook));
        location.reload();

    });
  

}

editEntry();