const returnHome = document.getElementById("returnHome");
const toAboutPage = document.getElementById("About");
const toContactPage = document.getElementById("Contact");

toContactPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("../contact.html");
    
});

toAboutPage.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("../about.html");
    
});

returnHome.addEventListener('click', function(event){
    event.preventDefault();
    window.location.assign("../index.html");
    
});




