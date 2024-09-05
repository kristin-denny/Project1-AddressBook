const toSearchPage = document.getElementById("Search");
const toAddPage = document.getElementById("Add");
const toPrintAllPage = document.getElementById("PrintAll");
const toAboutPage = document.getElementById("About");
const toContactPage = document.getElementById("Contact");

console.log(toSearchPage);

toSearchPage.addEventListener('click', function(){
    
    window.location.replace("http://127.0.0.1:5500/Search/search.html");
    console.log("search clicked");
    window.location.replace("http://Search/search.html")

});

toAddPage.addEventListener('click', function(){
    
    //window.location.replace("url");
    console.log("add clicked");
    window.location.replace("http://Add-address/add-address.html")
});

toPrintAllPage.addEventListener('click', function(){
    
   // window.location.replace("url");
    console.log("print all clicked");
    window.location.replace("http://Address-Display/display.html")
});

toAboutPage.addEventListener('click', function(){
    
   // window.location.replace("url");
    console.log("about clicked");
});

toContactPage.addEventListener('click', function(){
    
    ///window.location.replace("url");
    console.log("contact clicked");
});
