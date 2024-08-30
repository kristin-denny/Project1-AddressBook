const toSearchPage = document.getElementById("Search");
const toAddPage = document.getElementById("Add");
const toPrintAllPage = document.getElementById("PrintAll");
const toAboutPage = document.getElementById("About");
const toContactPage = document.getElementById("Contact");

console.log(toSearchPage);

toSearchPage.addEventListener('click', function(){
    
    //window.location.replace("url");
    console.log("search clicked");

});

toAddPage.addEventListener('click', function(){
    
    //window.location.replace("url");
    console.log("add clicked");
});

toPrintAllPage.addEventListener('click', function(){
    
   // window.location.replace("url");
    console.log("print all clicked");
});

toAboutPage.addEventListener('click', function(){
    
   // window.location.replace("url");
    console.log("about clicked");
});

toContactPage.addEventListener('click', function(){
    
    ///window.location.replace("url");
    console.log("contact clicked");
});