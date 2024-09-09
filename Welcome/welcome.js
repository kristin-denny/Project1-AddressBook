const toSearchPage = document.getElementById("Search");
const toAddPage = document.getElementById("Add");
const toPrintAllPage = document.getElementById("PrintAll");
const toAboutPage = document.getElementById("About");
const toContactPage = document.getElementById("Contact");
const returnHome = document.getElementById("returnHome");

toSearchPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("Search/search.html");
    

});

toAddPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("Add-address/add-address.html");
    
});

toPrintAllPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("Table/table.html");
    
});

toContactPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("contact.html");
    
});

toAboutPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("about.html");
    
});

returnHome.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("../index.html");
    
});
