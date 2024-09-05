document.getElementById("No").addEventListener("click", function (event) {
    event.preventDefault();

    //redirect to landing
    window.location.assign("./index.html");
    //console.log("NOOOO!");



});

document.getElementById("Yes").addEventListener("click", function (event) {
    event.preventDefault();

    //redirect to add page
    window.location.assign("./Add-address/add-address.js");
    //console.log("yes pls");


});
