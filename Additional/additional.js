
const mainPiece = document.querySelector('main');




document.getElementById("No").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.assign("../index.html");
    



});

document.getElementById("Yes").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.assign("../Add-address/add-address.html");
    


});


