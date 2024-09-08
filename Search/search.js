const mainPiece = document.querySelector('main');


document.getElementById("searchInput").addEventListener("submit", function (event) {
    event.preventDefault();
    // const searchChoice = document.getElementById("searchDropDown");
    let indexOfItem;
    const findThis = document.getElementById("searchBar");
    const searchFor = findThis.value;
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
         printAddress(isThere, indexOfItem);
         window.location.assign("../Address-Display/display.html");
       
    }
    else{

        alert("None found, please try again.");
    }
    
    
    
    
});

