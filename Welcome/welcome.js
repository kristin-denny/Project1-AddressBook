const toSearchPage = document.getElementById("Search");
const toAddPage = document.getElementById("Add");
const toPrintAllPage = document.getElementById("PrintAll");
const toAboutPage = document.getElementById("About");
const toContactPage = document.getElementById("Contact");


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
    window.location.assign("Table/table.js");
    //console.log("print all clicked");
});

toContactPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("contact.html");
    
});

toAboutPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("about.html");
    
});
