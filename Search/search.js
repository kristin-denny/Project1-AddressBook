const mainPiece = document.querySelector('main');


document.getElementById("searchInput").addEventListener("submit", function (event) {
    event.preventDefault();
    const searchChoice = document.getElementById("searchDropDown");
    const lookIn = searchChoice.value;
    let indexOfItem;
    const findThis = document.getElementById("searchBar");
    const searchFor = findThis.value;
    const addressBook = JSON.parse(localStorage.getItem("addressBook"));
    
   const isThere = addressBook.find((address, index) => {if(address[lookIn] === searchFor){
        indexOfItem = index;
   }});
   
  


    if(isThere){
        localStorage.setItem("foundAt", indexOfItem);
        window.location.assign("../Address-Display/display.html");
       
    }
    else{

        alert("None found, please try again.");
    }
    
    
    
    
});

