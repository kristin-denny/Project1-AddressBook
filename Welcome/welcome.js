const toSearchPage = document.getElementById("Search");
const toAddPage = document.getElementById("Add");
const toPrintAllPage = document.getElementById("PrintAll");


console.log(toSearchPage);

toSearchPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("Search/search.html");
    //console.log("search clicked");

});

toAddPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("Add-address/add-address.html");
    //console.log("add clicked");
});

toPrintAllPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("Address-Display/display.html");
    //console.log("print all clicked");
});


