const toSearchPage = document.getElementById("Search");
const toAddPage = document.getElementById("Add");
const toPrintAllPage = document.getElementById("PrintAll");
const toAboutPage = document.getElementById("About");
const toContactPage = document.getElementById("Contact");

console.log(toSearchPage);

toSearchPage.addEventListener('click', function(){
    
    window.location.replace("http://127.0.0.1:5500/Search/search.html");
    console.log("search clicked");
   

});

toAddPage.addEventListener('click', function(){
    
    //window.location.replace("url");
    console.log("add clicked");
    onclick="window.location.href= 'http://127.0.0.1:5500/Add-address/add-address.html'"
});

toPrintAllPage.addEventListener('click', function(){
    
   // window.location.replace("url");
    console.log("print all clicked");
    onclick="window.location.href= 'http://127.0.0.1:5500/Address-Display/display.html'"
});

toAboutPage.addEventListener('click', function(){
    
   // window.location.replace("url");
    console.log("about clicked");
});

toContactPage.addEventListener('click', function(){
    
    ///window.location.replace("url");
    console.log("contact clicked");
});
