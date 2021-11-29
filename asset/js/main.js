const menuDivResp = document.querySelector(".box-button-header-responsive");
const menuNav = document.querySelector(".section-menu-menu nav");

eventListeners();

function eventListeners() {
    console.log("x2");
    menuDivResp.onclick = function(){
        console.log("change");
        menuNav.classList.toggle("desactive");
    }
}

