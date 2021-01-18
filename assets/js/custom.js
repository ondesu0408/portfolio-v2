/*
Nav Menu
*/
var mobile_icon = document.getElementById("mobile-menu-icon");
var nav_ul = document.getElementById("nav-ul-container");
var w = window.innerWidth;

mobile_icon.addEventListener("click", function () {
    if (mobile_icon.src.includes("mobile-menu")) {
        mobile_icon.setAttribute("src", "assets/images/close-icon.png");
        mobile_icon.setAttribute("alt", "Close Icon");
        mobile_icon.style.width = "100%";
        nav_ul.style.display = "flex";
    }
    else {
        mobile_icon.setAttribute("src", "assets/images/mobile-menu-icon.png");
        mobile_icon.setAttribute("alt", "Mobile Menu Icon");
        nav_ul.style.display = "none";
    }
});

// Go to Top
// Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}