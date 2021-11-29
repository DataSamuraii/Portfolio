/* Pop-up window */
let popup = document.querySelector(".window");
let card = document.querySelector(".open-window");
let close = document.querySelector(".close-window");

card.onclick = function(){
    popup.style.display = "block";
}

close.onclick = function(){
    popup.style.display ="none";
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    let ham = document.getElementById("myLinks");
    if (ham.style.display === "block") {
        ham.style.display = "none";
    } else
        ham.style.display = "block";
}