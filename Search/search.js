const mainPiece = document.querySelector('main');


document.getElementById("searchInput").addEventListener("submit", function (event) {
    event.preventDefault();
    const searchChoice = document.getElementById("searchDropDown");
    let indexOfItem;
    //const findThis = document.getElementById("searchBar");
    const searchFor = searchChoice.value;
    const addressBook = JSON.parse(localStorage.getItem("addressBook"));
    
    const isThere = addressBook.find(function(element, index){ 
        if(searchFor in element){ 
            indexOfItem = index;
            return element;
        }else{
            return false;
        }
    });

    if(isThere){
        window.location.assign("display.js");
        printAddress(isThere, indexOfItem);
    }
    else{
        const noneFound = document.createElement('h2');
        noneFound.textContent = "None found.";
        mainPiece.appendChild(noneFound);
    }
});

