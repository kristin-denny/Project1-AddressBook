const toSearchPage = document.getElementById("Search");
const toAddPage = document.getElementById("Add");
const toPrintAllPage = document.getElementById("PrintAll");
const toAboutPage = document.getElementById("About");
const toContactPage = document.getElementById("Contact");

console.log(toSearchPage);

toSearchPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("http://mcirillo93.github.io/Project1-AddressBook/Search/search.html");
    //console.log("search clicked");

});

toAddPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("https://mcirillo93.github.io/Project1-AddressBook/Add-address/add-address.html");
    //console.log("add clicked");
});

toPrintAllPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("http://mcirillo93.github.io/Project1-AddressBook/Address-Display/display.html");
    //console.log("print all clicked");
});

toAboutPage.addEventListener('click', function(event){
    event.preventDefault();
   // window.location.assign("url");
    console.log("about clicked");
});

toContactPage.addEventListener('click', function(event){
    event.preventDefault();
    ///window.location.assign("url");
    console.log("contact clicked");
});
